import React, { useCallback, useEffect } from "react";
import {
  ThumbsUp,
  ThumbsDown,
  Meh,
  Heart,
  AlertCircle,
  XCircle,
} from "lucide-react";
import { useApiMutation } from "@/hooks/useApiMutation";
import { queryClient } from "@/api/queryClient";
import { cn } from "@/lib/utils";
import { endpoints } from "@/api/endpoints";

type OptionId =
  | "strongly_liked"
  | "liked"
  | "neutral_liked"
  | "neutral_disliked"
  | "disliked"
  | "strongly_disliked";

type Option = {
  id: OptionId;
  label: string;
  icon: React.ReactNode;
  color: string;
  hoverColor: string;
  bgColor: string;
};

const options: Option[] = [
  {
    id: "strongly_liked",
    label: "Strongly Like",
    icon: <Heart className="w-6 h-6" />,
    color: "bg-rose-50 border-rose-200 text-rose-600",
    hoverColor: "hover:bg-rose-100 hover:border-rose-300",
    bgColor: "bg-rose-200",
  },
  {
    id: "liked",
    label: "Like",
    icon: <ThumbsUp className="w-6 h-6" />,
    color: "bg-emerald-50 border-emerald-200 text-emerald-600",
    hoverColor: "hover:bg-emerald-100 hover:border-emerald-300",
    bgColor: "bg-emerald-200",
  },
  {
    id: "neutral_liked",
    label: "Somewhat Like",
    icon: <Meh className="w-6 h-6" />,
    color: "bg-blue-50 border-blue-200 text-blue-600",
    hoverColor: "hover:bg-blue-100 hover:border-blue-300",
    bgColor: "bg-blue-200",
  },
  {
    id: "neutral_disliked",
    label: "Somewhat Dislike",
    icon: <AlertCircle className="w-6 h-6" />,
    color: "bg-amber-50 border-amber-200 text-amber-600",
    hoverColor: "hover:bg-amber-100 hover:border-amber-300",
    bgColor: "bg-amber-200",
  },
  {
    id: "disliked",
    label: "Dislike",
    icon: <ThumbsDown className="w-6 h-6" />,
    color: "bg-orange-50 border-orange-200 text-orange-600",
    hoverColor: "hover:bg-orange-100 hover:border-orange-300",
    bgColor: "bg-orange-200",
  },
  {
    id: "strongly_disliked",
    label: "Strongly Dislike",
    icon: <XCircle className="w-6 h-6" />,
    color: "bg-red-50 border-red-200 text-red-600",
    hoverColor: "hover:bg-red-100 hover:border-red-300",
    bgColor: "bg-red-200",
  },
];

export const PublicPoll = ({
  pollStatement,
  blogId,
  isResponsed,
  selectedResponse,
  responses,
  ip,
}: {
  ip: string;
  pollStatement: string;
  blogId: string;
  isResponsed: boolean;
  selectedResponse: OptionId | null;
  responses: { type: OptionId; count: number; percentage: number }[];
}) => {
  const [selectedOption, setSelectedOption] = React.useState<OptionId | null>(
    null
  );

  // ✅ if user already responded, show selected response
  useEffect(() => {
    if (isResponsed && selectedResponse) setSelectedOption(selectedResponse);
  }, [isResponsed, selectedResponse]);

  const { mutate, isPending } = useApiMutation({
    route: endpoints.public.getBlogResponse(blogId), // ✅ FIX: correct route
    method: "POST",
    onSuccess: () => {
      // ✅ make sure blog GET refetches (your wrapper might use url as key)
      queryClient.invalidateQueries();
    },
  });

  const onClickHandler = useCallback(
    (optionId: OptionId) => {
      if (isResponsed || isPending) return; // ✅ disable behavior
      setSelectedOption(optionId);

      mutate({
        ip,
        response: optionId, // ✅ body matches API
      });
    },
    [ip, mutate, isPending, isResponsed]
  );

  const getPercentage = (optionId: OptionId) => {
    const r = responses?.find((x) => x.type === optionId);
    return r?.percentage ?? 0;
  };

  const disableAll = isPending || isResponsed;

  return (
    <div className="w-full max-w-2xl py-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        {pollStatement}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option) => {
          const percentage = getPercentage(option.id);

          return (
            <button
              key={option.id}
              onClick={() => onClickHandler(option.id)}
              disabled={disableAll}
              className={cn(
                "relative flex items-center gap-3 p-4 rounded-lg border-2 transition-all duration-200",
                "focus:outline-none focus:ring-2 focus:ring-offset-2",
                option.color,
                option.hoverColor,
                selectedOption === option.id ? "ring-2 ring-offset-2" : "",
                disableAll ? "opacity-90 cursor-not-allowed" : "",
                "group overflow-hidden"
              )}
            >
              {isResponsed && (
                <div
                  className={cn(
                    "absolute left-0 top-0 h-full transition-all duration-1000 ease-out",
                    option.bgColor
                  )}
                  style={{ width: `${percentage}%` }}
                />
              )}

              <div className="relative flex items-center gap-3 z-10 w-full">
                <div className="transition-transform duration-200 group-hover:scale-110">
                  {option.icon}
                </div>

                <span className="font-medium">{option.label}</span>

                {isResponsed && (
                  <span className="ml-auto font-semibold">
                    {percentage.toFixed(1)}%
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

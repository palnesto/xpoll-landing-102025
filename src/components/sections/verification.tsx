import { ASSETS } from "@/constants";
import { cn } from "@/lib/utils";

export const VerificationSection = () => {
  return (
    <div className="bg-[#E8ECEF] flex py-16 lg:py-20 flex-col items-center gap-5 lg:gap-14 relative overflow-hidden">
      <div className="hidden absolute w-full lg:flex justify-center inset-0 z-10">
        <div className="hidden lg:flex absolute inset-0 z-10 justify-center isolate">
          <div className="w-full max-w-[90%] flex justify-between items-end">
            <div className="h-[95%] bg-[#E8ECEF]">
              <img
                src={ASSETS.images.glassSteps}
                alt=""
                className="h-full w-full object-contain mix-blend-screen brightness-125 contrast-110 opacity-95"
              />
            </div>
            <div className="h-[95%] bg-[#E8ECEF]">
              <img
                src={ASSETS.images.glassSteps}
                alt=""
                className="h-full w-full object-contain scale-x-[-1] mix-blend-screen brightness-125 contrast-110 opacity-95"
              />
            </div>
          </div>
        </div>
      </div>
      {/* heading */}
      <div className="flex flex-col gap-2 lg:gap-8 items-center text-center w-full z-20">
        <p className="font-medium text-radial-indigo text-2xl lg:text-5xl tracking-wide">
          Real Verified Participation
        </p>
        <p className="text-[#000000B5] text-lg lg:text-2xl font-normal">
          Driving Transparent intelligence
        </p>
      </div>
      {/* cards */}
      <div className="flex flex-col gap-y-10 items-center w-full max-w-[85rem] lg:flex-row lg:items-center justify-evenly mt-8 z-20">
        <StatsCard value={"12,480"} label={"Patriots"} />
        <StatsCard
          value={"890+"}
          label={"User Polls"}
          className="lg:-translate-y-8"
        />
        <StatsCard value={"1.2M+"} label={"Data Points Analyzed"} />
      </div>
    </div>
  );
};

export const StatsCard = ({
  value,
  label,
  className,
}: {
  value: string | number;
  label: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg text-[#1355E9] text-center px-16 w-full max-w-80 py-8 flex flex-col items-center gap-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)]",
        className
      )}
    >
      <p className="text-4xl 4xl:text-5xl font-semibold tracking-wide">{`${value}`}</p>
      <p className="text-[1.65rem] leading-[2rem]">{label}</p>
    </div>
  );
};

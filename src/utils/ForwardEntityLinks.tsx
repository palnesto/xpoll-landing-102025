import { useMemo } from "react";
import { endpoints } from "@/api/endpoints";
import { useApiQuery } from "@/hooks/useApiQuery";
import { cn } from "@/lib/utils";
import { RichTextPreview } from "@/components/editor-preview";

type EntityType = "blog" | "poll" | "trial" | "campaign";

type ResourceAsset =
  | { type: "image"; value: string }
  | { type: "youtube"; value: string }
  | { type: string; value: string };

type PollOption = {
  _id: string;
  text: string;
};

type ForwardEntry = {
  _id: string;
  to: {
    type: EntityType;
    id: string;
    entity?: {
      _id: string;
      isPopulationAvailable: boolean;
      data?: {
        _id: string;
        title?: string;
        name?: string;
        description?: string;
        resourceAssets?: ResourceAsset[];
        imageUrls?: string[];
        options?: PollOption[];
      };
    };
  };
};

function defaultRouteFor(type: EntityType, id: string) {
  const map: Record<EntityType, (x: string) => string> = {
    blog: (x) => `/blogs/${x}`,
    poll: (x) => `/feed/polls/${x}`,
    trial: (x) => `/trial/${x}`, // ✅ singular
    campaign: (x) => `/campaigns/all-campaigns/${x}`,
  };
  return map[type](id);
}

const baseDomainFor = (t: EntityType) =>
  t === "blog" ? "https://xpoll.io" : "https://app.xpoll.io";

function getYoutubeThumb(id: string) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

function pickAsset(entity?: ForwardEntry["to"]["entity"]["data"]) {
  if (!entity) return "";

  if (entity.imageUrls?.[0]) return entity.imageUrls[0];

  const assets = entity.resourceAssets ?? [];
  const firstImage = assets.find((a) => a.type === "image")?.value;
  if (firstImage) return firstImage;

  const firstYoutube = assets.find((a) => a.type === "youtube")?.value;
  if (firstYoutube) return getYoutubeThumb(firstYoutube);

  return "";
}

function truncate(str?: string, n = 110) {
  if (!str) return "";
  if (str.length <= n) return str;
  return `${str.slice(0, n).trim()}…`;
}

export function ForwardEntityLinks({
  type,
  id,
  className,
  routeForType,
}: {
  type: EntityType;
  id: string;
  className?: string;
  routeForType?: (type: EntityType, id: string) => string;
}) {
  const url = useMemo(
    () => endpoints.entityLink.listForward(type, id),
    [type, id],
  );

  const {
    data: res,
    isLoading,
    isError,
  } = useApiQuery(url, {
    enabled: !!type && !!id,
  });

  const entries = useMemo(() => {
    return (res?.data?.data?.entries ?? []) as ForwardEntry[];
  }, [res]);

  const items = useMemo(() => {
    return entries
      .filter(
        (e) =>
          e.to.entity?.isPopulationAvailable === true && !!e.to.entity?.data,
      )
      .map((e) => {
        const toType = e.to.type;
        const toId = e.to.id;

        const entity = e.to.entity!.data!;
        const title = entity.title || entity.name || "Untitled";
        const description = entity.description || "";
        const asset = pickAsset(entity);

        const options = toType === "poll" ? (entity.options ?? []) : [];

        return { toType, toId, title, description, asset, options };
      });
  }, [entries]);

  const goTo = (toType: EntityType, toId: string) => {
    const url =
      toType === "blog"
        ? `https://xpoll.io/blogs/${toId}`
        : toType === "campaign"
          ? `https://app.xpoll.io/campaigns/all-campaigns/${toId}`
          : toType === "poll"
            ? `https://app.xpoll.io/feed/polls/${toId}`
            : `https://app.xpoll.io/trial/${toId}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (isLoading) {
    return (
      <div className={cn("mt-6 space-y-3", className)}>
        <div className="h-28 rounded-2xl bg-gray-100 animate-pulse" />
        <div className="h-28 rounded-2xl bg-gray-100 animate-pulse" />
      </div>
    );
  }

  if (isError || items.length === 0) return null;

  const cardBase =
    "shrink-0 snap-start w-[320px] md:w-[380px] h-[420px] md:h-[460px] " +
    "text-left flex flex-col items-start bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden bg-gray-200";

  return (
    <div className={cn("mt-6", className)}>
      <div className="font-semibold text-gray-900 py-3">Linked List</div>

      <div className="w-full flex flex-nowrap items-stretch justify-between gap-5 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-2">
        {items.map((it) => {
          if (it.toType === "poll") {
            return (
              <button
                key={`${it.toType}:${it.toId}`}
                type="button"
                onClick={() => goTo(it.toType, it.toId)}
                className={cn(cardBase)}
              >
                <div className="px-5 pt-5 h-[160px]">
                  <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
                    {it.title}
                  </h3>

                  {it.description ? (
                    <div className="text-xs text-gray-600 line-clamp-3">
                      <RichTextPreview
                        content={truncate(it.description, 140)}
                      />
                    </div>
                  ) : null}
                </div>

                {it.asset && (
                  <figure className="px-5 h-[130px] md:h-[150px]">
                    <img
                      src={it.asset}
                      alt=""
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </figure>
                )}

                {it.options?.length && (
                  <div className="px-5 pt-2 h-[140px] md:h-[160px] overflow-y-auto space-y-2 w-full">
                    {it.options.slice(0, 6).map((op) => (
                      <div
                        key={op._id}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-xs text-gray-800"
                      >
                        {op.text}
                      </div>
                    ))}
                  </div>
                )}
              </button>
            );
          }

          return (
            <button
              key={`${it.toType}:${it.toId}`}
              type="button"
              onClick={() => goTo(it.toType, it.toId)}
              className={cn(cardBase, "bg-gray-200")}
            >
              <div className="px-5 pt-2 h-[140px]">
                <h3 className="text-base font-semibold text-gray-900">
                  {truncate(it.title, 300)}
                </h3>

                {it.description ? (
                  <p className="text-xs text-gray-600 line-clamp-3">
                    {truncate(it.description, 170)}
                  </p>
                ) : null}
              </div>

              {it.asset ? (
                <figure className="px-5 pb-5 h-[240px] md:h-[280px]">
                  <img
                    src={it.asset}
                    alt=""
                    className="w-full h-full object-cover rounded-xl"
                  />
                </figure>
              ) : (
                <></>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

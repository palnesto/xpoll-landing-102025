import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { endpoints } from "@/api/endpoints";
import { useApiQuery } from "@/hooks/useApiQuery";
import { cn } from "@/lib/utils";

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
    trial: (x) => `/trials/${x}`,
    campaign: (x) => `/campaigns/all-campaigns/${x}`,
  };
  return map[type](id);
}

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
  const navigate = useNavigate();

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

  if (isLoading) {
    return (
      <div className={cn("mt-6 space-y-3", className)}>
        <div className="h-28 rounded-2xl bg-gray-100 animate-pulse" />
        <div className="h-28 rounded-2xl bg-gray-100 animate-pulse" />
      </div>
    );
  }

  if (isError || items.length === 0) return null;

  return (
    <div className={cn("mt-6", className)}>
      <div className="font-semibold text-gray-900 py-3">Linked List</div>

      <div className="space-y-5 max-w-xl">
        {items.map((it) => {
          const go = () => {
            const path = routeForType
              ? routeForType(it.toType, it.toId)
              : defaultRouteFor(it.toType, it.toId);
            navigate(path);
          };

          if (it.toType === "poll") {
            return (
              <button
                key={`${it.toType}:${it.toId}`}
                type="button"
                onClick={go}
                className="w-full text-left bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900">{it.title}</h3>

                  {it.description ? (
                    <p className="mt-2 text-xs text-gray-600">
                      {truncate(it.description, 170)}
                    </p>
                  ) : null}
                </div>

                <div className="px-5 pb-5">
                  {it.asset ? (
                    <img
                      src={it.asset}
                      alt=""
                      className="w-full h-36 md:h-44 object-cover rounded-xl"
                    />
                  ) : (
                    <div className="w-full h-44 md:h-56 rounded-xl bg-gray-100" />
                  )}
                </div>

                {/* options preview */}
                {it.options?.length ? (
                  <div className="px-5 pb-5 space-y-3">
                    {it.options.slice(0, 6).map((op) => (
                      <div
                        key={op._id}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800"
                      >
                        {op.text}
                      </div>
                    ))}
                  </div>
                ) : null}
              </button>
            );
          }

          // ✅ NON-POLL UI (resource asset + title + desc)
          return (
            <button
              key={`${it.toType}:${it.toId}`}
              type="button"
              onClick={go}
              className="w-full text-left bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <div className="flex gap-4 p-5">
                {it.asset ? (
                  <img
                    src={it.asset}
                    alt=""
                    className="w-20 h-20 rounded-xl object-cover shrink-0"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-xl bg-gray-100 shrink-0" />
                )}

                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-gray-900 truncate">
                    {it.title}
                  </h3>

                  {it.description ? (
                    <p className="mt-2 text-sm text-gray-600">
                      {truncate(it.description, 140)}
                    </p>
                  ) : null}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

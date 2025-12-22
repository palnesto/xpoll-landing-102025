import { endpoints } from "@/api/endpoints";
import { ImageCarousel } from "@/components/blogs/carousel";
import { PublicPoll } from "@/components/blogs/public-poll";
import { RichTextPreview } from "@/components/editor-preview";
import { useApiQuery } from "@/hooks/useApiQuery";
import useDeviceIdentifier from "@/hooks/useDeviceIdentifier";
import { truncateText } from "@/utils/formatter";
import dayjs from "dayjs";
import { ArrowLeft } from "lucide-react";
import { useCallback, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SpecificBlogs() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const deviceIdentifier = useDeviceIdentifier();

  // ✅ Get blog by id (with ip query param)
  const blogUrl = useMemo(() => {
    if (!id) return "";
    const base = endpoints.public.getBlogById(id);
    // if API expects ip query param:
    return deviceIdentifier ? `${base}?ip=${deviceIdentifier}` : base;
  }, [id, deviceIdentifier]);

  const {
    data: blogRes,
    isLoading,
    isError,
  } = useApiQuery(blogUrl, {
    enabled: !!id && !!deviceIdentifier,
  });

  const blogData = useMemo(() => blogRes?.data?.data ?? null, [blogRes]);
  console.log("blogData", blogData);

  // ✅ Recent posts (to match right sidebar UI)
  const recentUrl = `${endpoints.public.blogs}?page=1&pageSize=3`;
  const { data: recentRes } = useApiQuery(recentUrl, { enabled: true });

  const recentEntries = useMemo(() => {
    const list = recentRes?.data?.data?.entries ?? [];
    // remove current blog from recent list
    return list.filter((b: any) => b._id !== id);
  }, [recentRes, id]);

  const navigateToBlog = useCallback(
    (blogId?: string) => {
      if (blogId) return navigate(`/blogs/${blogId}`);
      navigate("/blogs");
    },
    [navigate]
  );

  return (
    <div className="mx-auto p-4 lg:pt-20 lg:w-full 2xl:pl-20 2xl:pt-28">
      <div className="flex flex-col gap-10 lg:flex-row max-w-[160rem] 2xl:justify-between">
        {/* LEFT */}
        <div className="xl:pl-12 flex-1">
          {isLoading && <div className="text-sm text-gray-500">Loading…</div>}
          {isError && (
            <div className="text-sm text-red-600">Failed to load blog.</div>
          )}

          {!isLoading && !isError && blogData && (
            <>
              <ImageCarousel images={blogData?.blog?.imageUrls ?? []} />

              <h1 className="pt-10 lg:text-xl lg:pt-20 text-3xl 2xl:text-4xl font-semibold font-roboto">
                {blogData?.blog?.title}
              </h1>

              <div className="bg-white">
                <RichTextPreview content={blogData?.blog?.content ?? ""} />
              </div>
              <PublicPoll
                pollStatement={blogData?.blog?.pollStatement ?? ""}
                blogId={blogData?.blog?._id ?? ""}
                isResponsed={!!blogData?.isResponded}
                selectedResponse={blogData?.selectedResponse ?? null}
                responses={blogData?.responses?.distribution ?? []} // ✅ FIX
                ip={deviceIdentifier}
              />
            </>
          )}
        </div>

        {/* RIGHT: Recent Posts (same UI as screenshot) */}
        <div className="lg:w-1/3 mb-6 order-first lg:order-none shrink-0 flex  gap-2 md:gap-10">
          <a href="/blogs" className="pt-5">
            <ArrowLeft className="w-10 h-6 bg-gray-100 rounded-2xl p-1" />
          </a>
          <div className="bg-white rounded shadow p-5 lg:p-8 md:w-full">
            <h3 className="text-sm font-semibold mb-4">Recent Posts</h3>

            <ul className="space-y-4 lg:block">
              {/* mobile: horizontal scroll */}
              <div className="flex space-x-4 overflow-x-auto hide-scrollbar lg:hidden">
                {recentEntries.map((b: any) => (
                  <li
                    key={b._id}
                    className="min-w-[85%] hover:bg-[#dcdbdb] rounded-lg overflow-hidden p-1 cursor-pointer"
                    onClick={() => navigateToBlog(b._id)}
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={b.imageUrls?.[0]}
                        alt=""
                        className="w-14 h-14 object-cover rounded"
                      />
                      <div>
                        <p className="text-sm font-semibold">
                          {truncateText(b.title, 44)}
                        </p>
                        <p className="text-[11px] text-gray-600">
                          {dayjs(b.createdAt).format("MMM DD YYYY")}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </div>

              {/* desktop: vertical list */}
              <div className="hidden lg:flex flex-col gap-3">
                {recentEntries.map((b: any) => (
                  <li
                    key={b._id}
                    className="hover:bg-[#dcdbdb] rounded-lg overflow-hidden p-1 cursor-pointer"
                    onClick={() => navigateToBlog(b._id)}
                  >
                    <div className="flex space-x-3">
                      <img
                        src={b.imageUrls?.[0]}
                        alt=""
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div>
                        <p className="text-sm font-medium leading-snug">
                          {truncateText(b.title, 46)}
                        </p>
                        <p className="text-[11px] text-gray-600">
                          {dayjs(b.createdAt).format("MMM DD YYYY")}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

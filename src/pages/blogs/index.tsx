import { useMemo, useState } from "react";
import { useApiQuery } from "@/hooks/useApiQuery";
import ArticleList from "@/components/blogs/cards";
import { mapEntriesToArticles } from "@/utils/blogs";
import { endpoints } from "@/api/endpoints";
import { ArrowLeft } from "lucide-react";

export default function BlogsPage() {
  const [page, setPage] = useState(1);
  const pageSize = 20;

  const url = `${endpoints.public.blogs}?page=${page}&pageSize=${pageSize}`;
  const { data, isLoading, isError } = useApiQuery(url, {
    enabled: true,
    keepPreviousData: true,
  });

  const total = data?.data?.data?.total ?? 0;
  const entries = data?.data?.data?.entries ?? [];
  console.log("entry", entries);
  const articles = useMemo(() => mapEntriesToArticles(entries), [entries]);

  return (
    <section className="bg-[#F5F7FB] relative lg:space-y-7 lg:py-28 overflow-hidden">
      <div className="flex items-center gap-3 p-4 lg:px-12 sticky backdrop-blur-xl z-10 top-0 right-0 left-0">
        <a href="/">
          <ArrowLeft className="w-6 h-6" />
        </a>
        <h1 className="text-4xl font-manrope font-extrabold">Blogs</h1>
      </div>

      {isLoading && <div className="text-sm text-gray-500">Loading…</div>}
      {isError && (
        <div className="text-sm text-red-600">Failed to load blogs.</div>
      )}

      <section className="px-4 lg:px-12 ">
        {!isLoading && !isError && <ArticleList articles={articles} />}
      </section>
    </section>
  );
}

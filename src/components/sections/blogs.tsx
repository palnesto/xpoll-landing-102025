import ArticleList from "@/components/blogs/cards";
import { Button } from "../ui/button";
import { useApiQuery } from "@/hooks/useApiQuery";
import { mapEntriesToArticles } from "@/utils/blogs";
import { endpoints } from "@/api/endpoints";

export default function Blogs() {
  const page = 1;
  const pageSize = 4;

  const url = `${endpoints.public.blogs}?page=${page}&pageSize=${pageSize}`;

  const { data, isLoading, isError } = useApiQuery(url, { enabled: true });

  const entries = data?.data?.data?.entries ?? [];
  console.log("entries", entries);
  const articles = mapEntriesToArticles(entries);

  return (
    <section className="bg-[#F5F7FB] py-10 px-4 lg:px-12 space-y-7">
      <header className="flex items-center justify-between">
        <h1 className="text-4xl font-manrope font-extrabold">Blogs</h1>
        <a href="/blogs">
          <Button
            variant="outline"
            className="border-[#0264FF] text-[#0264FF] px-5 rounded-full"
          >
            View all
          </Button>
        </a>
      </header>
      {isLoading && <div className="text-sm text-gray-500">Loading blogs…</div>}
      {isError && (
        <div className="text-sm text-red-600">Failed to load blogs.</div>
      )}

      {!isLoading && !isError && (
        <ArticleList articles={articles} showNumberOfCards={4} />
      )}
    </section>
  );
}

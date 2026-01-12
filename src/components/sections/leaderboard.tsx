import React, { useState, useMemo } from "react";
import { endpoints } from "@/api/endpoints";
import { Button } from "@/components/ui/button";
import { useApiQuery } from "@/hooks/useApiQuery";
import { Card } from "../ui/card";
import LoadingSkeleton from "../LoadingSkeleton";
import featuredIn from "@/assets/featured.png";
import ibt from "@/assets/ibt.svg";
import biz from "@/assets/biz.jpeg";

const Row = React.memo(function Row({ user, index }) {
  return (
    <tr className="text-sm lg:text-base">
      <td className="p-4 text-center">{index}</td>

      <td className="py-4 pl-12 flex items-center gap-2">
        <img
          src={user?.avatar?.imageUrl}
          alt="avatar"
          className="w-8 h-8 rounded-full object-cover object-top"
        />
        <span>{user?.username}</span>
      </td>

      <td className="py-4 px-7 text-center">{user?.civicScore}</td>
      <td className="py-4 px-10 text-center">{user?.level}</td>

      <td className="p-4 text-center">
        {user.state?.name || ""}, {user.country?.name || ""}
      </td>

      <td className="py-4 px-7 text-center">{user.rankNumber}</td>
      {/* <td className="py-4 px-7 text-center"> {user.pollsParticipated} </td> */}
    </tr>
  );
});

export default function Leaderboard() {
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const queryKey = `${endpoints.public.leaderboard}?page=${page}&pageSize=${pageSize}`;

  // Enable cached data + smooth transitions
  const { data, isLoading, isFetching, error } = useApiQuery(queryKey, {
    keepPreviousData: true,
    staleTime: 5000,
  });

  const pageData = data?.data?.data;
  const items = pageData?.items || [];
  const totalPages = Math.min(pageData?.totalPages || 1, 10);

  // Memoize indexing
  const rows = useMemo(
    () =>
      items.map((user, idx) => (
        <Row
          key={user.externalAccountId}
          user={user}
          index={(page - 1) * pageSize + idx + 1}
        />
      )),
    [items, page]
  );

  return (
    <section className="flex flex-col items-center justify-between bg-[#F5F7FB] py-10">
      <section className="w-full flex flex-col items-center pb-10 min-h-screen">
        <h1 className="text-3xl font-semibold text-blue-500 mb-8">
          Leaderboard
        </h1>

        <Card className="w-[95%] md:w-[90%] xl:w-[80%] p-4 md:p-6 bg-white rounded-2xl shadow">
          {isLoading ? (
            <LoadingSkeleton />
          ) : error ? (
            <p className="text-center py-8 text-red-500">
              Failed to load data.
            </p>
          ) : (
            <>
              {/* Table */}
              <div className="overflow-x-auto transition-opacity duration-200">
                <table className={`w-full table-auto text-center`}>
                  <thead>
                    <tr className="text-gray-500 text-sm bg-[#F6F7F9] rounded">
                      <th className="py-3 text-center">#</th>
                      <th className="py-3 text-center">Username</th>
                      <th className="py-3 text-center">Civic Score</th>
                      <th className="py-3 text-center">Level</th>
                      <th className="py-3 text-center">Location</th>
                      <th className="py-3 text-center">Rank</th>
                      {/* <th className="py-3 text-center">No. of polls</th> */}
                    </tr>
                  </thead>

                  <tbody
                    className={`${isFetching ? "opacity-50" : "opacity-100"}`}
                  >
                    {rows}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center gap-2 mt-6">
                <Button
                  variant="outline"
                  disabled={page === 1}
                  onClick={() => setPage((p) => p - 1)}
                >
                  Prev
                </Button>

                {/* First page */}
                <Button
                  variant={page === 1 ? "default" : "outline"}
                  onClick={() => setPage(1)}
                >
                  1
                </Button>

                {page > 3 && <span className="text-gray-500">…</span>}

                {/* Middle pages */}
                {Array.from({ length: 3 }, (_, i) => {
                  const p = page - 1 + i;
                  if (p <= 1 || p >= totalPages) return null;

                  return (
                    <Button
                      key={p}
                      variant={p === page ? "default" : "outline"}
                      onClick={() => setPage(p)}
                    >
                      {p}
                    </Button>
                  );
                })}

                {page < totalPages - 2 && (
                  <span className="text-gray-500">…</span>
                )}

                {/* Last page */}
                {totalPages > 1 && (
                  <Button
                    variant={page === totalPages ? "default" : "outline"}
                    onClick={() => setPage(totalPages)}
                  >
                    {totalPages}
                  </Button>
                )}

                <Button
                  variant="outline"
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => p + 1)}
                >
                  Next
                </Button>
              </div>
            </>
          )}
        </Card>
      </section>
      <section className="w-full flex flex-col items-center mt-10">
        <h2 className="text-3xl font-semibold text-blue-500">Featured in</h2>

        <section className="flex flex-col md:flex-row items-center gap-4">
          <a
            href="https://www.ibtimes.com/inside-stanton-terranovas-canvas-labs-innovative-space-ideas-that-dont-fit-mold-3791873"
            target="_blank"
            rel="noreferrer"
          >
            <img src={featuredIn} alt="featured in" className="w-40 xl:w-60" />
          </a>
          <a
            href="https://www.ibtimes.com/ai-doesnt-fail-because-technology-it-fails-when-humans-misunderstand-each-other-3794535"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <img
              src={ibt}
              alt=""
              className="h-12 md:h-20 xl:h-40 w-60 md:w-96"
            />
          </a>
          <a
            href="https://www.flipsnack.com/menapublishinggroup/bizpreneur-middle-east-january-2026/full-view.html?p=124"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <img src={biz} alt="" className="h-20 xl:h-32 mt-7" />
          </a>
        </section>
      </section>
    </section>
  );
}

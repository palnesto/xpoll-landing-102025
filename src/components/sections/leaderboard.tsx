import { useState } from "react";
import { endpoints } from "@/api/endpoints";
import { Button } from "@/components/ui/button";
import { useApiQuery } from "@/hooks/useApiQuery";
import { Card } from "../ui/card";

export default function Leaderboard() {
  const [page, setPage] = useState(1);
  const pageSize = 10;

  // API Call
  const { data, isLoading, error } = useApiQuery(
    `${endpoints.public.leaderboard}?page=${page}&pageSize=${pageSize}`
  );

  const pageData = data?.data?.data;
  const items = pageData?.items || [];
  const totalPages = pageData?.totalPages || 1;
  console.log("page dat", pageData);
  return (
    <div className="w-full flex flex-col items-center py-10 bg-[#F5F7FB] min-h-screen">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-blue-500 mb-8">Leaderboard</h1>

      {/* Table */}
      <Card className="w-[95%] md:w-[90%] xl:w-[80%] p-4 md:p-6 bg-white rounded-2xl shadow">
        {isLoading ? (
          <p className="text-center py-8 text-gray-500">Loading leaderboard…</p>
        ) : error ? (
          <p className="text-center py-8 text-red-500">Failed to load data.</p>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full table-auto text-center">
                <thead className="">
                  <tr className="text-gray-500 text-sm bg-[#F6F7F9] rounded">
                    <th className="py-3 text-center">#</th>
                    <th className="py-3 text-center">Username</th>
                    <th className="py-3 text-center">Civic Score</th>
                    <th className="py-3 text-center">Level</th>
                    <th className="py-3 text-center">Location</th>
                    <th className="py-3 text-center">Rank</th>
                    <th className="py-3 text-center">No. of polls</th>
                  </tr>
                </thead>

                <tbody>
                  {items.map((user, idx) => (
                    <tr
                      key={user.externalAccountId}
                      className="text-sm lg:text-base"
                    >
                      <td className="p-4 text-center">
                        {(page - 1) * pageSize + idx + 1}
                      </td>

                      <td className="p-4 flex items-center justify-center gap-2">
                        <img
                          src={user.avatar?.imageUrl}
                          alt="avatar"
                          className="w-8 h-8 rounded-full object-cover object-top"
                        />
                        <span>{user.username}</span>
                      </td>

                      <td className="py-4 px-10 text-center">
                        {user.civicScore}
                      </td>
                      <td className="py-4 px-10 text-center">{user.level}</td>

                      <td className="p-4 text-center ">
                        {user.state?.name || ""}, {user.country?.name || ""}
                      </td>

                      <td className="py-4 px-7 text-center">
                        {user.rankNumber}
                      </td>
                      <td className="py-4 px-7 text-center">
                        {user.pollsParticipated}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-6">
              <Button
                variant="outline"
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
              >
                Prev
              </Button>

              {/* Page buttons */}
              {Array.from({ length: Math.min(3, totalPages) }, (_, i) => {
                const p = i + 1;
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

              {totalPages > 5 && (
                <>
                  <span className="text-gray-500">…</span>
                  <Button
                    variant={page === totalPages ? "default" : "outline"}
                    onClick={() => setPage(totalPages)}
                  >
                    {totalPages}
                  </Button>
                </>
              )}

              <Button
                variant="outline"
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
              >
                Next
              </Button>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}

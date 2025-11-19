export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse w-full">
      <table className="w-full table-auto text-center">
        <thead>
          <tr className="bg-[#F6F7F9]">
            {["#", "Username", "Civic Score", "Level", "Location", "Rank"].map(
              (header) => (
                <th
                  key={header}
                  className="py-3 text-sm text-gray-500 font-medium"
                >
                  {header}
                </th>
              )
            )}
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: 10 }).map((_, i) => (
            <tr key={i}>
              {/* Rank Number */}
              <td className="py-4">
                <div className="mx-auto h-4 w-6 bg-gray-200 rounded" />
              </td>

              {/* Avatar + Username */}
              <td className="py-4">
                <div className="flex items-center justify-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gray-200" />
                  <div className="h-4 w-24 bg-gray-200 rounded" />
                </div>
              </td>

              {/* Civic Score */}
              <td className="py-4">
                <div className="mx-auto h-4 w-14 bg-gray-200 rounded" />
              </td>

              {/* Level */}
              <td className="py-4">
                <div className="mx-auto h-4 w-10 bg-gray-200 rounded" />
              </td>

              {/* Location */}
              <td className="py-4">
                <div className="mx-auto h-4 w-28 bg-gray-200 rounded" />
              </td>

              {/* Rank Number */}
              <td className="py-4">
                <div className="mx-auto h-4 w-10 bg-gray-200 rounded" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

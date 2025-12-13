export interface Article {
  id: string;
  title: string;
  description?: string;
  date: string;
  image: string;
}

interface ArticleListProps {
  articles: Article[];
  showNumberOfCards?: number;
  //   showDescription?: boolean;
}

export default function ArticleList({
  articles,
  showNumberOfCards,
}: //   showDescription = true,
ArticleListProps) {
  const visibleArticles = showNumberOfCards
    ? articles.slice(0, showNumberOfCards)
    : articles;

  return (
    <div className="w-full">
      {/* DESKTOP GRID */}
      <div className="hidden md:grid grid-cols-2 xl:grid-cols-4 gap-6">
        {visibleArticles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col"
          >
            <img
              src={article.image}
              alt={article.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-5 flex flex-col justify-between">
              <span className="text-xs text-[#494949] font-light pb-4">
                {article.date}
              </span>

              <h3 className="font-bold font-poppins text-[#2C2C2C] leading-snug">
                {article.title}
              </h3>

              {/* {showDescription && article.description && ( */}

              <p className="text-sm text-gray-500 py-2">
                {article.description}
              </p>
              {/* )} */}
              <a href={`/blogs/${article.id}`}>
                <button className="bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-medium px-4 py-2 rounded-full">
                  Read more →
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE LIST */}
      <div className="md:hidden divide-y">
        {visibleArticles.map((article) => (
          <div key={article.id} className="flex gap-4 py-4 items-start">
            <img
              src={article.image}
              alt={article.title}
              className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
            />

            <div className="flex flex-col justify-between">
              <span className="text-xs text-gray-400 block mb-1">
                {article.date}
              </span>

              <h3 className="font-semibold text-gray-900 leading-snug mb-3">
                {article.title}
              </h3>
              <a href={`/blogs/${article.id}`}>
                <button className="bg-blue-600 hover:bg-blue-700 transition text-white text-xs font-medium px-4 py-2 rounded-full">
                  Read more →
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

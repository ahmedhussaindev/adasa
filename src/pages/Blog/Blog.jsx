import { useState } from "react";
import posts from "../../Data/posts.json";
import GridArticleCard from "../../components/ArticleCard/GridArticleCard/GridArticleCard";
import ListArticleCard from "../../components/ArticleCard/ListArticleCard/ListArticleCard";
export default function Blog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const categories = [
    "الكل",
    "إضاءة",
    "بورتريه",
    "مناظر طبيعية",
    "تقنيات",
    "معدات",
  ];
  const filteredPosts = posts.posts.filter((post) => {
    return (
      (activeCategory === "الكل" || post.category === activeCategory) &&
      post.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  const postsPerPage = 6;
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage,
  );

  return (
    <>
      <section
        dir="rtl"
        className="
          relative overflow-hidden bg-[#090909] pt-22 border-b border-[#222] bg-size-[75px_75px]
          bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)]"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-367.5 mx-auto px-4 md:px-6 lg:px-20 py-20 md:py-24 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 border border-orange-500/40 bg-orange-950/30 text-orange-500 px-5 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            <span className="w-2 h-2 bg-orange-500/50 rounded-full"></span>
            <i className="fa-regular fa-newspaper mr-1"></i>
            مدونتنا
          </div>
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
            استكشف <span className="text-orange-500">مقالاتنا</span>
          </h1>
          <p className="text-[#999] text-base sm:text-lg md:text-xl mt-6">
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>
      </section>

      <section dir="rtl" className="bg-[#090909] border-b border-[#222]">
        <div className="max-w-367.5 mx-auto lg:px-20 md:px-6 px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
            {/* Search */}
            <div className="relative w-full lg:w-80">
              <i className="fa-solid fa-magnifying-glass absolute right-4 top-1/2 -translate-y-1/2 text-[#666]"></i>
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="ابحث في المقالات..."
                className="w-full bg-[#151515] border border-[#303030] rounded-xl pr-11 pl-4 py-3
                text-white placeholder:text-[#666] outline-none focus:border-orange-500 transition"
              />
            </div>
            {/* Categories */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-lg border text-sm transition
                    ${
                      activeCategory === category
                        ? "bg-orange-600 border-orange-600 text-white"
                        : "bg-[#151515] border-[#303030] text-[#999] hover:text-white hover:border-[#555]"
                    }
                    `}
                >
                  {category === "الكل" ? "جميع المقالات" : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section dir="rtl" className="bg-[#090909] py-10">
        <div className="max-w-367.5 mx-auto lg:px-20 md:px-6 px-4">
          <div className="flex items-center justify-between mb-8">
            <p className="text-[#777]">
              عرض{" "}
              <span className="text-white font-bold">
                {filteredPosts.length}
              </span>{" "}
              مقالات
              {activeCategory !== "الكل" && (
                <>
                  {" "}
                  في{" "}
                  <span className="text-orange-500 font-bold">
                    {activeCategory}
                  </span>
                </>
              )}
            </p>
            <div className="flex items-center bg-[#151515] border border-[#303030] rounded-xl p-1">
              <button
                onClick={() => setView("grid")}
                className={`w-10 h-10 rounded-lg transition duration-300
            ${
              view === "grid"
                ? "bg-orange-600 text-white"
                : "text-[#777] hover:text-white"
            }
          `}
              >
                <i className="fa-solid fa-grip"></i>
              </button>
              <button
                onClick={() => setView("list")}
                className={`w-10 h-10 rounded-lg transition duration-300
            ${
              view === "list"
                ? "bg-orange-600 text-white"
                : "text-[#777] hover:text-white"
            }
          `}
              >
                <i className="fa-solid fa-list"></i>
              </button>
            </div>
          </div>

          {/* Articles */}
          <div
            className={
              view === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "flex flex-col gap-6"
            }
          >
            {filteredPosts.map((post) =>
              view === "grid" ? (
                <GridArticleCard key={post.id} post={post} />
              ) : (
                <ListArticleCard key={post.id} post={post} />
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
}

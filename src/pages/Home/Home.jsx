import { Link } from "react-router-dom";
import posts from "../../Data/posts.json";
import HomeArticleCard from "../../components/ArticleCard/HomeArticleCard/HomeArticleCard";
import GridArticleCard from "../../components/ArticleCard/GridArticleCard/GridArticleCard";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
export default function Home() {
  const featuredPosts = posts.posts.slice(0, 3);
  const latestPosts = posts.posts.slice(3, 6);
  const categories = [
    { id: 1, name: "إضاءة", icon: "fa-solid fa-sun", count: 3 },
    { id: 2, name: "بورتريه", icon: "fa-solid fa-user", count: 3 },
    { id: 3, name: "مناظر طبيعية", icon: "fa-solid fa-mountain-sun", count: 2 },
    { id: 4, name: "تقنيات", icon: "fa-solid fa-sliders", count: 5 },
    { id: 5, name: "معدات", icon: "fa-solid fa-gear", count: 3 },
  ];
  return (
    <>
      <section
        dir="rtl"
        className="pt-22 bg-[#090909] flex items-center inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"
      >
        <div className="py-20 max-w-367.5 mx-auto lg:px-20 md:px-6 px-2 w-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl blob"></div>
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 text-orange-500 border border-orange-500/40 bg-orange-950/20 px-5 py-2 rounded-full font-bold mb-7">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span className="w-2 h-2 bg-orange-500/50 rounded-full"></span>
              مرحباً بك في عدسة
            </div>

            {/* Heading */}
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
              اكتشف <span className="text-orange-500">فن</span>
              <br />
              التصوير الفوتوغرافي
            </h1>

            {/* Description */}
            <p className="text-[#aaa] text-lg md:text-xl mt-7 max-w-2xl leading-9">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
              <Link
                to="/blog"
                className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-9 py-4 rounded-full transition"
              >
                استكشف المقالات
                <i className="fa-solid fa-arrow-left mr-3"></i>
              </Link>

              <Link
                to="/about"
                className="border border-[#444] hover:border-orange-400 hover:bg-orange-950/30 text-white font-bold px-9 py-4 rounded-full duration-300 transition"
              >
                <i className="fa-solid fa-circle-info ml-3"></i>
                اعرف المزيد
              </Link>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 w-full max-w-3xl">
              {/* Articles */}
              <div className="p-6 bg-[#151515] border border-[#303030] rounded-3xl flex flex-col items-center justify-center hover:scale-105 duration-300">
                <i className="fa-solid fa-newspaper text-orange-500 text-2xl mb-2"></i>
                <h3 className="text-orange-400 text-2xl font-bold">+50</h3>
                <p className="text-[#777] mt-1">مقالة</p>
              </div>

              {/* Readers */}
              <div className="p-6 bg-[#151515] border border-[#303030] rounded-3xl flex flex-col items-center justify-center hover:scale-105 duration-300">
                <i className="fa-solid fa-users text-orange-500 text-2xl mb-2"></i>
                <h3 className="text-orange-400 text-2xl font-bold">+10ألف</h3>
                <p className="text-[#777] mt-1">قارئ</p>
              </div>

              {/* Categories */}
              <div className="maxp-6 bg-[#151515] border border-[#303030] rounded-3xl flex flex-col items-center justify-center hover:scale-105 duration-300">
                <i className="fa-solid fa-folder text-orange-500 text-2xl mb-2"></i>
                <h3 className="text-orange-400 text-2xl font-bold">4</h3>
                <p className="text-[#777] mt-1">تصنيفات</p>
              </div>

              {/* Writers */}
              <div className="p-6 bg-[#151515] border border-[#303030] rounded-3xl flex flex-col items-center justify-center hover:scale-105 duration-300">
                <i className="fa-solid fa-pen-nib text-orange-500 text-2xl mb-2"></i>
                <h3 className="text-orange-400 text-2xl font-bold">6</h3>
                <p className="text-[#777] mt-1">كاتب</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section dir="rtl" className="bg-[#090909] py-20 border-t border-[#222]">
        <div className="max-w-367.5 mx-auto lg:px-20 md:px-6 px-2">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-3 text-orange-500 border border-orange-500/40 bg-orange-950/20 px-5 py-2 rounded-full font-bold mb-7">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span className="w-2 h-2 bg-orange-500/50 rounded-full"></span>
                مميز
              </div>
              <h2 className="text-white text-4xl md:text-6xl font-bold">
                مقالات مختارة
              </h2>
              <p className="text-[#777] mt-3">محتوى منتقى لبدء رحلة تعلمك</p>
            </div>

            <Link
              to="/blog"
              className="bg-linear-to-r from-orange-500 to-orange-600 hover:-translate-y-0.5 text-white font-bold px-7 py-3 rounded-xl transition"
            >
              عرض الكل
              <i className="fa-solid fa-chevron-left fa-xs mr-2"></i>
            </Link>
          </div>
          {/* Articles */}
          <div className="flex flex-col gap-6">
            {featuredPosts.map((post) => (
              <HomeArticleCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section dir="rtl" className="bg-[#111111] py-24 border-t border-[#222]">
        <div className="max-w-367.5 mx-auto lg:px-20 md:px-6 px-2">
          {/* Header */}
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 text-orange-500 border border-orange-500/40 bg-orange-950/20 px-5 py-2 rounded-full font-bold mb-7">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span className="w-2 h-2 bg-orange-500/50 rounded-full"></span>
              التصنيفات
            </div>
            {/* Title */}
            <h2 className="text-white text-4xl md:text-6xl font-bold">
              استكشف حسب الموضوع
            </h2>
            {/* Description */}
            <p className="text-[#999] text-lg mt-5">
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>
          </div>
          {/* Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
      <section dir="rtl" className="bg-[#090909] py-20 border-t border-[#222]">
        <div className="max-w-367.5 mx-auto lg:px-20 md:px-6 px-4">
          <div className="flex items-end justify-between gap-5 mb-12">
            <div>
              <div
                className="
            inline-flex items-center gap-2
            text-orange-500
            border border-orange-500/30
            bg-orange-950/20
            px-4 py-2 rounded-full
            text-sm mb-4
          "
              >
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                الأحدث
              </div>
              <h2 className="text-white text-4xl md:text-5xl font-bold">
                أحدث المقالات
              </h2>
              <p className="text-[#888] mt-3 text-lg">
                محتوى جديد طازج من المطبعة
              </p>
            </div>
            <Link
              to="/blog"
              className="text-orange-500 font-bold hover:text-orange-400 transition whitespace-nowrap"
            >
              عرض جميع المقالات
              <i className="fa-solid fa-arrow-left mr-3"></i>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <GridArticleCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      <section dir="rtl" className="bg-[#090909] py-20 md:py-28 px-4">
        <div
          className="
      max-w-5xl mx-auto
      bg-[#151515]
      border border-[#303030]
      rounded-3xl
      px-6 py-12
      md:px-16 md:py-20
      text-center
    "
        >
          {/* Icon */}
          <div
            className="
        w-20 h-20 mx-auto
        bg-orange-600
        rounded-2xl
        flex items-center justify-center
        text-white text-3xl
        mb-8
      "
          >
            <i className="fa-regular fa-envelope"></i>
          </div>
          <h2 className="text-white text-3xl md:text-5xl font-bold">
            اشترك في <span className="text-orange-500">نشرتنا الإخبارية</span>
          </h2>
          <p className="text-[#999] text-base md:text-xl mt-6">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
            الإلكتروني
          </p>
          <form className="max-w-2xl mx-auto mt-10 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 bg-[#090909] border border-[#333] rounded-xl px-6 py-4 text-white placeholder:text-[#666] outline-none focus:border-orange-500 transition"
            />
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-10 py-4 rounded-xl transition whitespace-nowrap"
            >
              اشترك الآن
            </button>
          </form>
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-[#666] text-sm">
            {/* Avatars */}
            <div className="flex items-center">
              <div className="flex -space-x-2 space-x-reverse">
                <img
                  src={posts.posts[0].author.avatar}
                  alt=""
                  className="w-9 h-9 rounded-full object-cover border-2 border-[#151515]"
                />
                <img
                  src={posts.posts[1].author.avatar}
                  alt=""
                  className="w-9 h-9 rounded-full object-cover border-2 border-[#151515]"
                />
                <img
                  src={posts.posts[2].author.avatar}
                  alt=""
                  className="w-9 h-9 rounded-full object-cover border-2 border-[#151515]"
                />
              </div>
              <p className="mr-3">
                انضم لـ <span className="text-white font-bold">+10,000</span>{" "}
                مصور
              </p>
            </div>
            <span className="hidden md:block">.</span>
            <span>بدون إزعاج</span>
            <span className="hidden md:block">.</span>
            <span>إلغاء الاشتراك في أي وقت</span>
          </div>
        </div>
      </section>
    </>
  );
}

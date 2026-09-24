// useParams is a React Router hook that allows you to access the dynamic parameters (like IDs or slugs) from the current URL.
// استخدمتها عشان اعمل route لل slug
// path: `blog/:slug` rout to slug here
import { Link, useParams } from "react-router-dom";
import posts from "../../Data/posts.json";
import GridArticleCard from "../../components/ArticleCard/GridArticleCard/GridArticleCard";
import NotFound from "../NotFound/NotFound";

export default function ArticleDetails() {
  const { slug } = useParams();

  let post;

  for (let i = 0; i < posts.posts.length; i++) {
    if (posts.posts[i].slug === slug) {
      post = posts.posts[i];
      break;
    }
  }

  if (!post) {
    return <NotFound />;
  }
  
  // تقسيمة البوست صعبة لو كان اراي كان افضل
  const contentParts = post.content.split("\n\n");
  const introduction = contentParts[0];
  const sections = [];
  for (let i = 1; i < contentParts.length; i++) {
    if (contentParts[i].startsWith("## ")) {
      sections.push({
        title: contentParts[i].replace("## ", ""),
        text: contentParts[i + 1],
      });
      i++;
    }
  }

  const relatedPosts = [];

  for (let i = 0; i < posts.posts.length; i++) {
    if (
      posts.posts[i].category === post.category &&
      posts.posts[i].id !== post.id &&
      relatedPosts.length < 3
    ) {
      relatedPosts.push(posts.posts[i]);
    }
  }

  return (
    <main dir="rtl" className="bg-[#090909] text-white">
      {/* ================= HERO ================= */}
      <section className="relative min-h-150 pt-22 flex items-end overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="absolute inset-0 bg-linear-to-t from-[#090909] via-black/30 to-black/10"></div>
        <div className="relative z-10 w-full max-w-367.5 mx-auto lg:px-20 md:px-6 px-4 pb-16">
          {/* Breadcrumb */}
          <div className="absolute top-6 right-4 md:right-6 lg:right-6">
            <div className="flex items-center gap-3 bg-[#202326]/90 px-5 py-3 rounded-full text-sm">
              <Link
                to="/"
                className="text-[#aaa] hover:text-orange-500 transition"
              >
                <i className="fa-solid fa-house"></i>
              </Link>
              <i className="fa-solid fa-chevron-left text-[#666] text-xs"></i>
              <Link
                to="/blog"
                className="text-[#aaa] hover:text-orange-500 transition"
              >
                المدونة
              </Link>
              <i className="fa-solid fa-chevron-left text-[#666] text-xs"></i>
              <span className="text-orange-500">{post.category}</span>
            </div>
          </div>
          <div className="max-w-5xl py-26 pt-26">
            <div className="flex flex-wrap items-center gap-5 mb-8">
              <span className="bg-orange-600 text-white font-bold px-5 py-2 rounded-full">
                {post.category}
              </span>
              <span className="text-[#ccc]">
                <i className="fa-regular fa-calendar ml-2"></i>
                {post.date}
              </span>
              <span className="text-[#ccc]">
                <i className="fa-regular fa-clock ml-2"></i>
                {post.readTime}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {post.title}
            </h1>
            <div className="mt-10 inline-flex items-center gap-4 bg-[#17191b]/90 border border-[#343434] rounded-2xl px-5 py-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
              />
              <div>
                <h3 className="font-bold text-lg">{post.author.name}</h3>
                <p className="text-[#aaa]">{post.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ARTICLE ================= */}
      <section className="border-b border-[#252525]">
        <div className="max-w-367.5 mx-auto lg:px-20 md:px-6 px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-14 items-start">
            <article>
              <div className="bg-[#241307] border border-orange-900/60 rounded-2xl px-8 py-8 mb-14">
                <p className="text-xl italic leading-9 text-[#eee]">
                  "{post.excerpt}"
                </p>
              </div>
              <p className="text-[#ccc] text-lg md:text-xl leading-10 mb-14">
                {introduction}
              </p>
              {sections.map((section, index) => (
                <div key={index} id={`section-${index}`} className="mb-16">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-orange-950/40 border border-orange-600/50 flex items-center justify-center text-orange-500 text-xl">
                      <i className="fa-solid fa-camera"></i>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-[#ccc] text-lg md:text-xl leading-10">
                    {section.text}
                  </p>
                </div>
              ))}
              <div className="bg-[#111] border border-[#292929] rounded-2xl p-8 mt-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-950/40 border border-orange-600/50 flex items-center justify-center text-orange-500">
                    <i className="fa-solid fa-tags"></i>
                  </div>

                  <h3 className="text-xl font-bold">الوسوم</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#191919] border border-[#292929] text-[#aaa] px-5 py-2 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-[#111] border border-[#292929] rounded-2xl p-8 mt-8">
                <div className="flex flex-wrap items-center justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-950/40 border border-orange-600/50 flex items-center justify-center text-orange-500">
                      <i className="fa-solid fa-share-nodes"></i>
                    </div>
                    <h3 className="text-xl font-bold">شارك المقال</h3>
                  </div>
                  <div className="flex gap-3">
                    <button className="w-12 h-12 bg-[#191919] border border-[#292929] rounded-xl text-[#aaa] hover:text-orange-500 transition">
                      <i className="fa-brands fa-x-twitter"></i>
                    </button>
                    <button className="w-12 h-12 bg-[#191919] border border-[#292929] rounded-xl text-[#aaa] hover:text-orange-500 transition">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </button>
                    <button className="w-12 h-12 bg-[#191919] border border-[#292929] rounded-xl text-[#aaa] hover:text-orange-500 transition">
                      <i className="fa-brands fa-whatsapp"></i>
                    </button>
                    <button className="w-12 h-12 bg-[#191919] border border-[#292929] rounded-xl text-[#aaa] hover:text-orange-500 transition">
                      <i className="fa-solid fa-link"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#111] border border-[#292929] rounded-2xl p-8 mt-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-28 h-28 rounded-2xl object-cover border-4 border-[#5a321a]"
                  />
                  <div>
                    <p className="text-orange-500 font-bold mb-2">
                      كاتب المقال
                    </p>
                    <h3 className="text-3xl font-bold">{post.author.name}</h3>
                    <p className="text-[#777] mt-1">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </article>
            {/* ================= SIDEBAR ================= */}
            <aside className="lg:sticky lg:top-28 space-y-7">
              <div className="bg-[#111] border border-[#292929] rounded-2xl p-7">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-orange-950/40 border border-orange-600/50 flex items-center justify-center text-orange-500">
                    <i className="fa-solid fa-list"></i>
                  </div>
                  <h3 className="text-xl font-bold">محتويات المقال</h3>
                </div>
                <div className="space-y-7">
                  {sections.map((section, index) => (
                    <a
                      key={index}
                      href={`#section-${index}`}
                      className="flex items-center gap-4 text-[#888] hover:text-orange-500 transition"
                    >
                      <span className="w-8 h-8 bg-[#191919] rounded-lg flex items-center justify-center text-sm">
                        {index + 1}
                      </span>

                      <span>{section.title}</span>
                    </a>
                  ))}
                </div>
              </div>
              <div className="bg-[#111] border border-[#292929] rounded-2xl p-7">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#090909] rounded-xl p-5 text-center">
                    <i className="fa-regular fa-clock text-orange-500 text-2xl"></i>
                    <p className="font-bold mt-3">{post.readTime}</p>
                    <p className="text-[#666] text-sm mt-1">وقت القراءة</p>
                  </div>
                  <div className="bg-[#090909] rounded-xl p-5 text-center">
                    <i className="fa-regular fa-calendar text-orange-500 text-2xl"></i>
                    <p className="font-bold mt-3">{post.date}</p>
                    <p className="text-[#666] text-sm mt-1">تاريخ النشر</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#251307] border border-orange-800/50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 mx-auto bg-orange-950 rounded-2xl flex items-center justify-center text-orange-500 text-2xl">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <h3 className="text-xl font-bold mt-6">لا تفوّت جديدنا</h3>
                <p className="text-[#888] mt-3">
                  اشترك للحصول على أحدث المقالات
                </p>
                <Link
                  to="/blog"
                  className="block bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl py-4 mt-6 transition"
                >
                  تصفح المزيد
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
      {/* ================= RELATED ARTICLES ================= */}
      <section className="py-20 border-b border-[#252525]">
        <div className="max-w-367.5 mx-auto lg:px-20 md:px-6 px-4">
          <div className="flex items-end justify-between gap-5 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-950/40 border border-orange-600/50 flex items-center justify-center text-orange-500 text-xl">
                <i className="fa-regular fa-images"></i>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  مقالات قد تعجبك
                </h2>
                <p className="text-[#666] mt-2">
                  استكشف المزيد من المحتوى المميز
                </p>
              </div>
            </div>
            <Link
              to="/blog"
              className="text-orange-500 hover:text-orange-400 font-bold"
            >
              عرض الكل
              <i className="fa-solid fa-arrow-left mr-3"></i>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <GridArticleCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

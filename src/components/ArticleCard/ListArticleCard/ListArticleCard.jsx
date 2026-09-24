import { Link } from "react-router-dom";

export default function ListArticleCard({ post }) {
  return (
    <Link>
      <article
        dir="rtl"
        className="group grid grid-cols-1 md:grid-cols-[360px_1fr] bg-[#151515] border border-[#303030] rounded-3xl overflow-hidden hover:border-[#444] transition duration-300"
      >
        <div className="relative h-50 md:h-full overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-5">
              <span className="bg-orange-950/30 border border-orange-500/40 text-orange-500 px-4 py-1.5 rounded-full font-bold">
                {post.category}
              </span>
              <span className="text-[#777]">
                <i className="fa-regular fa-clock ml-2"></i>
                {post.readTime}
              </span>
              <span className="text-[#777]">
                <i className="fa-regular fa-calendar ml-2"></i>
                {post.date}
              </span>
            </div>
            <h2 className="text-white text-xl md:text-2xl font-bold group-hover:text-orange-500 transition">
              {post.title}
            </h2>
            <p className="text-[#999] mt-4 leading-8">{post.excerpt}</p>
          </div>
          <div className="flex items-end justify-between mt-7">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#444]"
              />
              <div>
                <p className="text-white font-bold">{post.author.name}</p>
                <p className="text-[#777] text-sm">{post.author.role}</p>
              </div>
            </div>
            <span className="text-orange-500 font-bold">
              اقرأ المقال
              <i className="fa-solid fa-arrow-left mr-3 group-hover:-translate-x-1 transition"></i>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
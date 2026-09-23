import { Link } from "react-router-dom";

export default function GridArticleCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="group block">
      <article
        dir="rtl"
        className="bg-[#151515] border border-[#303030] rounded-3xl overflow-hidden
        h-full transition duration-300 hover:-translate-y-2 hover:border-orange-500/40"
      >
        <div className="relative h-60 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover
            group-hover:scale-105 duration-500"
          />
          <span
            className="absolute top-4 right-4
            bg-[#191919]/90 text-white
            px-4 py-2 rounded-full text-xs font-bold"
          >
            {post.category}
          </span>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 text-[#777] text-sm mb-5">
            <span>
              <i className="fa-regular fa-clock ml-2"></i>
              {post.readTime}
            </span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
          {/* Title */}
          <h3
            className="text-white text-xl font-bold leading-8
            group-hover:text-orange-500 duration-300"
          >
            {post.title}
          </h3>
          <p className="text-[#888] mt-3 leading-7 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="border-t border-[#303030] my-5"></div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-11 h-11 rounded-full object-cover"
              />
              <div>
                <p className="text-white font-bold text-sm">
                  {post.author.name}
                </p>

                <p className="text-[#777] text-xs mt-1">{post.author.role}</p>
              </div>
            </div>
            <div
              className="w-10 h-10 rounded-full
              border border-orange-500/40
              text-orange-500
              flex items-center justify-center
              group-hover:bg-orange-500
              group-hover:text-white
              duration-300"
            >
              <i className="fa-solid fa-chevron-left text-xs"></i>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

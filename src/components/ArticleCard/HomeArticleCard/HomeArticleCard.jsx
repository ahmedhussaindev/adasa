import { Link } from "react-router-dom";

export default function HomeArticleCard({ post , setSlug  }) {
  return (
    <Link to={`/blog/${post.slug}`} className="block">
      <article
        dir="rtl"
        className="group grid grid-cols-1 md:grid-cols-2
      bg-[#151515] border border-[#303030]
      rounded-3xl overflow-hidden"
      >
        {/* Image */}
        <div className="relative overflow-hidden h-70 md:h-full">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 duration-500"
          />

          {/* Featured Badge */}
          <div
            className="absolute top-5 right-5 flex items-center gap-2
        bg-linear-to-r from-orange-500 to-amber-400
        text-white text-sm font-bold px-4 py-2 rounded-full"
          >
            <i className="fa-solid fa-star text-xs"></i>
            مميز
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-between">
          {/* Top Content */}
          <div>
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className="border border-orange-500/40
            bg-orange-950/20 text-orange-500
            px-4 py-1.5 rounded-full text-sm"
              >
                {post.category}
              </span>

              <span className="text-[#777] text-sm">
                <i className="fa-regular fa-clock ml-2"></i>
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h3
              className="text-white text-2xl lg:text-4xl font-bold
          leading-tight group-hover:text-orange-500 duration-300"
            >
              {post.title}
            </h3>

            {/* Description */}
            <p className="text-[#999] text-base lg:text-lg mt-6 leading-8">
              {post.excerpt}
            </p>
          </div>

          {/* Bottom */}
          <div className="flex items-end justify-between gap-4 mt-10">
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#444]"
                />
                <span className="absolute bottom-0 left-0 translate-x-1/4 translate-y-1/4 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#151515]"></span>
              </div>
              <div>
                <p className="text-white font-bold">{post.author.name}</p>
                <p className="text-[#777] text-sm">{post.author.role}</p>
              </div>
            </div>

            {/* Read Article */}
            <span className="text-orange-500 font-bold whitespace-nowrap">
              اقرأ المقال
              <i className="fa-solid fa-arrow-left mr-3 group-hover:mr-4 duration-300"></i>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

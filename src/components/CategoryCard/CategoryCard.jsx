export default function CategoryCard({ category }) {
  return (
    <div
      className="group relative bg-[#151515] border border-[#303030] rounded-2xl p-6
      cursor-pointer overflow-hidden hover:-translate-y-2 hover:border-orange-500
      hover:bg-linear-to-br hover:from-orange-500 hover:to-amber-400 transition-all duration-300"
    >
      {/* Icon */}
      <div
        className="w-14 h-14 flex items-center justify-center
          bg-orange-950/30 border border-orange-500/30 rounded-2xl text-orange-500 text-2xl mb-5
          group-hover:bg-white/20 group-hover:border-white/10 group-hover:text-white transition-all duration-300"
      >
        <i className={category.icon}></i>
      </div>

      {/* Category Name */}
      <h3 className="text-white text-xl font-bold transition duration-300">
        {category.name}
      </h3>

      {/* Count */}
      <p className="text-[#777] mt-2 group-hover:text-white/80 transition duration-300">
        {category.count} مقالة
      </p>

      {/* Arrow */}
      <div
        className="absolute left-8 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20
        text-white flex items-center justify-center opacity-0 -translate-x-3 group-hover:opacity-100
        group-hover:translate-x-0 transition-all duration-300"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </div>
    </div>
  );
}

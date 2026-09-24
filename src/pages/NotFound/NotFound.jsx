import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section
      dir="rtl"
      className="relative min-h-screen bg-[#090909] text-white overflow-hidden flex items-center justify-center px-4 pt-22"
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(#262626 1px, transparent 1px),
            linear-gradient(90deg, #262626 1px, transparent 1px)
          `,
          backgroundSize: "65px 65px",
        }}
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-orange-600/10 blur-[130px] rounded-full"></div>
      <div className="relative z-10 text-center max-w-2xl w-full">
        <h1 className="text-[130px] md:text-[180px] font-black leading-none bg-linear-to-r from-orange-600 to-amber-400 bg-clip-text text-transparent">
          404
        </h1>
        <div className="relative w-30 h-30 mx-auto mt-8 mb-10">
          <div className="absolute inset-0 rounded-full bg-orange-500/15 border border-orange-500/50 flex items-center justify-center">
            <i className="fa-regular fa-face-frown text-orange-500 text-5xl"></i>
          </div>
          <span className="absolute -top-3 -right-2 w-5 h-5 bg-orange-500 rounded-full"></span>
          <span className="absolute bottom-0 -left-3 w-4 h-4 bg-amber-400 rounded-full"></span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          عفواً! الصفحة غير موجودة
        </h2>
        <p className="text-[#888] text-lg leading-8 max-w-xl mx-auto">
          {" "}
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار
          الصحيح.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <Link
            to="/"
            className="flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-500 text-white font-bold px-9 py-4 rounded-full transition duration-300"
          >
            <i className="fa-solid fa-house"></i>
            الذهاب للرئيسية
          </Link>
          <Link
            to="/blog"
            className="flex items-center justify-center gap-3 bg-[#111] border border-[#333] hover:border-orange-500 text-white font-bold px-9 py-4 rounded-full transition duration-300"
          >
            <i className="fa-regular fa-newspaper"></i>
            تصفح المقالات
          </Link>
        </div>
        <div className="border-t border-[#252525] mt-14 pt-8">
          <p className="text-[#555] text-sm mb-5">قد تجد هذه مفيدة:</p>
          <div className="flex justify-center items-center gap-4 text-sm">
            <Link
              to="/blog"
              className="text-orange-500 hover:text-orange-400 transition"
            >
              المدونة
            </Link>
            <span className="text-[#444]">•</span>
            <Link
              to="/about"
              className="text-orange-500 hover:text-orange-400 transition"
            >
              من نحن
            </Link>
            <span className="text-[#444]">•</span>
            <a
              href="#"
              className="text-orange-500 hover:text-orange-400 transition"
            >
              الخصوصية
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

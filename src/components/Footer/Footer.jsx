import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer dir="rtl" className="bg-[#090909] border-t border-[#292929]">
      <div className="max-w-367.5 mx-auto lg:px-20 md:px-6 px-2 pt-16">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="عدسة" className="w-14 h-14 object-contain" />

              <h2 className="text-white text-2xl font-bold">عدسة</h2>
            </div>

            <p className="text-[#777] leading-8 max-w-xs">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-7">
              <a className="social-btn">
                <i className="fa-brands fa-x-twitter"></i>
              </a>

              <a className="social-btn">
                <i className="fa-brands fa-github"></i>
              </a>

              <a className="social-btn">
                <i className="fa-brands fa-linkedin"></i>
              </a>

              <a className="social-btn">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white text-xl font-bold mb-7">
              <span className="inline-block w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full ml-2 mb-1"></span>
              استكشف
            </h3>

            <div className="flex flex-col gap-6">
              <Link
                to="/"
                className="group text-[#777] hover:text-orange-500 transition"
              >
                الرئيسية
                <i className="fa-solid fa-chevron-left text-xs mr-3 opacity-0 group-hover:opacity-100 transition"></i>
              </Link>

              <Link
                to="/blog"
                className="group text-[#777] hover:text-orange-500 transition"
              >
                المدونة
                <i className="fa-solid fa-chevron-left text-xs mr-3 opacity-0 group-hover:opacity-100 transition"></i>
              </Link>

              <Link
                to="/about"
                className="group text-[#777] hover:text-orange-500 transition"
              >
                من نحن
                <i className="fa-solid fa-chevron-left text-xs mr-3 opacity-0 group-hover:opacity-100 transition"></i>
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white text-xl font-bold mb-7">
              <span className="inline-block w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full ml-2 mb-1"></span>
              التصنيفات
            </h3>
            <div className="flex flex-col gap-6 text-[#777]">
              <Link className="hover:text-orange-500 transition">إضاءة</Link>
              <Link className="hover:text-orange-500 transition">بورتريه</Link>
              <Link className="hover:text-orange-500 transition">
                مناظر طبيعية
              </Link>
              <Link className="hover:text-orange-500 transition">تقنيات</Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-xl font-bold mb-7">
              <span className="inline-block w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full ml-2 mb-1"></span>
              ابقى على اطلاع
            </h3>
            <p className="text-[#777] leading-7 mb-5">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>

            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="w-full bg-[#151515] border border-[#303030]
              rounded-xl px-5 py-4 text-white outline-none
              focus:border-orange-500 transition"
            />

            <button
              className="w-full bg-orange-600 hover:bg-orange-500
              text-white font-bold py-4 rounded-full mt-4 transition"
            >
              اشترك
            </button>
          </div>
        </div>
        {/* Bottom Footer */}
        <div
          className="border-t border-[#292929] py-8
          flex flex-col md:flex-row items-center justify-between gap-5"
        >
          <p className="text-[#666]">
            © 2026 عدسة. صنع بكل
            <i className="fa-solid fa-heart text-orange-500 mx-2"></i>
            جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-8 text-[#666]">
            <a href="#" className="hover:text-orange-500 transition">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              شروط الخدمة
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

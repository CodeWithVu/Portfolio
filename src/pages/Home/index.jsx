import { LuMapPin } from "react-icons/lu"
import { Images } from '@/assets'
import { motion } from "motion/react"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-8 lg:px-12 max-w-6xl mx-auto py-5 gap-8 ">
      {/* Cột bên trái: Trượt vào từ bên trái */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
      >
        <p className="text-sm mt-3 md:text-sm lg:text-base bg-[#E2E1ED] text-primary font-semibold inline-block p-1.5 rounded-full px-4">
          Intern Fullstack developer
        </p>
        <h1 className="text-4xl mt-3 md:text-5xl lg:text-5xl font-bold text-slate-800 dark:text-amber-50">Nguyễn Anh Vũ</h1>
        <div className="flex items-center gap-2 mt-3 text-[#474553] dark:text-amber-50">
          <LuMapPin />
          <p>Tân Bình District, Hồ Chí Minh City</p>
        </div>
        <p className='text-sm mt-6 md:text-sm lg:text-base text-slate-500  leading-relaxed'>
          Sinh viên CNTT năm 4 đam mê phát triển ứng dụng web Fullstack. Yêu thích xây dựng giao diện tối ưu UX với React kết hợp thiết kế hệ thống backend hiệu năng cao với Node.js/Express.
        </p>
        <div className="flex items-center gap-4 mt-5">
          <button className="bg-white rounded-full border border-primary text-primary font-medium px-4 py-2 cursor-pointer hover:bg-primary hover:text-white transition-all ease-in-out duration-300 hover:-translate-y-2">Download CV</button>
          <Link className="bg-primary text-white rounded-full font-medium px-4 py-2 cursor-pointer hover:bg-indigo-700 transition-all ease-in-out duration-300 hover:-translate-y-1" to="/contact">Contact Me</Link>
        </div>
      </motion.div>

      {/* Cột bên phải: Trượt vào từ bên phải */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
        className="flex justify-center items-center py-6"
      >
        {/* Khung chứa chính (Tạo nhóm hover) */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 group cursor-pointer">

          {/* Lớp giấy dưới cùng (Xoay lệch trái nhiều nhất, dịch phải nhẹ) */}
          <div className="absolute inset-0 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-md transform -rotate-6 translate-x-2 translate-y-1 transition-all duration-500 group-hover:-rotate-12 group-hover:translate-x-4 group-hover:-translate-y-2" />

          {/* Lớp giấy ở giữa (Xoay lệch phải, dịch trái nhẹ) */}
          <div className="absolute inset-0 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-md transform rotate-3 -translate-x-1 translate-y-1 transition-all duration-500 group-hover:rotate-6 group-hover:-translate-x-3 group-hover:-translate-y-1" />

          {/* Tấm ảnh chính trên cùng (Có viền trắng/tối như ảnh polaroid, xoay nhẹ) */}
          <div className="absolute inset-0 bg-white dark:bg-slate-800 p-2 md:p-3 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl transform -rotate-1 transition-all duration-500 group-hover:rotate-0 group-hover:scale-105 z-10">
            <img
              src={Images.Avatar}
              alt="Nguyễn Anh Vũ"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Home

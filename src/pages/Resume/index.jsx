import { useState } from 'react'
import { motion } from 'motion/react'
import { FaBriefcase, FaGraduationCap, FaGithub, FaLinkedin, FaCalendarAlt, FaVenusMars } from 'react-icons/fa'
import { Images } from '@/assets'
import { MdOutlineEmail, MdOutlinePhoneEnabled } from "react-icons/md"
import { LuMapPin } from "react-icons/lu"

function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeTab, setActiveTab] = useState('education')

  return (
    <div className="w-full max-w-6xl mx-auto md:py-4 px-4">
      {/* Tiêu đề trang */}


      {/* Grid nội dung */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

        {/* Cột Học Vấn */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 md:col-span-4"
        >
          <div className=" justify-center shadow-md rounded-xl py-4">
            <div className="flex flex-col items-center">
              <img src={Images.Avatar} alt="My Picture" className="w-20 h-20 object-cover rounded-full border-2 border-primary" />
              <span className="text-lg md:text-xl font-bold text-slate-700 dark:text-slate-200 mt-2">Nguyễn Anh Vũ</span>
              <p className="text-xs md:text-sm  text-slate-500 dark:text-slate-400">Intern fullstack developer</p>
            </div>

            <div className="text-sm pl-5 mt-2 space-y-2">
              <p className='text-md text-primary mt-2'>THÔNG TIN LIÊN LẠC</p>
              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-black dark:text-amber-50 shrink-0" />
                <span>18/03/2003</span>
              </div>
              <div className="flex items-center gap-3">
                <FaVenusMars className="text-black dark:text-amber-50 shrink-0" />
                <span>Nam</span>
              </div>
              <div className="flex items-center gap-3">
                <MdOutlineEmail className="text-black dark:text-amber-50 shrink-0" />
                vu.nguyenanhht@gmail.com
              </div>
              <div className="flex items-center gap-3">
                <MdOutlinePhoneEnabled className="text-black dark:text-amber-50 shrink-0" />
                0965481003
              </div>
              <div className="flex items-center gap-3">
                < LuMapPin className="text-black dark:text-amber-50 shrink-0" />
                Hồ Chí Minh
              </div>
            </div>
            <div className="text-sm pl-5 mt-2 space-y-2">
              <p className='text-md text-primary mt-2'>MẠNG XÃ HỘI</p>
              <div className="flex items-center gap-3">
                <FaGithub />
                <a href="https://github.com/CodeWithVu" target="_blank" rel="noopener noreferrer">
                  CodeWithVu
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaLinkedin />
                <a href="https://www.linkedin.com/in/nguy%E1%BB%85n-anh-v%C5%A9-24a104395/" target="_blank" rel="noopener noreferrer">
                  Nguyễn Anh Vũ
                </a>
              </div>
            </div>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 md:col-span-8"
        >
          <div className="flex flex-col items-start gap-2 pb-2 border-b border-slate-200 dark:border-slate-850">
            <div className="flex gap-2 items-center">
              <FaBriefcase className="text-primary text-lg" />
              <h2 className="text-lg md:text-xl font-bold text-slate-700 dark:text-slate-200">Mục tiêu nghề nghiệp</h2>
            </div>
            <p className='text-sm text-slate-500 pl-2'>
              Mong muốn trở thành Fullstack Developer chuyên nghiệp, có khả năng xây dựng các ứng dụng web hiện đại hoàn chỉnh từ giao diện tối ưu UX (React) đến hệ thống backend tối ưu (Node.js/Express/MongoDB). Muốn học hỏi thực tế tại môi trường doanh nghiệp và áp dụng quy trình Agile.
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex gap-6 border-b border-slate-200 dark:border-slate-800 pb-px">
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 pb-3 text-sm md:text-base font-semibold transition-all relative ${
                activeTab === 'education'
                  ? 'text-primary'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
            >
              <FaGraduationCap className="text-lg" />
              Học vấn
              {activeTab === 'education' && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>

            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 pb-3 text-sm md:text-base font-semibold transition-all relative ${
                activeTab === 'experience'
                  ? 'text-primary'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
            >
              <FaBriefcase className="text-lg" />
              Kinh nghiệm
              {activeTab === 'experience' && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          </div>

          {/* Tabs Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative pl-6 border-l-2 border-primary/20 space-y-6"
          >
            {activeTab === 'education' ? (
              <>
                <div className="relative">
                  <div className="absolute -left-7.75 top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-primary" />
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">2022 - Hiện tại</span>
                  <h3 className="text-sm md:text-base font-bold text-slate-800 dark:text-white mt-1.5">Đại học Sài Gòn</h3>
                  <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">
                    Công nghệ thông tin
                  </p>
                  <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">
                    GPA: 3.0/4.0
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-7.75 top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-primary/40" />
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">2024 - 2025</span>
                  <h3 className="text-sm md:text-base font-bold text-slate-800 dark:text-white mt-1.5">Chứng chỉ</h3>
                  <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">

                  </p>
                </div>
              </>
            ) : (
              <>

              </>
            )}
          </motion.div>
        </motion.div>

      </div>
    </div>
  )
}

export default index
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { Images } from '@/assets'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-8 px-4 max-w-3xl mx-auto flex-1 h-full min-h-100">
      {/* Animated SVG Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-[320px] md:max-w-[320px] mb-6"
      >
        <img
          src={Images.Doodle404}
          alt="404 - Page Not Found"
          className="w-full h-auto object-contain dark:filter dark:drop-shadow-[0_8px_16px_rgba(83,74,183,0.15)]"
        />
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl md:text-2xl font-extrabold text-slate-800 dark:text-white mb-3"
      >
        Oops! Page Not Found
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed"
      >
        Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển sang một liên kết khác.
      </motion.p>

      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white font-semibold text-xs md:text-sm hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all duration-200"
          >
             Trở về Trang Chủ
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default NotFound
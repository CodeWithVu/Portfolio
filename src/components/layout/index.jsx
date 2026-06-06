import { useLocation, useOutlet } from 'react-router'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const PATHS = ['/', '/resume', '/skills', '/projects', '/contact']

function Layout() {

  const location = useLocation()

  const outlet = useOutlet() // Capture current route element

  const prevPathnameRef = useRef(location.pathname)

  const [isMobile, setIsMobile] = useState(false)

  // Tính toán hướng transition trực tiếp trong quá trình render (không dùng state để tránh lệch pha)
  const prevIndex = PATHS.indexOf(prevPathnameRef.current)
  const currentIndex = PATHS.indexOf(location.pathname)
  const transitionDirection = (prevIndex !== -1 && currentIndex !== -1 && currentIndex < prevIndex) ? 'prev' : 'next'


  useEffect(() => {
    prevPathnameRef.current = location.pathname
    // Tự động cuộn lên đầu trang khi chuyển đổi trang
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Track window resize to toggle between 3D book and mobile layouts

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // 3D Page flip animation variants
  const pageFlipVariants = {
    initial: (dir) => {
      if (dir === 'next') {
        return {
          rotateY: 0,
          rotateZ: 0,
          skewY: 0,
          opacity: 0,
          zIndex: 10,
          z: 0
        }
      } else {
        return {
          rotateY: -180,
          rotateZ: 4,
          skewY: 3,
          opacity: 1,
          zIndex: 20,
          z: 0
        }
      }
    },
    animate: {
      rotateY: 0,
      rotateZ: 0,
      skewY: 0,
      opacity: 1,
      zIndex: 15,
      z: 0,
      transition: {
        duration: 1.5,
        ease: [0.25, 1, 0.5, 1] // Custom ease for physical paper bending and settling
      }
    },
    exit: (dir) => {
      if (dir === 'next') {
        // Going forward: Exiting page flips from 0 to -180 (from right to left)
        return {
          rotateY: -180,
          rotateZ: -4,
          skewY: -3,
          opacity: 1, // Keep visible to show the back of the turning page
          zIndex: 20,
          z: 0,
          transition: {
            duration: 1.5,
            ease: [0.25, 1, 0.5, 1]
          }
        }
      } else {
        // Going backward: Exiting page sits flat on the right and fades out underneath
        return {
          rotateY: 0,
          opacity: 0,
          zIndex: 10,
          z: -10,
          transition: {
            duration: 0.8
          }
        }
      }
    }
  }

  // Mobile layout transitions
  const mobileVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: 'easeIn' } }
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 dark:bg-slate-950 transition-colors duration-300 overflow-x-hidden">
      <Header />

      <main
        className="pt-24 pb-8 px-4 md:px-8 max-w-8xl mx-auto flex-1 flex justify-center items-center w-full min-h-0"
        style={{ perspective: '2200px' }}
      >
        {isMobile ? (
          /* 📱 MOBILE VIEW: Simple responsive stacked card layout */
          <div className="w-full relative min-h-112.5">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={location.pathname}
                variants={mobileVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg p-6 text-slate-800 dark:text-slate-100"
              >
                {outlet}
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          /* 📘 DESKTOP VIEW: 3D Book Layout ) */
          <div
            className="w-full relative rounded-2xl bg-slate-200 dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-800 shadow-2xl p-2 md:p-3 min-h-125 h-auto flex flex-col"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Lò xo gáy sổ đặt lệch ở vị trí sát mép trái */}
            <div className="absolute left-4 top-0 bottom-0 w-6 bg-linear-to-r from-slate-400 to-slate-350 dark:from-slate-800 dark:to-slate-850 shadow-inner z-30 -translate-x-1/2 border-x border-slate-300 dark:border-slate-700 flex flex-col justify-around py-6 items-center">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-1.5 rounded-full bg-linear-to-r from-slate-300 to-slate-500 dark:from-slate-700 dark:to-slate-600 border border-slate-400 dark:border-slate-900 shadow-md"
                />
              ))}
            </div>

            {/* VÙNG LẬT TRANG (Flipping Page Area - Tràn rộng từ sát lò xo bên trái sang bên phải) */}
            <div
              className="relative w-full h-full p-2 pl-6 md:p-4 md:pl-10 flex flex-col flex-1"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <AnimatePresence mode="popLayout" custom={transitionDirection}>
                <motion.div
                  key={location.pathname}
                  custom={transitionDirection}
                  variants={pageFlipVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full relative flex-1 flex flex-col"
                  style={{
                    transformOrigin: 'left center', // Trục xoay nằm ở mép trái (ngay gáy lò xo)
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* MẶT TRƯỚC (Nội dung trang hiện tại - Front Face) */}
                  <div
                    className="w-full md:p-10 rounded-2xl border border-slate-300/50 dark:border-slate-800/50 paper-page-light dark:paper-page-dark text-slate-800 dark:text-slate-100 flex flex-col shadow-sm"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    {outlet}
                  </div>

                  {/* MẶT SAU (Mặt giấy trắng của trang lật úp sang trái - Back Face) */}
                  <div
                    className="absolute inset-0 rounded-2xl border border-slate-300/50 dark:border-slate-850 paper-page-light dark:paper-page-dark flex flex-col justify-center items-center"
                    style={{
                      transform: 'rotateY(180deg)', // Quay 180 độ để tạo mặt úp sau khi lật
                      backfaceVisibility: 'hidden',
                      boxShadow: 'inset 25px 0 35px rgba(0,0,0,0.06)'
                    }}
                  >
                    {/* Họa tiết dòng kẻ giấy kẻ ngang tĩnh */}
                    <div className="w-full h-full opacity-[0.06] bg-[linear-gradient(#000_1px,transparent_1px)] bg-size-[100%_2rem] p-8 rounded-2xl" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
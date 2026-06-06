import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { createPortal } from 'react-dom'
import { FaFolderOpen, FaGithub, FaExternalLinkAlt, FaTimes, FaSearch } from 'react-icons/fa'
import { PROJECTS } from '@/data/projects'

const getTechColor = (tech) => {
  const name = tech.toLowerCase()
  if (name.includes('react')) {
    return 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10 border-sky-100 dark:border-sky-500/20'
  }
  if (name.includes('tailwind')) {
    return 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-500/10 border-teal-100 dark:border-teal-500/20'
  }
  if (name.includes('vite') || name.includes('typescript') || name.includes('js')) {
    if (name.includes('express')) {
      return 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/20'
    }
    return 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 border-blue-100 dark:border-blue-500/20'
  }
  if (name.includes('dnd') || name.includes('framer') || name.includes('motion')) {
    return 'text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-500/10 border-pink-100 dark:border-pink-500/20'
  }
  if (name.includes('node') || name.includes('express')) {
    return 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/20'
  }
  if (name.includes('mongo')) {
    return 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-500/10 border-green-100 dark:border-green-500/20'
  }
  if (name.includes('redux') || name.includes('toolkit')) {
    return 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10 border-violet-100 dark:border-violet-500/20'
  }
  if (name.includes('shadcn') || name.includes('ui')) {
    return 'text-slate-600 dark:text-slate-350 bg-slate-50 dark:bg-slate-800/60 border-slate-200/50 dark:border-slate-700/80'
  }
  if (name.includes('firebase')) {
    return 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 border-amber-100 dark:border-amber-500/20'
  }
  return 'text-primary dark:text-indigo-400 bg-primary/5 dark:bg-indigo-500/10 border-primary/20 dark:border-indigo-500/20'
}

// Danh sách các công nghệ chính để lọc
const FILTER_TAGS = ["Tất cả", "ReactJS", "ExpressJS", "TailwindCSS", "MongoDB", "Redux Toolkit"]

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState("Tất cả")
  const hoverTimeoutRef = useRef(null)

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

  // Lọc và Tìm kiếm dự án
  const filteredProjects = PROJECTS.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = activeFilter === "Tất cả" || project.tech.includes(activeFilter)
    return matchesSearch && matchesFilter
  })

  return (
    <div className="w-full max-w-6xl mx-auto py-2 md:py-4 px-4">
      {/* Tiêu đề trang và Thanh Tìm kiếm/Bộ lọc */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xl">
            <FaFolderOpen />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">Featured Projects</h1>
        </motion.div>

        {/* Ô Tìm Kiếm */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative max-w-xs w-full"
        >
          <input
            type="text"
            placeholder="Tìm kiếm dự án..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-xs md:text-sm pl-9 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-white outline-hidden focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-xs"
          />
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs md:text-sm" />
        </motion.div>
      </div>

      {/* Bộ Lọc Công Nghệ */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex flex-wrap gap-2 mb-8"
      >
        {FILTER_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer border transition-all duration-200 active:scale-95 ${
              activeFilter === tag
                ? "bg-primary border-primary text-white shadow-md shadow-primary/20"
                : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-400 hover:border-primary hover:text-primary"
            }`}
          >
            {tag}
          </button>
        ))}
      </motion.div>

      {/* Danh sách dự án */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              layoutId={`card-${project.title}`}
              onMouseEnter={() => {
                if (hoverTimeoutRef.current) {
                  clearTimeout(hoverTimeoutRef.current)
                }
                hoverTimeoutRef.current = setTimeout(() => {
                  setSelectedProject(project)
                }, 500)
              }}
              onMouseLeave={() => {
                if (hoverTimeoutRef.current) {
                  clearTimeout(hoverTimeoutRef.current)
                }
              }}
              onClick={() => {
                if (hoverTimeoutRef.current) {
                  clearTimeout(hoverTimeoutRef.current)
                }
                setSelectedProject(project)
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.1 } }}
              whileHover={{
                scale: 1.02,
                y: -5,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
              }}
              className="flex flex-col justify-between bg-slate-50 dark:bg-slate-900/50 p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800 shadow-sm cursor-pointer group"
            >
              <div>
                <div className="overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                  <motion.img
                    layoutId={`img-${project.title}`}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 md:h-56 object-cover"
                  />
                </div>

                <motion.h3
                  layoutId={`title-${project.title}`}
                  className="mt-4 text-md md:text-lg font-bold text-slate-800 dark:text-white group-hover:text-primary transition-colors duration-200"
                >
                  {project.title}
                </motion.h3>
              </div>

              <div>
                {/* Công nghệ sử dụng */}
                <div className="flex flex-wrap gap-1.5 pt-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className={`text-[10px] md:text-xs font-semibold px-2 py-0.5 rounded-md border ${getTechColor(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 text-slate-400 dark:text-slate-600 font-semibold"
        >
          Không tìm thấy dự án nào phù hợp.
        </motion.div>
      )}

      {/* Chi tiết dự án dưới dạng Modal sử dụng Portal */}
      {createPortal(
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs z-[9999] flex items-center justify-center p-4 cursor-zoom-out"
            >
              <motion.div
                layoutId={`card-${selectedProject.title}`}
                onClick={(e) => e.stopPropagation()}
                onMouseLeave={() => setSelectedProject(null)}
                className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col z-[10000] cursor-default"
              >
                <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <motion.img
                    layoutId={`img-${selectedProject.title}`}
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 active:scale-95 transition-all duration-200 cursor-pointer"
                    aria-label="Close modal"
                  >
                    <FaTimes />
                  </button>
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <motion.h3
                      layoutId={`title-${selectedProject.title}`}
                      className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-1"
                    >
                      {selectedProject.title}
                    </motion.h3>
                    <p className="text-[10px] md:text-xs text-primary font-semibold uppercase tracking-wider mb-3">
                      Vai trò: {selectedProject.role}
                    </p>

                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6"
                    >
                      {selectedProject.desc}
                    </motion.p>
                  </div>

                  <div>
                    {/* Công nghệ */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {selectedProject.tech.map((tech) => (
                        <span key={tech} className={`text-[10px] md:text-xs font-semibold px-2 py-0.5 rounded-md border ${getTechColor(tech)}`}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Liên kết */}
                    <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                      {/* Nút GitHub - hiển thị disabled + tooltip nếu thiếu link */}
                      {selectedProject.github ? (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-slate-350 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-200 font-semibold text-xs md:text-sm"
                        >
                          <FaGithub className="text-base" />
                          <span>GitHub</span>
                        </a>
                      ) : (
                        <div className="relative group/tooltip">
                          <button
                            disabled
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100/60 dark:bg-slate-850/40 text-slate-400 dark:text-slate-600 border border-slate-200/50 dark:border-slate-800/80 font-semibold text-xs md:text-sm cursor-not-allowed"
                          >
                            <FaGithub className="text-base" />
                            <span>GitHub</span>
                          </button>
                          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-slate-900 text-white text-[10px] rounded-md opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-[10005]">
                            Chưa triển khai
                          </span>
                        </div>
                      )}

                      {/* Nút Demo - hiển thị disabled + tooltip nếu thiếu link */}
                      {selectedProject.demo ? (
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white hover:bg-primary/90 hover:shadow-md transition-all duration-200 font-semibold text-xs md:text-sm"
                        >
                          <FaExternalLinkAlt className="text-xs" />
                          <span>Live Demo</span>
                        </a>
                      ) : (
                        <div className="relative group/tooltip">
                          <button
                            disabled
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100/60 dark:bg-slate-850/40 text-slate-400 dark:text-slate-600 border border-slate-200/50 dark:border-slate-800/80 font-semibold text-xs md:text-sm cursor-not-allowed"
                          >
                            <FaExternalLinkAlt className="text-xs" />
                            <span>Live Demo</span>
                          </button>
                          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-slate-900 text-white text-[10px] rounded-md opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-[10005]">
                            Chưa triển khai
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  )
}

export default Projects
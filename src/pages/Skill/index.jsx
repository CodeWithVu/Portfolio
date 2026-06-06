import { motion } from 'motion/react'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaFigma,
  FaLanguage,
  FaUsers,
  FaLightbulb,
  FaComments,
  FaClock,
  FaGraduationCap,
  FaCode,
  FaLaptopCode
} from 'react-icons/fa'
import { SiTailwindcss, SiFramer, SiTypescript, SiExpress } from 'react-icons/si'

const TECH_GROUPS = [
  {
    title: "Languages",
    skills: [
      { name: "HTML5 / CSS3", icon: <span className="flex gap-1"><FaHtml5 className="text-[#E34F26]" /><FaCss3Alt className="text-[#1572B6]" /></span> },
      { name: "JavaScript ES6+", icon: <FaJs className="text-[#F7DF1E] bg-black rounded-sm" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6] bg-white rounded-sm" /> }
    ]
  },
  {
    title: "Framework / Library",
    skills: [
      { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "Express.js", icon: <SiExpress className="text-slate-800 dark:text-slate-100" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-slate-900 dark:text-white" /> }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git / GitHub", icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" /> }
    ]
  },
  {
    title: "Ngoại ngữ",
    skills: [
      { name: "Tiếng Anh (Đọc hiểu tốt)", icon: <FaLanguage className="text-[#4285F4]" /> }
    ]
  }
]

const SOFT_SKILLS = [
  {
    name: "Làm việc nhóm",
    desc: "Phối hợp tốt trong môi trường Agile",
    icon: <FaUsers className="text-[#4CAF50]" />
  },
  {
    name: "Tư duy giải quyết vấn đề",
    desc: "Phân tích logic, tiếp cận có hệ thống",
    icon: <FaLightbulb className="text-[#FFC107]" />
  },
  {
    name: "Giao tiếp hiệu quả",
    desc: "Diễn đạt rõ ràng, lắng nghe tích cực",
    icon: <FaComments className="text-[#00BCD4]" />
  },
  {
    name: "Quản lý thời gian",
    desc: "Ưu tiên nhiệm vụ, đúng deadline",
    icon: <FaClock className="text-[#9C27B0]" />
  },
  {
    name: "Học hỏi nhanh",
    desc: "Tiếp thu công nghệ mới linh hoạt",
    icon: <FaGraduationCap className="text-[#E91E63]" />
  }
]

function index() {
  return (
    <div className="w-full max-w-6xl mx-auto py-2 md:py-4 px-4">
      {/* Tiêu đề trang */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-6"
      >
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xl">
          <FaLaptopCode />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">Skills & Technologies</h1>
      </motion.div>

      {/* Grid 2 cột */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        {/* Cột 1: Hard Skills */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-2xl border border-slate-200/60 dark:border-slate-850 shadow-sm"
        >
          <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-200 dark:border-slate-800">
            <FaCode className="text-primary text-lg" />
            <h2 className="text-md md:text-lg font-bold text-slate-700 dark:text-slate-200">Technical Skills</h2>
          </div>

          <div className="space-y-5">
            {TECH_GROUPS.map((group) => (
              <div key={group.title} className="space-y-2.5">
                <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/30 dark:border-slate-800/50 shadow-xs"
                    >
                      <span className="text-base md:text-lg flex items-center">{skill.icon}</span>
                      <span className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-250">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cột 2: Soft Skills */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-2xl border border-slate-200/60 dark:border-slate-850 shadow-sm"
        >
          <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-200 dark:border-slate-800">
            <FaUsers className="text-primary text-lg" />
            <h2 className="text-md md:text-lg font-bold text-slate-700 dark:text-slate-200">Soft Skills</h2>
          </div>

          <div className="space-y-3">
            {SOFT_SKILLS.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ x: 4 }}
                transition={{ type: "tween", duration: 0.2 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/30 dark:border-slate-800/50"
              >
                <div className="text-lg md:text-xl mt-0.5 flex items-center">{skill.icon}</div>
                <div className="space-y-0.5">
                  <h3 className="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-200">
                    {skill.name}
                  </h3>
                  <p className="text-[10px] md:text-xs text-slate-400 dark:text-slate-400 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default index
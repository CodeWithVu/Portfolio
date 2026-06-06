import { useState } from 'react'
import { motion } from 'motion/react'
import { FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validateForm = () => {
    let tempErrors = {}
    let isValid = true

    if (!formData.name.trim()) {
      tempErrors.name = "Họ và tên không được để trống."
      isValid = false
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email không được để trống."
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email không đúng định dạng."
      isValid = false
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Tiêu đề không được để trống."
      isValid = false
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Nội dung lời nhắn không được để trống."
      isValid = false
    } else if (formData.message.trim().length < 20) {
      tempErrors.message = "Tin nhắn phải có độ dài tối thiểu 20 ký tự."
      isValid = false
    }

    setErrors(tempErrors)
    return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setSubmitting(true)

    // Giả lập gửi tin nhắn (1.5s delay)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setErrors({})

      // Hiển thị success message trong 3 giây rồi tự động hiện lại form trống
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    }, 1500)
  }

  return (
    <div className="w-full max-w-6xl mx-auto md:py-4 px-4 overflow-hidden">
      {/* Grid 2 cột */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Cột trái: Thông tin liên hệ */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col"
        >
          <div className="space-y-5">
            <h2 className="text-lg md:text-xl font-bold text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-850 pb-2">
              Thông tin liên lạc
            </h2>

            <div className="flex items-center gap-3 text-slate-650 dark:text-slate-400">
              <div className="w-9 h-9 rounded-full bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 flex items-center justify-center p-2 shrink-0 shadow-xs">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66">
                  <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/>
                  <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"/>
                  <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/>
                  <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92"/>
                  <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/>
                </svg>
              </div>
              <span className="text-xs md:text-sm font-medium">vu.nguyenanhht@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 text-slate-650 dark:text-slate-400">
              <div className="w-9 h-9 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-sm shrink-0">
                <FaPhone />
              </div>
              <span className="text-xs md:text-sm font-medium">0965481003</span>
            </div>

            <div className="flex items-center gap-3 text-slate-650 dark:text-slate-400">
              <div className="w-9 h-9 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm shrink-0">
                <FaMapMarkerAlt />
              </div>
              <span className="text-xs md:text-sm font-medium">Quận Tân Bình, TP. Hồ Chí Minh</span>
            </div>
          </div>

          {/* Mạng xã hội */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-700 dark:text-slate-200 mt-10">Kết nối mạng xã hội</h3>
            <div className="flex items-center gap-4">
              <a href="https://github.com/CodeWithVu" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center text-lg hover:bg-slate-900 hover:text-white dark:hover:bg-slate-100 dark:hover:text-slate-900 transition-all duration-300 transform hover:-translate-y-1">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/nguy%E1%BB%85n-anh-v%C5%A9-24a104395/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-350 flex items-center justify-center text-lg hover:bg-[#0A66C2] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Cột phải: Form gửi tin nhắn */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-2xl border border-slate-200/60 dark:border-slate-850 shadow-sm">
            <h2 className="text-md md:text-lg font-bold text-slate-700 dark:text-slate-200 mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
              Gửi lời nhắn
            </h2>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-green-500/10 text-green-500 p-6 rounded-xl text-xs md:text-sm font-semibold text-center border border-green-500/20"
              >
                Cảm ơn bạn! Lời nhắn đã được gửi thành công.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-bold text-slate-650 dark:text-slate-300">Họ và Tên</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full text-xs md:text-sm p-2 rounded-lg border bg-white dark:bg-slate-900 dark:text-white outline-hidden focus:ring-1 focus:ring-primary focus:border-transparent transition-all ${
                      errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800'
                    }`}
                    placeholder="Nguyễn Văn A"
                  />
                  {errors.name && <p className="text-[10px] md:text-xs text-red-500 font-semibold mt-0.5">{errors.name}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-bold text-slate-650 dark:text-slate-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full text-xs md:text-sm p-2 rounded-lg border bg-white dark:bg-slate-900 dark:text-white outline-hidden focus:ring-1 focus:ring-primary focus:border-transparent transition-all ${
                      errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800'
                    }`}
                    placeholder="nguyenvana@gmail.com"
                  />
                  {errors.email && <p className="text-[10px] md:text-xs text-red-500 font-semibold mt-0.5">{errors.email}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="subject" className="text-xs font-bold text-slate-650 dark:text-slate-300">Tiêu đề</label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full text-xs md:text-sm p-2 rounded-lg border bg-white dark:bg-slate-900 dark:text-white outline-hidden focus:ring-1 focus:ring-primary focus:border-transparent transition-all ${
                      errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800'
                    }`}
                    placeholder="Đề xuất hợp tác / Tuyển dụng..."
                  />
                  {errors.subject && <p className="text-[10px] md:text-xs text-red-500 font-semibold mt-0.5">{errors.subject}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-bold text-slate-650 dark:text-slate-300">Tin nhắn</label>
                  <textarea
                    id="message"
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full text-xs md:text-sm p-2 rounded-lg border bg-white dark:bg-slate-900 dark:text-white outline-hidden focus:ring-1 focus:ring-primary focus:border-transparent transition-all resize-none ${
                      errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800'
                    }`}
                    placeholder="Nhập nội dung lời nhắn (tối thiểu 20 ký tự)..."
                  />
                  {errors.message && <p className="text-[10px] md:text-xs text-red-500 font-semibold mt-0.5">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full bg-primary hover:bg-indigo-700 text-white text-xs md:text-sm font-semibold py-2.5 px-4 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-md flex justify-center items-center gap-2 ${
                    submitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Đang gửi...</span>
                    </>
                  ) : "Gửi tin nhắn"}
                </button>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Contact
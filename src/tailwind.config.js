/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'sans' ở đây sẽ thay thế font mặc định của Tailwind bằng font của bạn
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        // Cách đặt tên 1: Màu đơn lẻ
        primary: '#534ab7'
      }
    }
  },
  plugins: []
}
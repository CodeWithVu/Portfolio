import { Images } from '@/assets'

export const PROJECTS = [
  {
    image: Images.Trello,
    title: "Trello Clone",
    desc: "Website hỗ trợ quản lý công việc với các tính năng: tạo bảng, tạo danh sách, thêm/xóa thẻ. Cho phép làm việc nhóm và kéo thả các thẻ công việc mượt mà.",
    tech: ["ReactJS", "Vite", "TailwindCSS", "DndKit", "ExpressJS", "MongoDB"],
    role: "Fullstack Developer",
    github: "https://github.com/CodeWithVu",
    demo: "https://trello-clone-todo.vercel.app"
  },
  {
    image: Images.Fruitshop,
    title: "Fruitshop - Ecomerce Web App",
    desc: "Trang web mua bán trái cây với các tính năng: hiển thị sản phẩm, giỏ hàng, đặt hàng, thanh toán trực tuyến, và quản lý website dành cho admin.",
    tech: ["ReactJS", "Redux Toolkit", "Shadcn-UI", "TailwindCSS"],
    role: "Frontend Developer",
    github: "https://github.com/TrungWolford/FruitShop",
    demo: "https://fruitshop-c4.vercel.app"
  },
  {
    image: Images.Portfolio, // Dùng tạm ảnh Trello hoặc ảnh demo khác
    title: "3D Notebook Portfolio",
    desc: "Website hồ sơ cá nhân thiết kế dưới dạng cuốn sổ tay 3D lật trang vật lý độc đáo. Tích hợp hiệu ứng mượt mà, responsive, tìm kiếm & lọc dự án, cùng contact form validation chuẩn UX.",
    tech: ["ReactJS", "Vite", "TailwindCSS", "Framer Motion", "React Router"],
    role: "Frontend Developer",
    github: "https://github.com/CodeWithVu/Portfolio",
    demo: "https://portfolio-vunguyen.vercel.app/"
  }
]

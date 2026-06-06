# Personal Portfolio Website (CV Cá Nhân)

Website CV cá nhân giới thiệu thông tin, kỹ năng, kinh nghiệm và các dự án nổi bật được thiết kế độc đáo với phong cách **3D Book Layout** (hiệu ứng lật trang 3D thực tế) kết hợp **Mobile Stacked Layout** hiện đại cho các thiết bị di động.

---

## 🛠️ Tech Stack & Thư viện sử dụng

- **Core & Build Tools:** ReactJS, Vite
- **Styling (CSS):** Tailwind CSS, Vanilla CSS
- **Animations:** Framer Motion (`motion/react`)
- **Icons:** React Icons (`react-icons`)
- **UI Components:** Headless UI (`@headlessui/react`)
- **Routing:** React Router v7 (`react-router-dom`)

---

## 🚀 Tính năng nổi bật

1. **3D Book Layout & Page Flip Transition (Desktop):**
   - Thiết kế dạng cuốn sổ tay 3D với lò xo gáy sổ.
   - Hiệu ứng lật trang lướt nghiêng vật lý thực tế khi chuyển đổi các route trang.
2. **Mobile Responsive Stacked Card Layout:**
   - Tự động chuyển đổi sang giao diện dọc, tối ưu hiển thị trên Mobile và Tablet.
   - Không bị vỡ khung, đảm bảo trải nghiệm cuộn và đọc mượt mà.
3. **Quản lý trạng thái giao diện & Chế độ sáng tối (Dark/Light/System Theme):**
   - Tích hợp thay đổi giao diện theo Hệ điều hành (System) hoặc tùy chọn Sáng (Light) / Tối (Dark).
   - Lưu trữ lựa chọn của người dùng vào `localStorage`.
4. **Auto Scroll to Top:**
   - Tự động cuộn lên đầu trang khi chuyển đổi route để người dùng không bị mất dấu nội dung.
5. **Bộ lọc & Tìm kiếm Dự Án (Projects Filter & Search):**
   - Hỗ trợ Tìm kiếm theo tên dự án và Lọc theo thẻ công nghệ chính (ReactJS, TailwindCSS, ExpressJS, v.v.).
   - Trích xuất dữ liệu tập trung ra file data mảng động.
   - Xử lý link thiếu: Nếu thiếu link GitHub hoặc Live Demo, nút sẽ ở trạng thái **disabled** kèm theo **tooltip "Chưa triển khai"**.
6. **Form Liên Hệ Chuyên Nghiệp (Custom Validation & Loading UX):**
   - Form đầy đủ các trường dữ liệu: Họ và Tên, Email, Tiêu đề, Tin nhắn.
   - Validation tùy chỉnh bằng React state (email đúng định dạng, tin nhắn >= 20 ký tự, bắt buộc nhập toàn bộ trường) và hiển thị thông báo lỗi riêng cho từng trường.
   - Hiển thị trạng thái Loading và Disabled ở nút gửi tin nhắn, giả lập độ trễ gửi (1.5s) trước khi thông báo gửi thành công.
7. **Accessibility & Clean Code:**
   - Toàn bộ component được đổi tên theo chuẩn React (PascalCase), các thẻ HTML gốc đổi sang dạng Semantic HTML (như `<header>`, `<footer>`).
   - Cải thiện outline focus bàn phím ở các nút bấm quan trọng.

---

## ⚙️ Hướng dẫn Cài đặt & Chạy Local

Yêu cầu máy tính của bạn đã cài đặt sẵn **Node.js** và **Yarn** (hoặc **NPM**).

1. **Clone mã nguồn về máy tính:**
   ```bash
   git clone https://github.com/CodeWithVu/my-portfolio.git
   cd my-portfolio
   ```

2. **Cài đặt các gói thư viện phụ thuộc:**
   - Dùng Yarn (Khuyến nghị):
     ```bash
     yarn install
     ```
   - Hoặc dùng NPM:
     ```bash
     npm install
     ```

3. **Chạy dự án ở chế độ phát triển (Local Development):**
   - Dùng Yarn:
     ```bash
     yarn dev
     ```
   - Hoặc dùng NPM:
     ```bash
     npm run dev
     ```
   *Sau khi chạy, truy cập đường dẫn local hiển thị trên terminal (thông thường là `http://localhost:5173`).*

4. **Biên dịch bản chạy Production (Build):**
   ```bash
   yarn build
   # hoặc
   npm run build
   ```

---

## 🔗 Liên kết & Ảnh giao diện

- **Link Live Demo:** `https://my-portfolio-demo.vercel.app` (Ví dụ)
- **Ảnh chụp màn hình (Screenshots):**
  - *Trang chủ (Giao diện Sáng):* `[Đính kèm ảnh screenshot 1]`
  - *Giao diện lật trang 3D (Giao diện Tối):* `[Đính kèm ảnh screenshot 2]`

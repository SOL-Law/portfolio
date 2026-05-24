# Digital Portfolio - Mai Văn Thuần

Một trang Portfolio hiện đại với thiết kế **Cyberpunk/Modern Tech** sử dụng **Dark Blue + Neon Purple**.

## 📁 Cấu Trúc Thư Mục

```
portfolio/
├── index.html          # Single Page Application
├── style.css           # Thiết kế Glassmorphism (Modern)
├── script.js           # Chức năng tab switching, Dark/Light mode
├── README.md           # File này
├── assets/
│   └── images/
│       └── avatar.jpg  # Ảnh đại diện (Thay bằng ảnh của bạn)
└── files/
    ├── baocao1.pdf     # Quản Lý Tệp & Dữ Liệu
    ├── baocao2.pdf     # Tìm Kiếm Thông Tin
    ├── baocao3.pdf     # Prompt Engineering
    ├── baocao4.pdf     # Hợp Tác Nhóm
    ├── baocao5.pdf     # Sáng Tạo Multi-Modal
    └── baocao6.pdf     # Đạo Đức AI
```

## 🎨 Các Tính Năng

### 1. **Responsive Design**
- Mobile-first approach
- Hỗ trợ tablet, desktop
- Hamburger menu trên mobile

### 2. **Dark/Light Mode**
- Toggle theme tại navbar
- Lưu preference vào localStorage
- Smooth transition khi đổi theme

### 3. **Tab Switching System**
- 6 tab bài tập riêng biệt
- Sidebar navigation on desktop
- Grid layout on mobile
- Smooth animation khi chuyển tab

### 4. **Typing Effect**
- Hero subtitle tự động gõ chữ
- 4 dòng text xoay vòng lặp

### 5. **Smooth Scroll & AOS**
- Animate on scroll (AOS library)
- Smooth scroll khi click navigation
- Active nav link indicator

### 6. **Glassmorphism Design**
- Card với backdrop blur
- Gradient borders
- Neon accent colors
- Modern shadow effects

## 📝 Hướng Dẫn Setup

### 1. Thay Avatar
- Đặt ảnh của bạn vào: `assets/images/avatar.jpg`
- Hoặc thay link ảnh trong HTML

### 2. Thêm Báo Cáo PDF
- Tạo file PDF hoặc sử dụng tệp hiện có
- Đặt vào folder `files/` với tên: `baocao1.pdf` đến `baocao6.pdf`
- HTML sẽ tự động tạo download link

### 3. Chỉnh Sửa Nội Dung
- Mở `index.html` để chỉnh tiêu đề, mô tả
- Mở `script.js` để chỉnh nội dung từng tab (Object `projectsData`)

### 4. Chạy Trực Tiếp
```bash
# Cách 1: Mở trực tiếp file HTML
# Windows: Chuột phải > Open with > Browser

# Cách 2: Sử dụng Live Server (VS Code)
# Cài extension "Live Server"
# Chuột phải index.html > Open with Live Server
```

## 🎯 Phong Cách Thiết Kế

### Màu Sắc
- **Background**: Dark Blue (`#0a0e27`)
- **Accent Primary**: Purple (`#8b5cf6`)
- **Accent Bright**: Light Purple (`#a78bfa`)
- **Accent Neon**: Hot Purple (`#c084fc`)
- **Text Primary**: Light (`#e0e7ff`)
- **Text Secondary**: Muted (`#a5b4fc`)

### Typography
- **Font Chính**: Inter (Modern, Clean)
- **Font Code**: Fira Code (Monospace, Professional)

### Effects
- Gradient text (Neon effect)
- Blur backdrop (Glassmorphism)
- Smooth animations (0.3s ease)
- Hover effects & transitions

## 🚀 Công Nghệ Sử Dụng

- **HTML5**: Semantic structure
- **CSS3**: Custom properties, Grid, Flexbox, Animations
- **JavaScript**: Vanilla JS (No framework)
- **Libraries**:
  - [Font Awesome](https://fontawesome.com/) - Icons
  - [Google Fonts](https://fonts.google.com/) - Inter, Fira Code
  - [AOS](https://michalsnik.github.io/aos/) - Animate on Scroll

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 💡 Tính Năng Nâng Cao

### Nếu muốn mở rộng:
1. **Add animations**: Chỉnh sửa `@keyframes` trong CSS
2. **Add more tabs**: Thêm object mới vào `projectsData` trong JS
3. **Custom colors**: Thay đổi CSS variables trong `:root`
4. **Add sections**: Thêm `<section>` mới với class `glass-card`

## 🐛 Troubleshooting

**Ảnh avatar không hiển thị?**
- Kiểm tra đường dẫn: `assets/images/avatar.jpg`
- Hoặc thay bằng ảnh placeholder từ internet

**PDF không hiển thị?**
- Kiểm tra file tồn tại trong `files/` folder
- Kiểm tra đúng tên file: `baocao1.pdf` - `baocao6.pdf`

**Theme toggle không hoạt động?**
- Kiểm tra browser console (F12) để xem lỗi
- Verify localStorage đang được hỗ trợ

**Mobile menu không đóng?**
- Refresh page
- Xóa localStorage: `localStorage.clear()`

## 📚 Nguồn Tài Liệu

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

## 📧 Liên Hệ

Nếu có câu hỏi, liên hệ: [your-email@example.com]

---

**Tạo bởi**: Mai Văn Thuần
**Năm**: 2025
**Status**: Production Ready ✅

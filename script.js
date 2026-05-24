// ========================================
// DIGITAL PORTFOLIO - JAVASCRIPT
// Functionality & Interactions
// ========================================

// ========================================
// PROJECT DATA
// ========================================

const projectsData = {
    bai1: {
        title: "01. Máy tính và các thiết bị ngoại vi",
        summary: `
            <h4>🎯 Mục tiêu bài tập</h4>
            <p>
                Thực hành các thao tác quản lý tệp tin và thư mục trên Windows: tạo, đổi tên, sao chép (Copy), di chuyển (Cut), 
                xóa tạm thời, xóa vĩnh viễn và khôi phục từ thùng rác.
            </p>
            
            <h4>📋 Tóm Tắt Quá Trình</h4>
            <p>
                Sử dụng File Explorer trên Windows, tạo thư mục <strong>ThucHanh_MaiVanThuan</strong>, tạo tệp GhiChu.txt, 
                đổi tên thành GhiChuQuanTrong.txt. Thực hiện Copy/Paste và Cut/Paste giữa các thư mục. 
                Xóa tệp vào Recycle Bin và xóa vĩnh viễn bằng Shift + Delete.
            </p>
            
            <h4>🔍 Phân Tích Chuyên Sâu</h4>
            <p>
                <strong>Copy vs Cut:</strong> Copy tạo bản sao, tệp gốc vẫn ở đó - an toàn nhưng tốn dung lượng. 
                Cut di chuyển tệp - tối ưu hơn. Tuy nhiên, nếu tắt máy trước khi paste, tệp có thể mất vĩnh viễn.
            </p>
            <p>
                <strong>Cấu trúc thư mục 3 lớp:</strong> Năm → Tháng → Ngày/Loại dự án. 
                Lợi ích: Tìm kiếm nhanh, không bị phân mảnh thông tin, dễ backup theo định kỳ.
            </p>
            <p>
                <strong>Kinh nghiệm:</strong> Luôn Paste vào đích trước khi xóa khỏi nguồn, tránh mất dữ liệu. 
                Sử dụng Ctrl+Z ngay lập tức nếu nhầm lẫn.
            </p>
            <a href="files/baocao1.pdf" class="file-link" target="_blank">📄 Xem Báo Cáo Chi Tiết</a>
        `
    },
    bai2: {
        title: "02. Khai thác dữ liệu và thông tin",
        summary: `
            <h4>🎯 Mục tiêu bài tập</h4>
            <p>
                Tìm kiếm, tổng hợp và đánh giá độ tin cậy của các nguồn thông tin học thuật liên quan đến chủ đề 
                <strong>"Ứng dụng Đại số tuyến tính trong Học máy và Python"</strong>.
            </p>
            
            <h4>📋 Tóm Tắt Quá Trình</h4>
            <p>
                Sử dụng các toán tử tìm kiếm nâng cao: <code>site:</code>, <code>filetype:pdf</code>, dấu ngoặc kép <code>" "</code>, 
                ký tự <code>*</code>. Tìm kiếm trên Google Scholar, IEEE Xplore, ScienceDirect. 
                Thu thập <strong>12 nguồn</strong> (sách, bài báo, nguồn mở, tài liệu kỹ thuật). 
                Đánh giá dựa trên uy tín tác giả, nhà xuất bản, số trích dẫn (>60.000), năm xuất bản.
            </p>
            
            <h4>🔍 Phân Tích Chuyên Sâu</h4>
            <p>
                <strong>Toán tử site:nature.com</strong> - Tìm kiếm chỉ trong Domain cụ thể, tránh spam.
            </p>
            <p>
                <strong>filetype:pdf</strong> - Lọc ra tài liệu PDF, thường là bài báo có cấu trúc rõ ràng.
            </p>
            <p>
                <strong>Peer-reviewed:</strong> Được kiểm duyệt bởi chuyên gia, độ tin cậy 95%+. 
                Ví dụ: Nature, MIT Press, IEEE Xplore.
            </p>
            <p>
                <strong>Blog:</strong> Có giá trị tham khảo nhưng có thể chứa quan điểm cá nhân, cần kiểm chứng.
            </p>
                <a href="files/baocao2.pdf" class="file-link" target="_blank">📄 Xem Báo Cáo Chi Tiết</a>
        `
    },
    bai3: {
        title: "03. Tổng quan về trí tuệ nhân tạo",
        summary: `
            <h4>🎯 Mục tiêu bài tập</h4>
            <p>
                Phát triển kỹ năng viết Prompt (Prompt Engineering) hiệu quả, so sánh sự khác biệt giữa 
                <strong>Prompt Cơ bản</strong> và <strong>Prompt Nâng cao</strong> trên Google Gemini.
            </p>
            
            <h4>📋 Tóm Tắt Quá Trình</h4>
            <p>
                Thực nghiệm 3 tác vụ: tóm tắt tài liệu học thuật, giải thích khái niệm "Rối lượng tử", 
                tạo bộ câu hỏi ôn tập môn Lịch sử Đảng. 
            </p>
            <ul>
                <li><strong>Prompt Cơ bản:</strong> Chỉ là câu lệnh ngắn → Kết quả chung chung, không có cấu trúc</li>
                <li><strong>Prompt Nâng cao:</strong> Áp dụng Role Prompting, Chain-of-Thought (CoT), Few-shot, Structured Output</li>
            </ul>
            <p>
                <strong>Kết quả:</strong> Prompt Nâng cao vượt trội, <strong>tiết kiệm 90% thời gian</strong> xử lý thông tin.
            </p>
            
            <h4>🔍 Phân Tích Chuyên Sâu</h4>
            <p>
                <strong>Chain-of-Thought (CoT):</strong> Yêu cầu AI "suy luận từng bước" thay vì trả lời trực tiếp. 
                Kỹ thuật này đặc biệt hiệu quả cho các vấn đề logic phức tạp.
            </p>
            <p>
                <strong>Role Prompting:</strong> Gán cho AI một vai trò cụ thể (ví dụ: "Bạn là Giáo sư kinh tế"). 
                Kết quả sẽ chi tiết hơn và phù hợp ngữ cảnh.
            </p>
            <p>
                <strong>Structured Output:</strong> Yêu cầu output theo định dạng JSON hoặc bảng, dễ parse bằng code.
            </p>
                <a href="files/baocao3.pdf" class="file-link" target="_blank">📄 Xem Báo Cáo Chi Tiết</a>
        `
    },
    bai4: {
        title: "04. Giao tiếp và hợp tác trong môi trường số",
        summary: `
            <h4>🎯 Mục tiêu bài tập</h4>
            <p>
                Thiết lập và vận hành hệ sinh thái công cụ hợp tác trực tuyến để quản lý dự án nhóm 
                <strong>"Hệ thống Đấu giá trực tuyến"</strong>.
            </p>
            
            <h4>📋 Tóm Tắt Quá Trình</h4>
            <p>
                Vai trò <strong>Trưởng nhóm kỹ thuật</strong>. Sử dụng:
            </p>
            <ul>
                <li><strong>Trello:</strong> Checklist, deadline, label để quản lý task</li>
                <li><strong>Discord:</strong> Kênh #general, #technical, #github-alerts</li>
                <li><strong>Google Drive:</strong> Cấu trúc 3 cấp, quy tắc đặt tên [Mã]_[Tên]_[Ngày]_[Phiên_bản], phân quyền</li>
                <li><strong>Google Docs:</strong> Suggesting Mode, Version History</li>
                <li><strong>Webhook Trello → Discord:</strong> Tích hợp tự động báo cáo tiến độ</li>
            </ul>
            <p>
                Tổ chức họp Daily Stand-up 5 phút mỗi tối. Hỗ trợ thành viên >15 lượt/tuần.
            </p>
            
            <h4>🔍 Phân Tích Chuyên Sâu</h4>
            <p>
                <strong>Naming Convention 3 lớp:</strong> [Mã]_[Tên]_[Ngày]_[Phiên_bản] giúp tránh phân mảnh thông tin, 
                tìm kiếm nhanh chóng và quản lý version hiệu quả.
            </p>
            <p>
                <strong>Webhook Automation:</strong> Khi cập nhật Trello, Discord tự động gửi thông báo → Tiết kiệm thời gian, 
                tất cả team member đều cập nhật thông tin.
            </p>
                <a href="files/baocao4.pdf" class="file-link" target="_blank">📄 Xem Báo Cáo Chi Tiết</a>
        `
    },
    bai5: {
        title: "05. Sáng tạo nội dung số",
        summary: `
            <h4>🎯 Mục tiêu bài tập</h4>
            <p>
                Tạo <strong>Infographic và bài viết</strong> 
                <em>"Cẩm nang sinh tồn cho tân sinh viên IT: Tối ưu việc học lập trình cùng AI"</em> 
                bằng cách phối hợp nhiều công cụ AI.
            </p>
            
            <h4>📋 Tóm Tắt Quá Trình</h4>
            <ul>
                <li><strong>ChatGPT (GPT-4o):</strong> Tạo dàn ý blog 800 từ</li>
                <li><strong>DALL-E 3 (Microsoft Designer):</strong> Tạo hero image phong cách cyberpunk</li>
                <li><strong>Canva Magic Design:</strong> Tạo layout chuyên nghiệp</li>
                <li><strong>Chất xám cá nhân >60%:</strong> Giữ cấu trúc nhưng viết lại giọng văn; xóa code lỗi do hallucination, 
                tự gõ code Java chuẩn; điều chỉnh bố cục, đổi font Fira Code</li>
            </ul>
            
            <h4>🔍 Phân Tích Chuyên Sâu</h4>
            <p>
                <strong>Hallucination (AI bịa dữ liệu):</strong> Khi yêu cầu DALL-E vẽ code, nó có thể tạo ra ký tự vô nghĩa. 
                Giải pháp: Kiểm tra kỹ, xóa phần sai, tự viết lại code chuẩn xác.
            </p>
            <p>
                <strong>Tỷ lệ 60% chất xám cá nhân:</strong> Không copy-paste trực tiếp. Phải hiểu, chỉnh sửa, 
                thêm ví dụ cụ thể, điều chỉnh phong cách viết.
            </p>
                <a href="files/baocao5.pdf" class="file-link" target="_blank">📄 Xem Báo Cáo Chi Tiết</a>
        `
    },
    bai6: {
        title: "06. An toàn và liêm chính học thuật",
        summary: `
            <h4>🎯 Mục tiêu bài tập</h4>
            <p>
                Phân tích chính sách sử dụng AI tại UET/VNU, thực hành lập đề cương tiểu luận với ChatGPT, 
                xây dựng <strong>bộ nguyên tắc đạo đức cá nhân</strong> khi sử dụng AI.
            </p>
            
            <h4>📋 Tóm Tắt Quá Trình</h4>
            <p>
                <strong>Phân tích chính sách:</strong> UET cấm trình bày sản phẩm AI như của mình, 
                khuyến khích dùng như công cụ hỗ trợ. So sánh với chính sách RMIT (3 mức độ).
            </p>
            <p>
                <strong>Lập đề cương tiểu luận:</strong> Dùng ChatGPT với Role Prompting để tạo đề cương 
                về "Tư tưởng Hồ Chí Minh và đạo đức kỹ sư IT". Đánh giá, chỉnh sửa, bổ sung ví dụ thực tiễn. 
                Trích dẫn AI minh bạch.
            </p>
            <p>
                <strong>7 Nguyên Tắc Đạo Đức Cá Nhân:</strong>
            </p>
            <ol style="color: var(--text-secondary); padding-left: var(--spacing-lg);">
                <li><strong>AI là Trợ lý:</strong> Không phó mặc hoàn toàn cho AI, tôi vẫn quyết định cuối cùng</li>
                <li><strong>Hiểu mới dùng:</strong> Trước khi copy-paste, phải hiểu logic và mục đích</li>
                <li><strong>Kiểm chứng chéo:</strong> Kiểm tra output AI bằng tài liệu khác, không tin 100%</li>
                <li><strong>Bảo mật:</strong> Không nạp dữ liệu nhạy cảm (SSN, password) vào Public Cloud</li>
                <li><strong>Minh bạch:</strong> Công khai 100% sử dụng AI trong mã nguồn, bài viết</li>
                <li><strong>Tư duy cốt lõi:</strong> Phát triển khả năng suy luận độc lập, không bị teo não</li>
                <li><strong>Cá nhân hóa việc học:</strong> Điều chỉnh prompt theo ngữ cảnh, mục tiêu cá nhân</li>
            </ol>
            
            <h4>🔍 Phân Tích Chuyên Sâu</h4>
            <p>
                <strong>Ranh giới Gian lận vs Hỗ Trợ:</strong>
                <br>❌ <strong>Gian lận:</strong> Copy-paste code từ StackOverflow không hiểu, submit như của tôi
                <br>✅ <strong>Hỗ Trợ:</strong> AI giải thích, tôi viết lại bằng words của tôi, hiểu logic đầy đủ
            </p>
<a href="files/baocao6.pdf" class="file-link" target="_blank">📄 Xem Báo Cáo Chi Tiết</a>
        `
    }
};

// ========================================
// TYPING EFFECT
// ========================================

function typeEffect() {
    const texts = [
        "Sinh viên CNTT - UET, VNU",
        "Game Developer & AI Engineer", 
        "Prompt Engineering Specialist",
        "Team Lead & Problem Solver"
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    const typingText = document.getElementById('typing-text');
    const typingSpeed = 50;
    const deletingSpeed = 30;
    const pauseTime = 2000;
    
    function type() {
        if (textIndex < texts.length) {
            if (charIndex < texts[textIndex].length) {
                typingText.textContent += texts[textIndex][charIndex];
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(deleteText, pauseTime);
            }
        }
    }
    
    function deleteText() {
        if (charIndex > 0) {
            typingText.textContent = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(deleteText, deletingSpeed);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, pauseTime);
        }
    }
    
    type();
}

// ========================================
// TAB SWITCHING
// ========================================

function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const journeyDisplay = document.getElementById('journey-display');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Get tab name and display content
            const tabName = btn.getAttribute('data-tab');
            const tabData = projectsData[tabName];
            
            if (tabData) {
                journeyDisplay.innerHTML = `
                    <div class="project-item">
                        <h3>${tabData.title}</h3>
                        ${tabData.summary}
                    </div>
                `;
            }
        });
    });
    
    // Trigger first tab by default
    if (tabBtns.length > 0) {
        tabBtns[0].click();
    }
}

// ========================================
// DARK/LIGHT MODE TOGGLE
// ========================================

function setupThemeToggle() {
    const themeBtn = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    let isDarkMode = localStorage.getItem('theme') !== 'light';
    
    // Set initial theme
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    themeBtn.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
        
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
}

// ========================================
// MOBILE MENU TOGGLE
// ========================================

function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// ========================================
// NAVIGATION ACTIVE STATE
// ========================================

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Handle smooth scroll and active state
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Get target section
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                setTimeout(() => {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        });
    });
    
    // Update active state on scroll
    window.addEventListener('scroll', () => {
        updateActiveNavLink();
    });
}

function updateActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
}

// ========================================
// INITIALIZE AOS (ANIMATE ON SCROLL)
// ========================================

function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: false,
            mirror: false,
            offset: 100
        });
    }
}

// ========================================
// CONTACT FORM HANDLING
// ========================================

function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const subject = document.getElementById('contactSubject').value.trim();

        if (!name || !email || !subject) {
            alert('Vui lòng điền đầy đủ họ tên, email và chủ đề.');
            return;
        }

        alert(`Cảm ơn ${name}! Tin nhắn của bạn đã được ghi nhận. Tôi sẽ trả lời sớm nhất.`);
        contactForm.reset();
    });
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========================================
// INIT EVERYTHING
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Digital Portfolio Loaded');
    
    typeEffect();
    setupTabs();
    setupThemeToggle();
    setupMobileMenu();
    setupNavigation();
    setupSmoothScroll();
    setupContactForm();
    
    // Initialize AOS with small delay
    setTimeout(initAOS, 100);
});

// Reinitialize AOS on scroll for better performance
window.addEventListener('load', () => {
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
});

// ========================================
// PERFORMANCE: Lazy load AOS
// ========================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initAOS();
    });
} else {
    initAOS();
}
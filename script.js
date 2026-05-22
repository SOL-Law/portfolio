window.addEventListener("load", () => {

    document.getElementById("preloader")
        .style.display = "none";
});

const themeToggle =
    document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");

    } else {

        localStorage.setItem("theme", "light");
    }
});

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");
});

const typing =
    document.getElementById("typing");

const texts = [

    "Sinh viên Công Nghệ Thông Tin",
    "Frontend Developer",
    "Game Developer Future",
    "AI & VR/AR Enthusiast"
];

let textIndex = 0;
let charIndex = 0;

function type() {

    if (charIndex < texts[textIndex].length) {

        typing.textContent +=
            texts[textIndex][charIndex];

        charIndex++;

        setTimeout(type, 100);

    } else {

        setTimeout(erase, 1500);
    }
}

function erase() {

    if (charIndex > 0) {

        typing.textContent =
            texts[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(erase, 50);

    } else {

        textIndex++;

        if (textIndex >= texts.length) {

            textIndex = 0;
        }

        setTimeout(type, 300);
    }
}

type();

const tabButtons =
    document.querySelectorAll(".tab-btn");

const tabContents =
    document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {

    button.addEventListener("click", () => {

        tabButtons.forEach(btn => {

            btn.classList.remove("active");
        });

        tabContents.forEach(content => {

            content.classList.remove("active");
        });

        button.classList.add("active");

        const target =
            document.getElementById(
                button.dataset.tab
            );

        target.classList.add("active");
    });
});

const searchInput =
    document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const value =
        searchInput.value.toLowerCase();

    tabButtons.forEach(button => {

        const text =
            button.innerText.toLowerCase();

        if (text.includes(value)) {

            button.style.display = "block";

        } else {

            button.style.display = "none";
        }
    });
});

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"
    });
});

const form =
    document.getElementById("contactForm");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const name =
        document.getElementById("name")
            .value.trim();

    const email =
        document.getElementById("email")
            .value.trim();

    const message =
        document.getElementById("message")
            .value.trim();

    if (name === "" ||
        email === "" ||
        message === "") {

        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    if (!email.includes("@")) {

        alert("Email không hợp lệ!");
        return;
    }

    alert("Gửi liên hệ thành công!");

    form.reset();
});

particlesJS("particles-js", {

    particles: {

        number: {
            value: 60
        },

        color: {
            value: "#00b894"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3
        },

        move: {
            enable: true,
            speed: 2
        }
    }
});

AOS.init({

    duration: 1000,
    once: true
});
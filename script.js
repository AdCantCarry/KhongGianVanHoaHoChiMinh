document.addEventListener("DOMContentLoaded", () => {
    
    // 1. AOS (HIỆU ỨNG CUỘN CHUỘT LẶP LẠI LIÊN TỤC)
    AOS.init({ 
        once: false,     // Tắt chế độ chạy 1 lần -> Cho phép chạy lại
        mirror: true,    // Bật hiệu ứng gương khi cuộn ngược lên
        offset: 80,      
        easing: 'ease-out-cubic' 
    });

    // 2. TILT 3D CARD
    if (document.querySelectorAll(".tilt-card").length > 0) {
        VanillaTilt.init(document.querySelectorAll(".tilt-card"), { 
            max: 12, 
            speed: 400, 
            glare: true, 
            "max-glare": 0.25 
        });
    }

    // 3. SWIPER CAROUSEL (Slider lướt ngang)
    if(document.querySelector('.mySwiper')) {
        new Swiper(".mySwiper", {
            slidesPerView: 1,      
            spaceBetween: 20,
            loop: false,
            pagination: { 
                el: ".swiper-pagination", 
                clickable: true 
            },
            navigation: { 
                nextEl: ".swiper-button-next", 
                prevEl: ".swiper-button-prev" 
            },
            breakpoints: {
                768: { slidesPerView: 2, spaceBetween: 30 }, 
                1024: { slidesPerView: 3, spaceBetween: 30 } 
            }
        });
    }

    // 4. MÁY ĐÁNH CHỮ (TYPED.JS) 
    if (document.getElementById('typed-banner')) {
        new Typed('#typed-banner', {
            strings: [
                'Lan tỏa tư tưởng, đạo đức, phong cách Hồ Chí Minh', 
                'Khơi dậy khát vọng cống hiến của thanh niên thế hệ mới', 
                'Tự hào truyền thống anh hùng, vững vàng tiến bước tương lai'
            ],
            typeSpeed: 45, 
            backSpeed: 25, 
            backDelay: 2200, 
            loop: true
        });
    }

    if (document.getElementById('typed-timeline')) {
        new Typed('#typed-timeline', {
            strings: [
                '"Bác đi dọc dải đất thiêng liêng"', 
                '"Dẫn dắt dân tộc qua hai cuộc trường chinh"'
            ],
            typeSpeed: 50, 
            backSpeed: 30, 
            backDelay: 3000, 
            loop: true
        });
    }

    // 5. HIỆU ỨNG HẠT LẤP LÁNH (PARTICLES)
    const particleConfig = {
        "particles": {
            "number": { 
                "value": 50, 
                "density": { "enable": true, "value_area": 800 } 
            },
            "color": { "value": "#ffffff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": true },
            "size": { "value": 3, "random": true },
            "line_linked": { 
                "enable": true, 
                "distance": 150, 
                "color": "#ffffff", 
                "opacity": 0.2, 
                "width": 1 
            },
            "move": { 
                "enable": true, 
                "speed": 1.5, 
                "direction": "none", 
                "random": true, 
                "straight": false, 
                "out_mode": "out" 
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { 
                "onhover": { "enable": true, "mode": "grab" }, 
                "onclick": { "enable": true, "mode": "push" } 
            },
            "modes": { 
                "grab": { "distance": 180, "line_linked": { "opacity": 0.6 } }, 
                "push": { "particles_nb": 3 } 
            }
        },
        "retina_detect": true
    };

    if (document.getElementById('particles-banner')) {
        particlesJS("particles-banner", particleConfig);
    }
    if (document.getElementById('particles-timeline')) {
        particlesJS("particles-timeline", particleConfig);
    }
});
/* === HỆ THỐNG PHÁT NHẠC VÀ LỜI BÀI HÁT === */

// Kho dữ liệu bài hát (Bạn có thể sửa Link YouTube và Lời bài hát ở đây)
// Lưu ý Link YouTube phải là dạng: https://www.youtube.com/embed/MÃ_VIDEO?autoplay=1
const songDatabase = {
    'song1': {
        title: "Bác Hồ Một Tình Yêu Bao La",
        composer: "Thuận Yến",
        youtube: "https://www.youtube.com/embed/aNStzs2Q284?autoplay=1", 
    },
    'song2': {
        title: "Như Có Bác Trong Ngày Đại Thắng",
        composer: "Phạm Tuyên",
        youtube: "https://www.youtube.com/embed/KdW-JHLHpQQ?autoplay=1",
       
    },
    'song3': {
        title: "Hồ Chí Minh Đẹp Nhất Tên Người",
        composer: "Trần Kiết Tường",
        youtube: "https://www.youtube.com/embed/y5597X_nwFc?autoplay=1",
    },
    'song4': {
        title: "Tiếng Hát Từ Thành Phố Mang Tên Người",
        composer: "Cao Việt Bách",
        youtube: "https://www.youtube.com/embed/9Wm-m4NgaAQ?autoplay=1",
      
    },
    'song5': {
        title: "Lời Bác Dặn Trước Lúc Đi Xa",
        composer: "Trần Hoàn",
        youtube: "https://www.youtube.com/embed/tYJZoynlILk?autoplay=1",

    },
    'song6': {
        title: "Bác Đang Cùng Chúng Cháu Hành Quân",
        composer: "Huy Thục",
        youtube: "https://www.youtube.com/embed/biDND2XkDzM?autoplay=1",
    }
};

// Hàm Mở Cửa Sổ Phát Nhạc
function openSong(songId) {
    const song = songDatabase[songId];
    if(song) {
        document.getElementById('modal-title').innerText = song.title;
        document.getElementById('modal-composer').innerText = "Sáng tác: " + song.composer;
        document.getElementById('modal-lyrics').innerHTML = song.lyrics;
        document.getElementById('modal-video').src = song.youtube; // Gắn link video và tự động phát
        
        document.getElementById('music-modal').classList.add('show');
    }
}

// Hàm Đóng Cửa Sổ và Tắt Nhạc
function closeSong() {
    document.getElementById('music-modal').classList.remove('show');
    // Xóa link iframe để video tự động tắt tiếng khi đóng
    setTimeout(() => {
        document.getElementById('modal-video').src = "";
    }, 300);
}

// Bấm ra ngoài khoảng đen để đóng cửa sổ
window.onclick = function(event) {
    const modal = document.getElementById('music-modal');
    if (event.target == modal) {
        closeSong();
    }
}
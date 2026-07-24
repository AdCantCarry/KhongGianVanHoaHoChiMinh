document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================================================
       1. INITIALIZE THIRD-PARTY LIBRARIES (AOS, TILT, SWIPER, TYPED, PARTICLES)
       ========================================================================== */
    
    // AOS Scroll Animation
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: false,
            mirror: true,
            offset: 70,
            easing: 'ease-out-cubic',
            duration: 800
        });
    }

    // 3D Tilt Cards
    if (typeof VanillaTilt !== 'undefined' && document.querySelectorAll(".tilt-card").length > 0) {
        VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
            max: 10,
            speed: 400,
            glare: true,
            "max-glare": 0.2
        });
    }

    // Swiper Carousel (Slider Lướt Ngang)
    if (typeof Swiper !== 'undefined' && document.querySelector('.mySwiper')) {
        new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: false,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            breakpoints: {
                640: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 30 }
            }
        });
    }

    // Typed.js Dynamic Text
    if (typeof Typed !== 'undefined') {
        if (document.getElementById('typed-banner')) {
            new Typed('#typed-banner', {
                strings: [
                    'Tự hào truyền thống anh hùng, vững vàng tiến bước tương lai',
                    'Lan tỏa tư tưởng, đạo đức, phong cách Hồ Chí Minh',
                    'Khơi dậy khát vọng cống hiến của thanh niên thế hệ mới'
                ],
                typeSpeed: 40,
                backSpeed: 25,
                backDelay: 2500,
                loop: true
            });
        }

        if (document.getElementById('typed-timeline')) {
            new Typed('#typed-timeline', {
                strings: [
                    '"Bác đi dọc dải đất thiêng liêng"',
                    '"Dẫn dắt dân tộc qua hai cuộc trường chinh vĩ đại"'
                ],
                typeSpeed: 45,
                backSpeed: 30,
                backDelay: 3000,
                loop: true
            });
        }
    }

    // Particles.js Interactive Star Particles
    if (typeof particlesJS !== 'undefined') {
        const particleConfig = {
            "particles": {
                "number": { "value": 45, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ffd700" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.6, "random": true },
                "size": { "value": 3, "random": true },
                "line_linked": {
                    "enable": true,
                    "distance": 140,
                    "color": "#ffd700",
                    "opacity": 0.25,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1.2,
                    "direction": "none",
                    "random": true,
                    "out_mode": "out"
                }
            },
            "interactivity": {
                "events": {
                    "onhover": { "enable": true, "mode": "grab" },
                    "onclick": { "enable": true, "mode": "push" }
                },
                "modes": {
                    "grab": { "distance": 160, "line_linked": { "opacity": 0.6 } },
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
    }

    /* ==========================================================================
       2. READING PROGRESS BAR & BACK TO TOP BUTTON
       ========================================================================== */
    const progressBar = document.getElementById('scroll-progress');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;

        if (progressBar) progressBar.style.width = scrolled + "%";

        if (backToTopBtn) {
            if (winScroll > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ==========================================================================
       3. MOBILE NAV DRAWER TOGGLE
       ========================================================================== */
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerClose = document.getElementById('mobile-drawer-close');
    const drawerBackdrop = document.getElementById('drawer-backdrop');

    function openDrawer() {
        if (mobileDrawer) mobileDrawer.classList.add('open');
        if (drawerBackdrop) drawerBackdrop.classList.add('show');
    }

    function closeDrawer() {
        if (mobileDrawer) mobileDrawer.classList.remove('open');
        if (drawerBackdrop) drawerBackdrop.classList.remove('show');
    }

    if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
    if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

    /* ==========================================================================
       4. INTERACTIVE TIMELINE YEAR FILTER TABS
       ========================================================================== */
    const timelineTabs = document.querySelectorAll('.timeline-tab');
    const timelineItems = document.querySelectorAll('.v-timeline-item');

    timelineTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            timelineTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const selectedYear = tab.getAttribute('data-year');

            timelineItems.forEach(item => {
                const dateText = item.querySelector('.v-timeline-date')?.innerText || '';
                if (selectedYear === 'all' || dateText.includes(selectedYear)) {
                    item.style.display = 'flex';
                    item.setAttribute('data-aos', 'fade-up');
                } else {
                    item.style.display = 'none';
                }
            });

            if (typeof AOS !== 'undefined') AOS.refresh();
        });
    });

    /* ==========================================================================
       5. GLOBAL SEARCH ENGINE (CTRL + K PALETTE)
       ========================================================================== */
    const searchTriggerBtns = document.querySelectorAll('.search-trigger-btn, .search-icon a');
    const searchModal = document.getElementById('search-modal');
    const closeSearchBtn = document.getElementById('close-search-modal');
    const searchInput = document.getElementById('search-input');
    const searchResultsList = document.getElementById('search-results-list');

    // Index content items on the page
    const searchIndex = [
        { type: 'Lời dạy', title: 'Không có gì quý hơn độc lập, tự do!', link: '#loi-day', desc: 'Lời kêu gọi đồng bào chiến sĩ cả nước (1966)' },
        { type: 'Lời dạy', title: 'Nước ta là một, dân tộc ta là một', link: '#loi-day', desc: 'Thư gửi đồng bào Nam bộ (1946)' },
        { type: 'Lời dạy', title: 'Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người', link: '#loi-day', desc: 'Bài nói chuyện tại lớp học bồi dưỡng cán bộ (1958)' },
        { type: 'Lời dạy', title: 'Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công', link: '#loi-day', desc: 'Đại hội Đại biểu Mặt trận Tổ quốc (1961)' },
        { type: 'Mốc lịch sử', title: '19/05/1890 - Ngày sinh Chủ tịch Hồ Chí Minh', link: '#timeline', desc: 'Sinh tại Làng Sen, Kim Liên, Nam Đàn, Nghệ An' },
        { type: 'Mốc lịch sử', title: '05/06/1911 - Người ra đi tìm đường cứu nước', link: '#timeline', desc: 'Rời bến cảng Nhà Rồng trên tàu Amiral Latouche Tréville' },
        { type: 'Mốc lịch sử', title: '03/02/1930 - Thành lập Đảng Cộng sản Việt Nam', link: '#timeline', desc: 'Hội nghị hợp nhất các tổ chức cộng sản tại Hương Cảng' },
        { type: 'Mốc lịch sử', title: '28/01/1941 - Bác Hồ trở về Tổ quốc', link: '#timeline', desc: 'Trở về lãnh đạo cách mạng tại hang Pác Bó, Cao Bằng' },
        { type: 'Mốc lịch sử', title: '02/09/1945 - Đọc Tuyên ngôn Độc lập', link: '#timeline', desc: 'Khai sinh ra nước Việt Nam Dân chủ Cộng hòa tại Quảng trường Ba Đình' },
        { type: 'Tác phẩm', title: 'Bản án chế độ thực dân Pháp (1925)', link: 'chi-tiet.html', desc: 'Tác phẩm tố cáo tội ác thực dân Pháp đối với nhân dân thuộc địa' },
        { type: 'Tác phẩm', title: 'Đường Kách mệnh (1927)', link: 'chi-tiet-1.html', desc: 'Tác phẩm chuẩn bị tư tưởng và tổ chức cho việc thành lập Đảng' },
        { type: 'Tác phẩm', title: 'Nhật ký trong tù (1942 - 1943)', link: 'chi-tiet-2.html', desc: 'Tập thơ chữ Hán gồm 134 bài thể hiện tinh thần thép và tâm hồn cao đẹp' },
        { type: 'Tác phẩm', title: 'Tuyên ngôn Độc lập (1945)', link: 'chi-tiet-3.html', desc: 'Văn kiện pháp lý lịch sử khai sinh ra nước Việt Nam mới' },
        { type: 'Tác phẩm', title: 'Lời kêu gọi Toàn quốc kháng chiến (1946)', link: 'chi-tiet-4.html', desc: 'Lời kêu gọi thiêng liêng đứng lên đánh giặc cứu nước' },
        { type: 'Tác phẩm', title: 'Bản Di chúc 1969', link: 'chi-tiet-5.html', desc: 'Tài sản tinh thần vô giá Bác để lại cho toàn Đảng, toàn dân' },
        { type: 'Sách', title: 'Búp Sen Xanh', link: 'doc-sach.html?embed=https://heyzine.com/flip-book/c362c37489.html', desc: 'Tiểu thuyết lịch sử của Sơn Tùng về tuổi thơ Bác Hồ' },
        { type: 'Sách', title: 'Hồ Chí Minh - Một Cốt Cách Văn Hóa Việt Nam', link: 'doc-sach.html?embed=https://heyzine.com/flip-book/a8d8c9f4d1.html', desc: 'Vẻ đẹp nhân cách và chiều sâu văn hóa Bác Hồ' },
        { type: 'Ca khúc', title: 'Bác Hồ Một Tình Yêu Bao La', link: '#ca-khuc', desc: 'Sáng tác: Thuận Yến' },
        { type: 'Ca khúc', title: 'Như Có Bác Trong Ngày Đại Thắng', link: '#ca-khuc', desc: 'Sáng tác: Phạm Tuyên' },
        { type: 'Ca khúc', title: 'Hồ Chí Minh Đẹp Nhất Tên Người', link: '#ca-khuc', desc: 'Sáng tác: Trần Kiết Tường' }
    ];

    function openSearchModal() {
        if (searchModal) {
            searchModal.classList.add('show');
            setTimeout(() => { if (searchInput) searchInput.focus(); }, 100);
            renderSearchResults('');
        }
    }

    function closeSearchModal() {
        if (searchModal) searchModal.classList.remove('show');
    }

    function renderSearchResults(query) {
        if (!searchResultsList) return;
        const q = query.trim().toLowerCase();

        const filtered = searchIndex.filter(item => 
            item.title.toLowerCase().includes(q) || 
            item.desc.toLowerCase().includes(q) ||
            item.type.toLowerCase().includes(q)
        );

        if (filtered.length === 0) {
            searchResultsList.innerHTML = '<div style="text-align:center; padding: 20px; color: var(--text-gray);">Không tìm thấy kết quả phù hợp</div>';
            return;
        }

        searchResultsList.innerHTML = filtered.map(item => `
            <div class="search-item-result" onclick="navigateToSearch('${item.link}')">
                <span class="badge" style="font-size:11px; margin-bottom:4px;">${item.type}</span>
                <div class="search-item-title">${item.title}</div>
                <div class="search-item-desc">${item.desc}</div>
            </div>
        `).join('');
    }

    window.navigateToSearch = function(link) {
        closeSearchModal();
        if (link.startsWith('#')) {
            const target = document.querySelector(link);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = link;
        }
    };

    searchTriggerBtns.forEach(btn => btn.addEventListener('click', (e) => {
        e.preventDefault();
        openSearchModal();
    }));

    if (closeSearchBtn) closeSearchBtn.addEventListener('click', closeSearchModal);

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderSearchResults(e.target.value);
        });
    }

    // Shortcut Ctrl+K
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            openSearchModal();
        }
        if (e.key === 'Escape') {
            closeSearchModal();
            closeSong();
            closeLightbox();
        }
    });

    /* ==========================================================================
       6. PHOTO LIGHTBOX MODAL
       ========================================================================== */
    const galleryItems = document.querySelectorAll('.gallery-item, .image-box img');
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeLightboxBtn = document.getElementById('close-lightbox-modal');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            let imgSrc = '';
            let caption = 'Thư viện hình ảnh Chủ tịch Hồ Chí Minh';

            if (item.tagName === 'IMG') {
                imgSrc = item.src;
                caption = item.alt || caption;
            } else {
                const bg = window.getComputedStyle(item).backgroundImage;
                imgSrc = bg.replace(/url\(['"]?(.*?)['"]?\)/, '$1');
            }

            if (lightboxImg) lightboxImg.src = imgSrc;
            if (lightboxCaption) lightboxCaption.innerText = caption;
            if (lightboxModal) lightboxModal.classList.add('show');
        });
    });

    function closeLightbox() {
        if (lightboxModal) lightboxModal.classList.remove('show');
    }

    if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);
    if (lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) closeLightbox();
        });
    }
});

/* ==========================================================================
   7. MUSIC PLAYER & SONG DATABASE
   ========================================================================== */

const songDatabase = {
    'song1': {
        title: "Bác Hồ Một Tình Yêu Bao La",
        composer: "Thuận Yến",
        youtube: "https://www.youtube.com/embed/aNStzs2Q284?autoplay=1"
    },
    'song2': {
        title: "Như Có Bác Trong Ngày Đại Thắng",
        composer: "Phạm Tuyên",
        youtube: "https://www.youtube.com/embed/KdW-JHLHpQQ?autoplay=1"
    },
    'song3': {
        title: "Hồ Chí Minh Đẹp Nhất Tên Người",
        composer: "Trần Kiết Tường",
        youtube: "https://www.youtube.com/embed/y5597X_nwFc?autoplay=1"
    },
    'song4': {
        title: "Tiếng Hát Từ Thành Phố Mang Tên Người",
        composer: "Cao Việt Bách",
        youtube: "https://www.youtube.com/embed/9Wm-m4NgaAQ?autoplay=1"
    },
    'song5': {
        title: "Lời Bác Dặn Trước Lúc Đi Xa",
        composer: "Trần Hoàn",
        youtube: "https://www.youtube.com/embed/tYJZoynlILk?autoplay=1"
    },
    'song6': {
        title: "Bác Đang Cùng Chúng Cháu Hành Quân",
        composer: "Huy Thục",
        youtube: "https://www.youtube.com/embed/biDND2XkDzM?autoplay=1"
    }
};

let currentSongId = 'song1';

function openSong(songId) {
    currentSongId = songId;
    const song = songDatabase[songId];
    if (song) {
        document.getElementById('modal-title').innerText = song.title;
        document.getElementById('modal-composer').innerText = "Sáng tác: " + song.composer;
        document.getElementById('modal-video').src = song.youtube;
        
        const modal = document.getElementById('music-modal');
        if (modal) modal.classList.add('show');
    }
}

function closeSong() {
    const modal = document.getElementById('music-modal');
    if (modal) modal.classList.remove('show');
    setTimeout(() => {
        const video = document.getElementById('modal-video');
        if (video) video.src = "";
    }, 300);
}

function nextSong() {
    const keys = Object.keys(songDatabase);
    let index = keys.indexOf(currentSongId);
    let nextIndex = (index + 1) % keys.length;
    openSong(keys[nextIndex]);
}

function prevSong() {
    const keys = Object.keys(songDatabase);
    let index = keys.indexOf(currentSongId);
    let prevIndex = (index - 1 + keys.length) % keys.length;
    openSong(keys[prevIndex]);
}

window.onclick = function(event) {
    const modal = document.getElementById('music-modal');
    if (event.target === modal) {
        closeSong();
    }
};
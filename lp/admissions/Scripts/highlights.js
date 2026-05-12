document.addEventListener("DOMContentLoaded", () => {
    const highlightsData = [
        {
            id: "card-1",
            title: "Global Exposure Programs",
            image: "/lp/admissions/Images/international-students.jpg",
            text: "International collaborations, student exchange programs, and global internship opportunities to broaden your horizons and build an international career. Our partnerships span across universities in the USA, UK, and Europe."
        },
        {
            id: "card-2",
            title: "Specialized Teaching from Experts",
            image: "/lp/admissions/Images/expert-teachers.jpg",
            text: "The academic rigor and the task of creative transformation of an individual are the center pieces of this program. Our faculty includes industry veterans and Ph.D. scholars who bring real-world case studies."
        },
        {
            id: "card-3",
            title: "Top Internships and Placements",
            image: "/lp/admissions/Images/top-placements.jpg",
            text: "We have held great pride in being one of the first few private Universities in India who took on the task of ensuring Top of the Line placements. With recruiters like Amazon, Adobe, and Microsoft."
        },
        {
            id: "card-4",
            title: "Advanced Research Labs",
            image: "/lp/admissions/Images/advanced-lab.jpeg",
            text: "Our state-of-the-art research facilities allow students to work on breakthrough technologies, from AI and Machine Learning to Sustainable Energy solutions, guided by world-class mentors."
        }
    ];

    const container = document.getElementById('highlightsContainer');
    if (!container) return;

    // Direct injection - no waiting for scroll
    container.innerHTML = highlightsData.map((item, index) => `
        <div class="swiper-slide !h-auto">
            <div class="highlight-card rounded-[2rem] overflow-hidden flex flex-col h-full">
                <div class="img-zoom-container">
                    <img src="${item.image}" alt="${item.title}" class="highlight-img" onerror="this.src='https://via.placeholder.com/400x250?text=Graphic+Era'">
                    <div class="img-overlay"></div>
                    <div class="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                        Feature 0${index + 1}
                    </div>
                </div>
                
                <div class="p-8 flex-grow flex flex-col">
                    <h3 class="text-2xl font-bold text-slate-800 mb-4 leading-tight">${item.title}</h3>
                    <p id="desc-${item.id}" class="description-text clamped text-slate-500 text-sm leading-relaxed mb-6">
                        ${item.text}
                    </p>
                    <div class="mt-auto">
                        <button onclick="toggleHighlight(event, '${item.id}')" class="read-more-btn group text-blue-600 font-bold text-sm flex items-center gap-2 transition-all">
                            <span id="label-${item.id}">READ MORE</span>
                            <svg id="icon-${item.id}" class="arrow-icon w-4 h-4 transform transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path id="path-${item.id}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Initialize Swiper immediately
    const swiper = new Swiper(".highlightsSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: { delay: 4000, disableOnInteraction: false },
        pagination: { el: ".swiper-pagination", clickable: true },
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });

    // Read More Toggle
    window.toggleHighlight = (event, id) => {
        event.stopPropagation();
        const textElement = document.getElementById(`desc-${id}`);
        const label = document.getElementById(`label-${id}`);
        const iconContainer = document.getElementById(`icon-${id}`);

        if (textElement.classList.contains('clamped')) {
            textElement.classList.remove('clamped');
            label.innerText = 'READ LESS';
            iconContainer.style.transform = 'rotate(-180deg)';
        } else {
            textElement.classList.add('clamped');
            label.innerText = 'READ MORE';
            iconContainer.style.transform = 'rotate(0deg)';
        }
        setTimeout(() => swiper.update(), 200);
    };
});
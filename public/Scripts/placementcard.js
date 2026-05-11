const placementData = [
    {
        name: "Gunjan Bhanwal",
        package: "₹66.01L",
        company: "Atlassian",
        img: "/lp/Images/Gunjan_Bhanwal.jpg"
    },
    {
        name: "Prerna Badoni",
        package: "₹56.00L",
        company: "Microsoft",
        img: "/lp/Images/Prerna_Badoni.jpg"
    },
    {
        name: "Rakshit Benjwal",
        package: "₹56.00L",
        company: "Microsoft",
        img: "/lp/Images/Rakshit_Benjwal.jpg"
    },
    {
        name: "Palak Aggarwal",
        package: "₹54.84L",
        company: "Google",
        img: "/lp/Images/Palak_Aggarwal.jpg"
    },
    {
        name: "Vibha Chandola",
        package: "₹54.84L",
        company: "Google",
        img: "/lp/Images/Vibha_Chandola.jpg"
    }
];

function initPlacements() {
    const container = document.getElementById('placementGallery');
    
    placementData.forEach(student => {
        const slide = document.createElement('div');
        slide.className = "swiper-slide";
        
        slide.innerHTML = `
            <div class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mx-1">
                <img src="${student.img}" 
                     alt="${student.name}" 
                     class="w-full h-auto object-contain block">
            </div>
        `;
        container.appendChild(slide);
    });

    const swiper = new Swiper(".placementSwiper", {
        slidesPerView: 1.2,
        spaceBetween: 15,
        centeredSlides: true,
        loop: true,
        grabCursor: true,
        observer: true, 
        observeParents: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        // Matching the HTML classes exactly
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                centeredSlides: false,
            },
            1024: {
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 30,
            }
        },
    });
}

document.addEventListener('DOMContentLoaded', initPlacements);
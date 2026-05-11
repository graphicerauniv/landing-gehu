document.addEventListener("DOMContentLoaded", () => {
    const campusData = [
        {
            id: "dehradun",
            name: "GEHU Dehradun",
            badge: "Main Campus",
            badgeClass: "badge-blue",
            bgClass: "bg-blue-100",
            title: "Serenity Amidst the Shivaliks",
            image: "/lp/admissions/Images/hero2.jpeg",
            desc: "The flagship campus of Graphic Era is housed in the scenic valley of Dehradun, bordered by Rajaji National Park. It features world-class labs and an ecosystem that consistently produces top-tier global placements.",
            stats: [{ icon: "🏫", label: "76+ Courses" }, { icon: "📍", label: "Clement Town" }]
        },
        {
            id: "bhimtal",
            name: "GEHU Bhimtal",
            badge: "Hillside Excellence",
            badgeClass: "badge-emerald",
            bgClass: "bg-emerald-100",
            title: "Learning in the Kumaon Foothills",
            image: "/lp/admissions/Images/gehu-bhimtal.jpg",
            desc: "Nestled along Sattal Road, the Bhimtal campus offers a serene, lush green environment perfect for deep focus. It is designed as a self-contained community fostering innovation amidst the tranquility of the Himalayas.",
            stats: [{ icon: "🏔️", label: "Scenic View" }, { icon: "🍃", label: "Eco-Friendly" }]
        },
        {
            id: "haldwani",
            name: "GEHU Haldwani",
            badge: "Urban Connectivity",
            badgeClass: "badge-orange",
            bgClass: "bg-orange-100",
            title: "Gateway to Academic Innovation",
            image: "/lp/admissions/Images/gehu-haldwani.jpg",
            desc: "Located in the bustling commercial market of Haldwani, this campus combines urban convenience with academic rigor. It features modern lecture theatres and dynamic sports fields.",
            stats: [{ icon: "🏢", label: "City Centric" }, { icon: "⚡", label: "High Energy" }]
        }
    ];

    const navContainer = document.getElementById('campusNav');
    const displayContainer = document.getElementById('campusDisplay');
    const progressBar = document.getElementById('autoPlayProgress');
    
    let currentIndex = 0;
    let autoPlayTimer;
    const TRANSITION_TIME = 7000; // 7 Seconds

    function renderUI() {
        navContainer.innerHTML = campusData.map((campus, index) => `
            <button onclick="handleManualSwitch('${campus.id}', ${index})" id="btn-${campus.id}" 
                    class="campus-btn ${index === 0 ? 'active-campus' : ''}">
                ${campus.name}
            </button>
        `).join('');

        displayContainer.innerHTML = campusData.map((campus, index) => `
            <div id="campus-${campus.id}" 
                 class="campus-content ${index === 0 ? 'active-content' : 'hidden-content'} grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="relative group">
                    <div class="absolute -inset-4 ${campus.bgClass} rounded-[2.5rem] -z-10 opacity-50"></div>
                    <img src="${campus.image}" alt="${campus.name}" class="campus-image" 
                         onerror="this.src='https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1000'">
                </div>
                <div class="campus-text-box">
                    <span class="badge ${campus.badgeClass}">${campus.badge}</span>
                    <h3 class="campus-title">${campus.title}</h3>
                    <p class="campus-desc">${campus.desc}</p>
                    <div class="stats-grid">
                        ${campus.stats.map(s => `<div class="stat-item"><span>${s.icon}</span><b>${s.label}</b></div>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Main Switch Logic
    window.switchCampus = (index) => {
        currentIndex = index;
        const campus = campusData[index];
        
        // Update Buttons
        document.querySelectorAll('.campus-btn').forEach(b => b.classList.remove('active-campus'));
        document.getElementById(`btn-${campus.id}`).classList.add('active-campus');

        // Update Content
        document.querySelectorAll('.campus-content').forEach(s => {
            s.classList.remove('active-content');
            s.classList.add('hidden-content');
        });
        const target = document.getElementById(`campus-${campus.id}`);
        target.classList.remove('hidden-content');
        setTimeout(() => target.classList.add('active-content'), 50);

        resetProgressBar();
    };

    // User Click Interaction
    window.handleManualSwitch = (id, index) => {
        clearInterval(autoPlayTimer); // Stop auto-play
        switchCampus(index);
        startAutoPlay(); // Restart timer from zero
    };

    function startAutoPlay() {
        resetProgressBar();
        autoPlayTimer = setInterval(() => {
            currentIndex = (currentIndex + 1) % campusData.length;
            switchCampus(currentIndex);
        }, TRANSITION_TIME);
    }

    function resetProgressBar() {
        progressBar.style.transition = 'none';
        progressBar.style.width = '0%';
        setTimeout(() => {
            progressBar.style.transition = `width ${TRANSITION_TIME}ms linear`;
            progressBar.style.width = '100%';
        }, 50);
    }

    renderUI();
    startAutoPlay();
});
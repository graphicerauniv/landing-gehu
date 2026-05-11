document.addEventListener("DOMContentLoaded", () => {
  const accreditations = [
    {
      logo: "/lp/Images/aicte.svg",
      title: "AICTE Approval",
      description:
        "Approved by AICTE, Graphic Era ensures academic excellence across all technical courses. UGC recognized with Regularized Status by the Ministry of Education."
    },
    {
      logo: "/lp/Images/ugc.svg",
      title: "UGC Recognition",
      description:
        "Approved by UGC and accorded the coveted Regularized Status by the Ministry of Education, Government of India."
    }
  ];

  const grid = document.getElementById("accreditationGrid");
  if (!grid) return;

  accreditations.forEach((item) => {
    const card = document.createElement("div");

    card.className = `
      accred-card group flex-1 bg-white rounded-[40px] p-10 lg:p-14 text-center
      border border-slate-100 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)]
      hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all duration-500
    `;

    card.innerHTML = `
      <div class="logo-wrapper">
        <img
          src="${item.logo}"
          alt="${item.title}"
          onerror="this.src='https://via.placeholder.com/150?text=Logo+Missing'"
        />
      </div>

      <h3 class="text-2xl font-black text-slate-900 mb-5 group-hover:text-blue-600 transition-colors duration-300">
        ${item.title}
      </h3>

      <p class="text-slate-500 text-base leading-relaxed font-medium">
        ${item.description}
      </p>
    `;

    grid.appendChild(card);
  });

  // Intersection Observer for the entrance animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const cards = entry.target.querySelectorAll('.accred-card');
        cards.forEach((card, i) => {
          setTimeout(() => {
            card.classList.add('visible');
          }, i * 250);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  const section = document.getElementById('accreditation-section');
  if(section) observer.observe(section);
});
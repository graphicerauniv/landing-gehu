document.addEventListener("DOMContentLoaded", () => {
const allPrograms = [

  // --- SCHOOL OF ENGINEERING & TECHNOLOGY (B.Tech) ---
  { title: "B.Tech CSE", level: "UG", campuses: ["Dehradun", "Bhimtal", "Haldwani"], intro: "The flagship software engineering program.", bullets: ["Full Stack", "Cloud", "DevOps"], about: "Focuses on high-level coding, systems architecture, and industry-ready software skills.", eligibility: "10+2 PCM (60%)" },
  { title: "B.Tech CSE (AI & Machine Learning)", level: "UG", campuses: ["Dehradun", "Bhimtal"], intro: "Specialized track for intelligent systems.", bullets: ["Neural Nets", "Python AI", "NLP"], about: "Deep dive into algorithms that allow machines to learn and predict from data.", eligibility: "10+2 PCM" },
  { title: "B.Tech CSE (Cyber Security)", level: "UG", campuses: ["Dehradun", "Bhimtal"], intro: "Defending the digital frontier.", bullets: ["Ethical Hacking", "Forensics", "Network Security"], about: "Professional training in protecting data and infrastructure from global cyber threats.", eligibility: "10+2 PCM" },
  { title: "B.Tech Electronics & Comm. (ECE)", level: "UG", campuses: ["Dehradun", "Bhimtal", "Haldwani"], intro: "Next-gen communication and hardware.", bullets: ["Drone Tech", "VLSI", "IoT"], about: "Specializations in high-growth areas like Drone technology and Micro-chip design (VLSI).", eligibility: "10+2 PCM" },
  { title: "B.Tech Mechanical Engineering", level: "UG", campuses: ["Dehradun", "Bhimtal", "Haldwani"], intro: "Modern mechanical systems and robotics.", bullets: ["Robotics", "Electric Vehicles", "Mechatronics"], about: "Combines traditional mechanics with AI-driven automation and EV technology.", eligibility: "10+2 PCM" },
  { title: "B.Tech Civil Engineering", level: "UG", campuses: ["Dehradun", "Bhimtal"], intro: "Infrastructure for smart cities.", bullets: ["Structural Eng.", "Geo-Informatics", "Sustainability"], about: "Advanced training in modern construction, environmental safety, and urban planning.", eligibility: "10+2 PCM" },
  { title: "B.Tech Biotechnology", level: "UG", campuses: ["Dehradun"], intro: "Genetic and medical engineering.", bullets: ["Bio-Informatics", "Stem Cells", "Microbiology"], about: "Research-based program for careers in pharma, food tech, and healthcare research.", eligibility: "10+2 PCM/PCB" },

  // --- COMPUTER APPLICATIONS & IT ---
  { title: "BCA (Industry Integrated)", level: "UG", campuses: ["Dehradun", "Bhimtal", "Haldwani"], intro: "Practical-first approach to IT.", bullets: ["Web Tech", "Java/Python", "Mobile Apps"], about: "Specifically designed to bypass theory and jump straight into industry coding standards.", eligibility: "10+2 (50%)" },
  { title: "BCA (Hons.) AI & Data Science", level: "UG", campuses: ["Dehradun", "Haldwani"], intro: "Data-driven computer applications.", bullets: ["Big Data", "Data Visualization", "ML Models"], about: "Focuses on the application of AI tools in business and software environments.", eligibility: "10+2 (50%)" },
  {  title: "BCA (Hons.) Cyber Security", level: "UG", campuses: ["Dehradun"],intro: "Specialized defense against digital threats.", bullets: ["Ethical Hacking", "Cryptography", "Network Defense"], about: "A 3-year honors program focused on securing enterprise networks and data privacy.", eligibility: "10+2 with Maths (50%)" },
  { title: "B.Sc. IT", level: "UG", campuses: ["Dehradun", "Haldwani"], intro: "Core Information Technology science.", bullets: ["Networks", "DB Management", "Security"], about: "A scientific exploration of information systems and network architecture.", eligibility: "10+2 with Maths" },
  { title: "B.Sc. (Hons.) Computer Science", level: "UG", campuses: ["Dehradun"], intro: "Theoretical foundations of CS.", bullets: ["Algorithms", "Data Structures", "Compute Theory"], about: "Rigorous academic program focusing on the 'why' behind computing.", eligibility: "10+2 with Maths" },

  // --- MANAGEMENT & COMMERCE ---
  { title: "BBA (Professional/Hons.)", level: "UG", campuses: ["Dehradun", "Bhimtal", "Haldwani"], intro: "Elite management foundation.", bullets: ["Digital Marketing", "Entrepreneurship", "HR"], about: "Focuses on leadership, case studies, and real-world business strategy.", eligibility: "10+2 Any Stream" },
  { title: "BBA Airport & Airline Mgmt.", level: "UG", campuses: ["Dehradun"], intro: "Career in the skies and aviation hubs.", bullets: ["Aviation Law", "Ground Ops", "Hospitality"], about: "Niche management program for the booming global airline industry.", eligibility: "10+2 Any Stream" },
  { title: "B.Com (Hons.) with Research", level: "UG", campuses: ["Dehradun", "Bhimtal", "Haldwani"], intro: "Premium commerce degree.", bullets: ["Audit", "Finance", "Corporate Law"], about: "Advanced accounting program often integrated with global certifications like ACCA or CMA.", eligibility: "10+2 Any Stream" },

  // --- DESIGN & CREATIVE ARTS ---
  { title: "B.Design (Fashion Design)", level: "UG", campuses: ["Dehradun"], intro: "From sketch to the runway.", bullets: ["Textiles", "Styling", "Garment Construction"], about: "Studio-intensive program focusing on global fashion trends and production.", eligibility: "10+2 Any Stream" },
  { title: "B.Design (Animation & Gaming)", level: "UG", campuses: ["Dehradun", "Haldwani"], intro: "Visual effects and game mechanics.", bullets: ["3D Modeling", "VFX Pipeline", "Game Engine"], about: "High-end training for the film and gaming industries using professional-grade labs.", eligibility: "10+2 Any Stream" },
  { title: "B.Design (UX/UI Design)", level: "UG", campuses: ["Dehradun"], intro: "Designing digital experiences.", bullets: ["User Research", "Prototyping", "Interaction Design"], about: "Focuses on how humans interact with apps and websites to create better products.", eligibility: "10+2 Any Stream" },
  { title: "Bachelor of Fine Arts (BFA)", level: "UG", campuses: ["Dehradun"], intro: "Professional visual arts training.", bullets: ["Painting", "Sculpture", "Applied Arts"], about: "Nurturing creative expression for professional gallery and agency careers.", eligibility: "10+2 Any Stream" },

  // --- HUMANITIES & SOCIAL SCIENCES ---
  { title: "BA (Hons.) English", level: "UG", campuses: ["Dehradun", "Haldwani"], intro: "Literature and professional writing.", bullets: ["Literary Criticsm", "Linguistics", "Creative Writing"], about: "Deep dive into global literature and advanced communication skills.", eligibility: "10+2 (50%)" },
  { title: "BA (Hons.) Psychology", level: "UG", campuses: ["Dehradun"], intro: "Understanding the human mind.", bullets: ["Clinical Psych", "Social Behavior", "Counseling"], about: "Scientific study of mental processes and behavior for careers in therapy and HR.", eligibility: "10+2 Any Stream" },
  { title: "BA (Hons.) Economics", level: "UG", campuses: ["Dehradun"], intro: "Policy, markets, and financial logic.", bullets: ["Macroeconomics", "Econometrics", "Finance"], about: "Focuses on how resources are allocated and the logic of global financial systems.", eligibility: "10+2 Any Stream" },
  { title: "BJMC (Journalism)", level: "UG", campuses: ["Dehradun", "Haldwani"], intro: "Digital and broadcast storytelling.", bullets: ["News Reporting", "Film Production", "Public Relations"], about: "Extensive training in modern media, newsroom ethics, and video journalism.", eligibility: "10+2 Any Stream" },

  // --- AGRICULTURE & ALLIED SCIENCES ---
  { title: "B.Sc. (Hons.) Agriculture", level: "UG", campuses: ["Dehradun"], intro: "Scientific and smart farming.", bullets: ["Soil Science", "Horticulture", "Seed Tech"], about: "Combines biology with business for modern agri-entrepreneurship.", eligibility: "10+2 PCM/PCB/Agri" },
  { title: "B.Sc. (Hons.) Forensic Science", level: "UG", campuses: ["Dehradun"], intro: "CSI and crime scene investigation.", bullets: ["Ballistics", "DNA Profiling", "Toxicology"], about: "Technical study of evidence to help solve crimes and legal disputes.", eligibility: "10+2 PCB/PCM" },
  { title: "B.Sc. Food Technology", level: "UG", campuses: ["Dehradun"], intro: "The science of food safety and processing.", bullets: ["Food Safety", "Nutritional Chem", "Packaging"], about: "Focuses on the transformation of raw materials into consumer food products.", eligibility: "10+2 PCB/PCM" },
  {  title: "B.Sc. Medical Microbiology", level: "UG", campuses: ["Dehradun", "Bhimtal"], intro: "The science of pathogens and immunity.", bullets: ["Clinical Lab Tech", "Virology", "Pathology"], about: "Prepares students for roles in diagnostic labs, research, and healthcare sectors.", eligibility: "10+2 with PCB" },

  // --- PHARMACY & HEALTHCARE ---
  { title: "B.Pharma", level: "UG", campuses: ["Dehradun", "Bhimtal"], intro: "Medicine manufacturing and drug research.", bullets: ["Pharmacology", "Drug Analysis", "Clinical Trials"], about: "Approved by PCI, preparing students for pharmaceutical and research industries.", eligibility: "10+2 PCM/PCB" },
  { title: "B.Sc. Nursing", level: "UG", campuses: ["Bhimtal"], intro: "Noble career in patient care.", bullets: ["Clinical Practice", "Anatomy", "Patient Care"], about: "Highly skilled training for hospital environments and community health services.", eligibility: "10+2 PCB (Min 17 years)" },

  // --- LAW & HOSPITALITY ---
  { title: "BA LLB / BBA LLB", level: "UG", campuses: ["Dehradun"], intro: "5-Year integrated legal studies.", bullets: ["Moot Court", "Corporate Law", "Litigation"], about: "Approved by the Bar Council of India, merging law with business or arts.", eligibility: "10+2 (Min 45%)" },
  { title: "Bachelor of Hotel Management (BHM)", level: "UG", campuses: ["Haldwani", "Dehradun"], intro: "Global careers in luxury hospitality.", bullets: ["Culinary Arts", "Front Office", "Event Mgmt"], about: "Professional training for five-star hotels, cruise lines, and international resorts.", eligibility: "10+2 Any Stream" },

  // --- MANAGEMENT ---
  { 
    title: "MBA (Full Time)", 
    level: "PG", 
    campuses: ["Dehradun", "Bhimtal", "Haldwani"], 
    intro: "The gold standard of corporate leadership.", 
    bullets: ["Dual Specialization", "International Study Tours", "Placements in Top MNCs"], 
    about: "Industry-aligned curriculum with specializations in Finance, Marketing, HR, IT, and Supply Chain. Focuses on case-study learning and global business ethics.", 
    eligibility: "Graduation (Min 50%) + GECET/CAT/MAT score" 
  },
  { 
    title: "MBA Agri-Business", 
    level: "PG", 
    campuses: ["Dehradun", "Haldwani"], 
    intro: "Bridging agriculture and corporate strategy.", 
    bullets: ["Supply Chain", "Rural Marketing", "Agri-Tech Finance"], 
    about: "Prepares students to lead in the agricultural sector, focusing on the processing, marketing, and distribution of farm products.", 
    eligibility: "Bachelor's in Agri/Science/Commerce (50%)" 
  },
  { 
    title: "MBA Hospital Administration", 
    level: "PG", 
    campuses: ["Dehradun"], 
    intro: "Managing healthcare in the modern world.", 
    bullets: ["Health Policy", "Operations Management", "Medical Law"], 
    about: "Specialized management training for the healthcare industry, insurance sectors, and large-scale hospital chains.", 
    eligibility: "Graduation in any stream (50%)" 
  },

  { 
  title: "MBA (Business Analytics)", 
  level: "PG", 
  campuses: ["Dehradun"], 
  intro: "Leading with data-driven strategy.", 
  bullets: ["Data Visualization", "Predictive Modeling", "Tableau/R"], 
  about: "A modern MBA track focusing on using Big Data to solve complex business problems.", 
  eligibility: "Graduation (50%) + CAT/MAT/GECET" 
 },

  // --- COMPUTER APPLICATIONS & TECHNOLOGY ---
  { 
    title: "MCA (General)", 
    level: "PG", 
    campuses: ["Dehradun", "Bhimtal", "Haldwani"], 
    intro: "Advanced software engineering and computing.", 
    bullets: ["Full Stack Dev", "Cloud Architecture", "Advanced Java/Python"], 
    about: "Deep dive into software life cycles, advanced database systems, and enterprise-level application development.", 
    eligibility: "BCA / B.Sc (IT/CS) with 50%" 
  },
  { 
    title: "MCA AI & Data Science", 
    level: "PG", 
    campuses: ["Dehradun", "Bhimtal"], 
    intro: "Intelligent systems for the next decade.", 
    bullets: ["Neural Networks", "Deep Learning", "Predictive Analytics"], 
    about: "A specialized MCA program focused on creating algorithms that allow machines to learn and process massive data sets.", 
    eligibility: "BCA / B.Sc (IT/CS) with 50%" 
  },
  { 
    title: "M.Tech CSE", 
    level: "PG", 
    campuses: ["Dehradun", "Haldwani"], 
    intro: "Research-led computing for engineers.", 
    bullets: ["Research Methodologies", "High-Level Computing", "Data Security"], 
    about: "Ideal for students aiming for R&D roles in tech giants or pursuing a PhD path in Computer Science.", 
    eligibility: "B.Tech/BE in CSE/IT (50%)" 
  },

  // --- DESIGN & CREATIVE ARTS ---
  { 
    title: "M.Sc Animation & Multimedia", 
    level: "PG", 
    campuses: ["Dehradun"], 
    intro: "Creating cinematic and gaming magic.", 
    bullets: ["VFX Pipeline", "3D Character Animation", "Game Design"], 
    about: "An advanced production-oriented program for visual effects, digital filmmaking, and high-end gaming experiences.", 
    eligibility: "Graduation in any stream (Portfolio based)" 
  },
  { 
    title: "Master of Fine Arts (MFA)", 
    level: "PG", 
    campuses: ["Dehradun"], 
    intro: "Professional mastery in visual arts.", 
    bullets: ["Studio Practice", "Art History", "Individual Exhibition"], 
    about: "Focuses on individual artistic voice, painting, sculpture, and contemporary art theory.", 
    eligibility: "BFA (Bachelor of Fine Arts)" 
  },

  // --- COMMERCE, LAW & HUMANITIES ---
  { 
    title: "M.Com", 
    level: "PG", 
    campuses: ["Dehradun", "Haldwani"], 
    intro: "Expertise in trade, finance, and accounting.", 
    bullets: ["Auditing", "Corporate Taxation", "Business Economics"], 
    about: "Advanced studies in financial management and commerce, preparing students for CA/CS/NET exams.", 
    eligibility: "B.Com / BBA (50%)" 
  },
  { 
    title: "LLM (Master of Laws)", 
    level: "PG", 
    campuses: ["Dehradun"], 
    intro: "Specialized legal research and practice.", 
    bullets: ["Corporate Law", "Intellectual Property", "Human Rights"], 
    about: "A 1-year postgraduate program for specialization in niche legal domains and judicial service prep.", 
    eligibility: "LLB / Integrated Law Degree" 
  },
  { 
    title: "MA Journalism & Mass Comm.", 
    level: "PG", 
    campuses: ["Dehradun"], 
    intro: "Shaping stories for the digital era.", 
    bullets: ["Film Production", "Digital PR", "Broadcast News"], 
    about: "Comprehensive training in media management, news ethics, and professional content creation across all platforms.", 
    eligibility: "Graduation in any stream" 
  },
  { 
    title: "MA English", 
    level: "PG", 
    campuses: ["Dehradun"], 
    intro: "Advanced studies in literature and language.", 
    bullets: ["Modernist Lit", "Linguistics", "Creative Writing"], 
    about: "Explores global literature, literary criticism, and professional communications for academic careers.", 
    eligibility: "Graduation with English major" 
  },

  // --- PHARMACY & SCIENCES ---
  { 
    title: "M.Pharma Pharmaceutics", 
    level: "PG", 
    campuses: ["Bhimtal"], 
    intro: "The science of drug delivery systems.", 
    bullets: ["Formulation Dev", "Clinical Trials", "QA/QC"], 
    about: "Research-focused studies on how medicines are processed and delivered for maximum patient safety.", 
    eligibility: "B.Pharma (GPAT preferred)" 
  },
  { 
    title: "M.Sc Agriculture", 
    level: "PG", 
    campuses: ["Dehradun"], 
    intro: "Advanced Agronomy and Horticulture.", 
    bullets: ["Soil Science", "Seed Tech", "Plant Genetics"], 
    about: "Deep research into crop yields, sustainable farming, and genetic improvements for high-tech agriculture.", 
    eligibility: "B.Sc Agriculture (Hons)" 
  },

  { 
    title: "Diploma in Computer Science Engineering", 
    level: "Diploma", 
    campuses: ["Dehradun", "Bhimtal", "Haldwani"], 
    intro: "Foundation in software, hardware, and networking.", 
    bullets: ["Programming Basics", "Web Development", "IT Infrastructure"], 
    about: "A 3-year program (2 years via lateral entry) focusing on the fundamentals of computing. Graduates can directly enter the 2nd year of B.Tech CSE.", 
    eligibility: "10th Pass (with Maths & Science)" 
  },
  { 
    title: "Diploma in Mechanical Engineering", 
    level: "Diploma", 
    campuses: ["Dehradun", "Bhimtal", "Haldwani"], 
    intro: "Hands-on training in machine design and production.", 
    bullets: ["Thermodynamics", "AutoCAD", "Workshop Technology"], 
    about: "Focuses on the principles of mechanics, materials science, and manufacturing processes used in the heavy industry and automotive sectors.", 
    eligibility: "10th Pass (with Maths & Science)" 
  },
  { 
    title: "Diploma in Civil Engineering", 
    level: "Diploma", 
    campuses: ["Dehradun", "Bhimtal", "Haldwani"], 
    intro: "Basic training in infrastructure and construction.", 
    bullets: ["Surveying", "Building Materials", "Structural Basics"], 
    about: "Prepares students for supervisory roles in construction projects, focusing on roads, bridges, and smart urban infrastructure.", 
    eligibility: "10th Pass (with Maths & Science)" 
  },
  { 
    title: "Diploma in Automobile Engineering", 
    level: "Diploma", 
    campuses: ["Dehradun", "Haldwani"], 
    intro: "Specialized study of vehicle systems and engines.", 
    bullets: ["Engine Mechanics", "EV Technology", "Vehicle Testing"], 
    about: "A niche diploma focused on automotive design, manufacturing, and the emerging field of Electric Vehicles (EVs).", 
    eligibility: "10th Pass (with Maths & Science)" 
  },
  { 
    title: "D.Pharma (Diploma in Pharmacy)", 
    level: "Diploma", 
    campuses: ["Bhimtal"], 
    intro: "Foundational course for pharmacy practice.", 
    bullets: ["Drug Storage", "Hospital Pharmacy", "Health Education"], 
    about: "A 2-year program that qualifies students to work as registered pharmacists and manage chemist shops or hospital dispensaries.", 
    eligibility: "10+2 with PCB/PCM" 
  }

];

  const wrapper = document.getElementById("scrollWrapper");
  const track = document.getElementById("scrollTrack");
  const campusDropdown = document.getElementById("campusFilterDropdown");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearSearchBtn");

  let currentCategory = "all";
  let currentCampus = "all";
  let scrollIndex = 0;
  let autoScrollTimer = null;
  let isInteracting = false;
  const CARD_WIDTH = 372; 

  function startAutoScroll() {
    stopAutoScroll();
    autoScrollTimer = setInterval(() => {
      if (isInteracting) return;
      scrollIndex++;
      const dataLength = track.children.length / 2;
      
      track.style.transition = "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
      track.style.transform = `translateX(-${scrollIndex * CARD_WIDTH}px)`;

      if (scrollIndex >= dataLength) {
        setTimeout(() => {
          track.style.transition = "none";
          scrollIndex = 0;
          track.style.transform = "translateX(0)";
        }, 800);
      }
    }, 3000);
  }

  function stopAutoScroll() { clearInterval(autoScrollTimer); }

  wrapper.addEventListener("mouseenter", () => isInteracting = true);
  wrapper.addEventListener("mouseleave", () => {
    isInteracting = false;
    if (!searchInput.value && currentCategory === "all" && currentCampus === "all") startAutoScroll();
  });

  function attachHandlers() {
    document.querySelectorAll(".read-more-btn").forEach(btn => {
      btn.onclick = () => {
        const content = btn.previousElementSibling;
        const isExpanded = content.classList.contains("expanded");
        isInteracting = !isExpanded; 

        document.querySelectorAll(".course-content").forEach(c => {
          c.classList.remove("expanded");
          c.nextElementSibling.textContent = "READ DETAILS ▼";
        });

        if (!isExpanded) {
          content.classList.add("expanded");
          btn.textContent = "CLOSE DETAILS ▲";
        }
      };
    });

    document.querySelectorAll(".apply-btn").forEach(btn => {
      btn.onclick = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };
    });
  }

  function updateGallery() {
    const query = searchInput.value.toLowerCase().trim();
    const filtered = allPrograms.filter(p => {
      const matchesSearch = !query || `${p.title} ${p.about}`.toLowerCase().includes(query);
      const matchesCategory = currentCategory === "all" || p.level === currentCategory;
      const matchesCampus = currentCampus === "all" || p.campuses.includes(currentCampus);
      return matchesSearch && matchesCategory && matchesCampus;
    });
    renderCards(filtered, !query && currentCategory === "all" && currentCampus === "all");
  }

  function renderCards(data, loop = false) {
    track.innerHTML = "";
    scrollIndex = 0;
    track.style.transform = "translateX(0)";
    const list = loop ? [...data, ...data] : data;

    if (list.length === 0) {
        track.innerHTML = `<div class="col-span-full py-20 text-center text-gray-400 font-medium w-full">No programs found for these filters.</div>`;
        stopAutoScroll();
        return;
    }

    list.forEach((p) => {
      const card = document.createElement("div");
      card.className = "program-card bg-white rounded-2xl p-6 flex flex-col border border-gray-100 h-fit w-[340px] shadow-sm";
      card.innerHTML = `
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-xl font-bold text-blue-900">${p.title}</h3>
          <span class="text-[10px] px-2 py-1 bg-blue-50 text-blue-600 font-bold rounded uppercase">${p.level}</span>
        </div>
        <div class="flex flex-wrap gap-1 mb-3">
          ${p.campuses.map(c => `<span class="text-[9px] bg-gray-50 text-gray-400 px-2 py-0.5 rounded border border-gray-100">${c}</span>`).join("")}
        </div>
        <p class="text-sm text-gray-500 mb-4 font-medium">${p.intro}</p>
        <div class="space-y-2 text-gray-600 text-sm">${p.bullets.map(b => `<div>• ${b}</div>`).join("")}</div>
        <div class="border-t border-gray-50 my-4"></div>
        <div class="course-content space-y-3">
          <p class="text-[13px] text-gray-700 leading-relaxed">${p.about}</p>
          <div class="bg-blue-50 p-3 rounded text-[11px] font-medium"><span class="text-blue-800 font-bold">ELIGIBILITY:</span> ${p.eligibility}</div>
          <button class="apply-btn w-full py-3 rounded-xl text-white text-xs font-bold bg-gradient-to-r from-blue-600 to-yellow-400 shadow-md">Apply Now</button>
        </div>
        <button class="mt-4 text-blue-600 text-[11px] font-bold self-start read-more-btn">READ DETAILS ▼</button>
      `;
      track.appendChild(card);
    });

    attachHandlers();
    if (loop) startAutoScroll(); else stopAutoScroll();
  }

  function populateCampusDropdown() {
    let camps = new Set();
    allPrograms.forEach(p => {
      if (currentCategory === "all" || p.level === currentCategory) {
        p.campuses.forEach(c => camps.add(c));
      }
    });
    campusDropdown.innerHTML = `<option value="all">All Campuses</option>`;
    camps.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c;
      opt.textContent = `GEHU ${c}`;
      campusDropdown.appendChild(opt);
    });
    campusDropdown.value = Array.from(camps).includes(currentCampus) ? currentCampus : "all";
  }

  campusDropdown.onchange = (e) => { currentCampus = e.target.value; updateGallery(); };

  filterBtns.forEach(btn => {
    btn.onclick = () => {
      filterBtns.forEach(b => {
        b.classList.remove("active", "text-white", "border-transparent");
        b.classList.add("text-gray-600", "border-gray-200");
      });
      btn.classList.add("active", "text-white", "border-transparent");
      btn.classList.remove("text-gray-600", "border-gray-200");
      currentCategory = btn.dataset.category;
      populateCampusDropdown();
      updateGallery();
    };
  });

  clearBtn.onclick = () => {
    searchInput.value = "";
    currentCategory = "all"; currentCampus = "all";
    filterBtns.forEach(b => {
      b.classList.remove("active", "text-white", "border-transparent");
      b.classList.add("text-gray-600", "border-gray-200");
      if(b.dataset.category === "all") b.classList.add("active");
    });
    populateCampusDropdown(); updateGallery();
  }

  searchInput.oninput = updateGallery;
  populateCampusDropdown();
  updateGallery();
});
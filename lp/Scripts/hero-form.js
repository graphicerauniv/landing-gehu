document.addEventListener("DOMContentLoaded", () => {
  /* ================= DATA ================= */
const stateCityMap = {
  "Andaman & Nicobar": ["Port Blair", "South Andaman", "North and Middle Andaman", "Nicobar"],
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Kakinada", "Tirupati", "Anantapur", "Kadapa", "Eluru"],
  "Arunachal Pradesh": ["Itanagar", "Tawang", "Ziro", "Pasighat", "Roing", "Tezu", "Bomdila"],
  "Assam": ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon", "Tinsukia", "Tezpur", "Bongaigaon"],
  "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga", "Arrah", "Begusarai", "Katihar"],
  "Chandigarh": ["Chandigarh"],
  "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur", "Korba", "Rajnandgaon", "Jagdalpur", "Ambikapur"],
  "Dadra & Nagar Haveli and Daman & Diu": ["Silvassa", "Daman", "Diu"],
  "Delhi": ["New Delhi", "North Delhi", "South Delhi", "West Delhi", "East Delhi", "Dwarka", "Saket", "Rohini"],
  "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Gandhinagar", "Junagadh", "Anand", "Navsari"],
  "Haryana": ["Gurgaon", "Faridabad", "Panipat", "Ambala", "Yamunanagar", "Rohtak", "Hisar", "Karnal", "Sonipat"],
  "Himachal Pradesh": ["Shimla", "Dharamshala", "Solan", "Mandi", "Kullu", "Chamba", "Hamirpur", "Una"],
  "Jammu & Kashmir": ["Srinagar", "Jammu", "Anantnag", "Baramulla", "Kathua", "Udhampur", "Samba", "Pulwama"],
  "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Deoghar", "Hazaribagh", "Giridih", "Ramgarh"],
  "Karnataka": ["Bengaluru", "Mysuru", "Hubli-Dharwad", "Mangaluru", "Belagavi", "Kalaburagi", "Davanagere", "Ballari", "Vijayapura", "Shivamogga"],
  "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam", "Alappuzha", "Palakkad", "Malappuram", "Kannur", "Kottayam"],
  "Ladakh": ["Leh", "Kargil"],
  "Lakshadweep": ["Kavaratti", "Agatti", "Amini", "Andrott", "Minicoy"],
  "Madhya Pradesh": ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Dewas", "Satna", "Ratlam", "Rewa"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad", "Solapur", "Amravati", "Navi Mumbai", "Kolhapur", "Akola"],
  "Manipur": ["Imphal", "Thoubal", "Bishnupur", "Churachandpur", "Ukhrul", "Senapati"],
  "Meghalaya": ["Shillong", "Tura", "Jowai", "Nongpoh", "Williamnagar"],
  "Mizoram": ["Aizawl", "Lunglei", "Saiha", "Champhai", "Kolasib"],
  "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha", "Mon"],
  "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur", "Puri", "Balasore", "Bhadrak", "Baripada"],
  "Puducherry": ["Puducherry", "Karaikal", "Mahe", "Yanam"],
  "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Mohali", "Hoshiarpur", "Pathankot", "Moga"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Kota", "Bikaner", "Ajmer", "Udaipur", "Bhilwara", "Alwar", "Sikar", "Pali"],
  "Sikkim": ["Gangtok", "Namchi", "Geyzing", "Mangan"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tiruppur", "Erode", "Vellore", "Thoothukudi", "Tirunelveli"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Khammam", "Karimnagar", "Ramagundam", "Mahabubnagar", "Nalgonda"],
  "Tripura": ["Agartala", "Dharmanagar", "Udaipur", "Kailasahar", "Ambassa"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Meerut", "Varanasi", "Prayagraj", "Bareilly", "Aligarh", "Noida", "Moradabad", "Gorakhpur"],
  "Uttarakhand": ["Dehradun", "Haridwar", "Haldwani", "Roorkee", "Rudrapur", "Kashipur", "Rishikesh"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri", "Maheshtala", "Rajpur Sonarpur", "Gopalpur", "Bhatpara", "Kharagpur"]
};
const courseList = [
  // --- School of Engineering & Technology ---
  "B.Tech - Computer Science & Engineering",
  "B.Tech - CSE (Hons) with AI & Machine Learning",
  "B.Tech - CSE (Hons) with Cloud Computing",
  "B.Tech - CSE (Hons) with Cyber Security",
  "B.Tech - CSE (Hons) with Data Science",
  "B.Tech - Electronics & Communication Engineering",
  "B.Tech - ECE (Hons) with Drone Technology",
  "B.Tech - ECE (Hons) with VLSI Design",
  "B.Tech - Mechanical Engineering",
  "B.Tech - Mechanical (Hons) with Robotics & Automation",
  "B.Tech - Civil Engineering",
  "B.Tech - Civil (Hons) with Smart Infrastructure",

  // --- School of Management & Commerce ---
  "MBA - Marketing / Finance / HR Management",
  "MBA - Business Analytics & AI",
  "MBA - Logistics & Supply Chain Management",
  "MBA - Agri-Business Management",
  "BBA - General / International Business",
  "BBA - Digital Marketing Specialization",
  "BBA - Airport & Airline Management",
  "B.Com (Hons) - International Finance & Accounting (ACCA UK)",
  "B.Com (Hons) - Corporate Accounting (CMA US)",
  "M.Com - Finance & Taxation",

  // --- School of Computer Applications ---
  "BCA - Industry Integrated",
  "BCA (Hons) - Cyber Security / AI & Data Science",
  "B.Sc - Information Technology (IT)",
  "MCA - Master of Computer Applications",
  "MCA - Specialization in AI & Data Science",

  // --- School of Design, Media & Arts ---
  "B.Des - Fashion Design",
  "B.Des - User Experience (UX) & Interaction Design",
  "B.Des - Animation & Gaming",
  "B.Sc - Animation & Gaming",
  "BA - Journalism & Mass Communication (BJMC)",
  "MA - Journalism & Mass Communication (MAJMC)",
  "Bachelor of Visual Arts (BVA / Fine Arts)",

  // --- School of Law ---
  "BA LLB (Integrated 5-Year Program)",
  "BBA LLB (Integrated 5-Year Program)",
  "LLM - Master of Laws",

  // --- Agriculture, Pharmacy & Science ---
  "B.Sc (Hons) - Agriculture",
  "B.Pharma - Bachelor of Pharmacy",
  "D.Pharma - Diploma in Pharmacy",
  "M.Sc - Mathematics / Physics / Chemistry",
  "B.Sc (Hons) - Physics / Maths / Chemistry",

  // --- Polytechnic / Diploma ---
  "Diploma - Computer Science Engineering",
  "Diploma - Mechanical / Civil / Electrical Engineering",

  // --- Doctoral Programs ---
  "Ph.D - Computer Science & Engineering",
  "Ph.D - Management / Commerce",
  "Ph.D - Physics / Chemistry / Humanities"
];

  const form = document.getElementById("leadForm");
  const phoneInput = document.getElementById("phone");
  const otpModal = document.getElementById("otpModal");
  const resendBtn = document.getElementById("resendBtn");
  const resendTimer = document.getElementById("resendTimer");
  const courseSelect = document.getElementById("course");
  
  let generatedOTP = null;
  let otpVerified = false;
  let timerInterval;

  /* ================= POPULATE DROPDOWNS ================= */
  
  const stateSelect = document.getElementById("state");
  Object.keys(stateCityMap).sort().forEach(s => {
    const opt = document.createElement("option");
    opt.value = s; opt.textContent = s;
    stateSelect.appendChild(opt);
  });

  stateSelect.onchange = () => {
    const citySelect = document.getElementById("city");
    citySelect.innerHTML = '<option value="">Select City</option>';
    (stateCityMap[stateSelect.value] || []).sort().forEach(c => {
      const opt = document.createElement("option");
      opt.value = c; opt.textContent = c;
      citySelect.appendChild(opt);
    });
  };

  courseList.forEach(course => {
    const opt = document.createElement("option");
    opt.value = course;
    opt.textContent = course;
    courseSelect.appendChild(opt);
  });

  /* ================= OTP LOGIC ================= */
  const startTimer = () => {
    let timeLeft = 30;
    resendBtn.disabled = true;
    resendTimer.textContent = `(in ${timeLeft}s)`;
    
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timeLeft--;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        resendBtn.disabled = false;
        resendTimer.textContent = "";
      } else {
        resendTimer.textContent = `(in ${timeLeft}s)`;
      }
    }, 1000);
  };

  const sendOTP = () => {
    const phoneVal = phoneInput.value.trim();
    const phoneError = document.getElementById("phoneError");
    
    if (phoneVal.length !== 10) {
      phoneError.textContent = "Enter a valid 10-digit number";
      phoneError.classList.remove("hidden");
      return;
    }
    
    phoneError.classList.add("hidden");
    generatedOTP = Math.floor(100000 + Math.random() * 900000);
    console.log("Mock OTP:", generatedOTP); 
    
    document.getElementById("displayPhone").textContent = phoneVal;
    otpModal.classList.replace("hidden", "flex");
    startTimer();
  };

  document.getElementById("sendOtpBtn").addEventListener("click", sendOTP);
  resendBtn.addEventListener("click", () => {
    const msg = document.getElementById("modalOtpMsg");
    msg.textContent = "New OTP Sent!";
    msg.className = "text-[10px] mt-2 text-blue-600 block";
    msg.classList.remove("hidden");
    sendOTP();
  });

  document.getElementById("verifyOtpBtn").addEventListener("click", () => {
    const inputOtp = document.getElementById("modalOtpInput").value;
    const msg = document.getElementById("modalOtpMsg");

    if (inputOtp === String(generatedOTP)) {
      otpVerified = true;
      document.getElementById("mainOtpStatus").innerHTML = '<span class="text-green-600 font-bold">Verified ✔</span>';
      document.getElementById("mainOtpStatus").classList.remove("hidden");
      
      const btn = document.getElementById("sendOtpBtn");
      btn.textContent = "Verified";
      btn.disabled = true;
      btn.classList.add("opacity-50");
      phoneInput.readOnly = true;

      otpModal.classList.replace("flex", "hidden");
    } else {
      msg.textContent = "Invalid OTP code.";
      msg.className = "text-[10px] mt-2 text-red-500 block";
      msg.classList.remove("hidden");
    }
  });

  /* ================= FORM SUBMISSION ================= */
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    document.querySelectorAll(".text-red-500, .text-red-500").forEach(el => el.classList.add("hidden"));

    const config = [
      { id: "name", error: "nameError", msg: "Name required (min 3 chars)", min: 3 },
      { id: "email", error: "emailError", msg: "Enter a valid email", reg: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
      { id: "state", error: "stateError" },
      { id: "city", error: "cityError" },
      { id: "campus", error: "campusError" },
      { id: "course", error: "courseError" }
    ];

    config.forEach(f => {
      const el = document.getElementById(f.id);
      const err = document.getElementById(f.error);
      if (!el.value || (f.min && el.value.length < f.min) || (f.reg && !f.reg.test(el.value))) {
        if(f.msg) err.textContent = f.msg;
        err.classList.remove("hidden");
        isValid = false;
      }
    });

    if (!otpVerified) {
      const pErr = document.getElementById("phoneError");
      pErr.textContent = "Verify your phone number to continue";
      pErr.classList.remove("hidden");
      isValid = false;
    }

    if (!document.getElementById("consent").checked) {
      document.getElementById("consentError").textContent = "Please agree to the terms";
      document.getElementById("consentError").classList.remove("hidden");
      isValid = false;
    }

    if (isValid) {
      alert("Application successfully submitted!");
      form.reset();
      window.location.reload();
    }
  });

  const closeModal = () => otpModal.classList.replace("flex", "hidden");
  document.getElementById("closeOtp").onclick = closeModal;
  document.getElementById("cancelOtpBtn").onclick = closeModal;
});
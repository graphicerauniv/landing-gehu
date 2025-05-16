import type { ImageMetadata } from "astro";
import keyHighlights1 from "../assets/highlights/kh1.webp";
import keyHighlights2 from "../assets/highlights/kh2.webp";
import keyHighlights3 from "../assets/highlights/kh3.webp";
import keyHighlights4 from "../assets/highlights/kh4.webp";
import keyHighlights5 from "../assets/highlights/kh5.webp";
import keyHighlights6 from "../assets/highlights/kh6.webp";

type Course = {
    fullName: string;
    shortName: string;
    meta: {
        title: string;
        description: string;
    };
    aboutTheProgram: {
        headline: string;
        paragraphs: string[];
    };
    faqs: {
        title: string;
        content: string;
    }[];
    keyHighlights?: {
        image: ImageMetadata;
        title: string;
        titleHighlight: string;
        summary: string;
        details: string;
    }[];
};

export const mba: Course = {
    fullName: "Master of Business Administration",
    shortName: "MBA",
    meta: {
        title: "MBA Admissions | Graphic Era (Deemed to be University), Dehradun",
        description:
            "Earn your MBA and take your career to the next level! Get the best advice and support for your MBA application and admission process. Start now!",
    },
    aboutTheProgram: {
        headline:
            "Master of Business Administration is a postgraduate program that is focused on developing the pragmatic, administrative, and communicative qualities of the students.",
        paragraphs: [
            "Master of Business Administration is one of the most coveted postgraduate programs aspired by the students and there are plenty of reasons for its popularity.",
            "This program unlatches the vault to several vocational opportunities. Students with a BBA degree can commence a career in the field of finance, accounting, marketing, and real estate and can even utilize it as the foundation for advanced degrees like MBA. One can also launch a business venture of their own.",
            "Master of Business Administration is one of the most coveted postgraduate programs aspired by the students and there are plenty of reasons for its popularity. A degree in MBA is quite multifaceted as it constitutes a combination of technical knowledge and experiential learning. It also focuses on the overall character development of the student. The degree conditions you to develop confidence, teamwork and equips you with the necessary skills that are essential in the field of business.",
        ],
    },
    faqs: [
        {
            title: "What is an MBA program?",
            content:
                "An MBA (Master of Business Administration) program is a postgraduate degree program focused on developing skills and knowledge essential for effective business management and leadership.",
        },
        {
            title: "How long does an MBA program typically last?",
            content:
                "MBA programs are typically two years long, providing a comprehensive curriculum covering various aspects of business administration.",
        },
        {
            title: "What courses are included in an MBA curriculum?",
            content:
                "The curriculum includes core courses such as accounting, economics, marketing, organizational behavior, and strategy. Additionally, students can choose major and minor specializations in fields such as finance, human resources, marketing, and more.",
        },
        {
            title: "What are the major specializations available in an MBA program?",
            content:
                "Major specializations in MBA programs include finance, human resources, marketing, logistics & supply chain management, international business, business analytics, digital marketing, agri-business management, retail management, banking and insurance, branding and advertisement, and hospitality management.",
        },
        {
            title: "How does an MBA program prepare students for the workforce?",
            content:
                "MBA programs typically provide opportunities for practical experience through internships and industry projects, preparing students for a wide range of business-related roles such as financial manager, marketing manager, operations manager, human resource manager, management consultant, investment banker, business development manager, entrepreneur, project manager, and supply chain manager.",
        },
        {
            title: "What career opportunities are available to MBA graduates?",
            content:
                "Graduates with an MBA degree can work in various industries such as finance, consulting, marketing, healthcare, technology, and more. They can pursue roles in government, non-profit organizations, and educational institutions, offering significant growth potential in their careers.",
        },
    ],
};

export const mbaImpact: Course = {
    fullName: "Master of Business Administration Impact",
    shortName: "MBA Impact",
    meta: {
        title: "MBA Impact Admission | Graphic Era (Deemed to be University), Dehradun",
        description:
            "Earn your MBA Impact and take your career to the next level! Get the best advice and support for your MBA Impact application and admission process. Start now!",
    },
    aboutTheProgram: {
        headline:
            "The IMPACT MBA is a rigorous and specialized flagship program at Graphic Era (Deemed to be University) that aims to enable students to realize their leadership potential in the fast-paced and ever-changing business landscape.",
        paragraphs: [
            "The IMPACT MBA is a rigorous and specialized flagship program at Graphic Era (Deemed to be University) that aims to enable students to realize their leadership potential in the fast-paced and ever-changing business landscape.",
            "The program is typically structured as a two-year, full-time, residential program that combines classroom instruction with advanced management practices and hands-on learning experiences to help aspirants gain an edge in their functional, managerial, and leadership capabilities, develop the acumen to seize challenging opportunities and position themselves as change agents who can drive innovation and create value for their organizations.",
            "The futuristic program cultivates strategic thinking, global intelligence, collaboration, critical analysis, teamwork, problem-solving, and decision-making skills in the students through industrial tours, expert lectures, case studies, group discussions, and more, empowering them to bring transformative change in their organizations. Students are also offered the valuable opportunity to gain real-world experience, apply theoretical concepts, network with industry professionals, and enhance employability through the provision of summer internships after the completion of the third semester.",
        ],
    },
    faqs: [
        {
            title: "What is the difference between a regular MBA and MBA IMPACT?",
            content:
                "Although the course duration of both the courses is same, the curriculum and exposure to industry practices are more rigorous in MBA IMPACT. Graduates from MBA IMPACT will have an advantage in the job market, while students from a regular MBA may need to work harder to establish themselves in their careers.",
        },
        {
            title: "What will be the special features in MBA IMPACT?",
            content:
                "MBA IMPACT offers a more rigorous curriculum, better industry connections, and internship and placement opportunities. The program is designed in collaboration with IIM Indore to provide a more diverse learning environment with opportunities for networking, internships, and global exposure. MBA IMPACT is a fully residential program that comes with limited seats of 60 candidates. This makes the teaching more focused and specialized.",
        },
        {
            title: "Is MBA IMPACT after engineering a good decision?",
            content:
                "Yes, pursuing MBA IMPACT after engineering can be a good decision as it can provide a well-rounded skillset that combines technical expertise with business acumen. This can enhance career prospects and increase earning potential. It ultimately depends on the individual's goals and career aspirations, as well as the specific MBA program and career path chosen.",
        },
        {
            title: "What is the scope of MBA IMPACT?",
            content:
                "MBA IMPACT has a very high scope in the future since it provides excellent opportunities for practical learning with experienced faculty. Graphic Era (Deemed to be University) aims to have the same brand recognition as top-tier institutions, therefore, graduates can achieve career success with hard work and determination. MBA IMPACT can be a great choice for those seeking a quality education and career growth opportunities.",
        },
    ],
    keyHighlights: [
        {
            image: keyHighlights1,
            title: "Fully Residential Program",
            titleHighlight: "(Learning Beyond the Classroom)",
            summary:
                "A University of the Scale of Graphic Era, considering its large student strength, is not known to mandate On-Campus Residence for its candidates in various courses, but it is mandated as a part of MBA IMPACT. The reason is easily understandable - To deliver the results that a student expects after passing out from a Top B-School especially in a short duration course like...",
            details:
                "an MBA, the University needs to ensure effective delivery and absorption of Academic Content at various levels as well as taking care of holistic development of a thorough professional by inculcating knowledge and skills required in all facets of the professional world. The candidates, throughout their stay are expected to utilize the entire day, each day of the course to attain an edge over their competition globally by utilizing the limitless resources of the University Campus as well as enriching themselves with Peer Group Learning. The Hostels at Graphic Era ensure a comfortable stay for all candidates, with access to all facilities 24x7",
        },
        {
            image: keyHighlights2,
            title: "International Industrial Tour/IIM",
            titleHighlight:
                "Indore Immersion Opportunity Integrated in the Program",
            summary:
                "Candidates as a part of the Program will have options of choosing between two specialized Interaction/Immersion Opportunities during their course, targeted to enhance and substantiate their Employment Credentials...",
            details:
                "Option 1: International Industrial Tour – This is a well crafted Industrial Interaction Tour requiring students to travel abroad with Experts from the University travelling with them, targeted at exposing them to Top Management Practices and Environments globally. Option 2: IIM Indore Immersion Program – This opportunity allows students to travel to IIM Indore and be a part of an Immersion Program that allows them to reside at IIM Indore for a fixed duration, being taught by experts of IIM Indore, targeted at further augmenting their skills and knowledge while putting their learnings to test while allowing them to attain the coveted status of an IIM Indore Executive Alumni. *The candidate can choose either of the aforementioned options. The cost of both the options is covered in the Fee the candidate pays as a part of the program. Choosing one of the two options is mandatory.",
        },
        {
            image: keyHighlights3,
            title: "Specialized Teaching from the",
            titleHighlight: "Best Experts in the Country",
            summary:
                "The academic rigor and the task of the creative transformation of an individual are the centre pieces of this program – both these targets are achievable only by ensuring just the right combination of teaching experts from the Top B-Schools of the country. Graphic Era has ensured that the students are catered to by the best faculty from...",
            details:
                "their domains, hailing from the Top B-Schools of India, including but not limited to IIMs. This is evident in experts in all domains, trickling right from the top with the Program Head being a Seasoned Management Professional who's an engineer with his UG from IIT Roorkee and his MBA from MDI Gururgram.",
        },
        {
            image: keyHighlights6,
            title: "Course Designed in Consultation",
            titleHighlight: "with IIM Indore",
            summary:
                "The vision behind the commencement of the course was to establish a new Flagship MBA Program at Graphic Era (Deemed to be University) that provides the Academic Rigor, Preparation and the platform for the creative transformation of the candidate to a Top-Tier Professional capable of excelling and creating new avenues for growth at any level globally. In this quest...",
            details:
                "to frame out a dynamic and well rounded course, Graphic Era decided to harness the expertise of seasoned professionals from the Indian Institute of Management, Indore, and enter into an MoU that covers strategic development of the Course Curriculum, Session Plan, Resource Materials, Teaching Learning Mechanism and all other crucial aspects. The candidates can be assured of the most updated and rigorous curriculum waiting for them at the commencement of the program, delivered to them by top experts in the most advanced teaching learning environments, competing with the Top B-Schools globally.",
        },
        {
            image: keyHighlights5,
            title: "Top Internships and",
            titleHighlight: "Placements",
            summary:
                "We have held great pride in being one of the first few private Universities in India who took on the task of ensuring Top of the Line placements for our students, and with IMPACT, we will write a new success story for the world to see. The University is equipped with one of the best placement teams in the country and this...",
            details:
                "has resulted in Top Placements for our Flagship Programs consistently over the year, with the highest package for the year 2023 under Brand Graphic Era currently sits at INR 84.88 Lacs (Domestic Package – CSE). The formation of IMPACT with a very clear goal, has enabled us to formulate a route that will ensure the Best Placements for the candidates that the region has ever seen. This will include Summer Internships at Top MNCs and PPOs and Placements with an average package that matches or improves upon the Top B-Schools of the country.",
        },
        {
            image: keyHighlights4,
            title: "NBA Accredited |",
            titleHighlight: "AICTE Approved Degree",
            summary:
                "Unlike some of the other B-Schools in India, Graphic Era (Deemed to be University) is offering a Full-Time NBA Accredited and AICTE Approved Degree and not a diploma. These accreditations are attained through rigorous compliances of the Academic Processes of the University and carry great relevance for students who visualise a career that spans across geographical...",
            details:
                "boundaries. NBA Accredited and AICTE Approved Degrees enable students to enjoy easy Credit Transfers across Top International Universities, opening up unlimited avenues of Research and Employment Opportunities Globally.",
        },
    ],
};

export const bba: Course = {
    fullName: "Bachelor of Business Administration",
    shortName: "BBA",
    meta: {
        title: "BBA Admissions | Graphic Era (Deemed to be University), Dehradun",
        description:
            "Earn your BBA and take your career to the next level! Get the best advice and support for your BBA application and admission process. Start now!",
    },
    aboutTheProgram: {
        headline:
            "Bachelor of Business Administration is an undergraduate program that is focused on developing the pragmatic, administrative, and communicative qualities of the students.",
        paragraphs: [
            "Bachelor of Business Administration is one of the most coveted undergraduate programs aspired by the students and there are plenty of reasons for its popularity.",
            "This program unlatches the vault to several vocational opportunities. Students with a BBA degree can commence a career in the field of finance, accounting, marketing, and real estate and can even utilize it as the foundation for advanced degrees like MBA. One can also launch a business venture of their own.",
            "Bachelor of Business Administration is one of the most coveted undergraduate programs aspired by the students and there are plenty of reasons for its popularity. A degree in BBA is quite multifaceted as it constitutes a combination of technical knowledge and experiential learning. It also focuses on the overall character development of the student. The degree conditions you to develop confidence, teamwork and equips you with the necessary skills that are essential in the field of business.",
        ],
    },
    faqs: [
        {
            title: "What is a BBA program?",
            content:
                "A BBA (Bachelor of Business Administration) program is an undergraduate degree program designed to provide students with foundational knowledge and skills in business management and administration.",
        },
        {
            title: "How long does a BBA program typically last?",
            content:
                "BBA programs are typically four years long, encompassing a diverse curriculum covering key areas of business administration such as finance, marketing, management, and operations.",
        },
        {
            title: "Can I do BBA without Mathematics?",
            content:
                "Yes. A student from any stream can pursue BBA. Students will learn the basics of Accounting during the course.",
        },
        {
            title: "Can I get a job abroad if I do my BBA in india?",
            content:
                "Yes, it is possible to get a job abroad after completing a BBA degree in India. It requires additional qualifications and skills, such as language proficiency, international work experience, and cultural adaptability. Graphic Era (Deemed to be University) offers BBA in specialization with ACCA (Association of Chartered Certified Accountants) and CMA (Certified Management Accountant) certified in the UK, the US, and many other countries.",
        },
        {
            title: "What is the scope of BBA in India?",
            content:
                "Bachelor of Business Administration (BBA) is a popular undergraduate degree program in India that offers a broad range of career opportunities in various fields such as finance, marketing, operations, human resources, and more.",
        },
        {
            title: "What are the advantages of doing BBA?",
            content:
                "A Bachelor of Business Administration (BBA) degree offers a diverse range of career opportunities in various fields of business. It provides a strong foundation in business management principles and exposes one to practical training and internships.",
        },
    ],
};

export const btech: Course = {
    fullName: "Bachelor of Technology",
    shortName: "B.Tech",
    meta: {
        title: "B.Tech Admissions | Graphic Era (Deemed to be University), Dehradun",
        description:
            "Earn your B.Tech and take your career to the next level! Get the best advice and support for your B.Tech application and admission process. Start now!",
    },
    aboutTheProgram: {
        headline:
            "B.Tech CSE in Computer Science and Engineering is an undergraduate program that focuses on the design, development, and maintenance of computer software and hardware systems.",
        paragraphs: [
            "Btech CSE (Computer Science and Engineering) is an undergraduate program that focuses on the fundamentals of computer science and its various applications.",
            " It is a four-year degree program that covers topics such as programming languages, data structures and algorithms, operating systems, computer networks, database systems, and software engineering. The program is designed to equip students with the skills and knowledge needed to develop innovative and practical solutions to real-world problems.",
            "With the increasing demand for computer science professionals, the Btech CSE program offers a wide range of career opportunities in various industries, including software development, data analytics, cybersecurity, artificial intelligence, and machine learning. Graduates of the program are well-prepared to pursue advanced degrees in computer science or related fields and to take on leadership roles in the rapidly evolving technology industry.",
        ],
    },
    faqs: [
        {
            title: "Is coding a major component of B.Tech CSE?",
            content:
                "Yes, coding is a major component of B.Tech CSE. Students develop programming skills and learn to write efficient algorithms and software solutions.",
        },
        {
            title: "Can B.Tech CSE graduates work in non-technical roles?",
            content:
                "Yes, B.Tech CSE graduates can work in non-technical roles such as project management, business analysis, technical consulting, and entrepreneurship, leveraging their problem-solving and analytical skills ",
        },
        {
            title: "Are there government job opportunities for B.Tech CSE graduates in India?",
            content:
                "Yes, there are government job opportunities for B.Tech CSE graduates in India. They can apply for positions in various government sectors such as public sector undertakings (PSUs), defense organizations, research institutions, and government IT departments.",
        },
        {
            title: "What are the career opportunities for B.Tech CSE (Hindi) graduates?",
            content:
                "B.Tech CSE (Hindi) graduates can explore career opportunities in the same fields as B.Tech CSE graduates, including software development, cybersecurity, data science, and artificial intelligence.",
        },
        {
            title: "Can graduates get jobs abroad after completing B.Tech CSE (Hons.) with specialization in AI and Data Science in India?",
            content:
                "Yes, it is possible to get a job abroad after completing B.Tech CSE (Hons.) with specialization in AI and Data Science in India. The IT industry is a global sector, and many multinational corporations have operations and offices in various countries worldwide. However, getting a job abroad may require additional qualifications, such as international work experience, language proficiency, etc.",
        },
        {
            title: "Can graduates of the B.Tech CSE (Hons.) program with specialization in Cybersecurity pursue higher education in the field?",
            content:
                "Yes, graduates can pursue higher education in cybersecurity or related disciplines such as information security, digital forensics, or network security. This specialization provides a strong foundation for advanced studies and research in cybersecurity.",
        },
        {
            title: "Can students without prior knowledge of IoT or cybersecurity join the B.Tech CSE (Hons.) program with specialization in IoT & Cybersecurity?",
            content:
                "Yes, the program is designed to accommodate students with varying levels of prior knowledge. It provides foundational courses to build a solid understanding of IoT and cybersecurity concepts for all students.",
        },
        {
            title: "How does the B.Tech CSE (Hons.) program with specialization in Artificial Intelligence stay updated with the latest AI advancements?",
            content:
                "The program is regularly updated to align with the latest advancements in AI. Faculty members stay updated with current trends, conduct research, attend conferences, and industry collaborations to ensure students receive up-to-date education in AI.",
        },
        {
            title: "Are there practical components in the B.Tech CSE (Hons.) program with specialization in Machine Learning and Artificial Intelligence?",
            content:
                "Yes, the program emphasizes practical learning through hands-on projects, ML and AI lab experiments, industry collaborations, and internships, allowing students to apply ML and AI techniques to real-world problems and gain practical experience",
        },
    ],
};

export const apply = {
    meta: {
        title: `Admission ${new Date().getFullYear()} | Graphic Era Hill University, Dehradun`,
        description: `Start your future with the best university admissions in ${new Date().getFullYear()}! Get ready to apply for BTech, MBA, BBA and BCA programs. Apply now and get the best education!`,
    },
    faqs: [
        {
            title: "What programs does the university offer?",
            content:
                "The university offers more than 85 Undergraduate, Post Graduate and Doctoral Programmes to choose from, spread across various domains such as Engineering, Computer Application, Management, Commerce, Life Sciences, Food Technology, Hospitality, Paramedical, Humanities and Social Sciences and more.",
        },
        {
            title: "What are the admission requirements?",
            content:
                "Candidates can apply for admission to Graphic Era Hill University by filling out the online application form available on the university's website and providing personal and academic details, and later uploading scanned copies of relevant documents.",
        },
        {
            title: "Is there an application deadline for undergraduate courses? ",
            content:
                "Depending on the program applied for, candidates may be required to appear for an entrance exam such as the  JEE Main, CAT, MAT, XAT, or NATA.  Shortlisted candidates may be called for a personal interview, which may be conducted online or in person.For some coveted courses, the seats fill up fast, and the deadlines vary. Please refer to https://gehu.ac.in/admissions/ for the same. ",
        },
        {
            title: "What are the different higher education options available for 12th-pass students?",
            content:
                "There are many courses available for science stream students some options include engineering (various branches), medicine, pharmacy, biotechnology, computer science, physics, chemistry, mathematics, environmental science, agriculture, forensic science, and allied health sciences.",
        },
        {
            title: "What is the most important thing to consider when choosing a career?",
            content:
                "When you are choosing a career it is important that it aligns with your passion, interests, and skills. Consider job market demand, values, work-life balance, financial aspects, and growth opportunities, and seek job satisfaction. Make an informed decision based on personal preferences and aspirations and then go for the study program that fulfils the above.",
        },
    ],
};

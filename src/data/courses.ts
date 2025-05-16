import type { ImageMetadata } from "astro";

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

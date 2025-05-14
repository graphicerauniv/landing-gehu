import ArrowDownTrayIcon from "../../assets/icons/arrow-down-tray.svg";

const aboutKeyPoints = [
    "GECET provides exceptional scholarship opportunities for academically meritorious students seeking admission to the Graphic Era Group of Institutions.",
    "GECET facilitates admissions across a wide range of academic programs and courses offered by the Graphic Era Group of Institutions.",
    "The GECET exam aims to empower deserving candidates by alleviating the financial constraints associated with higher education, enabling them to pursue their academic aspirations.",
    "GECET allows students to focus on their educational goals without being burdened by monetary barriers, empowering them to realize their full potential.",
];

const downloadables = [
    {
        category: "Sample Papers",
        files: [
            {
                name: "Biotech Engineering Sample Test",
                link: "https://dl.geu.ac.in/Biotech-Eng-Sample-Test-GECET.pdf",
            },
            {
                name: "Biotech Non-Engineering Sample Test",
                link: "https://dl.geu.ac.in/Biotech-NonEng-Sample-Test-GECET.pdf",
            },
            {
                name: "Engineering Sample Test",
                link: "https://dl.geu.ac.in/Engineering-Sample-Test-GECET.pdf",
            },
            {
                name: "Humanities & Social Science Sample Test",
                link: "https://dl.geu.ac.in/Humanities-Social-Science-Sample-Test-GECET.pdf",
            },
        ],
    },
];
export default function AboutExam() {
    return (
        <div className="my-20 max-w-6xl px-4 sm:mx-auto">
            <h2 className="mb-6 flex gap-2 text-3xl font-semibold">
                <span className="font-bold tracking-tight">
                    Graphic Era{" "}
                    <span className="font-serif font-black tracking-tight italic">
                        CET&apos;25
                    </span>
                </span>
            </h2>
            <div className="mb-4 grid gap-8 text-neutral-700 md:grid-cols-2">
                <div>
                    <h2 className="font-serif text-lg font-bold tracking-tight italic">
                        About Entrance Test
                    </h2>
                    <div className="space-y-4">
                        <p>
                            GECET (Graphic Era Common Entrance Test) is an
                            initiative by Graphic Era Group of Institutions,
                            encompassing both Graphic Era Deemed to be
                            University and Graphic Era Hill University. Graphic
                            Era Deemed to be University, located in Dehradun,
                            Uttarakhand, and Graphic Era Hill University,
                            situated in Bhimtal, Uttarakhand, are renowned
                            educational institutions committed to excellence in
                            education and research.
                        </p>
                        <p>
                            Introduced in 2024, GECET is designed to identify
                            talented individuals and provide them with the
                            necessary support to excel in their chosen fields.
                            It comprises two phases, each offering different
                            scholarship opportunities and serving as a criterion
                            for admission to various courses.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className="font-serif text-lg font-bold tracking-tight italic">
                        Scope Of Test
                    </h2>
                    <ul>
                        {aboutKeyPoints.map((point, index) => (
                            <li
                                key={index}
                                className="mb-2 flex gap-2 border-b border-neutral-200 pb-2"
                            >
                                <div>{point}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="mb-20 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="text-neutral-700">
                    <h2 className="font-serif text-lg font-bold tracking-tight italic">
                        Format
                    </h2>
                    <p className="mb-2 flex gap-2 border-b border-neutral-200 pb-2">
                        GECET is conducted entirely online, allowing candidates
                        to take the exam from the comfort of their homes using
                        laptops or desktops. The exam consists of 100 questions
                        and has a duration of 2 hours. The questions are
                        structured to assess various sections relevant to the
                        candidate&apos;s chosen course of interest.
                    </p>
                    <p className="mb-2 flex gap-2 border-b border-neutral-200 pb-2">
                        Each candidate can appear for exams in a maximum of 2
                        courses, enabling them to explore multiple academic
                        avenues within Graphic Era Group of Institutions.
                    </p>
                </div>
                <div className="text-neutral-700">
                    <h2 className="mb-1 font-serif text-lg font-bold tracking-tight italic">
                        Scholarship Slabs
                    </h2>
                    <div className="overflow-x-auto rounded-xl border border-zinc-300">
                        <table className="w-full table-auto">
                            <thead>
                                <tr>
                                    <th className="border-r border-b border-zinc-300 px-4 py-2 font-bold">
                                        Score
                                    </th>
                                    <th className="border-b border-l border-zinc-300 px-4 py-2 font-bold">
                                        Scholarship on Tuition Fee
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-l-0 border-zinc-300 px-4 py-2">
                                        95 and above
                                    </td>
                                    <td className="border border-r-0 border-zinc-300 px-4 py-2">
                                        100%
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-l-0 border-zinc-300 px-4 py-2">
                                        90-95
                                    </td>
                                    <td className="border border-r-0 border-zinc-300 px-4 py-2">
                                        50%
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-l-0 border-zinc-300 px-4 py-2">
                                        80-90
                                    </td>
                                    <td className="border border-r-0 border-zinc-300 px-4 py-2">
                                        30%
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-b-0 border-l-0 border-zinc-300 px-4 py-2">
                                        70-80
                                    </td>
                                    <td className="border border-r-0 border-b-0 border-zinc-300 px-4 py-2">
                                        20%
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4">
                        Note: Scholarships Are Applicable On All India Tuition
                        Fees.
                    </div>
                </div>
            </div>

            <div className="rounded-lg border-2 border-zinc-200 bg-primary/20 p-8">
                <h2 className="-mt-14 mb-4 max-w-fit rounded-lg border-2 border-zinc-300 bg-white px-4 py-2 text-xl font-semibold tracking-tight">
                    Important
                </h2>
                <div className="mb-2 border-b-2 border-zinc-200">
                    <h3 className="mb-2 font-serif text-lg font-bold tracking-tight italic">
                        Exam Date
                    </h3>
                    <div className="mb-4 grid grid-cols-1 md:grid-cols-3">
                        <span className="font-semibold text-zinc-600">
                            May 21, 2025
                        </span>
                    </div>
                </div>
                <div className="mb-2 border-b-2 border-zinc-200">
                    <h3 className="mb-2 font-serif text-lg font-bold tracking-tight italic">
                        Last Date to Apply
                    </h3>
                    <div className="mb-4 grid grid-cols-1 md:grid-cols-3">
                        <span className="font-semibold text-zinc-600">
                            May 19, 2025
                        </span>
                    </div>
                </div>
                <h3 className="mb-2 font-serif text-lg font-bold tracking-tight italic">
                    Sample Papers
                </h3>
                <div>
                    {downloadables.map((downloadable, index) => (
                        <div key={`${index}-${downloadable.category}`}>
                            <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                                {downloadable.files.map((file, fileIndex) => (
                                    <a
                                        key={`${fileIndex}-${file.name}`}
                                        href={file.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 rounded-md border-b-2 border-primary bg-white px-3 py-1.5 hover:scale-[1.02] hover:bg-zinc-50"
                                    >
                                        <img
                                            src={ArrowDownTrayIcon.src}
                                            className="h-5 w-5 min-w-fit"
                                            alt="Download"
                                        />
                                        <span className="">{file.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

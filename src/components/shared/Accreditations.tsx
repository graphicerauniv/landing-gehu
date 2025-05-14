import ArrowUpRightIcon from "../../assets/icons/arrow-up-right.svg";
import ArrowUpIcon from "../../assets/icons/arrow-up.svg";
import ArrowDownIcon from "../../assets/icons/arrow-down.svg";

import acc2 from "../../assets/acc/acc2.svg";
import acc3 from "../../assets/acc/acc3.svg";
import acc4 from "../../assets/acc/acc4.svg";
import acc5 from "../../assets/acc/acc5.svg";
import acc6 from "../../assets/acc/acc6.svg";

const accreditationsDetails = [
    {
        heading: "NIRF Rankings",
        color: "bg-blue-950",
        image: acc2,
        details: {
            summary:
                "The National Institutional Ranking Framework (NIRF) is an annual ranking released by the Ministry of Education,",
            rest: "Government of India, and is an objective benchmark for quality Higher Education Institutions in India. NIRF 2024 Ranking has placed Graphic Era (Deemed to be University) among the Top 52 Universities of India, ranked in the Top 100 Universities of India for four years in a row. Graphic Era (Deemed to be University) was also ranked 52 amongst the Top Engineering Institutions of India and 59 among Top Management Institutions of India and was awarded All India Rank 79 in the Overall University category",
        },
    },
    {
        heading: "NBA Accredited Programs",
        color: "bg-blue-900",
        image: acc3,
        details: {
            summary:
                "Graphic Era (Deemed to be University) is the only University in the state of the Uttarakhand that has a total of 7 NBA Accredited",
            rest: "Programs, B. Tech Computer Science and Engineering, B. Tech Electronics and Communication Engineering, B. Tech Mechanical Engineering, B. Tech Biotech, B. Tech Civil Engineering, B. Tech Electrical Engineering and Masters of Business Administration",
        },
    },
    {
        heading: "NAAC A+ Accredited",
        color: "bg-red-900",
        image: acc4,
        details: {
            summary:
                "Graphic Era (Deemed to be University) was accredited by NAAC A+ in the year 2022. It is noteworthy that the University was Accredited",
            rest: "by NAAC with A grade since 2015 with the Highest Grade Score in the region.",
        },
    },
    {
        heading: "AICTE Approval",
        color: "bg-yellow-700",
        image: acc5,
        details: {
            summary:
                "Graphic Era (Deemed to be University) is approved by All India Council for Technical Education signifying the stringent academic ",
            rest: "practices followed for all technical courses falling under the ambit of AICTE Graphic Era is duly approved by the UGC and has been accorded the coveted Regularized Status by Ministry of Education, Government of India.",
        },
    },
    {
        heading: "UGC Approval",
        color: "bg-yellow-700",
        image: acc6,
        details: {
            summary:
                "Graphic Era (Deemed to be University) is approved by All India Council for Technical Education signifying the stringent academic ",
            rest: "practices followed for all technical courses falling under the ambit of AICTE Graphic Era is duly approved by the UGC and has been accorded the coveted Regularized Status by Ministry of Education, Government of India.",
        },
    },
];

const Accreditations = () => {
    return (
        <div className="my-20 max-w-6xl px-4 sm:mx-auto">
            <div className="grid gap-2 sm:grid-cols-3">
                <div className="flex items-end">
                    <h2 className="mb-6 flex flex-col gap-2 text-3xl font-semibold">
                        <img src={ArrowUpRightIcon.src} className="w-8" />
                        <span className="font-bold tracking-tight">
                            Accreditations
                        </span>
                        <span className="font-serif font-bold italic">
                            and Rankings
                        </span>
                    </h2>
                </div>
                {accreditationsDetails.map((accreditation) => (
                    <div
                        className={`-mt-0.5 -ml-0.5 rounded-lg border-2 border-zinc-200 bg-white px-6 py-8 text-neutral-700`}
                        key={accreditation.heading}
                    >
                        <img
                            src={accreditation.image.src}
                            alt={accreditation.heading}
                            className="h-16"
                        />
                        <h5 className="mt-6 mb-2 text-xl leading-tight font-semibold">
                            {accreditation.heading}
                        </h5>
                        <details className="group leading-tight">
                            <summary className="hover:font-medium">
                                {accreditation.details.summary}
                                <img
                                    src={ArrowDownIcon.src}
                                    className="ml-1 inline-block h-4 w-4 transition-transform group-open:hidden"
                                />
                            </summary>
                            <p className="relative inline-block">
                                {accreditation.details.rest}
                                <img
                                    src={ArrowUpIcon.src}
                                    className="ml-1 hidden h-4 w-4 transition-transform group-open:inline-block"
                                />
                            </p>
                        </details>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accreditations;

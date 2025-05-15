import { useState } from "react";
import React from "react";

import ChevronLeftIcon from "../../assets/icons/chevron-left.svg";
import ChevronRightIcon from "../../assets/icons/chevron-right.svg";
import ArrowDownIcon from "../../assets/icons/arrow-down.svg";
import ArrowUpIcon from "../../assets/icons/arrow-up.svg";

import keyHighlights1 from "../../assets/highlights/kh1.webp";
import keyHighlights2 from "../../assets/highlights/kh2.webp";
import keyHighlights3 from "../../assets/highlights/kh3.webp";
import keyHighlights4 from "../../assets/highlights/kh4.webp";
import keyHighlights5 from "../../assets/highlights/kh5.webp";
import keyHighlights6 from "../../assets/highlights/kh6.webp";

import type { ImageMetadata } from "astro";

type Highlight = {
    image: ImageMetadata;
    title: string;
    titleHighlight: string;
    summary: string;
    details: string;
};

const HIGHLIGHTS: Highlight[] = [
    {
        image: keyHighlights3,
        title: "Expert Faculty and",
        titleHighlight: "Specialized Learning",
        summary:
            "At GEHU, transformative education is driven by a team of world-class educators and industry veterans. Programs are taught by PhD holders, experienced researchers, and industry experts, many of whom are alumni of globally reputed institutions. Faculty members bring real-world insight, interdisciplinary knowledge, and hands-on learning methodologies to the classroom...",
        details:
            "This distinguished faculty base ensures students gain not only academic excellence, but also practical understanding aligned with current industry standards.",
    },
    {
        image: keyHighlights5,
        title: "Top Internships and",
        titleHighlight: "Exceptional Placement Opportunities",
        summary:
            "Graphic Era Hill University (GEHU) has built a strong reputation for delivering outstanding placement support and internship opportunities. In 2025, the university reached a remarkable milestone, with the highest placement package recorded at INR 61.99 LPA. GEHU continues to be a preferred destination for prestigious recruiters across industries such as technology, finance, e-commerce, and consulting...",
        details:
            "Top Recruiters Include: Amazon, Google, Atlassian, Flipkart, PayPal, Visa.",
    },
    {
        image: keyHighlights4,
        title: "Recognitions and",
        titleHighlight: "National Accolades",
        summary:
            "Graphic Era Hill University has earned prestigious national recognition for its commitment to innovation and excellence in education. The university has been ranked among the Top 10 Universities in Digital Initiatives by the Ministry of Human Resource Development (MHRD), Government of India, highlighting its proactive integration of technology in teaching, learning, and administration...",
        details:
            "Additionally, GEHU has been honored with the Best Upcoming Innovative University Award by the Corporate Council for Leadership and Awareness (CCLA). This accolade acknowledges the university's pioneering efforts in educational innovation, research, and global collaboration, establishing it as a rising leader in the Indian higher education landscape.",
    },
    {
        image: keyHighlights1,
        title: "Three Premier Campuses and",
        titleHighlight: "National Recognition",
        summary:
            "Graphic Era Hill University (GEHU) is a leading institution with a strong presence across three prime campuses located in Dehradun, Haldwani, and Bhimtal. All campuses are strategically positioned in accessible, vibrant locations that offer a perfect blend of academic focus and natural beauty. Notably, the Bhimtal campus has been recognized among the Top 11 most beautiful campuses in India...",
        details:
            "This prestigious honor reflects its scenic charm, state-of-the-art infrastructure, and holistic learning environment. GEHU continues to make headlines by consistently breaking placement records, with students securing positions in top multinational companies and leading Indian firms.",
    },
    {
        image: keyHighlights2,
        title: "Global Exposure and",
        titleHighlight: "International Reach",
        summary:
            "Graphic Era Hill University is deeply committed to equipping its students with global perspectives and cross-cultural learning experiences. The university hosts over 40 international interns and students on campus, fostering a diverse and inclusive academic environment. With a network of 20+ international partner universities, GEHU facilitates student exchange programs, dual degree opportunities, and collaborative research projects...",
        details:
            "Additionally, through its Global and Career Immersion Programs in more than 10 countries, students—particularly those enrolled in MBA and other postgraduate programs—gain valuable international exposure by travelling, learning, and interning abroad. These initiatives prepare students to thrive in a globally interconnected world.",
    },
];

const KeyHighlights = ({
    defaultHighlights = HIGHLIGHTS,
}: {
    defaultHighlights?: Highlight[];
}) => {
    const [highlights] = useState(defaultHighlights);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    const handleNextSlide = () => {
        if (isSliding) return;
        setIsSliding(true);
        setCurrentSlide((prev) => (prev + 1) % highlights.length);
        setTimeout(() => setIsSliding(false), 500);
    };

    const handlePrevSlide = () => {
        if (isSliding) return;
        setIsSliding(true);
        setCurrentSlide(
            (prev) => (prev - 1 + highlights.length) % highlights.length,
        );
        setTimeout(() => setIsSliding(false), 500);
    };

    return (
        <div className="my-20 max-w-6xl px-4 sm:mx-auto">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="flex gap-2 text-3xl font-bold tracking-tight">
                    <span>Key Highlights</span>
                </h2>
                {highlights.length > 3 && (
                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={handlePrevSlide}
                            disabled={isSliding}
                            className="rounded-xl border-2 border-zinc-200 bg-white p-2 font-semibold transition-all ease-in-out hover:scale-105 disabled:opacity-50"
                        >
                            <img
                                src={ChevronLeftIcon.src}
                                alt="Chevron Left"
                                className="h-6 w-6 text-neutral-700"
                            />
                        </button>
                        <button
                            type="button"
                            onClick={handleNextSlide}
                            disabled={isSliding}
                            className="rounded-xl border-2 border-zinc-200 bg-white p-2 font-semibold transition-all ease-in-out hover:scale-105 disabled:opacity-50"
                        >
                            <img
                                src={ChevronRightIcon.src}
                                alt="Chevron Right"
                                className="h-6 w-6 text-neutral-700"
                            />
                        </button>
                    </div>
                )}
            </div>

            <div className="relative overflow-hidden">
                <div
                    className="grid grid-cols-1 justify-between gap-6 transition-transform duration-500 ease-in-out sm:grid-cols-[100fr_1fr_100fr_1fr_100fr] sm:flex-row"
                    style={{
                        transform: isSliding
                            ? "translateX(-10px)"
                            : "translateX(0)",
                        opacity: isSliding ? 0.5 : 1,
                    }}
                >
                    {highlights
                        .slice(currentSlide, currentSlide + 3)
                        .map((highlight, index) => {
                            const uniqueKey =
                                String(highlight.title) + index.toString();
                            return (
                                <React.Fragment key={uniqueKey}>
                                    <div className="flex flex-col text-neutral-700">
                                        <img
                                            src={highlight.image.src}
                                            alt="Key Highlights"
                                            className="rounded-xl border-2 border-zinc-300 object-cover"
                                        />
                                        <div className="flex flex-col gap-2">
                                            <h4 className="mt-6 text-2xl font-semibold">
                                                {highlight.title}{" "}
                                                <span className="text-xl font-bold text-secondary">
                                                    {highlight.titleHighlight}
                                                </span>
                                            </h4>
                                            <details className="group leading-tight">
                                                <summary className="hover:font-medium">
                                                    {highlight.summary}
                                                    <img
                                                        src={ArrowDownIcon.src}
                                                        alt="Arrow Down"
                                                        className="ml-1 inline-block h-4 w-4 transition-transform group-open:hidden"
                                                    />
                                                </summary>
                                                <p className="relative inline-block">
                                                    {highlight.details}
                                                    <img
                                                        src={ArrowUpIcon.src}
                                                        alt="Arrow Up"
                                                        className="ml-1 hidden h-4 w-4 transition-transform group-open:inline-block"
                                                    />
                                                </p>
                                            </details>
                                        </div>
                                    </div>
                                    {index < 2 && (
                                        <div className="bg-gradient flex h-1 w-full rounded-lg sm:h-full sm:w-1 sm:bg-gradient-to-b" />
                                    )}
                                </React.Fragment>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default KeyHighlights;

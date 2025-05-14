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
        title: "Specialized Teaching from the",
        titleHighlight: "Best Experts in the Country",
        summary:
            "The academic rigor and the task of the creative transformation of an individual are the centre pieces of this program - both these targets are achievable only by ensuring just the right combination of teaching experts. Graphic Era ensures that students are taught by top faculty members in their respective fields, renowned for their excellence. ...",
        details:
            "This is evident across all domains, starting from the Program Head, who is a seasoned management professional holding an undergraduate degree from Graphic Era in engineering and advanced qualifications from a prestigious institution.",
    },
    {
        image: keyHighlights5,
        title: "Top Internships and",
        titleHighlight: "Placements",
        summary:
            "We have held great pride in being one of the first few private Universities in India who took on the task of ensuring Top of the Line placements for our students, and with MBA, we will write a new success story for the world to see. The University is equipped with one of the best placement teams in the country and this...",
        details:
            "has resulted in Top Placements for our Flagship Programs consistently over the year, with the highest package for the year 2023 under Brand Graphic Era currently sits at INR 84.88 Lacs (Domestic Package - CSE).",
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

import type { ReactNode } from "react";

import geuWhite from "../../assets/geu-white.svg";

const defaultContent = {
    title: "Admissions Open 2026",
    description:
        "Begin your Career at the university with consistently high placements records. Top recruiters include Amazon, Google, Atlassian, Flipkart, PayPal, Visa.",
};

const defaultStats = [
    {
        value: "61.99 Lacs",
        label: "Highest Placement",
    },
    {
        value: "2300+",
        withStar: true,
        label: "Campus Offers",
    },
];

interface HeroProps {
    campaignSource: string;
    content?: {
        title: string;
        description: string;
    };
    stats?: {
        value: string;
        label: string;
        withStar?: boolean;
    }[];
    children?: ReactNode;
}

const Hero = ({
    content = defaultContent,
    stats = defaultStats,
    children,
}: HeroProps) => {
    return (
        <div className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url('/lp/bg.webp')] bg-cover bg-center bg-no-repeat pb-12 sm:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.3),rgba(0,0,0,0.6)),url('/lp/bg.webp')] sm:pb-0">
            <div className="flex max-w-6xl flex-col items-center justify-between px-2 py-8 pt-20 text-white sm:mx-auto sm:flex-row">
                <img src={geuWhite.src} alt="GEU Logo" className="w-60" />
            </div>
            <div className="grid max-w-6xl grid-cols-1 items-center px-4 pt-12 sm:mx-auto sm:grid-cols-2 sm:items-end sm:px-2 sm:pt-4 sm:pb-24">
                <div className="mb-12 flex flex-col px-4 sm:mb-0 sm:px-0">
                    <h1 className="mb-4 font-serif text-5xl font-bold text-white italic">
                        {content.title}
                    </h1>
                    <p className="text-sm text-white sm:block">
                        {content.description}
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                        {stats.map((stat, index) => (
                            <div
                                key={`stat-${stat.value}-${index}`}
                                className="rounded-lg bg-white/20 px-4 py-2 backdrop-blur-sm"
                            >
                                <div className="flex items-center gap-1">
                                    <p className="text-xl font-bold text-white">
                                        {stat.value}
                                    </p>
                                    {stat.withStar && (
                                        <sup className="text-xs text-white/80">
                                            *
                                        </sup>
                                    )}
                                </div>
                                <p className="text-sm whitespace-pre-line text-white/80">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {children}
            </div>
        </div>
    );
};

export default Hero;

import { useEffect, useRef, useState } from "react";

import ArrowUpRightIcon from "../../assets/icons/arrow-up-right.svg";
import ChevronLeftIcon from "../../assets/icons/chevron-left.svg";
import ChevronRightIcon from "../../assets/icons/chevron-right.svg";

import autoAnimate from "@formkit/auto-animate";

import { cn } from "../../lib/utilities";

interface InfoCarouselProps {
    carouselItemsCount: number;
    imagesPath: string;
    link?: string;
}
export default function InfoCarousel({
    carouselItemsCount,
    imagesPath,
    link,
}: InfoCarouselProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const parentRef = useRef(null);
    useEffect(() => {
        parentRef.current && autoAnimate(parentRef.current);
    }, [parentRef]);

    // Calculate max slides based on total items
    const maxSlideIndex = Math.max(0, carouselItemsCount - 3);

    //Automatically shift the slides after 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => {
                const nextSlide = prev + 3;
                return nextSlide > maxSlideIndex ? 0 : nextSlide;
            });
        }, 5000);
        return () => clearInterval(interval);
    }, [maxSlideIndex]);

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => {
            const nextSlide = prev - 3;
            return nextSlide < 0 ? maxSlideIndex : nextSlide;
        });
    };

    const handleNextSlide = () => {
        setCurrentSlide((prev) => {
            const nextSlide = prev + 3;
            return nextSlide > maxSlideIndex ? 0 : nextSlide;
        });
    };

    return (
        <div className="relative w-full py-10">
            <div className="absolute inset-0 -z-10 opacity-10"></div>
            <div className="max-w-6xl sm:mx-auto">
                <h2 className="mb-6 flex flex-col gap-2 md:flex-row md:justify-between">
                    <span className="flex items-center gap-2 text-3xl font-bold tracking-tight">
                        Transforming Dreams{" "}
                        <span className="font-serif font-bold italic">
                            into Reality
                        </span>
                    </span>
                    <div className="mt-2 flex items-center gap-2 md:mt-0">
                        <button
                            onClick={handlePrevSlide}
                            className="rounded-xl border-2 border-secondary-light bg-white p-2 font-semibold transition-all ease-in-out hover:scale-105"
                            aria-label="Previous slides"
                        >
                            <img
                                src={ChevronLeftIcon.src}
                                className="h-6 w-6 text-neutral-700"
                            />
                        </button>
                        <button
                            onClick={handleNextSlide}
                            className="rounded-xl border-2 border-secondary-light bg-white p-2 font-semibold transition-all ease-in-out hover:scale-105"
                            aria-label="Next slides"
                        >
                            <img
                                src={ChevronRightIcon.src}
                                className="h-6 w-6 text-neutral-700"
                            />
                        </button>
                    </div>
                </h2>
                <div
                    ref={parentRef}
                    className="grid grid-cols-1 gap-2 md:grid-cols-3"
                >
                    {Array.from({ length: carouselItemsCount }).map(
                        (_, index) => (
                            <div
                                key={index}
                                className={cn(
                                    `relative overflow-hidden rounded-xl border-2 border-secondary-light bg-white`,
                                    {
                                        "block h-auto w-full opacity-100":
                                            index >= currentSlide &&
                                            index < currentSlide + 3,
                                        "mb-2 md:mr-2 md:mb-0":
                                            index === currentSlide ||
                                            index === currentSlide + 1,
                                        hidden:
                                            index < currentSlide ||
                                            index >= currentSlide + 3,
                                    },
                                )}
                            >
                                <img
                                    className={cn(
                                        "h-full w-full object-cover transition-opacity duration-300",
                                        {
                                            "cursor-pointer": link,
                                        },
                                    )}
                                    onClick={() => {
                                        if (link) {
                                            window.open(link, "_blank");
                                        }
                                    }}
                                    src={`/lp/${imagesPath}/${index + 1}.jpg`}
                                    alt={`${imagesPath}-${index + 1}`}
                                    loading="lazy"
                                />
                            </div>
                        ),
                    )}
                </div>
            </div>
        </div>
    );
}

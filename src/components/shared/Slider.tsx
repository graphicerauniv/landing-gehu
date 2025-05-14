import { useEffect, useState } from "react";
import type { FC } from "react";
import ReactSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderProps {
    path: string;
    count: number;
    link?: string;
    imageFormat?: string;
}

const SliderComponent: FC<SliderProps> = ({
    path,
    count,
    link,
    imageFormat = "webp",
}) => {
    const [matches, setMatches] = useState(false);
    const SLIDES_COUNT = count;

    useEffect(() => {
        const media = window.matchMedia("(min-width: 960px)");
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, [matches]);

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 1300,
        slidesToShow: 1,
        autoplaySpeed: 4000,
        autoplay: true,
        pauseOnHover: false,
        slidesToScroll: 1,
    };
    return (
        <>
            {!matches ? (
                <div className="">
                    <ReactSlider {...settings}>
                        {Array(SLIDES_COUNT)
                            .fill(null)
                            .map((_, i) => (
                                <div key={`m-${i}`}>
                                    <img
                                        style={{
                                            cursor: link
                                                ? "pointer"
                                                : "default",
                                        }}
                                        onClick={() => {
                                            if (link) {
                                                window.open(link, "_blank");
                                            }
                                        }}
                                        src={`/lp/${path}/mobile/${i + 1}.${imageFormat}`}
                                        alt={path}
                                    />
                                </div>
                            ))}
                    </ReactSlider>
                </div>
            ) : (
                <div className="">
                    <ReactSlider {...settings}>
                        {Array(SLIDES_COUNT)
                            .fill(null)
                            .map((_, i) => (
                                <div key={`m-${i}`}>
                                    <img
                                        style={{
                                            cursor: link
                                                ? "pointer"
                                                : "default",
                                        }}
                                        onClick={() => {
                                            if (link) {
                                                window.open(link, "_blank");
                                            }
                                        }}
                                        src={`/lp/${path}/desktop/${i + 1}.${imageFormat}`}
                                        alt={path}
                                    />
                                </div>
                            ))}
                    </ReactSlider>
                </div>
            )}
        </>
    );
};

export default SliderComponent;

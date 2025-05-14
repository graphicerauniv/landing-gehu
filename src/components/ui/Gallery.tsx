import { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";

import ArrowRightIcon from "../../assets/icons/arrow-right.svg";
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg";
import XCircleIcon from "../../assets/icons/x-circle.svg";

const highResPics = [
    "https://files.geu.ac.in/lp/impact/Admin-Block1.webp",
    "https://files.geu.ac.in/lp/impact/Guest-House2.webp",
    "https://files.geu.ac.in/lp/impact/Hostel3.webp",
    "https://files.geu.ac.in/lp/impact/Prof-KP-Nautiyal-Block4.webp",
    "https://files.geu.ac.in/lp/impact/Chanakya-Block5.webp",
    "https://files.geu.ac.in/lp/impact/CSIT-Block6.webp",
    "https://files.geu.ac.in/lp/impact/Library7.webp",
];

const Gallery = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback((index: number) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <section className="">
            {isViewerOpen && (
                <ImageViewer
                    src={highResPics}
                    currentIndex={currentImage}
                    disableScroll={false}
                    closeOnClickOutside={true}
                    onClose={closeImageViewer}
                    backgroundStyle={{
                        backgroundColor: "rgba(0,0,0,0.9)",
                    }}
                    rightArrowComponent={
                        <img src={ArrowRightIcon.src} className="w-12" />
                    }
                    leftArrowComponent={
                        <img src={ArrowLeftIcon.src} className="w-12" />
                    }
                    closeComponent={
                        <img src={XCircleIcon.src} className="w-12" />
                    }
                />
            )}
            <div className="mx-auto flex max-w-6xl flex-col gap-4">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-[5fr_3fr_8fr]">
                    <div className="max-h-60 overflow-hidden rounded-xl border-4 border-white">
                        <img
                            onClick={() => openImageViewer(0)}
                            className="h-full w-full cursor-pointer object-cover object-center transition-all duration-300 ease-in-out hover:scale-110"
                            src={highResPics[0]}
                            alt="Admin Block"
                        />
                    </div>
                    <div className="max-h-60 overflow-hidden rounded-xl border-4 border-white">
                        <img
                            onClick={() => openImageViewer(1)}
                            className="h-full w-full cursor-pointer object-cover object-center transition-all duration-300 ease-in-out hover:scale-110"
                            src={highResPics[1]}
                            alt="Guest House"
                        />
                    </div>
                    <div className="col-span-2 max-h-60 overflow-hidden rounded-xl border-4 border-white sm:col-auto">
                        <img
                            onClick={() => openImageViewer(2)}
                            className="h-full w-full cursor-pointer object-cover object-center transition-all duration-300 ease-in-out hover:scale-110"
                            src={highResPics[2]}
                            alt="Hostel"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-[2fr_3fr] gap-4 sm:grid-cols-[6fr_9fr_4fr_7fr]">
                    <div className="max-h-60 overflow-hidden rounded-xl border-4 border-white">
                        <img
                            onClick={() => openImageViewer(3)}
                            className="h-full w-full cursor-pointer object-cover object-center transition-all duration-300 ease-in-out hover:scale-110"
                            src={highResPics[3]}
                            alt="Prof K P Nautiyal Block"
                        />
                    </div>
                    <div className="max-h-60 overflow-hidden rounded-xl border-4 border-white">
                        <img
                            onClick={() => openImageViewer(4)}
                            className="h-full w-full cursor-pointer object-cover object-center transition-all duration-300 ease-in-out hover:scale-110"
                            src={highResPics[4]}
                            alt="Chanakya Block"
                        />
                    </div>
                    <div className="max-h-60 overflow-hidden rounded-xl border-4 border-white">
                        <img
                            onClick={() => openImageViewer(5)}
                            className="h-full w-full cursor-pointer object-cover object-center transition-all duration-300 ease-in-out hover:scale-110"
                            src={highResPics[5]}
                            alt="CSIT Block"
                        />
                    </div>
                    <div className="max-h-60 overflow-hidden rounded-xl border-4 border-white">
                        <img
                            onClick={() => openImageViewer(6)}
                            className="h-full w-full cursor-pointer object-cover object-center transition-all duration-300 ease-in-out hover:scale-110"
                            src={highResPics[6]}
                            alt="Library"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;

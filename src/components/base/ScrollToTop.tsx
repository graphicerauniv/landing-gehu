import ChevronUpIcon from "../../assets/icons/chevron-up.svg";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <button
            onClick={() => {
                window.scrollTo(0, 0);
            }}
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className={`${
                isVisible ? "visible" : "invisible"
            } fixed right-5 bottom-5 z-50 inline-block cursor-pointer rounded-full bg-primary p-3 text-xs leading-tight font-medium text-white uppercase shadow-md transition duration-150 ease-in-out hover:bg-primary-dark hover:shadow-lg focus:bg-primary-dark focus:ring-0 focus:shadow-lg focus:outline-none active:bg-primary-darker active:shadow-lg`}
            id="btn-back-to-top"
        >
            <img src={ChevronUpIcon.src} className="h-5 w-5" />
        </button>
    );
};

export default ScrollToTop;

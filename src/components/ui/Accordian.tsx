import { useState } from "react";
import PlusIcon from "../../assets/icons/plus.svg";
import MinusIcon from "../../assets/icons/minus.svg";

interface AccordionProps {
    title: string;
    content: string;
}

export default function Accordion({ title, content }: AccordionProps) {
    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = () => setExpanded((current) => !current);

    return (
        <div className="mt-4 cursor-pointer" onClick={toggleExpanded}>
            <div className="flex flex-row items-center justify-between rounded-md bg-neutral-100 px-6 py-3 text-left font-semibold select-none">
                <h5 className="text-lg">{title}</h5>
                <div>
                    {expanded ? (
                        <img src={MinusIcon.src} className="w-4" />
                    ) : (
                        <img src={PlusIcon.src} className="w-4" />
                    )}
                </div>
            </div>
            <div
                className={`overflow-hidden rounded-md px-6 pt-0 transition-[max-height] duration-500 ease-in-out ${
                    expanded ? "max-h-40" : "max-h-0"
                }`}
            >
                <p className="mt-3 mb-4 font-medium text-zinc-700">{content}</p>
            </div>
        </div>
    );
}

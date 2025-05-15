import PNG_adobe from "../../assets/companies/adobe.png";
import PNG_amazon from "../../assets/companies/amazon.png";
import PNG_american_express from "../../assets/companies/american_express.png";
import PNG_paypal from "../../assets/companies/paypal.svg";
import PNG_bny from "../../assets/companies/bny.png";
import PNG_dbank from "../../assets/companies/dbank.png";
import PNG_deshaw from "../../assets/companies/deshaw.png";
import PNG_flipkart from "../../assets/companies/flipkart.png";
import PNG_goldman from "../../assets/companies/goldman.png";
import PNG_google from "../../assets/companies/google.png";
import PNG_informatica from "../../assets/companies/informatica.png";
import PNG_microsoft from "../../assets/companies/microsoft.png";
import PNG_morgan_stanley from "../../assets/companies/morgan_stanley.png";
import PNG_nasdaq from "../../assets/companies/nasdaq.png";
import PNG_uber from "../../assets/companies/uber.png";
import PNG_zscaler from "../../assets/companies/zscaler.png";
import PNG_volvo from "../../assets/companies/volvo.png";
import PNG_many_more from "../../assets/companies/many_more.png";

import InfoCarousel from "../ui/InfoCarousel";

const placementStatsBig = {
    title: "2300+",
    subtitle: "Offers Above",
    description:
        "Placements are at the core of University Education, especially in a rapidly growing country like India. Graphic Era Hill University has earned widespread recognition since its establishment for maintaining an exceptional track record of consistently high student placements. At Graphic Era Hill University, we prioritize the preparation of our students for placements.",
};

const companies = [
    {
        name: "Adobe",
        logo: PNG_adobe.src,
    },
    {
        name: "Amazon",
        logo: PNG_amazon.src,
    },
    {
        name: "American Express",
        logo: PNG_american_express.src,
    },
    {
        name: "PayPal",
        logo: PNG_paypal.src,
    },
    {
        name: "BNY",
        logo: PNG_bny.src,
    },
    {
        name: "DBank",
        logo: PNG_dbank.src,
    },
    {
        name: "Deshaw",
        logo: PNG_deshaw.src,
    },
    {
        name: "Flipkart",
        logo: PNG_flipkart.src,
    },
    {
        name: "Goldman",
        logo: PNG_goldman.src,
    },
    {
        name: "Google",
        logo: PNG_google.src,
    },
    {
        name: "Informatica",
        logo: PNG_informatica.src,
    },
    {
        name: "Microsoft",
        logo: PNG_microsoft.src,
    },
    {
        name: "Morgan Stanley",
        logo: PNG_morgan_stanley.src,
    },
    {
        name: "NASDAQ",
        logo: PNG_nasdaq.src,
    },
    {
        name: "Uber",
        logo: PNG_uber.src,
    },
    {
        name: "Zscaler",
        logo: PNG_zscaler.src,
    },
    {
        name: "Volvo",
        logo: PNG_volvo.src,
    },
    {
        name: "Many More",
        logo: PNG_many_more.src,
    },
];

const placementStats = [
    {
        title: "61.99L",
        subtitle: "Package",
        subtitle2: "Highest of",
        subtitle3: "the Year",
    },
    {
        title: "10",
        subtitle: "Offers",
        subtitle2: "40 Lakh",
        subtitle3: "plus —",
    },
    {
        title: "18",
        subtitle: "Offers",
        subtitle2: "30 Lakh",
        subtitle3: "plus —",
    },
    {
        title: "33",
        subtitle: "Offers",
        subtitle2: "15 Lakh",
        subtitle3: "plus —",
    },
    {
        title: "123",
        subtitle: "Offers",
        subtitle2: "9 Lakh",
        subtitle3: "plus —",
    },
    {
        title: "5L+",
        subtitle: "Package",
        subtitle2: "Average",
        subtitle3: "Last Year",
    },
    {
        title: "70K+",
        subtitle: "Alumni",
        subtitle2: "Network",
        subtitle3: "Strong",
    },
    {
        title: "50+",
        subtitle: "Students",
        subtitle2: "Pursuing Internships ",
        subtitle3: "with Top Global MNCs",
    },
];

export default function PlacementStats() {
    return (
        <div className="relative w-full py-20">
            <div className="bg-gradient absolute inset-0 -z-10 opacity-10" />
            <div className="max-w-6xl px-4 sm:mx-auto">
                <h2 className="mb-6 flex gap-2 text-3xl font-semibold">
                    {/* <ArrowUpRightIcon className="w-8" /> */}
                    <span className="font-bold tracking-tight">
                        Placements&apos; 24-25{" "}
                        <span className="font-serif font-bold italic">
                            at Graphic Era
                        </span>
                    </span>
                </h2>
                <div className="flex flex-col gap-2 text-neutral-700">
                    <div className="my-4">
                        <div className="flex items-start">
                            <div className="text-5xl font-bold tracking-tighter text-secondary">
                                {placementStatsBig.title}{" "}
                            </div>
                            <div className="text-xl text-secondary-dark">*</div>
                        </div>
                        <div className="text-lg font-semibold text-neutral-900">
                            {placementStatsBig.subtitle}
                        </div>
                        <div>{placementStatsBig.description}</div>
                        <div className="mt-1 text-sm">
                            *The above stats are combined for all the campuses
                            under the Brand Graphic Era and the stats are
                            subject to change as the placement session is still
                            going on.{" "}
                            <span className="italic">
                                Last Updated: 09 January, 2025
                            </span>
                        </div>
                    </div>
                    <div className="bg-opacity-30 h-0.5 w-full bg-secondary-light" />
                    <div className="my-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                        {placementStats.map((item, index) => (
                            <div
                                key={`${index}-${item.title}`}
                                className="rounded-xl border-2 border-zinc-200 bg-white p-5"
                            >
                                <div className="flex flex-col gap-2 md:flex-row md:items-end">
                                    <div className="text-4xl font-bold tracking-tight text-secondary-dark">
                                        {item.title}
                                    </div>
                                    <div className="text-[19px] font-semibold tracking-tight text-neutral-900">
                                        {item.subtitle}
                                    </div>
                                </div>
                                <div className="mt-2 border-t-2 border-zinc-200 pt-2">
                                    <span className="text-lg font-semibold text-neutral-800">
                                        {item.subtitle2}
                                    </span>{" "}
                                    <span className="text text-neutral-900">
                                        {item.subtitle3}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <InfoCarousel
                        carouselItemsCount={37}
                        imagesPath={"placements"}
                    />
                    <div className="bg-opacity-30 h-0.5 w-full bg-secondary-light" />
                    <div className="my-8 grid grid-cols-2 gap-4 md:grid-cols-6">
                        {companies.map((item, index) => (
                            <div
                                key={`${index}-${item.name}`}
                                className="flex flex-col items-center gap-2 rounded-xl border-2 border-secondary-light bg-white p-5"
                            >
                                <img
                                    src={item.logo}
                                    alt={item.name}
                                    className="w-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

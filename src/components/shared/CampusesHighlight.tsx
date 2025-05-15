import dehradunCampus from "../../assets/campuses/dehradun.webp";
import haldwaniCampus from "../../assets/campuses/haldwani.webp";
import bhimtalCampus from "../../assets/campuses/bhimtal.webp";

type Campus = {
    name: string;
    image: any;
    title: string;
    titleHighlight: string;
    description: string;
    features: string[];
};

const CAMPUSES: Campus[] = [
    {
        name: "Dehradun",
        image: dehradunCampus,
        title: "Capital City",
        titleHighlight: "Campus",
        description:
            "Located in the scenic valley of Dehradun, our flagship campus combines modern architecture with expansive green spaces, providing an ideal academic environment.",
        features: [
            "Advanced academic facilities",
            "Diverse academic programs",
            "Vibrant campus life",
            "Scenic and accessible location",
        ],
    },
    {
        name: "Haldwani",
        image: haldwaniCampus,
        title: "Gateway to",
        titleHighlight: "Kumaon",
        description:
            "Situated in the vibrant city of Haldwani, this campus offers a perfect blend of urban accessibility and academic excellence in the foothills of the Himalayas.",
        features: [
            "Modern infrastructure",
            "Urban and natural blend",
            "Diverse academic programs",
            "Active student life",
        ],
    },
    {
        name: "Bhimtal",
        image: bhimtalCampus,
        title: "Lakeside",
        titleHighlight: "Paradise",
        description:
            "Our Bhimtal campus, recognized among India's most beautiful campuses, offers a serene lakeside setting that inspires creativity and intellectual growth.",
        features: [
            "Picturesque setting",
            "Comprehensive facilities",
            "Diverse course offerings",
            "Engaging student activities",
        ],
    },
];

const CampusesHighlight = () => {
    return (
        <div className="my-20 max-w-6xl px-4 sm:mx-auto">
            <h2 className="mb-8 flex gap-2 text-3xl font-bold tracking-tight">
                Our Campuses
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {CAMPUSES.map((campus) => (
                    <div
                        key={campus.name}
                        className="overflow-hidden rounded-xl border-2 border-zinc-200 bg-white transition-all"
                    >
                        <div className="relative h-56 overflow-hidden">
                            <img
                                src={campus.image.src}
                                alt={`${campus.name} Campus`}
                                className="h-full w-full object-cover transition-transform duration-500"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-6 py-4">
                                <h3 className="font-sans text-3xl font-bold text-white">
                                    {campus.name}
                                </h3>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="mb-4">
                                <h4 className="text-xl font-semibold text-neutral-700">
                                    {campus.title}{" "}
                                    <span className="font-serif font-bold text-secondary italic">
                                        {campus.titleHighlight}
                                    </span>
                                </h4>
                                <p className="mt-2 text-neutral-600">
                                    {campus.description}
                                </p>
                            </div>

                            {/* divider */}
                            <div className="h-0.5 w-full bg-secondary opacity-15" />

                            <div className="mt-6">
                                <h5 className="mb-2 text-sm font-semibold tracking-wider text-secondary uppercase">
                                    Campus Highlights
                                </h5>
                                <ul className="">
                                    {campus.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center text-sm text-neutral-700"
                                        >
                                            <span className="mr-2 text-xs text-secondary">
                                                •
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CampusesHighlight;

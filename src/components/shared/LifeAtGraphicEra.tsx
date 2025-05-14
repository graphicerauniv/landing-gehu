import Gallery from "../ui/Gallery";

const videos = [
    {
        link: "https://www.youtube.com/embed/m3Ot4fWaj5U",
    },
    {
        link: "https://www.youtube.com/embed/ACX5kBzFHMM",
    },
    {
        link: "https://www.youtube.com/embed/0uHjyg6CdJo",
    },
];

export default function LifeAtGraphicEra() {
    return (
        <div className="relative w-full py-20">
            <div className="bg-gradient absolute inset-0 -z-10 opacity-10"></div>
            <div className="max-w-6xl px-4 sm:mx-auto">
                <h2 className="mb-6 flex flex-col gap-2 md:flex-row md:justify-between">
                    <span className="text-3xl font-bold tracking-tight">
                        Life{" "}
                        <span className="font-serif font-bold italic">
                            at Graphic Era
                        </span>
                    </span>
                    <div className="mt-2 flex flex-col items-start gap-2 md:mt-0 md:flex-row md:items-center">
                        <button
                            onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                });
                            }}
                            // className="rounded-md border-2 border-zinc-200 bg-white p-2 px-6 font-semibold transition-all ease-in-out hover:scale-105"
                            className="bg-gradient rounded-md border-2 border-zinc-200 p-2 px-6 font-semibold text-white transition-all ease-in-out hover:scale-105"
                        >
                            Join Us for{" "}
                            <span className="font-serif font-bold italic">
                                Admissions &apos;
                                {new Date().getFullYear().toString().slice(2)}
                            </span>
                        </button>
                        {/* <a
                            href="https://geu.ac.in/campus-tour/"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-gradient rounded-md border-2 border-zinc-200 p-2 px-6 font-semibold text-white transition-all ease-in-out hover:scale-105"
                        >
                            360 ° Campus Tour
                        </a> */}
                    </div>
                </h2>

                <div className="mt-8 mb-4 text-neutral-700">
                    Catch a glimpse of the most happening campus around, not
                    just because of the modern and vibrant architecture taking
                    you away from the conventional feel of boxy concrete blocks,
                    but because of all Graphians who actually make you feel like
                    home.
                </div>

                {/* Spacer */}
                <div className="bg-gradient h-0.5 w-full opacity-50"></div>

                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                    {videos.map((item, index) => (
                        <div
                            key={`${index}-${item.link}`}
                            className="overflow-hidden rounded-xl border-2 border-zinc-200 bg-white"
                        >
                            <iframe
                                width="370"
                                height="250"
                                src={item.link}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ))}
                </div>

                {/* Spacer */}
                <div className="bg-gradient my-10 h-0.5 w-full opacity-50"></div>

                <Gallery />
            </div>
        </div>
    );
}

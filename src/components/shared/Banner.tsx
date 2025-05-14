interface BannerProps {
    tagline?: string;
    title?: string;
    highlightText?: string;
    universityName?: string;
    buttonText?: string;
}

export default function Banner({
    tagline = "Unleash Your Potential!",
    title = "Discover",
    highlightText = "Your Future",
    universityName = "at Graphic Era Hill University",
    buttonText = "Admissions",
}: BannerProps) {
    return (
        <div className="bg-secondary">
            <div className="max-w-6xl px-4 py-12 sm:mx-auto">
                <div className="font-serif text-xl font-bold text-white italic opacity-90">
                    {tagline}
                </div>
                <h2 className="mt-2 text-3xl font-semibold text-white">
                    {title}{" "}
                    <span className="font-bold tracking-tight text-white opacity-80">
                        {highlightText}
                    </span>{" "}
                    {universityName}
                </h2>
                <div className="mt-8 flex flex-col justify-end gap-4 sm:flex-row sm:items-center">
                    <button
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            });
                        }}
                        className="rounded-md border-2 border-secondary-light bg-white p-2 px-6 font-bold transition-all ease-in-out hover:scale-105 hover:bg-secondary-dark hover:text-white"
                    >
                        {buttonText}{" "}
                        <span className="font-serif text-lg font-bold italic">
                            {new Date().getFullYear()}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

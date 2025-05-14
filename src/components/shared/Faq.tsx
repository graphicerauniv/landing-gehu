import Accordion from "../ui/Accordian";

interface FaqProps {
    faqs: { title: string; content: string }[];
}

const Faq = ({ faqs }: FaqProps) => {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <h2 className="mb-6 flex gap-2 text-3xl font-semibold">
                    <span>Frequently Asked Questions</span>
                </h2>
                <div className="mt-4 flex flex-col">
                    {faqs.map((item, index) => (
                        <Accordion
                            key={index}
                            title={item.title}
                            content={item.content}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;

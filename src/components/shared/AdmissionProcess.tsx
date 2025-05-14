interface AdmissionProcessProps {
    process?: {
        heading: string;
        description: string;
    }[];
}
export default function AdmissionProcess({ process }: AdmissionProcessProps) {
    return (
        <div className="my-20 max-w-6xl px-4 sm:mx-auto">
            <h2 className="mb-6 flex gap-2 text-3xl font-bold tracking-tight">
                Admission Process
            </h2>
            <div className="flex flex-col gap-2 text-neutral-700">
                <ul>
                    {process ? (
                        process.map((step, index) => (
                            <li className="mb-2 flex gap-2 border-b border-neutral-200 pb-2">
                                <div className="text-lg font-semibold text-neutral-900">
                                    {index + 1}.
                                </div>
                                <div>
                                    <strong>{step.heading}</strong> -{" "}
                                    {step.description}
                                </div>
                            </li>
                        ))
                    ) : (
                        <>
                            <li className="mb-2 flex gap-2 border-b border-neutral-200 pb-2">
                                <div className="text-lg font-semibold text-neutral-900">
                                    1.
                                </div>
                                <div>
                                    <strong>Application Form</strong> -
                                    Candidates can apply for admission to
                                    Graphic Era (Deemed to be University) by
                                    filling out the online application form
                                    available on the university&apos;s website.
                                    The application form usually requires
                                    candidates to provide personal and academic
                                    details, as well as upload scanned copies of
                                    relevant documents
                                </div>
                            </li>
                            <li className="mb-2 flex gap-2 border-b border-neutral-200 pb-2">
                                <div className="text-lg font-semibold text-neutral-900">
                                    2.
                                </div>
                                <div>
                                    <strong>Entrance exam</strong> - Depending
                                    on the program applied for, candidates may
                                    be required to appear for an entrance exam
                                    such as the JEE Main, CAT, MAT, XAT, or NATA
                                </div>
                            </li>
                            <li className="mb-2 flex gap-2 border-b border-neutral-200 pb-2">
                                <div className="text-lg font-semibold text-neutral-900">
                                    3.
                                </div>
                                <div>
                                    <strong>Shortlisted candidates</strong> - To
                                    be called for a personal interview, which
                                    may be conducted through online or
                                    in-person. The interview is usually aimed at
                                    assessing the candidate&apos;s suitability
                                    for the program applied for
                                </div>
                            </li>
                            <li className="mb-2 flex gap-2 border-b border-neutral-200 pb-2">
                                <div className="text-lg font-semibold text-neutral-900">
                                    4.
                                </div>
                                <div>
                                    <strong>Personal Interview</strong> - Based
                                    on the candidate&apos;s performance in the
                                    entrance exam and personal interview, the
                                    university will offer admission to selected
                                    candidates.
                                </div>
                            </li>
                            <li className="mb-2 flex gap-2 border-b border-neutral-200 pb-2">
                                <div className="text-lg font-semibold text-neutral-900">
                                    5.
                                </div>
                                <div>
                                    <strong>Offer of Admission</strong> - The
                                    offer of admission will usually be
                                    communicated through a call, email, or post.
                                    Candidates who are offered admission must
                                    confirm their acceptance by paying the
                                    requisite admission fee and submitting all
                                    relevant documents
                                </div>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
}

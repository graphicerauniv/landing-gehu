export default function ScholarshipProcess() {
    return (
        <div className="my-20 max-w-6xl px-4 sm:mx-auto">
            <h2 className="mb-6 flex gap-2 text-3xl font-semibold">
                <span className="font-bold tracking-tight">
                    Application Process
                </span>
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="flex flex-col gap-2 text-neutral-700">
                    <h2 className="mb-2 text-xl font-bold tracking-tight">
                        Online Application
                    </h2>
                    <ul>
                        <li className="mb-2 flex gap-2 border-b border-neutral-200 pb-2">
                            <div className="text-lg text-neutral-900">1.</div>
                            <div>
                                <strong>Initiate Process</strong> - Candidates
                                can initiate the online application process by
                                visiting the official website GECET.geu.ac.in.
                            </div>
                        </li>
                        <li className="mb-2 flex gap-2 border-b border-neutral-200 pb-2">
                            <div className="text-lg text-neutral-900">2.</div>
                            <div>
                                <strong>Eligibility</strong> - Upon payment of
                                the admission application fee of INR 1500,
                                candidates automatically become eligible for
                                GECET.
                            </div>
                        </li>
                        <li className="mb-2 flex gap-2 border-b border-neutral-200 pb-2">
                            <div className="text-lg text-neutral-900">3.</div>
                            <div>
                                <strong>Application Options</strong> - The
                                application can be completed either through the
                                dedicated GECET portal or through the regular
                                application portals at geu.ac.in or gehu.ac.in,
                                depending on the candidate&apos;s preference.
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2 text-neutral-700">
                    <h2 className="mb-2 text-xl font-bold tracking-tight">
                        Offline Application
                    </h2>
                    <li className="mb-2 flex gap-2 border-b border-neutral-200 pb-2">
                        <div className="text-lg text-neutral-900">1.</div>
                        <div>
                            <strong>Offline Application</strong> - Offline
                            applications can be purchased or filled out at any
                            of the Graphic Era Hill University campuses or
                            admissions centers for the same cost of INR 1500.
                        </div>
                    </li>
                    <li className="mb-2 flex gap-2 border-b border-neutral-200 pb-2">
                        <div className="text-lg text-neutral-900">2.</div>
                        <div>
                            <strong>Application Requirements</strong> -
                            Candidates must fill out the online application,
                            upload a scanned copy of the offline application
                            form, and include the custom Serial Number printed
                            on the form.
                        </div>
                    </li>
                    <li className="mb-2 flex gap-2 border-b border-neutral-200 pb-2">
                        <div className="text-lg text-neutral-900">3.</div>
                        <div>
                            <strong>Fee Exemption</strong> - As the admission
                            fee of INR 1500 is already paid during the purchase
                            of the offline application, it does not need to be
                            paid again during the online submission.
                        </div>
                    </li>
                </div>
            </div>
        </div>
    );
}

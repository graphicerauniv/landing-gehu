import { useState } from "react";
import { Formik, Form, Field } from "formik";
import type { FormikHelpers } from "formik";
import * as Yup from "yup";
import { cn } from "../../lib/utilities";
import type { FormValues, MessageSentState } from "../../types";
import {
    getUTMParams,
    prepareERPData,
    trackFormSubmission,
} from "../../lib/form";

import ExclamationTriangleIcon from "../../assets/icons/exclamation-triangle.svg";
import CheckCircleIcon from "../../assets/icons/check-circle.svg";
import ExclamationCircleIcon from "../../assets/icons/exclamation-circle.svg";
import geuWhite from "../../assets/geu-white.svg";

import { DEPARTMENTS, PLACES } from "../../data/static";

const OTP_API_URL = "https://geu.ac.in/mcc/api";

const formSchema = Yup.object().shape({
    campus: Yup.string().required("Campus is Required"),
    from_name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .matches(/^[a-zA-Z\s]+$/, "Full Name is not valid")
        .required("Full Name is Required"),
    from_email: Yup.string()
        .email("Invalid Email")
        .required("Email is Required"),
    phone_number: Yup.string()
        .required("Phone Number is required")
        .matches(/^[0-9]{7,10}$/, "Phone number must be 7-10 digits")
        .matches(/^[0-9]+$/, "Phone number is not valid"),
    phoneOtp: Yup.string().optional(),
    state: Yup.string().required("State is Required"),
    city: Yup.string().required("City is Required"),
    department: Yup.string().required("Department is Required"),
    course: Yup.string().required("Course is Required"),
    slot: Yup.string().optional(),
    date: Yup.string().optional(),
    cgs_name: Yup.string().optional(),
});

const defaultContent = {
    title: "Admissions Open 2025",
    description:
        "Begin your Career at the university with consistently high placements records. Top recruiters include Amazon, Google, Atlassian, Flipkart, PayPal, Visa.",
};
const defaultStats = [
    {
        value: "₹47.88 Lacs",
        label: "Highest Placement",
    },
    {
        value: "2300+",
        label: "Campus Offers",
    },
];

//CGS
const CGS_DATES = {
    May10: "May 10, 2025",
    May11: "May 11, 2025",
};
const CGS_DETAILS = [
    { value: "CGS-Chandigarh", date: CGS_DATES.May11, desc: "Chandigarh" },
    { value: "CGS-New-Delhi", date: CGS_DATES.May11, desc: "New Delhi" },
    { value: "CGS-Ghaziabad", date: CGS_DATES.May10, desc: "Ghaziabad" },
    { value: "CGS-Gurugram", date: CGS_DATES.May11, desc: "Gurugram" },
    { value: "CGS-Ludhiana", date: CGS_DATES.May11, desc: "Ludhiana" },
    { value: "CGS-Meerut", date: CGS_DATES.May10, desc: "Meerut" },
];

interface HeroProps {
    campaignSource: string;
    content?: {
        title: string;
        description: string;
    };
    stats?: {
        value: string;
        label: string;
    }[];
    defaultStateAndCity?: {
        state: string;
        city: string;
        hidden: boolean;
    };
    defaultDepartmentAndCourse?: {
        department: string;
        course: string;
        hidden: boolean;
    };
    fixState?: boolean;
    fixCity?: boolean;
    isTakingSlot?: boolean;
    internationalCode?: string;
    autoCloseOn?: Date;
    displayCGS?: boolean;
    customStatesOnly?: string[];
    places?: {
        state: string;
        cities: string[];
    }[];
}

const Hero = ({
    content = defaultContent,
    stats = defaultStats,
    defaultStateAndCity = {
        state: "Uttarakhand",
        city: "Dehradun",
        hidden: false,
    },
    defaultDepartmentAndCourse = {
        department: "Computer Science Engineering-GEU",
        course: "B.Tech Computer Science & Engineering (CSE)",
        hidden: false,
    },
    fixState = false,
    fixCity = false,
    internationalCode,
    isTakingSlot = false,
    campaignSource,
    autoCloseOn,
    displayCGS = false,
    customStatesOnly = [],
    places = PLACES,
}: HeroProps) => {
    const [messageSentState, setMessageSentState] = useState<MessageSentState>({
        success: false,
        error: false,
    });
    const [phoneOtpSent, setPhoneOtpSent] = useState<boolean>(false);
    const [phoneVerified, setPhoneVerified] = useState<boolean>(false);
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [otpError, setOtpError] = useState<string>("");

    // Check if form is closed based on autoCloseOn date
    const isFormClosed = autoCloseOn ? new Date() > autoCloseOn : false;

    const initialValues: FormValues = {
        campus: "Dehradun",
        from_name: "",
        from_email: "",
        phone_number: "",
        phoneOtp: "",
        state: defaultStateAndCity.state,
        city: defaultStateAndCity.city,
        department: defaultDepartmentAndCourse.department,
        course: defaultDepartmentAndCourse.course,
        slot: isTakingSlot ? "Slot4" : "",
        cgs_date: displayCGS ? Object.values(CGS_DATES)[0] : "",
        cgs_name: displayCGS ? CGS_DETAILS[0].value : "",
    };

    const handleSendOTP = async (
        values: FormValues,
        setFieldError: (field: string, message: string) => void,
    ) => {
        const phoneNumber = values.phone_number;
        if (!phoneNumber || phoneNumber.length < 7) {
            setFieldError("phone_number", "Please enter a valid phone number");
            return;
        }

        setSubmitting(true);
        setOtpError("");

        try {
            // Call API to send OTP
            const response = await fetch(`${OTP_API_URL}/send-otp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    identifier: phoneNumber,
                    type: "PHONE",
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setPhoneOtpSent(true);
            } else {
                setFieldError(
                    "phone_number",
                    data.message || "Failed to send OTP",
                );
            }
        } catch (error) {
            console.error("Error sending OTP:", error);
            setFieldError("phone_number", "Network error, please try again");
        } finally {
            setSubmitting(false);
        }
    };

    const handleVerifyOTP = async (
        values: FormValues,
        setFieldError: (field: string, message: string) => void,
    ) => {
        const otp = values.phoneOtp;

        if (!otp) {
            setFieldError("phoneOtp", "Please enter the OTP");
            return;
        }

        setSubmitting(true);
        setOtpError("");

        try {
            // Call API to verify OTP
            const response = await fetch(`${OTP_API_URL}/verify-otp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    identifier: values.phone_number,
                    type: "PHONE",
                    otp,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setPhoneVerified(true);
                setOtpError("");
            } else {
                setFieldError("phoneOtp", data.message || "Invalid OTP");
            }
        } catch (error) {
            console.error("Error verifying OTP:", error);
            setFieldError("phoneOtp", "Network error, please try again");
        } finally {
            setSubmitting(false);
        }
    };

    const handleSubmit = async (
        values: FormValues,
        { setSubmitting, setFieldError }: FormikHelpers<FormValues>,
    ) => {
        if (!phoneVerified) {
            setOtpError("Please verify your phone number before submitting");
            return;
        }

        const utmParams = getUTMParams();

        const registrationDateAndTime = new Date().toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
            hour12: true,
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });

        const phoneNumber = internationalCode
            ? String(`${internationalCode}${values.phone_number}`)
            : String(values.phone_number);

        try {
            // AWS API
            const dataToSend = {
                name: values.from_name,
                email: values.from_email,
                phone: phoneNumber,
                campaign_source: `${campaignSource}-LP`,
                ...utmParams,
                department: values.department,
                course: values.course,
                state: values.state,
                city: values.city,
                campus: values.campus,
                ...(values.slot !== "" ? { slot: values.slot } : {}),
                RegistrationTime: registrationDateAndTime,
                ...(values.cgs_date !== ""
                    ? { cgs_date: values.cgs_date }
                    : {}),
                ...(values.cgs_name !== "" &&
                values.cgs_date !== "Not Attending-CGS"
                    ? { cgs_name: values.cgs_name }
                    : {}),
            };

            await fetch(
                "https://olwhyb4daf.execute-api.ap-south-1.amazonaws.com/v1/put-data",
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(dataToSend),
                },
            );

            // Tracking Data
            trackFormSubmission(window.location.href);

            // ERP API
            const pageURL = window.location.href;
            const erpData = prepareERPData(
                values,
                phoneNumber,
                utmParams,
                campaignSource,
                pageURL,
            );
            await fetch(
                // "https://thirdpartyapi.extraaedge.com/api/SaveRequest",
                "https://publisher.extraaedge.com/api/Webhook/addPublisherLead",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(erpData),
                },
            );

            // Additional API
            const queryString = new URLSearchParams({
                apikey: "4b4edae164jfghfyhtfytdgty",
                campus_code: "geu",
                from_name: values.from_name,
                from_email: values.from_email,
                phone_number: phoneNumber,
                state: values.state,
                city: values.city,
                department: values.department,
                course: values.course,
                campus: values.campus,
                utm_source: utmParams.utm_source,
                utm_medium: utmParams.utm_medium,
                utm_campaign: utmParams.utm_campaign,
                utm_term: utmParams.utm_term,
                utm_content: utmParams.utm_content,
                ...(values.slot !== "" ? { slot: values.slot } : {}),
                ...(values.cgs_date !== ""
                    ? { cgs_date: values.cgs_date }
                    : {}),
                ...(values.cgs_name !== "" &&
                values.cgs_date !== "Not Attending-CGS"
                    ? { cgs_name: values.cgs_name }
                    : {}),
            }).toString();

            await fetch(
                `https://apply.geu.ac.in/univer/public/api/store-json?${queryString}`,
                {
                    method: "POST",
                    redirect: "follow",
                },
            );

            setMessageSentState({ success: true, error: false });
        } catch (err) {
            setMessageSentState({ success: false, error: true });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url('/lp/bg.webp')] bg-cover bg-center bg-no-repeat pb-12 sm:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.3),rgba(0,0,0,0.6)),url('/lp/bg.webp')] sm:pb-0">
            <div className="flex max-w-6xl flex-col items-center justify-between px-2 py-8 pt-20 text-white sm:mx-auto sm:flex-row">
                <img src={geuWhite.src} alt="GEU Logo" className="w-60" />
            </div>
            <div className="grid max-w-6xl grid-cols-1 items-center px-4 pt-12 sm:mx-auto sm:grid-cols-2 sm:items-end sm:px-2 sm:pt-4 sm:pb-24">
                <div className="mb-12 flex flex-col px-4 sm:mb-0 sm:px-0">
                    <h1 className="mb-4 font-serif text-5xl font-bold text-white italic">
                        {content.title}
                    </h1>
                    <p className="text-sm text-white sm:block">
                        {content.description}
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                        {stats.map((stat, index) => (
                            <div
                                key={`stat-${stat.value}-${index}`}
                                className="rounded-lg bg-white/20 px-4 py-2 backdrop-blur-sm"
                            >
                                <p className="text-xl font-bold text-white">
                                    {stat.value}
                                </p>
                                <p className="text-sm whitespace-pre-line text-white/80">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CONTACT FORM */}
                <div
                    className={cn(
                        "mx-auto min-h-[30rem] max-w-[22rem] min-w-[22rem] scroll-m-10 flex-col items-center justify-center rounded-3xl border-2 border-zinc-200 bg-white/50 px-8 py-12 text-zinc-800 backdrop-blur-lg sm:mr-0",
                        {
                            "bg-white/5 backdrop-blur-xl":
                                messageSentState.success ||
                                messageSentState.error ||
                                isFormClosed,
                        },
                    )}
                >
                    {isFormClosed ? (
                        <FormClosedMessage />
                    ) : !messageSentState.success && !messageSentState.error ? (
                        <Formik
                            initialValues={initialValues}
                            validationSchema={formSchema}
                            onSubmit={handleSubmit}
                        >
                            {({
                                isSubmitting,
                                errors,
                                touched,
                                values,
                                setFieldValue,
                                setFieldError,
                            }) => (
                                <Form className="flex flex-col items-start gap-1">
                                    {/* Campus Selector */}
                                    <div className="mb-4 w-full">
                                        <label className="mb-2 ml-2 block text-sm font-medium">
                                            Campus
                                        </label>
                                        <div className="relative flex rounded-lg bg-white p-1 shadow-sm">
                                            {/* Sliding background pill */}
                                            <div
                                                className="absolute rounded-lg bg-secondary transition-all duration-300 ease-in-out"
                                                style={{
                                                    left:
                                                        values.campus ===
                                                        "Dehradun"
                                                            ? "1%"
                                                            : values.campus ===
                                                                "Haldwani"
                                                              ? "33.33%"
                                                              : "65%",
                                                    width: "33.33%",
                                                    height: "80%",
                                                    top: "10%",
                                                    zIndex: 0,
                                                }}
                                            />
                                            {[
                                                "Dehradun",
                                                "Haldwani",
                                                "Bhimtal",
                                            ].map((campus) => (
                                                <button
                                                    key={campus}
                                                    type="button"
                                                    className={cn(
                                                        "relative z-10 flex-1 cursor-pointer rounded-lg px-2 py-1 text-sm font-medium transition-all",
                                                        {
                                                            "text-white":
                                                                values.campus ===
                                                                campus,
                                                            "text-zinc-600":
                                                                values.campus !==
                                                                campus,
                                                        },
                                                    )}
                                                    onClick={() => {
                                                        setFieldValue(
                                                            "campus",
                                                            campus,
                                                        );

                                                        // Updating Department and Course also as per the campus
                                                        setFieldValue(
                                                            "department",
                                                            DEPARTMENTS.find(
                                                                (d) =>
                                                                    d.university ===
                                                                    campus,
                                                            )?.name,
                                                        );
                                                        setFieldValue(
                                                            "course",
                                                            DEPARTMENTS.find(
                                                                (d) =>
                                                                    d.university ===
                                                                    campus,
                                                            )?.courses[0],
                                                        );
                                                    }}
                                                >
                                                    {campus}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <FormField
                                        name="from_name"
                                        label="Full Name"
                                        placeholder="Your Name"
                                        errors={errors}
                                        touched={touched}
                                    />
                                    <FormField
                                        name="from_email"
                                        label="Email"
                                        type="email"
                                        placeholder="Your Email"
                                        errors={errors}
                                        touched={touched}
                                    />
                                    <div className="flex w-full flex-col gap-2">
                                        <div className="flex w-full gap-2">
                                            {internationalCode && (
                                                <div className="w-1/4">
                                                    <label
                                                        htmlFor="international_code"
                                                        className="ml-2 text-sm font-medium"
                                                    >
                                                        Code
                                                    </label>
                                                    <div
                                                        id="international_code"
                                                        className="w-full rounded-md border-2 border-zinc-300 bg-white p-2 font-medium text-zinc-800"
                                                    >
                                                        +{internationalCode}
                                                    </div>
                                                </div>
                                            )}
                                            <div
                                                className={
                                                    internationalCode
                                                        ? "w-3/4"
                                                        : "w-full"
                                                }
                                            >
                                                <FormField
                                                    name="phone_number"
                                                    label="Phone Number"
                                                    type="tel"
                                                    placeholder="Phone Number"
                                                    errors={errors}
                                                    touched={touched}
                                                    disabled={
                                                        phoneOtpSent ||
                                                        phoneVerified
                                                    }
                                                />
                                            </div>
                                        </div>

                                        <div className="flex justify-end">
                                            {phoneVerified ? (
                                                <div className="flex items-center gap-1 text-sm font-semibold text-green-600">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    Phone Verified
                                                </div>
                                            ) : phoneOtpSent ? (
                                                <div className="flex gap-2">
                                                    <button
                                                        type="button"
                                                        className="text-sm font-medium text-blue-600"
                                                        onClick={() => {
                                                            setPhoneOtpSent(
                                                                false,
                                                            );
                                                            setFieldValue(
                                                                "phoneOtp",
                                                                "",
                                                            );
                                                        }}
                                                    >
                                                        Edit Phone
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="text-sm font-medium text-blue-600"
                                                        onClick={() =>
                                                            handleSendOTP(
                                                                values,
                                                                setFieldError,
                                                            )
                                                        }
                                                        disabled={
                                                            submitting ||
                                                            isSubmitting
                                                        }
                                                    >
                                                        Resend OTP
                                                    </button>
                                                </div>
                                            ) : (
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleSendOTP(
                                                            values,
                                                            setFieldError,
                                                        )
                                                    }
                                                    disabled={
                                                        submitting ||
                                                        !values.phone_number ||
                                                        isSubmitting
                                                    }
                                                    className={cn(
                                                        "rounded-md bg-secondary px-3 py-1 text-sm font-medium text-white",
                                                        {
                                                            "cursor-not-allowed opacity-50":
                                                                submitting ||
                                                                !values.phone_number ||
                                                                isSubmitting,
                                                        },
                                                    )}
                                                >
                                                    Send OTP
                                                </button>
                                            )}
                                        </div>

                                        {phoneOtpSent && !phoneVerified && (
                                            <div className="mt-2">
                                                <div className="flex gap-2">
                                                    <div className="flex-1">
                                                        <FormField
                                                            name="phoneOtp"
                                                            label="OTP"
                                                            placeholder="Enter OTP"
                                                            errors={errors}
                                                            touched={touched}
                                                        />
                                                    </div>
                                                    <div className="mb-3 self-end">
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                handleVerifyOTP(
                                                                    values,
                                                                    setFieldError,
                                                                )
                                                            }
                                                            disabled={
                                                                submitting ||
                                                                !values.phoneOtp ||
                                                                isSubmitting
                                                            }
                                                            className={cn(
                                                                "h-[42px] rounded-lg bg-secondary px-3 py-2 font-medium text-white",
                                                                {
                                                                    "cursor-not-allowed opacity-50":
                                                                        submitting ||
                                                                        !values.phoneOtp ||
                                                                        isSubmitting,
                                                                },
                                                            )}
                                                        >
                                                            Verify
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {otpError && (
                                            <div className="flex items-center justify-start gap-1 text-sm text-red-700">
                                                <img
                                                    src={
                                                        ExclamationTriangleIcon.src
                                                    }
                                                    className="h-4 w-4"
                                                    alt="Error"
                                                />
                                                {otpError}
                                            </div>
                                        )}
                                    </div>

                                    {defaultStateAndCity.hidden === false && (
                                        <>
                                            {fixState === false && (
                                                <SelectField
                                                    name="state"
                                                    label="State"
                                                    options={
                                                        customStatesOnly.length >
                                                        0
                                                            ? places
                                                                  .filter((p) =>
                                                                      customStatesOnly.includes(
                                                                          p.state,
                                                                      ),
                                                                  )
                                                                  .map((p) => ({
                                                                      value: p.state,
                                                                      label: p.state,
                                                                  }))
                                                            : places.map(
                                                                  (p) => ({
                                                                      value: p.state,
                                                                      label: p.state,
                                                                  }),
                                                              )
                                                    }
                                                    errors={errors}
                                                    touched={touched}
                                                    onChange={(
                                                        e: React.ChangeEvent<HTMLSelectElement>,
                                                    ) => {
                                                        setFieldValue(
                                                            "state",
                                                            e.target.value,
                                                        );
                                                        setFieldValue(
                                                            "city",
                                                            places.find(
                                                                (p) =>
                                                                    p.state ===
                                                                    values.state,
                                                            )?.cities[0],
                                                        );
                                                    }}
                                                />
                                            )}
                                            {fixCity === false && (
                                                <SelectField
                                                    name="city"
                                                    label="City"
                                                    options={[
                                                        ...(places
                                                            .find(
                                                                (p) =>
                                                                    p.state ===
                                                                    values.state,
                                                            )
                                                            ?.cities.map(
                                                                (city) => ({
                                                                    value: city,
                                                                    label: city,
                                                                }),
                                                            ) || []),
                                                    ]}
                                                    onChange={(
                                                        e: React.ChangeEvent<HTMLSelectElement>,
                                                    ) => {
                                                        setFieldValue(
                                                            "city",
                                                            e.target.value,
                                                        );
                                                    }}
                                                    errors={errors}
                                                    touched={touched}
                                                />
                                            )}
                                        </>
                                    )}
                                    {defaultDepartmentAndCourse.hidden ===
                                        false && (
                                        <>
                                            <SelectField
                                                name="department"
                                                label="Department"
                                                options={DEPARTMENTS.filter(
                                                    (d) =>
                                                        d.university ===
                                                        values.campus,
                                                ).map((d) => ({
                                                    value: d.name,
                                                    label: d.name.split("-")[0],
                                                }))}
                                                errors={errors}
                                                touched={touched}
                                                onChange={(
                                                    e: React.ChangeEvent<HTMLSelectElement>,
                                                ) => {
                                                    setFieldValue(
                                                        "department",
                                                        e.target.value,
                                                    );

                                                    // Updating Course also as per the department
                                                    setFieldValue(
                                                        "course",
                                                        DEPARTMENTS.find(
                                                            (d) =>
                                                                d.name ===
                                                                values.department,
                                                        )?.courses[0],
                                                    );
                                                }}
                                            />
                                            <SelectField
                                                name="course"
                                                label="Course"
                                                options={[
                                                    ...(DEPARTMENTS.find(
                                                        (d) =>
                                                            d.name ===
                                                            values.department,
                                                    )?.courses.map(
                                                        (course) => ({
                                                            value: course,
                                                            label: course,
                                                        }),
                                                    ) || []),
                                                ]}
                                                onChange={(
                                                    e: React.ChangeEvent<HTMLSelectElement>,
                                                ) => {
                                                    setFieldValue(
                                                        "course",
                                                        e.target.value,
                                                    );
                                                }}
                                                errors={errors}
                                                touched={touched}
                                            />
                                        </>
                                    )}
                                    {isTakingSlot && (
                                        <SelectField
                                            name="slot"
                                            label="Slot"
                                            options={[
                                                {
                                                    value: "Slot4",
                                                    label: "Slot 4",
                                                },
                                            ]}
                                            onChange={(
                                                e: React.ChangeEvent<HTMLSelectElement>,
                                            ) => {
                                                setFieldValue(
                                                    "slot",
                                                    e.target.value,
                                                );
                                            }}
                                            errors={errors}
                                            touched={touched}
                                        />
                                    )}

                                    {displayCGS && (
                                        <>
                                            <SelectField
                                                name="cgs_date"
                                                label="Date for Career Guidance Seminar"
                                                options={[
                                                    {
                                                        value: "Not Attending-CGS",
                                                        label: "Not Interested",
                                                    },
                                                    ...Object.values(
                                                        CGS_DATES,
                                                    ).map((date) => ({
                                                        value: date,
                                                        label: date,
                                                    })),
                                                ]}
                                                onChange={(
                                                    e: React.ChangeEvent<HTMLSelectElement>,
                                                ) => {
                                                    setFieldValue(
                                                        "cgs_date",
                                                        e.target.value,
                                                    );
                                                    if (
                                                        e.target.value !==
                                                        "Not Attending-CGS"
                                                    ) {
                                                        const filteredCGS =
                                                            CGS_DETAILS.filter(
                                                                (cgs) =>
                                                                    cgs.date ===
                                                                    e.target
                                                                        .value,
                                                            );
                                                        if (
                                                            filteredCGS.length >
                                                            0
                                                        ) {
                                                            setFieldValue(
                                                                "cgs_name",
                                                                filteredCGS[0]
                                                                    .value,
                                                            );
                                                        }
                                                    }
                                                }}
                                                errors={errors}
                                                touched={touched}
                                            />
                                            {values.cgs_date !==
                                                "Not Attending-CGS" && (
                                                <SelectField
                                                    name="cgs_name"
                                                    label={`Attend Career Guidance Seminar on ${values.cgs_date}`}
                                                    options={CGS_DETAILS.filter(
                                                        (cgs) =>
                                                            cgs.date ===
                                                            values.cgs_date,
                                                    ).map((cgs) => ({
                                                        value: cgs.value,
                                                        label: cgs.desc,
                                                    }))}
                                                    onChange={(
                                                        e: React.ChangeEvent<HTMLSelectElement>,
                                                    ) => {
                                                        setFieldValue(
                                                            "cgs_name",
                                                            e.target.value,
                                                        );
                                                    }}
                                                    errors={errors}
                                                    touched={touched}
                                                />
                                            )}
                                        </>
                                    )}

                                    <p className="mb-4 text-center text-xs text-zinc-600">
                                        I authorize Graphic Era to contact me
                                        with all Promotional or Transactional
                                        future updates and notifications via
                                        Email, SMS, WhatsApp and Call. This will
                                        override the registry on DND / NDNC.
                                    </p>

                                    <div className="flex w-full flex-col items-center justify-center gap-2">
                                        <button
                                            type="submit"
                                            className={cn(
                                                "rounded-lg border-2 border-secondary-light bg-secondary px-5 py-2 font-medium text-white transition-all outline-none hover:bg-secondary-dark hover:text-white",
                                                {
                                                    "cursor-wait text-zinc-400 hover:border-zinc-300 hover:bg-zinc-200 hover:text-zinc-400":
                                                        isSubmitting,
                                                    "cursor-not-allowed opacity-50":
                                                        !phoneVerified &&
                                                        !isSubmitting,
                                                },
                                            )}
                                            disabled={
                                                isSubmitting || !phoneVerified
                                            }
                                        >
                                            {isSubmitting && (
                                                <div
                                                    className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                                    aria-hidden="true"
                                                >
                                                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !border-0 !p-0 !whitespace-nowrap ![clip:rect(0,0,0,0)]">
                                                        Loading...
                                                    </span>
                                                </div>
                                            )}
                                            {isSubmitting
                                                ? "Applying..."
                                                : "Apply"}
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    ) : messageSentState.success ? (
                        <SuccessMessage />
                    ) : (
                        <ErrorMessage />
                    )}
                </div>
            </div>
        </div>
    );
};

interface FormFieldProps {
    name: string;
    label: string;
    placeholder?: string;
    type?: string;
    errors: Record<string, string>;
    touched: Record<string, boolean>;
    disabled?: boolean;
}

const FormField = ({
    name,
    label,
    placeholder,
    type = "text",
    errors,
    disabled = false,
    touched,
}: FormFieldProps) => (
    <div className="mb-3 flex w-full flex-col gap-1">
        <label htmlFor={name} className="ml-2 text-sm font-medium">
            {label}
        </label>
        <Field
            type={type}
            name={name}
            autoComplete="off"
            placeholder={placeholder}
            disabled={disabled}
            className={cn(
                "rounded-lg border-2 border-zinc-200 bg-white px-3 py-2 font-medium placeholder-zinc-400 outline-none focus:border-secondary",
                {
                    "border-red-700 focus:border-red-700":
                        errors[name] && touched[name],
                },
                {
                    "cursor-not-allowed opacity-50": disabled,
                },
            )}
        />
        {errors[name] && touched[name] && (
            <div className="flex items-center justify-start gap-1 text-sm text-red-700">
                <img
                    src={ExclamationTriangleIcon.src}
                    className="h-4 w-4"
                    alt="Error"
                />
                {errors[name]}
            </div>
        )}
    </div>
);

interface SelectFieldProps extends FormFieldProps {
    options: Array<{ value: string; label: string }>;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField = ({
    name,
    label,
    options,
    errors,
    touched,
    onChange,
}: SelectFieldProps) => (
    <div className="mb-3 flex w-full flex-col gap-1">
        <label className="ml-2 text-sm font-medium" htmlFor={name}>
            {label}
        </label>
        <Field
            as="select"
            name={name}
            onChange={onChange}
            className={cn(
                "w-full rounded-lg border-2 border-zinc-200 bg-white px-3 py-2 font-medium placeholder-zinc-400 outline-none focus:border-secondary",
                {
                    "border-red-700 focus:border-red-700":
                        errors[name] && touched[name],
                },
            )}
        >
            {options.map(({ value, label }) => (
                <option value={value} key={value}>
                    {label}
                </option>
            ))}
        </Field>
        {errors[name] && touched[name] && (
            <div className="flex items-center justify-start gap-1 text-sm text-red-700">
                <img
                    src={ExclamationTriangleIcon.src}
                    className="h-4 w-4"
                    alt="Error"
                />
                {errors[name]}
            </div>
        )}
    </div>
);

const SuccessMessage = () => (
    <div className="flex h-full items-center justify-center text-lg text-white">
        <div className="flex items-start gap-2">
            <img
                src={CheckCircleIcon.src}
                className="mt-1 w-14"
                alt="Success"
            />
            <div>
                We&apos;ve received your enquiry, one of our counselors will
                contact you shortly!
            </div>
        </div>
    </div>
);

const ErrorMessage = () => (
    <div className="flex h-full items-center justify-center text-lg text-red-700">
        <div className="flex items-start gap-2">
            <img
                src={ExclamationCircleIcon.src}
                className="mt-1 w-14"
                alt="Error"
            />
            <div>
                Some Error Occurred, Please try again after refreshing the page!
            </div>
        </div>
    </div>
);

const FormClosedMessage = () => (
    <div className="flex h-full items-center justify-center text-lg text-white">
        <div className="flex items-start gap-2">
            <img
                src={ExclamationCircleIcon.src}
                className="mt-1 w-14"
                alt="Form Closed"
            />
            <div>
                This form is no longer accepting responses. The submission
                deadline has passed.
            </div>
        </div>
    </div>
);

export default Hero;

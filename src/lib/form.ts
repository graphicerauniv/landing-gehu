import type { FormValues, UTMParams, ERPData } from "../types";

declare global {
    interface Window {
        fbq: (event: string, action: string) => void;
        gtag: (
            event: string,
            action: string,
            data: Record<string, string>,
        ) => void;
    }
}

export const getUTMParams = (): UTMParams => {
    const queryParams = new URLSearchParams(window.location.search);
    return {
        utm_source: queryParams.get("utm_source") || "",
        utm_campaign: queryParams.get("utm_campaign") || "",
        utm_medium: queryParams.get("utm_medium") || "",
        gclid: queryParams.get("gclid") || "",
        utm_content: queryParams.get("utm_content") || "",
        utm_term: queryParams.get("utm_term") || "",
        utm_device: queryParams.get("utm_device") || "",
        utm_keyword: queryParams.get("utm_keyword") || "",
        adpos: queryParams.get("adpos") || "",
        gadid: queryParams.get("gadid") || "",
        fbadid: queryParams.get("fbadid") || "",
    };
};

export const prepareERPData = (
    values: FormValues,
    phoneNumber: string,
    utmParams: UTMParams,
    campaignSource: string,
    pageURL: string,
): ERPData => {
    return {
        ...values,
        AuthToken: "GEU-04-08-2020",
        Source: "geu",
        FirstName: values.from_name,
        MobileNumber: phoneNumber,
        LeadType: "Online",
        Course: "Counseling",
        Email: values.from_email,
        LeadSource: `${campaignSource}-LP` || "GENERIC-LP",
        Field1: utmParams.utm_source,
        Field5: utmParams.utm_medium,
        Field6: utmParams.utm_campaign,
        TextB3: utmParams.gclid,
        TextB2: utmParams.utm_content,
        TextB1: utmParams.utm_term,
        Field9: utmParams.utm_device,
        Field10: utmParams.utm_keyword,
        Field11: utmParams.adpos,
        Center: "GEU-Dehradun",
        Location: values.department,
        entity4: values.course,
        State: values.state,
        City: values.city,
        Remarks: `${values.cgs_date !== "" ? `CGS Date: ${values.cgs_date} | ` : ""}${values.cgs_name !== "" ? `CGS Name: ${values.cgs_name} | ` : ""}${values.state} - ${values.city} | ${values.department} - ${values.course} | ${values.slot}`,
        Nationality: utmParams.gadid,
        PlaceOfBirth: utmParams.fbadid,
        // Experience: pageURL,
    };
};

export const trackFormSubmission = () => {
    window.fbq("track", "SubmitApplication");
    window.gtag("event", "GEU_Leads", {
        send_to: "AW-823971696/_vxmCMSb05QBEPCe84gD",
    });
};

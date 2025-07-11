export interface FormValues {
    campus: string;
    from_name: string;
    from_email: string;
    phone_number: string;
    state: string;
    city: string;
    department: string;
    course: string;
    slot?: string;
    cgs_date?: string;
    cgs_name?: string;
    phoneOtp?: string;
    international_code?: string;
}

export interface UTMParams {
    utm_source: string;
    utm_campaign: string;
    utm_medium: string;
    gclid: string;
    utm_content: string;
    utm_term: string;
    utm_device: string;
    utm_keyword: string;
    adpos: string;
    gadid: string;
    fbadid: string;
}

export interface MessageSentState {
    success: boolean;
    error: boolean;
}

export interface ERPData extends FormValues {
    AuthToken: string;
    Source: string;
    FirstName: string;
    MobileNumber: string;
    LeadType: string;
    Course: string;
    Email: string;
    LeadSource: string;
    Field1: string;
    Field5: string;
    Field6: string;
    TextB3: string;
    TextB2: string;
    TextB1: string;
    Field9: string;
    Field10: string;
    Field11: string;
    Center: string;
    Location: string;
    entity4: string;
    State: string;
    City: string;
    Remarks: string;
    Nationality: string;
    PlaceOfBirth: string;
    // Experience: string;
}

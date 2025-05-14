export interface HeroContent {
    title: string;
    description: string;
    stats: Array<{
        value: string;
        label: string;
    }>;
}

export interface HeroProps {
    content?: HeroContent;
    defaultState?: string;
    defaultCity?: string;
    defaultDepartmentAndCourse?: {
        department: string;
        course: string;
        hidden: boolean;
    };
}

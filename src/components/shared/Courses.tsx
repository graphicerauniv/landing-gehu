import { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";

import MagnifyingGlassIcon from "../../assets/icons/magnifying-glass.svg";

import { DEPARTMENTS } from "../../data/static";

interface CourseProps {
    name: string;
    duration: string;
    eligibility: string;
}
const Course = ({ name, duration, eligibility }: CourseProps) => {
    return (
        <div className="rounded-lg border-2 border-neutral-200 bg-white p-4">
            <h3 className="text-lg font-semibold">{name}</h3>
            {duration && eligibility && (
                <div className="mt-2 flex items-center justify-between">
                    {duration && (
                        <span className="text-sm text-neutral-500">
                            Duration: {duration}
                        </span>
                    )}
                    {eligibility && (
                        <span className="text-sm text-neutral-500">
                            Eligibility: {eligibility}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
};

interface CoursesProps {
    onlyDepartment?: string;
}
const Courses = ({ onlyDepartment }: CoursesProps) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedField, setSelectedField] = useState(
        onlyDepartment || DEPARTMENTS[0].name,
    );

    const [filteredCourses, setFilteredCourses] = useState<string[]>([]);

    const parent = useRef(null);
    useEffect(() => {
        parent.current && autoAnimate(parent.current);
    }, [parent]);

    //Handle search
    useEffect(() => {
        const coursesFromCategory = () => {
            if (
                selectedField === "Bhimtal" ||
                selectedField === "Dehradun" ||
                selectedField === "Haldwani"
            ) {
                return DEPARTMENTS.filter(
                    (group) => group.university === selectedField,
                ).flatMap((group) => group.courses);
            } else {
                const searchResults = DEPARTMENTS.filter(
                    (group) => group.name === selectedField,
                );
                return searchResults.flatMap((group) => group.courses);
            }
        };

        const courses = coursesFromCategory();

        if (searchTerm !== "") {
            const filtered = courses.filter((course) =>
                course.toLowerCase().includes(searchTerm.toLowerCase()),
            );
            setFilteredCourses(filtered);
            return;
        }

        setFilteredCourses(courses);
    }, [searchTerm, selectedField]);

    return (
        <div className="relative w-full py-20">
            <div className="bg-gradient absolute inset-0 -z-10 opacity-10"></div>
            <div className="max-w-6xl px-4 sm:mx-auto">
                <div className="mb-6 flex w-full flex-col justify-between md:mb-2 md:flex-row md:items-center">
                    <h2 className="mb-6 text-3xl font-bold tracking-tight">
                        Courses Offered
                    </h2>
                    <div className="flex gap-2 rounded-md border-2 border-neutral-200 bg-white px-2 py-1">
                        <img
                            src={MagnifyingGlassIcon.src}
                            alt="Magnifying Glass"
                            className="w-6 text-neutral-600"
                        />
                        <input
                            type="text"
                            placeholder="Search for a course"
                            className="py-1 outline-none"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    {!onlyDepartment && (
                        <div className="scrollbar-custom flex items-center justify-start gap-4 overflow-x-auto pb-2 font-medium text-neutral-800">
                            {["Bhimtal", "Dehradun", "Haldwani"].map(
                                (campus) => (
                                    <button
                                        className={`rounded-md border-b-2 border-zinc-300 px-4 py-1 ${
                                            selectedField === campus
                                                ? "border-neutral-100 bg-secondary text-white"
                                                : "bg-white"
                                        }`}
                                        onClick={() => setSelectedField(campus)}
                                    >
                                        {campus}
                                    </button>
                                ),
                            )}
                            {DEPARTMENTS.map((field) => (
                                <button
                                    onClick={() => setSelectedField(field.name)}
                                    className={`rounded-md border-b-2 border-zinc-300 px-4 py-1 whitespace-nowrap ${
                                        selectedField === field.name
                                            ? "border-neutral-100 bg-secondary text-white"
                                            : "bg-white"
                                    }`}
                                    key={field.name}
                                >
                                    {field.name
                                        .replaceAll("-GEHU", " ")
                                        .replaceAll("-", "(")}
                                    {`)`}
                                </button>
                            ))}
                        </div>
                    )}
                    <div
                        ref={parent}
                        className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {filteredCourses.map((course) => (
                            <Course
                                name={course}
                                key={course}
                                duration={""}
                                eligibility={""}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;

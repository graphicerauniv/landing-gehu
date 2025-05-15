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
    const [selectedDepartment, setSelectedDepartment] = useState(
        onlyDepartment || DEPARTMENTS[0].name,
    );
    const [selectedCampus, setSelectedCampus] = useState(
        DEPARTMENTS[0].university,
    );

    const [filteredCourses, setFilteredCourses] = useState<string[]>([]);

    const parent = useRef(null);
    useEffect(() => {
        parent.current && autoAnimate(parent.current);
    }, [parent]);

    //Handle search
    useEffect(() => {
        // Get all courses from particular campus
        const departmentsFromParticularCampus = DEPARTMENTS.filter(
            (dept) => dept.university === selectedCampus,
        );

        // Get all courses from the particular department
        const coursesFromParticularDepartment_FLAT =
            departmentsFromParticularCampus
                .filter((dept) => dept.name === selectedDepartment)
                .flatMap((dept) => dept.courses);

        console.log({
            departmentsFromParticularCampus,
            coursesFromParticularDepartment_FLAT,
        });
        // If Search Term is not empty, filter the courses
        if (searchTerm !== "") {
            const filteredCourses_FLAT =
                coursesFromParticularDepartment_FLAT.filter((course) =>
                    course.toLowerCase().includes(searchTerm.toLowerCase()),
                );
            setFilteredCourses(filteredCourses_FLAT);
            return;
        }

        setFilteredCourses(coursesFromParticularDepartment_FLAT);
    }, [searchTerm, selectedDepartment, selectedCampus]);

    return (
        <div className="relative w-full py-20">
            <div className="bg-gradient absolute inset-0 -z-10 opacity-10"></div>
            <div className="max-w-6xl px-4 sm:mx-auto">
                <div className="mb-6 flex w-full flex-col justify-between md:mb-2 md:flex-row md:items-center">
                    <h2 className="mb-6 text-3xl font-bold tracking-tight">
                        Courses Offered
                    </h2>
                    <div className="flex items-center gap-4">
                        <div className="mb-6 md:mb-0">
                            <select
                                className="rounded-md border-2 border-neutral-200 bg-white px-4 py-2 outline-none"
                                value={selectedCampus}
                                onChange={(e) => {
                                    setSelectedCampus(e.target.value);
                                    setSelectedDepartment(
                                        DEPARTMENTS.filter(
                                            (dept) =>
                                                dept.university ===
                                                e.target.value,
                                        )[0].name,
                                    );
                                }}
                            >
                                <option value="Bhimtal">Bhimtal Campus</option>
                                <option value="Dehradun">
                                    Dehradun Campus
                                </option>
                                <option value="Haldwani">
                                    Haldwani Campus
                                </option>
                            </select>
                        </div>
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
                </div>
                <div>
                    {!onlyDepartment && (
                        <div className="scrollbar-custom flex items-center justify-start gap-4 overflow-x-auto pb-2 font-medium text-neutral-800">
                            {DEPARTMENTS.filter(
                                (dept) => dept.university === selectedCampus,
                            ).map((dept) => (
                                <button
                                    onClick={() =>
                                        setSelectedDepartment(dept.name)
                                    }
                                    className={`rounded-md border-b-2 border-zinc-300 px-4 py-1 whitespace-nowrap ${
                                        selectedDepartment === dept.name
                                            ? "border-neutral-100 bg-secondary text-white"
                                            : "bg-white"
                                    }`}
                                    key={dept.name}
                                >
                                    {dept.name.split("-")[0]}
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

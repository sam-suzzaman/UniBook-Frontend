import React from "react";
import {
    CollegeCard,
    GraduatesGallery,
    ResearchCard,
    SectionTitle,
} from "../components";

const HomePage = () => {
    return (
        <>
            {/* Section: Campus Spotlight */}
            <div className="w-full max-w-[1400px] mx-auto max-[1399px]:px-6 py-10">
                <SectionTitle title="Campus Spotlight" />
                <div className="grid grid-cols-1 min-[800px]:grid-cols-2  min-[1200px]:grid-cols-3 gap-8 justify-between">
                    <CollegeCard />
                    <CollegeCard />
                    <CollegeCard />
                </div>
            </div>

            {/* Section: Our Graduates */}
            <div className="w-full max-w-[1400px] mx-auto max-[1399px]:px-6 py-10">
                <SectionTitle title="Our Graduates" />
                <div>
                    <GraduatesGallery />
                </div>
            </div>

            {/* Section: Recomended Papers */}
            <div className="w-full max-w-[1400px] mx-auto max-[1399px]:px-6 py-10">
                <SectionTitle title="Recommended Research" />
                <div className="grid grid-cols-1 min-[920px]:grid-cols-2 justify-between gap-8">
                    <ResearchCard />
                    <ResearchCard />
                    <ResearchCard />
                </div>
            </div>
        </>
    );
};

export default HomePage;

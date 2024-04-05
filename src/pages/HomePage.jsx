import React from "react";
import { CollegeCard, SectionTitle } from "../components";

const HomePage = () => {
    return (
        <>
            <div className="w-full max-w-[1400px] mx-auto max-[1399px]:px-6 py-10">
                <SectionTitle />
                <div className="grid grid-cols-1 min-[800px]:grid-cols-2  min-[1200px]:grid-cols-3 gap-8 justify-between">
                    <CollegeCard />
                    <CollegeCard />
                    <CollegeCard />
                </div>
            </div>
        </>
    );
};

export default HomePage;

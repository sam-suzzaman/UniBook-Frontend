import React from "react";
import styled from "styled-components";
import { CollegeCard, SectionTitle } from "../components";
import { useLocation, Link } from "react-router-dom";
import { useGetAllCollegeQuery } from "../redux/features/api/baseApi";
import Loading from "../components/shared/Loading";

const CollegePage = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    const {
        data: colleges,
        isLoading,
        isError,
        error,
    } = useGetAllCollegeQuery();

    if (isLoading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <Loading />
            </div>
        );
    }
    return (
        <Wrapper>
            {/* row: feature-banner */}
            <div className="flex justify-center feature-hero">
                <div className="w-full max-w-[1200px] max-w-[1199px]:px-6 py-16">
                    <SectionTitle title="Featured Colleges" clr="white" />
                </div>
            </div>

            {/* row: breadcrumbs */}
            <div className="w-full max-w-[1400px] mx-auto max-[1399px]:px-6 mt-8">
                <div className=" breadcrumbs font-semibold capitalize text-[#4b4b4b]  text-xs">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {pathnames.map((name, index) => {
                            const routeTo = `/${pathnames
                                .slice(0, index + 1)
                                .join("/")}`;
                            const isLast = index === pathnames.length - 1;
                            return (
                                <li key={index}>
                                    {isLast ? (
                                        <span>{name}</span>
                                    ) : (
                                        <Link to={routeTo}>{name}</Link>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            {/* row: Campus Spotlight */}
            <div className="w-full max-w-[1400px] mx-auto max-[1399px]:px-6 pb-16 pt-8">
                <div className="grid grid-cols-1 min-[800px]:grid-cols-2  min-[1200px]:grid-cols-3 gap-8 justify-between">
                    {colleges?.result?.map((college) => (
                        <CollegeCard college={college} key={college._id} />
                    ))}
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .feature-hero {
        background-image: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.4),
                rgba(0, 0, 0, 0.3)
            ),
            url("/src/assets/featureBG.jpg");

        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
`;

export default CollegePage;

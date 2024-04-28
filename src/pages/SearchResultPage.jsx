import React from "react";
import styled from "styled-components";
import { CollegeCard, SectionTitle } from "../components";
import { Link, useLocation } from "react-router-dom";
import Loading from "../components/shared/Loading";
import { useGetSearchedCollegeQuery } from "../redux/features/api/baseApi";
import { useSelector } from "react-redux";
import emtpty from "../assets/void.png";

const SearchResultPage = () => {
    const { searchBy } = useSelector((state) => state.searchCollegeSlice);

    const {
        data: searchData,
        isLoading,
        isError,
        error,
    } = useGetSearchedCollegeQuery(searchBy);

    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    if (isLoading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <Loading />
            </div>
        );
    }

    if (searchData) {
        console.log(searchData);
    }
    if (isError) {
        console.log(error);
    }

    if (searchData?.result?.length === 0) {
        return (
            <div className="flex justify-center items-center flex-col h-full px-6 py-16">
                <img
                    src={emtpty}
                    className="w-full max-w-[300px] mx-auto"
                    alt="no result found"
                />
                <div className="mt-4">
                    <h6 className="text-primary font-bold text-base md:text-lg text-center capitalize">
                        Nothing found
                    </h6>
                    <p className="text-xs text-center font-normal mt-1">
                        Search by your campus to see about your campus details
                    </p>
                </div>
            </div>
        );
    }

    return (
        <Wrapper>
            {/* row: feature-banner */}
            <div className="flex justify-center feature-hero">
                <div className="w-full max-w-[1200px] max-w-[1199px]:px-6 py-16">
                    <SectionTitle title="Search Result" clr="white" />
                </div>
            </div>

            {/* row: breadcrumbs */}
            <div className="w-full max-w-[1400px] mx-auto max-[1399px]:px-6 mt-8 flex justify-between items-center">
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
                <div className="text-xs">
                    <span className="mr-1 text-primary font-bold">
                        {searchData?.result?.length < 10
                            ? `0${searchData?.result?.length}`
                            : searchData?.result?.length}
                    </span>
                    <span className="">results are found</span>
                </div>
            </div>

            {/* row: Campus Spotlight */}
            <div className="w-full max-w-[1080px] mx-auto max-[1399px]:px-6 pb-16 pt-8">
                <div className="grid grid-cols-1 gap-6 justify-between">
                    {searchData?.result?.map((college) => (
                        <CollegeCard college={college} key={college._id} />
                    ))}
                    {/* <CollegeCard /> */}
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
export default SearchResultPage;

import React from "react";

import {
    CollegeCard,
    CollegeReviews,
    GraduatesGallery,
    ResearchCard,
    SectionTitle,
} from "../components";
import {
    useGetAllReviewsQuery,
    useGetGraduatesQuery,
    useGetLimitedCollegeQuery,
} from "../redux/features/api/baseApi";
import Loading from "../components/shared/Loading";

const HomePage = () => {
    const {
        data: spotLightColleges,
        isLoading: spotlightLoading,
        isError,
        error,
    } = useGetLimitedCollegeQuery();
    const {
        data: graduates,
        isLoading: gLoading,
        isError: gIsError,
        error: gError,
    } = useGetGraduatesQuery();
    const {
        data: reviews,
        isLoading: reviewLoading,
        isError: reviewIsError,
        error: reviewError,
    } = useGetAllReviewsQuery();

    return (
        <>
            {/* Section: Campus Spotlight */}
            <div className="w-full max-w-[1400px] mx-auto max-[1399px]:px-6 py-10">
                <SectionTitle title="Campus Spotlight" />
                {spotlightLoading ? (
                    <div className="mt-12 flex justify-center">
                        <Loading />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 min-[800px]:grid-cols-2  min-[1200px]:grid-cols-3 gap-8 justify-between">
                        {spotLightColleges?.result?.map((college) => {
                            return (
                                <CollegeCard
                                    college={college}
                                    key={college._id}
                                />
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Section: Our Graduates */}
            <div className="w-full max-w-[1400px] mx-auto max-[1399px]:px-6 py-10">
                <SectionTitle title="Our Graduates" />
                {spotlightLoading ? (
                    <div className="mt-12 flex justify-center">
                        <Loading />
                    </div>
                ) : (
                    <GraduatesGallery graduates={graduates?.result} />
                )}
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

            {/* Section: Reviews */}
            <div className="w-full max-w-[1400px] mx-auto max-[1399px]:px-6 py-10">
                <SectionTitle title="College Reviews" />
                {reviewLoading ? (
                    <div className="mt-12 flex justify-center">
                        <Loading />
                    </div>
                ) : (
                    <CollegeReviews reviews={reviews?.result} />
                )}
            </div>
        </>
    );
};

export default HomePage;

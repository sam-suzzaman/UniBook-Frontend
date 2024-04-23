import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import thumbnail from "../assets/CampusThumb/College1.jpg";
import { TbArrowBigRight } from "react-icons/tb";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useGetSingleCollegeQuery } from "../redux/features/api/baseApi";
import Loading from "../components/shared/Loading";

const SingleCollegePage = () => {
    const { id } = useParams();
    const {
        data: college,
        isLoading,
        isError,
        error,
    } = useGetSingleCollegeQuery(id);

    if (isLoading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <Loading />
            </div>
        );
    }
    return (
        <Wrapper>
            <div className="w-full max-w-[1200px] max-[1199px]:px-4 py-10 mx-auto">
                <div className="college-title-row mb-8">
                    <h2 className="title">{college?.result?.collegeName}</h2>
                    <h5 className="subtitle">
                        Established on:{" "}
                        <span className="font-bold">
                            {college?.result?.establishedOn}
                        </span>
                    </h5>
                </div>
                <div className="thumb-row">
                    <img
                        src={college?.result?.collegeThubnail}
                        alt={college?.result?.collegeName}
                        className="college-thumb"
                    />
                </div>
                <div className="college-details-row mt-8">
                    {/* option-1:Intro */}
                    <div className="collapse collapse-plus  rounded-sm mb-3">
                        <input
                            type="radio"
                            name="college-info-accordion"
                            className="min-h-0"
                            defaultChecked
                        />
                        <div className="collapse-title option-title bg-secondary">
                            Introduction
                        </div>
                        {/* data */}
                        <div className="collapse-content option-content bg-[#ececec]">
                            <div className="pt-4">
                                <p className="mb-4 text-[16px] sm:text-sm text-justify font-medium text-black whitespace-pre-line">
                                    {college?.result?.collegeInfo}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Option-2:Addmission */}
                    <div className="collapse collapse-plus  rounded-sm mb-3">
                        <input
                            type="radio"
                            name="college-info-accordion"
                            className="min-h-0"
                        />
                        <div className="collapse-title option-title bg-secondary">
                            addmission process
                        </div>
                        <div className="collapse-content option-content bg-[#ececec]">
                            <div className="pt-4">
                                {/* Step-1:duration */}
                                <div className="add-deadline">
                                    <div className="flex justify-start items-center">
                                        <div className="inline-block bg-accent text-primary text-sm font-bold capitalize px-3 py-[2px] rounded-sm">
                                            Step-1
                                        </div>
                                        <h3 className="text-base font-bold ml-3 text-secondary">
                                            Semester Duration
                                        </h3>
                                    </div>
                                    <div className=" mt-3 pl-4">
                                        {college?.result?.addmissionProcess[0]?.dates?.map(
                                            (date) => (
                                                <h5
                                                    className="deadline-title flex justify-start items-center mb-1 capitalize"
                                                    key={date.title}
                                                >
                                                    <TbArrowBigRight className="inline-block mr-1 font-bold text-primary text-xs" />
                                                    <span className="text-[16px] font-semibold mr-1 ">
                                                        {date?.title}:
                                                    </span>
                                                    <span className="text-[15px] font-bold bg-neutral px-3 py-[1px] rounded-md">
                                                        {date?.duration}
                                                    </span>
                                                </h5>
                                            )
                                        )}

                                        {/* <h5 className="deadline-title flex justify-start items-center">
                                            <TbArrowBigRight className="inline-block mr-1 font-bold text-primary text-lg" />
                                            <span className="text-sm font-semibold mr-2 ">
                                                Autum Semester:
                                            </span>
                                            <span className="text-[15px] font-bold bg-neutral px-3 py-[2px] rounded-md">
                                                September 1 - December 15
                                            </span>
                                        </h5> */}
                                    </div>
                                </div>
                                {/* Step-2:deadline */}
                                <div className="add-deadline mt-8">
                                    <div className="flex justify-start items-center">
                                        <div className="inline-block bg-accent text-primary text-sm font-bold capitalize px-3 py-[2px] rounded-sm">
                                            Step-2
                                        </div>
                                        <h3 className="text-base font-bold ml-3 text-secondary">
                                            Application Deadline
                                        </h3>
                                    </div>
                                    <div className=" mt-3 pl-4">
                                        {college?.result?.addmissionProcess[1]?.dates?.map(
                                            (date) => (
                                                <h5
                                                    className="deadline-title flex justify-start items-center mb-1 capitalize"
                                                    key={date.title}
                                                >
                                                    <FaRegArrowAltCircleRight className="inline-block mr-1 font-bold text-primary text-xs" />
                                                    <span className="text-[16px] font-semibold mr-1 ">
                                                        {date?.title}:
                                                    </span>
                                                    <span className="text-[15px] font-bold bg-neutral px-3 py-[1px] rounded-md">
                                                        {date?.duration}
                                                    </span>
                                                </h5>
                                            )
                                        )}

                                        {/* <h5 className="deadline-title flex justify-start items-center">
                                            <FaRegArrowAltCircleRight className="inline-block mr-1 font-bold text-primary text-xs" />
                                            <span className="text-sm font-semibold mr-2 ">
                                                Autum Semester:
                                            </span>
                                            <span className="text-[15px] font-bold bg-neutral px-3 py-[2px] rounded-md">
                                                October 20 - 30
                                            </span>
                                        </h5> */}
                                    </div>
                                </div>
                                {/* Step-3:Requirements */}
                                <div className="add-deadline mt-8">
                                    <div className="flex justify-start items-center">
                                        <div className="inline-block bg-accent text-primary text-sm font-bold capitalize px-3 py-[2px] rounded-sm">
                                            Step-3
                                        </div>
                                        <h3 className="text-base font-bold ml-3 text-secondary">
                                            Requirements
                                        </h3>
                                    </div>
                                    <div className=" mt-3 pl-4">
                                        {college?.result?.addmissionProcess[2]?.data?.map(
                                            (req, i) => (
                                                <p
                                                    className="text-[16px] font-semibold mb-1 text-[#393939]"
                                                    key={req.title}
                                                >
                                                    {i < 10
                                                        ? `0${i + 1}. ${
                                                              req?.title
                                                          }`
                                                        : `${i + 1}. ${
                                                              req?.title
                                                          }`}
                                                </p>
                                            )
                                        )}
                                    </div>
                                </div>
                                {/* Step-4:Apply */}
                                <div className="add-deadline mt-8">
                                    <div className="flex justify-start items-center">
                                        <div className="inline-block bg-accent text-primary text-sm font-bold capitalize px-3 py-[2px] rounded-sm">
                                            Step-4
                                        </div>
                                        <h3 className="text-base font-bold ml-3 text-secondary">
                                            How to Apply
                                        </h3>
                                    </div>
                                    <div className="mt-3 pl-1">
                                        <p className="text-[16px] text-justify font-medium text-[#393939] whitespace-pre-line">
                                            {
                                                college?.result
                                                    ?.addmissionProcess[3]?.data
                                            }
                                        </p>
                                    </div>
                                </div>
                                {/* Step-5:review */}
                                <div className="add-deadline mt-8">
                                    <div className="flex justify-start items-center">
                                        <div className="inline-block bg-accent text-primary text-sm font-bold capitalize px-3 py-[2px] rounded-sm">
                                            Step-5
                                        </div>
                                        <h3 className="text-base font-bold ml-3 text-secondary">
                                            Application Review
                                        </h3>
                                    </div>
                                    <div className="mt-3 pl-1">
                                        <p className="text-[16px] text-justify font-medium text-[#393939] whitespace-pre-line">
                                            {
                                                college?.result
                                                    ?.addmissionProcess[4]?.data
                                            }
                                        </p>
                                    </div>
                                </div>
                                {/* Step-6:Fee */}
                                <div className="add-deadline mt-8">
                                    <div className="flex justify-start items-center">
                                        <div className="inline-block bg-accent text-primary text-sm font-bold capitalize px-3 py-[2px] rounded-sm">
                                            Step-6
                                        </div>
                                        <h3 className="text-base font-bold ml-3 text-secondary">
                                            Application Fee
                                        </h3>
                                    </div>
                                    <div className="mt-3 pl-1">
                                        <p className="text-[16px] text-justify font-medium text-[#393939] whitespace-pre-line">
                                            {
                                                college?.result
                                                    ?.addmissionProcess[5]?.data
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Option-3:Events */}
                    <div className="collapse collapse-plus  rounded-sm mb-3">
                        <input
                            type="radio"
                            name="college-info-accordion"
                            className="min-h-0"
                        />
                        <div className="collapse-title option-title bg-secondary">
                            event details
                        </div>
                        <div className="collapse-content option-content bg-[#ececec]">
                            <div className="pt-4">
                                {/* Event-1 */}
                                {college?.result?.events?.map((event, i) => (
                                    <div
                                        className="college-event mb-8"
                                        key={event?.title}
                                    >
                                        <h5 className="event-title font-bold text-primary text-[21px] capitalize">
                                            <span className="mr-2 text-secondary text-xl ">
                                                {i < 10
                                                    ? `0${i + 1}.`
                                                    : `${i + 1}.`}
                                            </span>
                                            {event?.title}
                                        </h5>
                                        <div className="event-date text-sm mt-1">
                                            Date:
                                            <p className=" text-xs font-bold bg-neutral text-primary inline-block px-2 rounded-md">
                                                {event?.date}
                                            </p>
                                        </div>
                                        <div className="event-des mt-3">
                                            <p className="mb-3 text-[16px] sm:text-sm text-justify font-medium text-black whitespace-pre-line">
                                                {event?.details}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Option-4:Research */}
                    <div className="collapse collapse-plus  rounded-sm mb-3">
                        <input
                            type="radio"
                            name="college-info-accordion"
                            className="min-h-0"
                        />
                        <div className="collapse-title option-title bg-secondary">
                            Research Works
                        </div>
                        <div className="collapse-content option-content bg-[#ececec]">
                            <div className="pt-4">
                                {college?.result?.researches?.researchData?.map(
                                    (research, i) => (
                                        <div
                                            className="college-event mb-8"
                                            key={research?.paperTitle}
                                        >
                                            <h5 className="event-title font-bold text-primary text-[21px]">
                                                <span className="mr-2 text-secondary text-xl">
                                                    {i < 10
                                                        ? `0${i + 1}.`
                                                        : `${i + 1}.`}
                                                </span>
                                                {research?.paperTitle}
                                            </h5>
                                            <div className="event-date text-sm mt-1">
                                                Publised on:
                                                <p className=" text-xs font-bold bg-neutral text-primary inline-block px-2 rounded-md">
                                                    {research?.publicationDate}
                                                </p>
                                            </div>
                                            <div className="event-des mt-3">
                                                <p className="mb-3 text-[16px] sm:text-sm text-justify font-medium text-black">
                                                    <span className="font-bold text-primary whitespace-pre-line">
                                                        Overview:
                                                    </span>
                                                    {research?.overview}
                                                </p>
                                                <p className=" text-[16px] sm:text-sm text-justify font-medium text-black">
                                                    With participation from
                                                    renowned companies and
                                                    organizations, students have
                                                    the chance to explore
                                                    diverse career options and
                                                    make meaningful connections
                                                    that can shape their future
                                                    professional endeavors.
                                                </p>
                                            </div>
                                            <div className="research-link mt-3">
                                                <Link
                                                    to={research?.paperLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary text-xs inline-block bg-accent font-semibold px-4 py-1 rounded-sm"
                                                >
                                                    View Publication
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                    {/* Option-5:sports */}
                    <div className="collapse collapse-plus  rounded-sm mb-3">
                        <input
                            type="radio"
                            name="college-info-accordion"
                            className="min-h-0"
                        />
                        <div className="collapse-title option-title bg-secondary">
                            Sports Events
                        </div>
                        <div className="collapse-content option-content bg-[#ececec]">
                            <div className="pt-4">
                                {college?.result?.sports?.map((sport, i) => (
                                    <div className="add-deadline mt-8">
                                        <div className="flex justify-start items-center">
                                            <div className="inline-block bg-accent text-primary text-sm font-bold capitalize px-3 py-[2px] rounded-sm">
                                                {`Type-${i + 1}`}
                                            </div>
                                            <h3 className="text-base font-bold ml-3 text-secondary">
                                                {sport?.title}
                                            </h3>
                                        </div>
                                        <div className="mt-3 pl-1">
                                            <p className="text-[16px] text-justify font-medium text-[#393939] whitespace-pre-line">
                                                {sport?.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .college-title-row {
    }
    .college-title-row .title {
        font-size: calc(1.2rem + 0.5vw);
        font-weight: 700;
        text-align: center;
        text-transform: capitalize;
        color: var(--primary-clr);
    }
    .college-title-row .subtitle {
        font-size: calc(0.7rem + 0.15vw);
        font-weight: 600;
        text-align: center;
        color: var(--gray-clr);
    }
    .thumb-row .college-thumb {
        width: 100%;
        border-radius: 6px;
    }
    .college-details-row .option-title {
        font-size: calc(0.9rem + 0.17vw);
        font-weight: 700;
        text-transform: capitalize;
        padding: 10px 1rem;
        min-height: 0px;
        color: var(--primary-clr);
    }
    .college-details-row .option-title:after {
        top: 9px;
        font-size: 25px;
    }
    .college-details-row .option-content {
        /* padding: 15px 20px; */
    }
`;

export default SingleCollegePage;

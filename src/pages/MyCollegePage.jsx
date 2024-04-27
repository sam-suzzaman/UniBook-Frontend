import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { TbArrowBigRight } from "react-icons/tb";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import DashboardSecTitle from "../components/UI/DashboardSecTitle";

import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
import {
    useAddReviewMutation,
    useGetAdmittedCollegeQuery,
    useGetSingleReviewQuery,
} from "../redux/features/api/baseApi";
import Loading from "../components/shared/Loading";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

import noResultPic from "../assets/void.png";

const MyCollegePage = () => {
    const [ratingValue, setRatingValue] = useState(0);
    const [isShowUpdateBtn, setIsShowUpdateBtn] = useState(false);
    const [college, setCollege] = useState(null);

    const {
        data: admissionData,
        isLoading: collegeLoading,
        isError: collegeError,
        error: collegeErrorMsg,
    } = useGetAdmittedCollegeQuery();
    const [reviewHandler, { data: review, isLoading, isError, error }] =
        useAddReviewMutation();
    const { id } = useSelector((state) => state.userSlice);
    const {
        data: commentData,
        isLoading: commentLoading,
        isError: isCommentError,
        error: commentError,
    } = useGetSingleReviewQuery({ userID: id, collegeID: college?._id });

    useEffect(() => {
        setCollege(admissionData?.result?.collegeID);
    }, [admissionData]);

    useEffect(() => {
        // setInitialComment(commentData?.result?.comment);
        setRatingValue(commentData?.result?.rating || 0);
        setValue("comment", commentData?.result?.comment);
        if (commentData?.result?.comment) {
            setIsShowUpdateBtn(true);
        } else {
            setIsShowUpdateBtn(false);
        }
    }, [commentData]);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        setValue,
    } = useForm();

    if (collegeLoading || commentLoading) {
        return (
            <div className="h-full flex justify-center items-center">
                <Loading />
            </div>
        );
    }

    if (commentData) {
        // console.log(college?.collegeID);
        console.log(commentData?.result?.comment);
    }

    if (isCommentError) {
        // console.log(collegeErrorMsg);
        // console.log(commentError);
    }

    const reviewSubmitHandler = async (data) => {
        if (ratingValue < 1) {
            Swal.fire({
                icon: "error",
                title: "Opps",
                text: "Add a review rating value",
            });
        } else {
            const comment = {
                userID: id,
                collegeID: college._id,
                rating: ratingValue,
                comment: data.comment,
            };
            const res = await reviewHandler(comment);
            console.log(res);
            if (res?.data?.status) {
                Swal.fire({
                    icon: "success",
                    title: "Done",
                    text: res?.data.message,
                });
                reset();
            } else {
                Swal.fire({
                    icon: "error",
                    title: res?.error?.data?.message,
                    text: res?.error?.data?.error || res?.error?.data?.result,
                });
            }
        }
    };

    if (!college?._id) {
        return (
            <div className="not-admit-container flex justify-center items-center flex-col h-full">
                <div className="w-full max-w-[300px] mx-auto mb-6">
                    <img src={noResultPic} alt="no result found" />
                </div>
                <div className="">
                    <h3 className="text-xl md:text-2xl font-bold text-center text-primary capitalize">
                        Not Admitted
                    </h3>
                    <p className="text-center text-xs md:text-sm font-normal mt-4 w-full max-w-[600px]">
                        Opps sorry, you are not yet admitted to a college, first
                        take an admission to a college.
                    </p>
                </div>
                <div className="flex justify-center mt-5">
                    <Link
                        to="/admission"
                        className="capitalize text-sm font-medium bg-secondary text-white px-4 py-1 rounded-sm transition-all duration-300 hover:bg-primary"
                    >
                        take admission
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <Wrapper>
            <div className="w-full max-w-[1200px] max-[1199px]:px-4 pb-10 mx-auto">
                {/* page title row */}
                <div className="pt-2">
                    <DashboardSecTitle title="my college" />
                </div>
                {/* My College details row */}
                <div className="">
                    <div className="college-title-row mb-8">
                        <h2 className="title">{college?.collegeName}</h2>
                        <h5 className="subtitle">
                            Established on:{" "}
                            <span className="font-bold">
                                {college?.establishedOn}
                            </span>
                        </h5>
                    </div>
                    <div className="thumb-row">
                        <img
                            src={college?.collegeThubnail}
                            alt={college?.collegeName}
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
                                        {college?.collegeInfo}
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
                                            {college?.addmissionProcess[0]?.dates?.map(
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
                                            {college?.addmissionProcess[1]?.dates?.map(
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
                                            {college?.addmissionProcess[2]?.data?.map(
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
                                                        ?.addmissionProcess[3]
                                                        ?.data
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
                                                        ?.addmissionProcess[4]
                                                        ?.data
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
                                                        ?.addmissionProcess[5]
                                                        ?.data
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
                                    {college?.events?.map((event, i) => (
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
                                    {college?.researches?.researchData?.map(
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
                                                        {
                                                            research?.publicationDate
                                                        }
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
                                                        organizations, students
                                                        have the chance to
                                                        explore diverse career
                                                        options and make
                                                        meaningful connections
                                                        that can shape their
                                                        future professional
                                                        endeavors.
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
                                    {college?.sports?.map((sport, i) => (
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
                {/* Add review row */}
                <div className="bg-gray-100 mt-12 p-6 rounded-md">
                    <h5 className="font-bold text-base md:text-lg text-primary mb-4">
                        Add Review
                    </h5>

                    <form
                        onSubmit={handleSubmit(reviewSubmitHandler)}
                        autoComplete="off"
                    >
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">
                                    Your Comment:
                                </span>
                            </div>
                            <textarea
                                className="textarea textarea-bordered h-24 rounded-sm"
                                placeholder="Write your review here..."
                                defaultValue={commentData?.result?.comment}
                                {...register("comment", {
                                    required: {
                                        value: true,
                                        message: "Add a comment first",
                                    },
                                })}
                            ></textarea>

                            {errors?.comment && (
                                <div className="label">
                                    <span className="label-text-alt font-semibold text-red-600 text-xs">
                                        {errors?.comment?.message}
                                    </span>
                                </div>
                            )}
                        </label>

                        {/* Rating value row */}
                        <div className=" mt-2 flex items-center gap-4">
                            <div className="label">
                                <span className="label-text">Your Rating:</span>
                            </div>
                            <p className="font-semibold text-[13px] text-primary flex flex-row items-center ">
                                <Rating
                                    className="text-[20px] mr-1 text-secondary"
                                    initialRating={ratingValue}
                                    start={0}
                                    stop={5}
                                    emptySymbol={<FaRegStar />}
                                    fullSymbol={<FaStar />}
                                    fractions={5}
                                    onClick={(value) => setRatingValue(value)}
                                ></Rating>
                                <span className="">({ratingValue}/5)</span>
                            </p>
                        </div>

                        <button
                            type="submit"
                            className=" text-sm font-semibold rounded-sm px-6 py-1 capitalize bg-secondary text-white transition-all duration-300 hover:bg-primary hover:text-white mt-4"
                        >
                            {isLoading
                                ? "Loading..."
                                : isShowUpdateBtn
                                ? "Update"
                                : "submit"}
                        </button>
                    </form>
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

export default MyCollegePage;

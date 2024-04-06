import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import thumbnail from "../assets/CampusThumb/College1.jpg";
import { TbArrowBigRight } from "react-icons/tb";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const SingleCollegePage = () => {
    const { id } = useParams();

    return (
        <Wrapper>
            <div className="w-full max-w-[1200px] max-[1199px]:px-4 py-10 mx-auto">
                <div className="college-title-row mb-8">
                    <h2 className="title">
                        jaitya kabi kazi nazrul islam university
                    </h2>
                    <h5 className="subtitle">
                        Established on: <span className="font-bold">1997</span>
                    </h5>
                </div>
                <div className="thumb-row">
                    <img
                        src={thumbnail}
                        alt="college thumbnail"
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
                                <p className="mb-4 text-[16px] sm:text-sm text-justify font-medium text-black">
                                    A leading research university known for its
                                    strong programs in science, technology, and
                                    engineering. Located in Sunnydale,
                                    California, Sunnydale offers a vibrant
                                    campus life and excellent opportunities for
                                    undergraduate research.
                                </p>
                                <p className="mb-4 text-[16px] sm:text-sm text-justify font-medium text-black">
                                    Evergreen University, nestled amidst verdant
                                    landscapes, is a prestigious institution
                                    dedicated to fostering academic excellence,
                                    innovation, and holistic student
                                    development. Established over a century ago,
                                    Evergreen has continuously evolved to meet
                                    the evolving needs of society while
                                    upholding its commitment to providing a
                                    nurturing and inspiring educational
                                    environment.
                                </p>
                                <p className="mb-4 text-[16px] sm:text-sm text-justify font-medium text-black">
                                    With a diverse community of students,
                                    faculty, and staff, Evergreen University
                                    offers a dynamic learning environment where
                                    creativity, critical thinking, and
                                    collaboration thrive. Our commitment to
                                    research excellence is reflected in our
                                    groundbreaking discoveries in environmental
                                    science, sustainable development, and
                                    renewable energy.
                                </p>
                                <p className=" text-[16px] sm:text-sm text-justify font-medium text-black">
                                    Join us at Evergreen University, where the
                                    pursuit of knowledge meets the spirit of
                                    innovation, and together, we shape a
                                    brighter future.
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
                                        <h5 className="deadline-title flex justify-start items-center mb-1">
                                            <TbArrowBigRight className="inline-block mr-1 font-bold text-primary text-xs" />
                                            <span className="text-[16px] font-semibold mr-1 ">
                                                Spring Semester:
                                            </span>
                                            <span className="text-[15px] font-bold bg-neutral px-3 py-[1px] rounded-md">
                                                January 15 - April 30
                                            </span>
                                        </h5>
                                        <h5 className="deadline-title flex justify-start items-center mb-1">
                                            <TbArrowBigRight className="inline-block mr-1 font-bold text-primary text-xs" />
                                            <span className="text-[16px] font-semibold mr-1 ">
                                                Autum Semester:
                                            </span>
                                            <span className="text-[15px] font-bold bg-neutral px-3 py-[1px] rounded-md">
                                                September 1 - December 15
                                            </span>
                                        </h5>
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
                                        <h5 className="deadline-title flex justify-start items-center mb-1">
                                            <FaRegArrowAltCircleRight className="inline-block mr-1 font-bold text-primary text-xs" />
                                            <span className="text-[16px] font-semibold mr-1 ">
                                                Spring Semester:
                                            </span>
                                            <span className="text-[15px] font-bold bg-neutral px-3 py-[1px] rounded-md">
                                                January 01 to 10
                                            </span>
                                        </h5>
                                        <h5 className="deadline-title flex justify-start items-center">
                                            <FaRegArrowAltCircleRight className="inline-block mr-1 font-bold text-primary text-xs" />
                                            <span className="text-[16px] font-semibold mr-1 ">
                                                Autum Semester:
                                            </span>
                                            <span className="text-[15px] font-bold bg-neutral px-3 py-[1px] rounded-md">
                                                October 20 - 30
                                            </span>
                                        </h5>
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
                                        <p className="text-[16px] font-semibold mb-1 text-[#393939]">
                                            01. Complete Application (Online)
                                        </p>
                                        <p className="text-[16px] font-semibold mb-1 text-[#393939]">
                                            02. Official school transcript
                                        </p>
                                        <p className="text-[16px] font-semibold mb-1 text-[#393939]">
                                            03. Personal essay (500 words)
                                        </p>
                                        <p className="text-[16px] font-semibold mb-1 text-[#393939]">
                                            04. Two letters of recommendation
                                            (one academic, one counselor)
                                        </p>
                                        <p className="text-[16px] font-semibold mb-1 text-[#393939]">
                                            05. Standardized test scores
                                            (optional - test-optional policy)
                                        </p>
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
                                        <p className="text-[16px] text-justify font-medium text-[#393939]">
                                            The Semester admission process at
                                            Evergreen University offers
                                            prospective students the opportunity
                                            to embark on their academic journey
                                            during the autumn/spring months.
                                            During these period, applicants can
                                            submit their applications for
                                            undergraduate and graduate programs,
                                            including required documents such as
                                            transcripts, letters of
                                            recommendation, and standardized
                                            test scores(as said before).
                                        </p>
                                        <p className="text-[16px] text-justify font-medium text-[#393939] mt-2">
                                            Admissions decisions are typically
                                            communicated to applicants by late
                                            January, allowing admitted students
                                            to prepare for enrollment in the
                                            upcoming Fall Semester.
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
                                        <p className="text-[16px] text-justify font-medium text-[#393939]">
                                            Applications are reviewed
                                            holistically, considering academic
                                            achievement, extracurricular
                                            involvement, essays, and letters of
                                            recommendation.
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
                                        <p className="text-[16px] text-justify font-medium text-[#393939]">
                                            100Taka (waiver available for those
                                            demonstrating financial need)
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
                                <div className="college-event mb-8">
                                    <h5 className="event-title font-bold text-primary text-[21px]">
                                        <span className="mr-2 text-secondary text-xl">
                                            01.
                                        </span>
                                        Career Fair
                                    </h5>
                                    <div className="event-date text-sm mt-1">
                                        Date:
                                        <p className=" text-xs font-bold bg-neutral text-primary inline-block px-2 rounded-md">
                                            October 10, 2024
                                        </p>
                                    </div>
                                    <div className="event-des mt-3">
                                        <p className="mb-3 text-[16px] sm:text-sm text-justify font-medium text-black">
                                            The Career Fair at Evergreen
                                            University is a highly anticipated
                                            event that connects students with
                                            leading employers from various
                                            industries. Featuring networking
                                            opportunities, informational
                                            sessions, and on-site interviews,
                                            the Career Fair provides students
                                            with invaluable insights into
                                            potential career paths and
                                            internship opportunities.
                                        </p>
                                        <p className=" text-[16px] sm:text-sm text-justify font-medium text-black">
                                            With participation from renowned
                                            companies and organizations,
                                            students have the chance to explore
                                            diverse career options and make
                                            meaningful connections that can
                                            shape their future professional
                                            endeavors.
                                        </p>
                                    </div>
                                </div>
                                {/* Event-2 */}
                                <div className="college-event">
                                    <h5 className="event-title font-bold text-primary text-[21px]">
                                        <span className="mr-2 text-secondary text-xl capitalize">
                                            02.
                                        </span>
                                        Homecoming Weekend
                                    </h5>
                                    <div className="event-date text-sm mt-1">
                                        Date:
                                        <p className=" text-xs font-bold bg-neutral text-primary inline-block px-2 rounded-md">
                                            November 5 to 7
                                        </p>
                                    </div>
                                    <div className="event-des mt-3">
                                        <p className="mb-3 text-[16px] sm:text-sm text-justify font-medium text-black">
                                            Homecoming Weekend is a time-honored
                                            tradition at Evergreen University,
                                            bringing together alumni, students,
                                            faculty, and staff for a weekend of
                                            celebration and nostalgia. From
                                            spirited pep rallies and tailgate
                                            parties to engaging alumni panels
                                            and class reunions
                                        </p>
                                        <p className=" text-[16px] sm:text-sm text-justify font-medium text-black">
                                            Homecoming Weekend is a festive
                                            occasion that strengthens the bonds
                                            of the Evergreen community. With a
                                            lineup of exciting events and
                                            activities, Homecoming Weekend is an
                                            opportunity for past and present
                                            members of the Evergreen family to
                                            reconnect, reminisce, and create new
                                            memories together.
                                        </p>
                                    </div>
                                </div>
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
                                {/* Research-1 */}
                                <div className="college-event mb-8">
                                    <h5 className="event-title font-bold text-primary text-[21px]">
                                        <span className="mr-2 text-secondary text-xl">
                                            01.
                                        </span>
                                        "Advances in Climate Change Research:
                                        Implications for Policy and Practice"
                                    </h5>
                                    <div className="event-date text-sm mt-1">
                                        Publised on:
                                        <p className=" text-xs font-bold bg-neutral text-primary inline-block px-2 rounded-md">
                                            October 10, 2024
                                        </p>
                                    </div>
                                    <div className="event-des mt-3">
                                        <p className="mb-3 text-[16px] sm:text-sm text-justify font-medium text-black">
                                            <span className="font-bold text-primary">
                                                Overview:{" "}
                                            </span>
                                            The Career Fair at Evergreen
                                            University is a highly anticipated
                                            event that connects students with
                                            leading employers from various
                                            industries. Featuring networking
                                            opportunities, informational
                                            sessions, and on-site interviews,
                                            the Career Fair provides students
                                            with invaluable insights into
                                            potential career paths and
                                            internship opportunities.
                                        </p>
                                        <p className=" text-[16px] sm:text-sm text-justify font-medium text-black">
                                            With participation from renowned
                                            companies and organizations,
                                            students have the chance to explore
                                            diverse career options and make
                                            meaningful connections that can
                                            shape their future professional
                                            endeavors.
                                        </p>
                                    </div>
                                    <div className="research-link mt-3">
                                        <Link
                                            to="https://www.researchgate.net/publication/356554931_Elements_of_Child-Friendly_Environment_The_Effort_to_Provide_an_Anti-Violence_Learning_Environment"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary text-xs inline-block bg-accent font-semibold px-4 py-1 rounded-sm"
                                        >
                                            View Publication
                                        </Link>
                                    </div>
                                </div>
                                {/* Research-2 */}
                                <div className="college-event mb-8">
                                    <h5 className="event-title font-bold text-primary text-[21px]">
                                        <span className="mr-2 text-secondary text-xl">
                                            02.
                                        </span>
                                        "Innovations in Renewable Energy
                                        Technologies: A Review of Recent
                                        Developments"
                                    </h5>
                                    <div className="event-date text-sm mt-1">
                                        Publised on:
                                        <p className=" text-xs font-bold bg-neutral text-primary inline-block px-2 rounded-md">
                                            October 10, 2024
                                        </p>
                                    </div>
                                    <div className="event-des mt-3">
                                        <p className="mb-3 text-[16px] sm:text-sm text-justify font-medium text-black">
                                            <span className="font-bold text-primary">
                                                Overview:{" "}
                                            </span>
                                            The Career Fair at Evergreen
                                            University is a highly anticipated
                                            event that connects students with
                                            leading employers from various
                                            industries. Featuring networking
                                            opportunities, informational
                                            sessions, and on-site interviews,
                                            the Career Fair provides students
                                            with invaluable insights into
                                            potential career paths and
                                            internship opportunities.
                                        </p>
                                        <p className=" text-[16px] sm:text-sm text-justify font-medium text-black">
                                            With participation from renowned
                                            companies and organizations,
                                            students have the chance to explore
                                            diverse career options and make
                                            meaningful connections that can
                                            shape their future professional
                                            endeavors.
                                        </p>
                                    </div>
                                    <div className="research-link mt-3">
                                        <Link
                                            to="https://www.researchgate.net/publication/356554931_Elements_of_Child-Friendly_Environment_The_Effort_to_Provide_an_Anti-Violence_Learning_Environment"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary text-xs inline-block bg-accent font-semibold px-4 py-1 rounded-sm"
                                        >
                                            View Publication
                                        </Link>
                                    </div>
                                </div>
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
                                {/* Type-1:soccar */}
                                <div className="add-deadline mt-8">
                                    <div className="flex justify-start items-center">
                                        <div className="inline-block bg-accent text-primary text-sm font-bold capitalize px-3 py-[2px] rounded-sm">
                                            Type-1
                                        </div>
                                        <h3 className="text-base font-bold ml-3 text-secondary">
                                            Soccer
                                        </h3>
                                    </div>
                                    <div className="mt-3 pl-1">
                                        <p className="text-[16px] text-justify font-medium text-[#393939]">
                                            Soccer enthusiasts at Evergreen
                                            University can participate in
                                            intramural and club soccer leagues,
                                            as well as compete at the
                                            intercollegiate level. The
                                            university's soccer teams showcase
                                            their skills and teamwork on the
                                            field, representing Evergreen with
                                            pride and sportsmanship.
                                        </p>
                                        <p className="text-[16px] text-justify font-medium text-[#393939] mt-2">
                                            Whether you're a seasoned player or
                                            a beginner, there are opportunities
                                            for students of all skill levels to
                                            join the soccer community at
                                            Evergreen.
                                        </p>
                                    </div>
                                </div>
                                {/* Type-2:Swimming */}
                                <div className="add-deadline mt-8">
                                    <div className="flex justify-start items-center">
                                        <div className="inline-block bg-accent text-primary text-sm font-bold capitalize px-3 py-[2px] rounded-sm">
                                            Type-2
                                        </div>
                                        <h3 className="text-base font-bold ml-3 text-secondary">
                                            Swimming
                                        </h3>
                                    </div>
                                    <div className="mt-3 pl-1">
                                        <p className="text-[16px] text-justify font-medium text-[#393939]">
                                            Evergreen University boasts
                                            outstanding swimming facilities,
                                            including Olympic-sized pools and
                                            state-of-the-art training equipment.
                                            Students interested in swimming can
                                            participate in recreational swimming
                                            sessions, swim meets, and aquatic
                                            fitness classes offered at the
                                            university's aquatic center.
                                        </p>
                                        <p className="text-[16px] text-justify font-medium text-[#393939] mt-2">
                                            Evergreen's swimming teams are known
                                            for their dedication, discipline,
                                            and competitive spirit, consistently
                                            achieving success in regional and
                                            national competitions.
                                        </p>
                                    </div>
                                </div>
                                {/* Type-3:Cricket */}
                                <div className="add-deadline mt-8">
                                    <div className="flex justify-start items-center">
                                        <div className="inline-block bg-accent text-primary text-sm font-bold capitalize px-3 py-[2px] rounded-sm">
                                            Type-3
                                        </div>
                                        <h3 className="text-base font-bold ml-3 text-secondary">
                                            Cricket
                                        </h3>
                                    </div>
                                    <div className="mt-3 pl-1">
                                        <p className="text-[16px] text-justify font-medium text-[#393939]">
                                            Evergreen University recognizes the
                                            global popularity of cricket and
                                            offers opportunities for students to
                                            participate in this dynamic sport.
                                            Whether you're a seasoned cricketer
                                            or new to the game, Evergreen
                                            provides facilities for cricket
                                            practice and competition.
                                        </p>
                                        <p className="text-[16px] text-justify font-medium text-[#393939] mt-2">
                                            The university's cricket teams
                                            compete in intercollegiate matches,
                                            showcasing their skills in batting,
                                            bowling, and fielding while
                                            fostering teamwork and camaraderie.
                                        </p>
                                    </div>
                                </div>
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

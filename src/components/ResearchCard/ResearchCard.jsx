import React from "react";
import { Link } from "react-router-dom";

const ResearchCard = () => {
    return (
        <div className="w-full h-full px-4 py-6 bg-white shadow-md rounded-md border border-neutral">
            <h3 className="text-base font-bold capitalize text-primary">
                "Advances in Climate Change Research: Implications for Policy
                and Practice"
            </h3>
            <div className="event-date text-sm mt-2">
                Publised on:
                <p className=" ml-1 text-xs font-bold bg-neutral text-primary inline-block px-2 rounded-md">
                    October 10, 2024
                </p>
            </div>
            <div className="event-date text-sm mt-2">
                Contributors:
                <p className=" text-xs font-bold bg-neutral text-primary inline-block px-2 rounded-md mr-2 ml-2">
                    Akash Roy
                </p>
                <p className=" text-xs font-bold bg-neutral text-primary inline-block px-2 rounded-md">
                    Anjum Chopra
                </p>
            </div>
            <div className="event-des mt-3">
                <p className="mb-3 text-[16px] sm:text-sm text-justify font-medium text-black">
                    <span className="font-bold text-primary">Overview: </span>
                    The Career Fair at Evergreen University is a highly
                    anticipated event that connects students with leading
                    employers from various industries. Featuring networking
                    opportunities...
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
    );
};

export default ResearchCard;

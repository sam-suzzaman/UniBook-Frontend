import React from "react";
import styled from "styled-components";

const GraduatesGallery = ({ graduates }) => {
    return (
        <Wrapper>
            <div className="gallery-wrapper">
                {graduates?.map((graduate, i) => {
                    return (
                        <div
                            className={`thumb-card relative group ${
                                i == 2 && "tall"
                            } ${(i == 3 || i == 4) && "wide"}`}
                            key={graduate._id}
                        >
                            <img
                                src={graduate.thumb}
                                alt=""
                                className="object-cover"
                            />
                            <div className="gallery-overlay absolute top-0 right-0 bottom-0 left-0 rounded-[5px] flex flex-col justify-end h-full pb-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="mb-[-20px] group-hover:mb-0 transition-all duration-300 delay-10">
                                    <h4 className="text-[15px] font-bold text-accent text-center">
                                        {graduate.collegeName}
                                    </h4>
                                    <h6 className="text-[13px] font-semibold text-center mt-1 text-white">
                                        <span className="">
                                            {graduate.batch} batch
                                        </span>
                                    </h6>
                                    {/* <h6 className="text-[13px] font-semibold text-center mt-1 text-white">
                                        Session:{" "}
                                        <span className="">
                                            {graduate.batch}
                                        </span>
                                    </h6> */}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .thumb-card img {
        max-width: 100%;
        height: auto;
        vertical-align: middle;
        display: inline-block;
    }

    .gallery-wrapper > .thumb-card {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .gallery-wrapper > .thumb-card > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }

    .gallery-wrapper {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-auto-rows: 200px;
        grid-auto-flow: dense;
    }
    .gallery-wrapper .wide {
        grid-column: span 2;
    }
    .gallery-wrapper .tall {
        grid-row: span 2;
    }
    .gallery-wrapper .big {
        grid-column: span 2;
        grid-row: span 2;
    }
    .gallery-wrapper .gallery-overlay {
        background-image: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.95),
            rgba(0, 0, 0, 0.01)
        );
    }
`;
export default GraduatesGallery;

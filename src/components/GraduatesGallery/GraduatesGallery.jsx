import React from "react";
import styled from "styled-components";

const GraduatesGallery = ({ graduates }) => {
    return (
        <Wrapper>
            <div class="gallery-wrapper">
                {/* <div className="thumb-card relative group">
                    <img
                        src="https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                        alt=""
                    />
                    <div className="gallery-overlay absolute top-0 right-0 bottom-0 left-0 rounded-[5px] flex flex-col justify-end h-full pb-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="mb-[-20px] group-hover:mb-0 transition-all duration-300 delay-10">
                            <h4 className="text-[15px] font-bold text-accent text-center">
                                Jaitya Kabi Kazi Nazrul Islam University
                            </h4>
                            <h6 className="text-[13px] font-semibold text-center mt-1 text-white">
                                Session: <span className="">1999-2000</span>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="thumb-card relative group">
                    <img
                        src="https://images.unsplash.com/photo-1588282322673-c31965a75c3e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1351&amp;q=80"
                        alt=""
                    />
                    <div className="gallery-overlay absolute top-0 right-0 bottom-0 left-0 rounded-[5px] flex flex-col justify-end h-full pb-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="mb-[-20px] group-hover:mb-0 transition-all duration-300 delay-10">
                            <h4 className="text-[15px] font-bold text-accent text-center">
                                Jaitya Kabi Kazi Nazrul Islam University
                            </h4>
                            <h6 className="text-[13px] font-semibold text-center mt-1 text-white">
                                Session: <span className="">1999-2000</span>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="tall thumb-card relative group">
                    <img
                        src="https://images.unsplash.com/photo-1588117472013-59bb13edafec?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                        alt=""
                    />
                    <div className="gallery-overlay absolute top-0 right-0 bottom-0 left-0 rounded-[5px] flex flex-col justify-end h-full pb-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="mb-[-20px] group-hover:mb-0 transition-all duration-300 delay-10">
                            <h4 className="text-[15px] font-bold text-accent text-center">
                                Jaitya Kabi Kazi Nazrul Islam University
                            </h4>
                            <h6 className="text-[13px] font-semibold text-center mt-1 text-white">
                                Session: <span className="">1999-2000</span>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="wide thumb-card relative group">
                    <img
                        src="https://images.unsplash.com/photo-1587588354456-ae376af71a25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                        alt=""
                    />
                    <div className="gallery-overlay absolute top-0 right-0 bottom-0 left-0 rounded-[5px] flex flex-col justify-end h-full pb-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="mb-[-20px] group-hover:mb-0 transition-all duration-300 delay-10">
                            <h4 className="text-[15px] font-bold text-accent text-center">
                                Jaitya Kabi Kazi Nazrul Islam University
                            </h4>
                            <h6 className="text-[13px] font-semibold text-center mt-1 text-white">
                                Session: <span className="">1999-2000</span>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="wide thumb-card relative group">
                    <img
                        src=" https://images.unsplash.com/photo-1558980663-3685c1d673c4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=60"
                        alt=""
                    />
                    <div className="gallery-overlay absolute top-0 right-0 bottom-0 left-0 rounded-[5px] flex flex-col justify-end h-full pb-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="mb-[-20px] group-hover:mb-0 transition-all duration-300 delay-10">
                            <h4 className="text-[15px] font-bold text-accent text-center">
                                Jaitya Kabi Kazi Nazrul Islam University
                            </h4>
                            <h6 className="text-[13px] font-semibold text-center mt-1 text-white">
                                Session: <span className="">1999-2000</span>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="thumb-card relative group">
                    <img
                        src="https://images.unsplash.com/photo-1588499756884-d72584d84df5?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2134&amp;q=80"
                        alt=""
                    />
                    <div className="gallery-overlay absolute top-0 right-0 bottom-0 left-0 rounded-[5px] flex flex-col justify-end h-full pb-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="mb-[-20px] group-hover:mb-0 transition-all duration-300 delay-10">
                            <h4 className="text-[15px] font-bold text-accent text-center">
                                Jaitya Kabi Kazi Nazrul Islam University
                            </h4>
                            <h6 className="text-[13px] font-semibold text-center mt-1 text-white">
                                Session: <span className="">1999-2000</span>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="thumb-card relative group">
                    <img
                        src="https://images.unsplash.com/photo-1588499756884-d72584d84df5?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2134&amp;q=80"
                        alt=""
                    />
                    <div className="gallery-overlay absolute top-0 right-0 bottom-0 left-0 rounded-[5px] flex flex-col justify-end h-full pb-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="mb-[-20px] group-hover:mb-0 transition-all duration-300 delay-10">
                            <h4 className="text-[15px] font-bold text-accent text-center">
                                Jaitya Kabi Kazi Nazrul Islam University
                            </h4>
                            <h6 className="text-[13px] font-semibold text-center mt-1 text-white">
                                Session: <span className="">1999-2000</span>
                            </h6>
                        </div>
                    </div>
                </div> */}
                {graduates?.map((graduate, i) => {
                    return (
                        <div
                            className={`thumb-card relative group ${
                                i == 2 && "tall"
                            } ${(i == 3 || i == 4) && "wide"}`}
                        >
                            <img src={graduate.thumb} alt="" className="object-cover" />
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

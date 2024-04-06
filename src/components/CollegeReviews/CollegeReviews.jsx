import React from "react";
import ReviewCard from "../ReviewCard/ReviewCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Autoplay } from "swiper/modules";

const CollegeReviews = () => {
    return (
        <div className="mt-8">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                modules={[FreeMode, Autoplay]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                speed={2000}
                loop={true}
                breakpoints={{
                    // 640: {
                    //     slidesPerView: 2,
                    //     spaceBetween: 20,
                    // },
                    850: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                }}
            >
                <SwiperSlide>
                    <ReviewCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCard />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CollegeReviews;

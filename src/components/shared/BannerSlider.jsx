import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

import teacher1 from '../../assets/img/teacher/teacher1.png';
import student1 from '../../assets/img/student/student1.jpg';

const BannerSlider = () => {
    return (
        <>
            <Swiper
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper dark:bg-gray-800 dark:text-gray-500">
                <SwiperSlide>
                    <div className="container mx-auto h-[550px]">
                        <div className="flex justify-center items-center">
                            <div className="w-1/2">
                                <h1 className="text-slate-900 text-4xl font-bold uppercase dark:text-white">Learn English with a <br /> method that really works</h1>
                                <p className="text-lg my-5">Learn English with our effective methodology</p>
                                <button className="btn">See More</button>
                            </div>
                            <div className="w-1/2">
                                <img src={teacher1} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container mx-auto h-[550px]">
                        <div className="flex justify-center items-center h-full">
                            <div className="w-1/2">
                                <h1 className="text-slate-900 text-4xl font-bold uppercase dark:text-white">
                                    To have another language <br /> is to possess a second soul.
                                </h1>
                                <p className="text-lg my-5">Our language programs at SUMMER TIME CAMPS have been attracting the attention of children and parents for over 29 years.</p>
                                <button className="btn">See More</button>
                            </div>
                            <div className="w-1/2 flex items-center justify-center h-full">
                                <img className="h-full" src={student1} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default BannerSlider;
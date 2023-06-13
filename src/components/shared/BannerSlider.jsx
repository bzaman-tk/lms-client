import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

// import teacher1 from '../../assets/img/teacher/teacher1.png';
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
                    <div className="container mx-auto sm:h-[550px] sm:py-0 py-5">
                        <div className="flex flex-col sm:flex-row justify-center items-center h-full">
                            <div className="sm:w-1/2">
                                <h1 className="text-slate-900 sm:text-left text-xl text-center sm:text-4xl font-bold uppercase  dark:text-white">Learn English with a <br /> method that really works</h1>
                                <p className="text-lg my-5 px-5 mx-auto sm:mx-0 sm:px-0 text-center sm:text-left">Learn English with our effective methodology</p>
                                <button className="btn block mx-auto">See More</button>
                            </div>
                            <div className="sm:w-1/2 hidden sm:flex items-center justify-center h-full">
                                <img src='https://i.ibb.co/zHXj1gW/teacher1.png' alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container mx-auto sm:h-[550px] sm:py-0 py-5">
                        <div className="flex flex-col sm:flex-row justify-center items-center h-full">
                            <div className="sm:w-1/2">
                                <h1 className="text-slate-900 sm:text-left text-xl text-center sm:text-4xl font-bold uppercase  dark:text-white">
                                    To have another language <br /> is to possess a second soul.
                                </h1>
                                <p className="text-lg my-5 px-5 sm:px-0 sm:mx-0 mx-auto">Our language programs at SUMMER TIME CAMPS have been attracting the attention of children and parents for over 29 years.</p>
                                <button className="btn mx-auto block">See More</button>
                            </div>
                            <div className="sm:w-1/2 hidden sm:flex items-center justify-center h-full">
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
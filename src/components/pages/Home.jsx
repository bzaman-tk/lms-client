import React from 'react';
import BannerSlider from '../shared/BannerSlider';
import PopularInstructors from '../shared/PopularInstructors';
import PopularClasses from '../shared/PopularClasses';

const Home = () => {
    return (
        <div>
            <BannerSlider />
            <PopularClasses />
            <PopularInstructors />
        </div>
    );
};

export default Home;
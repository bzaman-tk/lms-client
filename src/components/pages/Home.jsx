import React from 'react';
import BannerSlider from '../shared/BannerSlider';
import PopularInstructors from '../shared/PopularInstructors';
import PopularClasses from '../shared/PopularClasses';
import ExtraSection from '../shared/ExtraSection';

const Home = () => {
    return (
        <div>
            <BannerSlider />
            <PopularClasses />
            <PopularInstructors />
            <ExtraSection />
        </div>
    );
};

export default Home;
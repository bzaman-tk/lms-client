import { Outlet } from 'react-router-dom';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import ThemeSwitch from '../components/shared/ThemeSwitch';


const MainLayout = () => {
    return (
        <div className='dark:bg-gray-900'>
            <Header />
            <Outlet />
            <Footer />
            <ThemeSwitch />
        </div>
    );
};

export default MainLayout;
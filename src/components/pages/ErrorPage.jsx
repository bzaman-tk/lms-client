import { Link } from 'react-router-dom';
import img from '../../assets/img/error.jpg';

const ErrorPage = () => {
    return (
        <div className='flex flex-col gap-8 justify-center items-center h-screen'>
            <img className='w-1/3' src={img} alt="" />
            <h2 className="text-red-600 text-3xl uppercase">404 not Found</h2>
            <Link className='btn' to='/'>Go Back Home</Link>
        </div>
    );
};

export default ErrorPage;
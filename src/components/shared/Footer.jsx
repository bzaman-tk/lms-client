import logo from '../../assets/logo-w.jpg';
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-gray-200 text-gray-900">
            <div>
                <img className='rounded-lg' src={logo} alt="" />
                <p className="text-lg">
                    <strong>Email: </strong>example@gmail.com <br />
                    <strong>Phone: </strong>+880 123 456 7891, +880 123 456 7891 <br />
                    <strong>Address: </strong>Habigonj, Sylhet, Bangladesh
                </p>
            </div>
            <p className='text-lg pt-5 border-gray-400 border border-r-0 border-l-0 border-b-0 w-full'>Copyright © 2023 - All right reserved</p>
        </footer>
    );
};

export default Footer;
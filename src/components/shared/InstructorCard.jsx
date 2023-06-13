import { Rotate } from "react-awesome-reveal";

const InstructorCard = ({ instructor }) => {
    const { name, email, photo } = instructor
    return (
        <div className="card bg-gray-100 shadow-xl border dark:text-slate-300 dark:bg-gray-600 dark:border-gray-800">
            <figure>
                <Rotate className="w-full">
                    <img className='h-80 w-full' src={photo} alt="" />
                </Rotate>
            </figure>
            <div className="card-body">
                <h2 className="card-title"><strong>Name:</strong> {name}</h2>
                <p><strong>Email:</strong> {email}</p>
            </div>
        </div>
    );
};

export default InstructorCard;
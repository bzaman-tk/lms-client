import React from 'react';

const InstructorCard = ({ instructor }) => {
    const { name, email, photo } = instructor
    return (
        <div className="card bg-gray-100 shadow-xl border">
            <figure>
                <img src={photo} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title"><strong>Name:</strong> {name}</h2>
                <p><strong>Email:</strong> {email}</p>
            </div>
        </div>
    );
};

export default InstructorCard;
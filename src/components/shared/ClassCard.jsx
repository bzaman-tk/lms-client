import React from 'react';

const ClassCard = ({ cls }) => {
    const { _id, name, photo, price, seats, instructor } = cls
    return (
        <div className="card w-96 bg-gray-100 border shadow-xl">
            <figure>
                <img src={photo} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><strong>Instructor:</strong> {instructor}</p>
                <p><strong>Avaiable Seats:</strong> {seats}</p>
                <p><strong>Price:</strong> {price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;
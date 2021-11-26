import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    // const {service} = props;
    const { id, name, price, description, img } = service;
    return (
        <div className="service pb-4 ">
            <img src={img} alt="" />
            <br /><br />
            <h3>{name}</h3>
            <br />
            <h5>Doctor Fee: {price}</h5>
            <br />
            <p className="px-3">{description}</p>
            <br />
            <Link to={`/booking/${id}`}>
                <button className="btn btn-danger w-50">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;
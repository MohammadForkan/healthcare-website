import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../../Home/Footer/Footer';

const Booking = () => {

    const { serviceId } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const ExactItem = data.filter(td => td.id == serviceId)
    console.log(ExactItem);
    return (
        <div>
            <br />
            {/* <h2>This is booking: {serviceId}</h2> */}
            <div className="team-details">
                <div className="team"></div>
            </div>
            <br />
            <div className="row d-flex">
                <div className="col-md-6">
                    <div className="details-img">
                        <img src={ExactItem[0]?.img} alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <h3 className="text-danger">{ExactItem[0]?.name}</h3>
                    <br />
                    <p>{ExactItem[0]?.description}</p>
                    <br />
                    <button className="btn btn-danger w-50">Go to Return</button>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Booking;
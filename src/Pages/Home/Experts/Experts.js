import React from 'react';

import mechanic1 from '../../../images/mechanic/d1.jpg';
import mechanic2 from '../../../images/mechanic/d2.jpg'
import mechanic3 from '../../../images/mechanic/d3.jpg'
import mechanic4 from '../../../images/mechanic/d4.jpg'
import mechanic5 from '../../../images/mechanic/d5.jpg'
import mechanic6 from '../../../images/mechanic/d6.jpg'
import Expert from '../Expert/Expert';

const experts = [
    {
        img: mechanic1,
        name: 'Dr. Andrew Smith',
        expertize: 'NEUROLOGY EXPERT'
    },
    {
        img: mechanic2,
        name: 'Dr. John Anderson',
        expertize: 'DERMITOLOGY EXPERT'
    },
    {
        img: mechanic3,
        name: 'Dr. Zakaria Smith',
        expertize: 'PEDIATRICS EXPERT'
    },
    {
        img: mechanic4,
        name: 'Dr. Sakib Anderson',
        expertize: 'DENTAL EXPERT'
    },
    {
        img: mechanic5,
        name: 'Dr. Sakib Anderson',
        expertize: 'RADIOLOGY EXPERT'
    },
    {
        img: mechanic6,
        name: 'Dr. Sakib Anderson',
        expertize: 'CARDIOLOGY EXPERT'
    },
]

const Experts = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-primary mt-5">Our Specialities</h2>
            <br />
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;
import React from 'react';

const Expert = ({ expert }) => {
    const { name, img, expertize } = expert;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <br /><br />
            <img src={img} alt="" />
            <br /><br />
            <h3>{name}</h3>
            <br />
            <h4 className="text-danger">{expertize}</h4>
            <button className="btn btn-danger w-50">See More</button>
        </div>
    );
};

export default Expert;
import React from 'react';
import { Link } from 'react-router-dom';

const DiscountOffer = () => {
    return (
        <div className='my-4'>
            <div className='grid grid-rows-2 lg:grid-rows-1 grid-flow-col gap-4 '>
                <Link to='/product'><img className='img-fluid' src="https://i.ibb.co/WKZwfkj/banner-h16-1.webp" alt="" ></img></Link>
                <Link to="/product"><img className='img-fluid' src="https://i.ibb.co/mhz0WpJ/bn2-549ed005-ae28-4acb-bb07-fff2bc3ce600.webp" alt="" ></img></Link>
            </div>
        </div>
    );
};

export default DiscountOffer;
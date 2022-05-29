import React from 'react';
import Banner from './Banner';

import BusinessSummery from './BusinessSummery';
import DealDAy from './DealDAy';
import DiscountOffer from './DiscountOffer';
import Offer from './Offer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offer></Offer>
            <DiscountOffer></DiscountOffer>
            <DealDAy></DealDAy>
            <BusinessSummery></BusinessSummery>
        </div>
    );
};

export default Home;
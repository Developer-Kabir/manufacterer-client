import React, { useEffect, useState } from 'react';
import Singlereview from './Singlereview';

const CustomerReview = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://gentle-fortress-48614.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])


    return (
        <div className='mt-10'>
            <h2 className='text-center text-2xl font-bold text-primary'>Our Customer Review</h2>

            <div  className='tools'>
                {
                    review.map(r => <Singlereview
                     key = {r._id}
                        r ={r}
                    ></Singlereview>)
                }
            </div>
        </div>
    );
};

export default CustomerReview;
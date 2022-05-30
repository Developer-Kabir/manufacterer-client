import React from 'react';

const Singlereview = ({ r }) => {
    return (
        <div className='text-center card m-10 bg-base-200 py-4 shadow-xl border-2'>
            <h2 class="text-center text-2xl font-bold text-primary">{r.name}</h2>
            <p className='font-bold my-2'>{r.reviewText}</p>
            <p className='font-bold text-primary'>{r.rating} ✮</p>
        </div>
    );
};

export default Singlereview;
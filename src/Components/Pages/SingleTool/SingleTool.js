import React from 'react';

const SingleTool = ({ tool }) => {
    const { name, price, quantity, store, picture, description } = tool;
    return (
        <div>
            <div class="card w-96 bg-base-100 mt-8 border-4 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                       {name}
                        <div class="badge badge-secondary">NEW</div>
                    </h2>
                    <p className='rounded-box border-2 p-4 my-2'>{description}</p>
                    <p className='rounded-box border-2 p-px font-bold my-2'>Price Per Unit : $ {price}</p>
                    <p className='rounded-box border-2 p-px font-bold my-2'>Our Avilable Stock : {store}</p>
                    <p className='rounded-box border-2 p-px font-bold my-2'>Minimum Order Quantity : {quantity}</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTool;
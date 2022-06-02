import React from 'react';
import { Link } from 'react-router-dom';

const DealDAy = () => {
    return (
        <div className='mt-10'>
            <h2 className='text-3xl uppercase font-bold'><span className='bg-primary p-1 text-accent rounded'>deals</span> of the Day</h2>

            <div className='grid lg:grid-cols-2' >
                <div className='grid lg:grid-cols-2 px-4'>
                    <div>
                        <img src="https://i.ibb.co/LYRN4hZ/9-370x370.jpg" alt="" />
                    </div>
                    <div className='grid content-center'>
                        <h2 className='text-2xl font-bold'>VOLUP TATEM ACCU</h2>
                        <div class="rating my-4">
                            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" checked />
                        </div>
                        <p className='text-primary text-xl font-bold my-2'> Price : $ 520 <del>$ 600</del></p>
                        <Link to="/product" class="btn btn-primary">Go to Purchase page</Link>
                        <p><span className='text-primary text-xl mt-2'>Hurry Up!!</span> Offer will end today</p>
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 px-4'>
                    <div>
                        <img src="https://i.ibb.co/LNCrVHF/12-370x370.jpg" alt="" />
                    </div>
                    <div className='grid content-center'>
                        <h2 className='text-2xl font-bold'>Michelin Season Ire</h2>
                        <div class="rating my-4">
                            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" checked />
                        </div>
                        <p className='text-primary text-xl font-bold my-2'> Price : $ 340 <del>$ 400</del> </p>
                        <Link to="/product" class="btn btn-primary">Go to Purchase page</Link>
                        <p><span className='text-primary text-xl mt-2'>Hurry Up!!</span> Offer will end today</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealDAy;
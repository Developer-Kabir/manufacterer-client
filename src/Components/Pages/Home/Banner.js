import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen px-4 shadow">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/CsJsK1D/1-370x370.jpg" alt="" />
                    <div className='px-2'>
                        <h1 class="text-5xl font-bold">Welcome to Elegent AutoParts</h1>
                        <p class="py-6"><span className='text-primary font-bold'>At Elegent Auto Parts</span>, we offer an extensive selection of auto parts, truck parts, import parts, performance parts and automotive accessories, so you can easily find the quality parts you need at the lowest price.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
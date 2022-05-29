import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/BgMNdGj/wordpress-404-error.jpg" alt="" />
                    <div>
                        <h1 class="text-5xl font-bold">NO page found With this Slug</h1>
                        <p class="py-6">May be You are type a wrong slug or directory Please go for to the right path or click the button bellow to back home</p>
                        <Link to="/" className='btn btn-primary'>Back home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
import React from 'react';
import { Link } from 'react-router-dom';

const MyPortFolio = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img width={400} src="https://i.ibb.co/HTX6Tr0/IMG20200724170938.jpg" alt="" />
                    <div>
                        <h1 class="text-5xl font-bold">Kabir Hossain</h1>
                        <p class="py-2 font-bold">Email: Hakabir40@gmail.com</p>
                        <p class="py-2 font-bold">Educationa Qualification : B.B.A (Management)</p>
                        <div className='flex'>
                            <div>
                                <p className='text-2xl font-bold py-2'>List of Skill as Developer</p>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Bootstrap5</li>
                                <li>Javascript</li>
                                <li>ReactJs</li>
                                <li>React Router</li>
                                <li>NodeJs</li>
                                <li>MongoDB</li>
                                <li>WordPress</li>
                            </div>
                            <div className='p-2'>
                                <p className='text-center font-bold text-2xl'>Some of My Project</p>
                                <li className='pl-4'>https://monthly-cash-flow.netlify.app/</li>
                                <li className='pl-4'>https://phone-gallery.netlify.app/</li>
                                <li className='pl-4'>https://civic-boulder-330122.web.app/</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortFolio;
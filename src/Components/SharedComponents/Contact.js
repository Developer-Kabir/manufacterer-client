import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <footer class="footer grid lg:grid-cols-3 p-10 bg-base-200 text-base-content">
                <div className='mx-auto'>
                    <span to="#" class="footer-title">Services</span>
                    <Link to="#" class="link link-hover">Branding</Link>
                    <Link to="#" class="link link-hover">Design</Link>
                    <Link to="#" class="link link-hover">Marketing</Link>
                    <Link to="#" class="link link-hover">Advertisement</Link>
                </div>
                <div className='mx-auto'>
                    <span class="footer-title">Company</span>
                    <Link to="#" class="link link-hover">About us</Link>
                    <Link to="#" class="link link-hover">Contact</Link>
                    <Link to="#" class="link link-hover">Jobs</Link>
                    <Link to="#" class="link link-hover">Press kit</Link>
                </div>
                <div className='mx-auto'>
                    <span class="footer-title">Legal</span>
                    <Link to="#" class="link link-hover">Terms of use</Link>
                    <Link to="#" class="link link-hover">Privacy policy</Link>
                    <Link to="#" class="link link-hover">Cookie policy</Link>
                </div>
            </footer>
        </div>
    );
};

export default Contact;
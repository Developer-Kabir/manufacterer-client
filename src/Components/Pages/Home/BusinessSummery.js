import { faCircleDollarToSlot,  faFileCircleCheck,  faPeopleArrows,  faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BusinessSummery = () => {
    return (
        <div className='my-4'>
            <div className='text-center font-bold'>
                <h2 className='text-3xl'>Our Business Summery</h2>
                <p className='text-xl my-4'>We maintain our business for last 10 years with great honur.</p>
            </div>

            <div class="bg-primary b-summery text-accent lg:flex md:flex lg:stats-horizontal shadow">

                <div class="stat flex justify-center">
                    <div>
                        <FontAwesomeIcon className='text-7xl' icon={faCircleDollarToSlot} />
                    </div>
                    <div>
                        <div class="stat-title">Our Monthly Sales</div>
                        <div class="stat-value">$ 10B</div>
                        <div class="stat-desc">Jan-1st 2013 - Dec-1st 2022</div>
                    </div>
                </div>

                <div class="stat flex justify-center">
                    <div>
                        <FontAwesomeIcon className='text-7xl' icon={faSackDollar} />
                    </div>
                    <div>
                        <div class="stat-title">Our Total Worth</div>
                        <div class="stat-value">$ 200B</div>
                        <div class="stat-desc">↗︎ 400 (22%)</div>
                    </div>
                </div>

                <div class="stat flex justify-center">
                    <div>
                        <FontAwesomeIcon className='text-7xl' icon={faPeopleArrows} />
                    </div>
                    <div>
                        <div class="stat-title">Total deal</div>
                        <div class="stat-value">1,200</div>
                        <div class="stat-desc">↗︎ 90 (14%)</div>
                    </div>
                </div>
                <div class="stat flex justify-center">
                    <div>
                        <FontAwesomeIcon className='text-7xl' icon={faFileCircleCheck} />
                    </div>
                    <div>
                        <div class="stat-title">Success Rate</div>
                        <progress class="progress progress-success lg:max-w-lg" value="90" max="100"></progress>
                        <div class="stat-desc"> 90 (2%)</div>
                    </div>
                </div>

            </div>
        </div>



    );
};

export default BusinessSummery;
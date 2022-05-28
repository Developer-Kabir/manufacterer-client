import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import { faTools } from '@fortawesome/free-solid-svg-icons'
import { faForward } from '@fortawesome/free-solid-svg-icons'
import { faTruck } from '@fortawesome/free-solid-svg-icons'

const Offer = () => {
    return (
        <div>
            <div className='Youcan'>
                <div className='text-center canCard'>
                    <p className='canIcon'><FontAwesomeIcon icon={faPhone} /></p>
                    <p>CONTACT US</p>
                </div>
                <div className='text-center canCard'>
                    <p className='canIcon'><FontAwesomeIcon icon={faCar} /></p>
                    <p>NEW VEHICLE</p>
                </div>
                <div className='text-center canCard'>
                    <p className='canIcon'><FontAwesomeIcon icon={faTools} /></p>
                    <p>AUTO PARTS</p>
                </div>
                <div className='text-center canCard'>
                    <p className='canIcon'><FontAwesomeIcon icon={faForward} /></p>
                    <p>SPECIAL OFFER</p>
                </div>
                <div className='text-center canCard'>
                    <p className='canIcon'><FontAwesomeIcon icon={faTruck} /></p>
                    <p>FREE DELIVERY SERVICE</p>
                </div>
            </div>

        </div>
    );
};

export default Offer;



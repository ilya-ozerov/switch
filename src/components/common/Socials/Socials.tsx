import React from 'react';
import './socials.scss';

import soc1 from '../../../assets/images/socials/1.svg';
import soc2 from '../../../assets/images/socials/2.svg';
import soc3 from '../../../assets/images/socials/3.svg';

export const Socials: React.FC = () => {
    return (
        <div className="socials">
            <div className="socials__item">
                <img src={soc1} alt="social item"/>
            </div>
            <div className="socials__item">
                <img src={soc2} alt="social item"/>
            </div>
            <div className="socials__item">
                <img src={soc3} alt="social item"/>
            </div>
        </div>
    );
}
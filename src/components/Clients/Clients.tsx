import React from 'react';
import './clients.scss';

import google from '../../assets/images/clients/Google.svg';
import yahoo from '../../assets/images/clients/Yahoo_Logo.svg';
import msft from '../../assets/images/clients/MSFT.svg';
import intel from '../../assets/images/clients/Intel.svg';
import qualcomm from '../../assets/images/clients/Qualcomm.svg';
import cisco from '../../assets/images/clients/Cisco.svg';
import apple from '../../assets/images/clients/Apple-logo.svg';
import asus from '../../assets/images/clients/ASUS_Logo.svg';

export const Clients: React.FC = () => {
    return (
        <section className="clients">
            <div className="clients__title title">
                <h2>OUR HAPPY CLIENT</h2>
            </div>
            <div className="clients__subtitle subtitle">
                <h3>Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor aliquet.</h3>
            </div>

            <div className="clients__items">
                <div className="client">
                    <div className="client__image">
                        <img src={google} alt="client"/>
                    </div>
                </div>
                <div className="client">
                    <div className="client__image">
                        <img src={yahoo} alt="client"/>
                    </div>
                </div>
                <div className="client">
                    <div className="client__image">
                        <img src={msft} alt="client"/>
                    </div>
                </div>
                <div className="client">
                    <div className="client__image">
                        <img src={intel} alt="client"/>
                    </div>
                </div>
                <div className="client">
                    <div className="client__image">
                        <img src={qualcomm} alt="client"/>
                    </div>
                </div>
                <div className="client">
                    <div className="client__image">
                        <img src={cisco} alt="client"/>
                    </div>
                </div>
                <div className="client">
                    <div className="client__image">
                        <img src={apple} alt="client"/>
                    </div>
                </div>
                <div className="client">
                    <div className="client__image">
                        <img src={asus} alt="client"/>
                    </div>
                </div>

            </div>

            <div className="clients__button">
                See all clients
            </div>
        </section>
    );
}
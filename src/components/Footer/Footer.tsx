import React from 'react';
import './footer.scss';

import cnn from '../../assets/images/footer/Cnn.svg';
import bbc from '../../assets/images/footer/BBC.svg';
import techcrunch from '../../assets/images/footer/TechCrunch.svg';
import nytimes from '../../assets/images/footer/The_New_York_Times.svg';

import {HeartFilled} from '@ant-design/icons';

export const Footer: React.FC = () => {
    return (
        <footer className="footer">

            <div className="footer__media">
                <div className="footer__title title">
                    <h2>AS SEEN ON</h2>
                </div>

                <div className="footer__body">
                    <div className="footer__items">
                        <div className="footer__item">
                            <img src={cnn} alt="media logo"/>
                        </div>
                        <div className="footer__item">
                            <img src={techcrunch} alt="media logo"/>
                        </div>
                        <div className="footer__item">
                            <img src={bbc} alt="media logo"/>
                        </div>
                        <div className="footer__item">
                            <img src={nytimes} alt="media logo"/>
                        </div>
                    </div>
                </div>

            </div>

            <div className="footer__author">
                Copyright 2021
            </div>
        </footer>
    );
}
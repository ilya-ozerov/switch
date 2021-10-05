import React from 'react';
import './what.scss';
import cameraImg from '../../assets/images/what/camera.svg';
import caseImg from '../../assets/images/what/case.svg';
import speedometerImg from '../../assets/images/what/speedometer.svg';

type WhatProps = {
    whatRef: React.RefObject<HTMLDivElement>;
}

export const What: React.FC<WhatProps> = ({whatRef}) => {

    return (
        <section ref={whatRef} className="what">
            <div className="what__title title">
                <h2>WHAT WE DO</h2>
            </div>

            <div className="what__subtitle subtitle">
                <h3>Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor</h3>
            </div>

            <div className="what__items">
                <div className="item">
                    <div className="item__image">
                        <img src={cameraImg} alt="green camera"/>
                    </div>
                    <div className="item__title">Lorem Ipsum</div>
                    <div className="item__text">
                        This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor,
                    </div>
                    <div className="item__button">
                        <button>Learn more</button>
                    </div>
                </div>
                <div className="item">
                    <div className="item__image">
                        <img src={speedometerImg} alt="green speedometer"/>
                    </div>
                    <div className="item__title">Lorem Ipsum</div>
                    <div className="item__text">
                        This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor,
                    </div>
                    <div className="item__button">
                        <button>Learn more</button>
                    </div>
                </div>
                <div className="item">
                    <div className="item__image">
                        <img src={caseImg} alt="green case"/>
                    </div>
                    <div className="item__title">Lorem Ipsum</div>
                    <div className="item__text">
                        This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor,
                    </div>
                    <div className="item__button">
                        <button>Learn more</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
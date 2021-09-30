import React from 'react';
import './App.scss';
import {Home} from "./components/Home/Home";
import {What} from "./components/What/What";
import {Testimonials} from "./components/Testimonials/Testimonials";
import {Clients} from "./components/Clients/Clients";
import {Works} from "./components/Works/Works";
import {Team} from "./components/Team/Team";
import {Columns} from "./components/Columns/Columns";

export const App: React.FC = () => {
    return (
        <div className='wrapper'>

            <Home />

            <What />

            <Works />

            <Testimonials />

            <Clients />

            <Team />

            <Columns />

            <footer className="footer">

                <div className="footer__media">
                    <div className="footer__title title">
                        <h2>AS SEEN ON</h2>
                    </div>

                    <div className="footer__items">
                        <div className="footer__item">
                            <img src="#" alt="media logo"/>
                        </div>
                        <div className="footer__item">
                            <img src="#" alt="media logo"/>
                        </div>
                        <div className="footer__item">
                            <img src="#" alt="media logo"/>
                        </div>
                        <div className="footer__item">
                            <img src="#" alt="media logo"/>
                        </div>
                    </div>

                </div>

                <div className="footer__author">
                    made with by Krisna :)
                </div>
            </footer>
        </div>
    );
}
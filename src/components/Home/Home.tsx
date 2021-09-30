import React from 'react';
import './home.scss';
import bg from "../../assets/images/home/background.png";

export const Home: React.FC = () => {
    return (
        <section className='home'>
            <div className="home__content">

                <header className="header">
                    <div className="header__menu">
                        <ul className="header__list">
                            <li>Home</li>
                            <li>What we do?</li>
                            <li>Testimonial</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    {/*font Nautilus Pompilius*/}
                    <div className="header__logo">
                        <span>Switch</span>
                    </div>

                    <div className="header__input">
                        <input type="text" placeholder='Search...'/>
                    </div>
                </header>

                <div className="home__body">
                    <div className="home__title">
                        <h1>Art is Eternal Happiness</h1>
                    </div>

                    <div className="home__button">
                        <button>WORK WITH US</button>
                    </div>
                </div>

                <div className="home__scroll">
                    <div>scroll down</div>
                </div>
            </div>

            <img className="home__background" src={bg} alt="background"/>
        </section>
    );
}
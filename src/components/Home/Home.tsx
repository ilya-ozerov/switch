import React, {useState} from 'react';
import './home.scss';
import bg from "../../assets/images/home/background.png";

export const Home: React.FC = () => {

    const [isBurger, setIsBurger] = useState(false);

    const toggleBurger = (toggleValue: boolean) => {
        setIsBurger(toggleValue);
        if (document.body.style.overflow !== "hidden") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
    }

    return (
        <section className='home'>
            <div className="home__content">

                <header className="header">
                    <aside className="header__menu">
                        <ul className="header__list">
                            <li onClick={() => alert('click')}>Home</li>
                            <li>What we do?</li>
                            <li>Testimonial</li>
                            <li>Contact Us</li>
                        </ul>
                    </aside>

                    {
                        !isBurger &&
                        <div onClick={() => toggleBurger(true)} className="header__burger">
                            <div></div>
                        </div>
                    }

                    {
                        isBurger &&
                        <div className="header__mobile mobile">

                            <div onClick={() => toggleBurger(false)} className="mobile__cross"></div>

                            <div className="mobile__input">
                                <input type="text" placeholder="Search..."/>
                            </div>

                            <ul className="mobile__list">
                                <li onClick={() => alert('click')}>Home</li>
                                <li>What we do?</li>
                                <li>Testimonial</li>
                                <li>Contact Us</li>
                            </ul>

                        </div>
                    }

                    {/*font Nautilus Pompilius*/}
                    <div className="header__logo">
                        Switch
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
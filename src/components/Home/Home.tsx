import React, {useState} from 'react';
import './home.scss';
import bg from "../../assets/images/home/background.png";

type HomeProps = {
    homeRef: React.RefObject<HTMLDivElement>;
    whatRef: React.RefObject<HTMLDivElement>;
    testimonialRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
}

export const Home: React.FC<HomeProps> = (props) => {

    const [isBurger, setIsBurger] = useState(false);

    const toggleBurger = (toggleValue: boolean) => {
        setIsBurger(toggleValue);
        if (document.body.style.overflow !== "hidden") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
    }

    const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
        if (isBurger) {
            setIsBurger(false);
            document.body.style.overflow = "scroll";
        }
        ref.current?.scrollIntoView({behavior: "smooth"});
    }

    return (
        <section className='home'>
            <div className="home__content">

                <header className="header">
                    <aside className="header__menu">
                        <ul className="header__list">
                            <li onClick={() => scrollTo(props.homeRef)}>Home</li>
                            <li onClick={() => scrollTo(props.whatRef)}>What we do?</li>
                            <li onClick={() => scrollTo(props.testimonialRef)}>Testimonial</li>
                            <li onClick={() => scrollTo(props.contactRef)}>Contact Us</li>
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
                                <li onClick={() => scrollTo(props.homeRef)}>Home</li>
                                <li onClick={() => scrollTo(props.whatRef)}>What we do?</li>
                                <li onClick={() => scrollTo(props.testimonialRef)}>Testimonial</li>
                                <li onClick={() => scrollTo(props.contactRef)}>Contact Us</li>
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

                <div className="home__scroll" onClick={() => scrollTo(props.whatRef)} >
                    <div>scroll down</div>
                </div>
            </div>

            <img className="home__background" src={bg} alt="background"/>
        </section>
    );
}
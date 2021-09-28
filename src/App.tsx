import React from 'react';
import './App.scss';

export const App = () => {
    return (
        <div className='wrapper'>
            <section className='home'>
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
                    <div className="header__logo">Switch</div>

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
                    <button>scroll down</button>
                </div>

            </section>

            <section className="what">
                <div className="what__title title">
                    <h2>WHAT WE DO</h2>
                </div>

                <div className="what__subtitle subtitle">
                    <h3>Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor</h3>
                </div>

                <div className="what__items">
                    <div className="item">
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

            <section className='works'>
                <div className="works__title title">
                    <h2>OUR LATEST WORK</h2>
                </div>
                <div className="works__subtitle subtitle">
                    <h3>Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor aliquet.</h3>
                </div>
                <div className="works__selector">
                    <div>Photography</div>
                    <div>Design</div>
                    <div>Print</div>
                </div>
                <div className="works__gallery"></div>
                <div className="works__button">
                    <button>View more work</button>
                </div>
            </section>

            <section className="testimonials">
                <div className="testimonials__title title">
                    <h2>TESTIMONIALS</h2>
                </div>
                <div className="testimonials__subtitle subtitle">
                    <h3>Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor aliquet.</h3>
                </div>
                <div className="testimonials__comments">
                    <div className="comment">
                        <div className="comment__text">"Awalnya saya tidak menderita penyakit apapun,
                            namun setelah saya tidak berobat ke klinik tongfang, saya dinyatakan
                            tidak menderita penyakit apapun!"
                        </div>
                        <div className="comment__author">
                            <div className="comment__image">
                                <img src="#" alt="comment author"/>
                            </div>
                            <div className="comment__name">Mr. Herp</div>
                            <div className="comment_post">CEO of Meme, Inc.</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="clients">
                <div className="clients__title title">
                    <h2>OUR HAPPY CLIENT</h2>
                </div>
                <div className="clients__subtitle subtitle">
                    <h3>Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor aliquet.</h3>
                </div>

                <div className="clients__items">
                    <img src="#" alt="client"/>
                    <img src="#" alt="client"/>
                    <img src="#" alt="client"/>
                    <img src="#" alt="client"/>

                    <img src="#" alt="client"/>
                    <img src="#" alt="client"/>
                    <img src="#" alt="client"/>
                    <img src="#" alt="client"/>
                </div>
            </section>

            <section className="team">
                <div className="team__title title">
                    <h2>MEET THE TEAM</h2>
                </div>
                <div className="team__subtitle subtitle">
                    <h3>Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor aliquet.</h3>
                </div>

                <div className="team__members">
                    <div className="member">
                        <div className="member__image">
                            <img src="#" alt="member image"/>
                        </div>
                        <div className="member__name">Krisna Wijaya</div>

                        <div className="socials">
                            <div className="socials__item">
                                <img src="#" alt="social item"/>
                            </div>
                            <div className="socials__item">
                                <img src="#" alt="social item"/>
                            </div>
                            <div className="socials__item">
                                <img src="#" alt="social item"/>
                            </div>
                        </div>
                    </div>
                    <div className="member">
                        <div className="member__image">
                            <img src="#" alt="member image"/>
                        </div>
                        <div className="member__name">Krisna Wijaya</div>

                        <div className="socials">
                            <div className="socials__item">
                                <img src="#" alt="social item"/>
                            </div>
                            <div className="socials__item">
                                <img src="#" alt="social item"/>
                            </div>
                            <div className="socials__item">
                                <img src="#" alt="social item"/>
                            </div>
                        </div>
                    </div>
                    <div className="member">
                        <div className="member__image">
                            <img src="#" alt="member image"/>
                        </div>
                        <div className="member__name">Krisna Wijaya</div>

                        <div className="socials">
                            <div className="socials__item">
                                <img src="#" alt="social item"/>
                            </div>
                            <div className="socials__item">
                                <img src="#" alt="social item"/>
                            </div>
                            <div className="socials__item">
                                <img src="#" alt="social item"/>
                            </div>
                        </div>
                    </div>
                    <div className="member">
                        <div className="member__image">
                            <img src="#" alt="member image"/>
                        </div>
                        <div className="member__name">Krisna Wijaya</div>

                        <div className="socials">
                            <div className="socials__item">
                                <img src="#" alt="social item"/>
                            </div>
                            <div className="socials__item">
                                <img src="#" alt="social item"/>
                            </div>
                            <div className="socials__item">
                                <img src="#" alt="social item"/>
                            </div>
                        </div>
                    </div>
                    <div className="member">
                        <div className="member__image">
                            <img src="#" alt="member image"/>
                        </div>
                        <div className="member__name">Krisna Wijaya</div>

                        <div className="socials">
                            <div className="socials__item">
                                <img src="#" alt="social item"/>
                            </div>
                            <div className="socials__item">
                                <img src="#" alt="social item"/>
                            </div>
                            <div className="socials__item">
                                <img src="#" alt="social item"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="team__bottom">
                    <div className="team__button">
                        <button>Work with us</button>
                    </div>
                </div>
            </section>

            <section className="columns">
                <div className="columns__body">
                    <div className="columns__about">
                        <div className="columns__title title">
                            <h2>About us</h2>
                        </div>
                        <div className="columns__text">
                            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                            nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                            ipsum velit. Ut aliquam massa nisl quis neque. Suspendisse in orci enim.Aenean sollicitudin,
                            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis
                            sed odio sit amet nibh vulputate cursus.
                        </div>
                        <div className="socials">
                            <div className="socials__item">
                                <img src="#" alt="social item"/>
                            </div>
                            <div className="socials__item">
                                <img src="#" alt="social item"/>
                            </div>
                            <div className="socials__item">
                                <img src="#" alt="social item"/>
                            </div>
                        </div>
                    </div>

                    <div className="columns__posts">

                        <div className="columns__title title">
                            <h2>RECENT POSTS</h2>
                        </div>

                        <div className="columns__items">
                            <div className="post">
                                <div className="post__image">
                                    <img src="#" alt="post image"/>
                                </div>
                                <div className="post__body">
                                    <div className="post__title">Lorem Ipsum Dolor Sit Amet.</div>
                                    <div className="post__label">MAGAZINE</div>
                                </div>
                            </div>

                            <div className="post">
                                <div className="post__image">
                                    <img src="#" alt="post image"/>
                                </div>
                                <div className="post__body">
                                    <div className="post__title">Lorem Ipsum Dolor Sit Amet.</div>
                                    <div className="post__label">UI DESIGN</div>
                                </div>
                            </div>

                            <div className="post">
                                <div className="post__image">
                                    <img src="#" alt="post image"/>
                                </div>
                                <div className="post__body">
                                    <div className="post__title">Lorem Ipsum Dolor Sit Amet.</div>
                                    <div className="post__label">PHOTOGRAPHY</div>
                                </div>
                            </div>

                            <div className="post">
                                <div className="post__image">
                                    <img src="#" alt="post image"/>
                                </div>
                                <div className="post__body">
                                    <div className="post__title">Lorem Ipsum Dolor Sit Amet.</div>
                                    <div className="post__label">BOOK</div>
                                </div>
                            </div>

                            <div className="post">
                                <div className="post__image">
                                    <img src="#" alt="post image"/>
                                </div>
                                <div className="post__body">
                                    <div className="post__title">Lorem Ipsum Dolor Sit Amet.</div>
                                    <div className="post__label">UI DESIGN</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="columns__contact">

                        <div className="columns__title title">
                            <h2>Contact US</h2>
                        </div>

                        <div className="columns__contacts">
                            <div className="columns__address">10044 West 23th Street, Suite 721
                                New York NY 10010</div>
                            <div className="columns__email">Email: Username@email.com</div>
                            <div className="columns__phone">Phone: +1 (0) 123 4567 890</div>
                            <div className="columns__fax">Fax: +1 (0) 321 4567 890</div>
                        </div>

                        <div className="form">
                            <div className="form__name">
                                <input type="text" placeholder='Your Name..'/>
                            </div>
                            <div className="form__email">
                                <input type="text" placeholder='Your Email..'/>
                            </div>
                            <div className="form__message">
                                <textarea placeholder='Your Message..'/>
                            </div>
                            <div className="form__button">
                                <button>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
import React from 'react';
import './columns.scss';
import {Socials} from "../common/Socials/Socials";

export const Columns: React.FC = () => {
    return (
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
                    <Socials />
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
    );
}
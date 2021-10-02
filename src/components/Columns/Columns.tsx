import React from 'react';
import './columns.scss';
import {Socials} from "../common/Socials/Socials";
import {Label} from "./Label/Label";

import postImage1 from '../../assets/images/columns/post_image_1.png';
import postImage2 from '../../assets/images/columns/post_image_2.png';
import postImage3 from '../../assets/images/columns/post_image_3.png';
import postImage4 from '../../assets/images/columns/post_image_4.png';
import postImage5 from '../../assets/images/columns/post_image_5.png';

type ColumnsProps = {
    contactRef: React.RefObject<HTMLDivElement>;
}

export const Columns: React.FC<ColumnsProps> = ({contactRef}) => {
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
                    <Socials style={ {backgroundColor: 'columns__socials'} }/>
                </div>

                <div className="columns__posts">

                    <div className="columns__title title">
                        <h2>RECENT POSTS</h2>
                    </div>

                    <ul className="columns__list list">
                        <li>
                            <div className="list__image">
                                <img src={postImage1} alt="post"/>
                            </div>
                            <div className="list__body">
                                <div className="list__title">Lorem Ipsum Dolor Sit Amet.</div>
                                <Label name='magazine' color='#54D154' />
                            </div>
                        </li>

                        <li>
                            <div className="list__image">
                                <img src={postImage2} alt="post"/>
                            </div>
                            <div className="list__body">
                                <div className="list__title">Lorem Ipsum Dolor Sit Amet.</div>
                                <Label name='ui design' color='#FFBA00' />
                            </div>
                        </li>

                        <li>
                            <div className="list__image">
                                <img src={postImage3} alt="post"/>
                            </div>
                            <div className="list__body">
                                <div className="list__title">Lorem Ipsum Dolor Sit Amet.</div>
                                <Label name='photography' color='#089DEA' />
                            </div>
                        </li>

                        <li>
                            <div className="list__image">
                                <img src={postImage4} alt="post"/>
                            </div>
                            <div className="list__body">
                                <div className="list__title">Lorem Ipsum Dolor Sit Amet.</div>
                                <Label name='book' color='#F34D04' />
                            </div>
                        </li>

                        <li>
                            <div className="list__image">
                                <img src={postImage5} alt="post"/>
                            </div>
                            <div className="list__body">
                                <div className="list__title">Lorem Ipsum Dolor Sit Amet.</div>
                                <Label name='ui design' color='#FFBA00' />
                            </div>
                        </li>

                    </ul>
                </div>

                <div ref={contactRef} className="columns__contact">

                    <div className="columns__title title">
                        <h2>Contact US</h2>
                    </div>

                    <div className="columns__contacts">
                        <div className="columns__address">
                            <p>10044 West 23th Street, Suite 721</p>
                            <p>New York NY 10010</p>
                        </div>
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
import React from 'react';
import "swiper/swiper.scss";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';

import './commentsСarousel.scss';

import avatar from '../../../assets/images/testimonials/Herp.svg'

SwiperCore.use([Navigation]);

export const CommentsCarousel: React.FC = () => {


    return (
        <div className="carousel">
            <div className="carousel__previous"></div>

            <Swiper className="carousel__body" navigation={{
                        nextEl: ".carousel__next",
                        prevEl: ".carousel__previous",
                    }} slidesPerView={1}>

                <SwiperSlide className="carousel__content">
                    <div className="carousel__item">
                        <div className="carousel__text">“Awalnya saya tidak menderita penyakit apapun,
                            namun setelah saya tidak berobat ke klinik tongfang, saya dinyatakan
                            tidak menderita penyakit apapun!”</div>
                        <div className="carousel__author">
                            <div className="carousel__image">
                                <img src={avatar} alt="author"/>
                            </div>
                            <div className="carousel__info">
                                <div className="carousel__name">Mr. Herp</div>
                                <div className="carousel__job">CEO of Meme, Inc.</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide  className="carousel__content">
                    <div className="carousel__item">
                        <div className="carousel__text">“Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Consequatur dicta iusto magnam minus natus, non officiis placeat repellat repellendus vel?
                            Explicabo iste laborum maiores quia quisquam quo quod tempora veritatis.”
                        </div>
                        <div className="carousel__author">
                            <div className="carousel__image">
                                <img src='https://picsum.photos/id/20/100' alt="author"/>
                            </div>
                            <div className="carousel__info">
                                <div className="carousel__name">Mr. Smith</div>
                                <div className="carousel__job">Designer</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide  className="carousel__content">
                    <div className="carousel__item">
                        <div className="carousel__text">“Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Asperiores, nesciunt.”
                        </div>
                        <div className="carousel__author">
                            <div className="carousel__image">
                                <img src='https://picsum.photos/100' alt="author"/>
                            </div>
                            <div className="carousel__info">
                                <div className="carousel__name">Brandon Harvi</div>
                                <div className="carousel__job">Cleaner</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

            <div className="carousel__next"></div>

        </div>

    );
}
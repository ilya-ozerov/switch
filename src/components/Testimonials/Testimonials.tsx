import React from 'react';
import './testimonials.scss';
import avatar from '../../assets/images/testimonials/Herp.svg'
import next from '../../assets/images/testimonials/next.svg'
import prev from '../../assets/images/testimonials/prev.svg'
import {CommentsCarousel} from "./Carousel/CommentsCarousel";

type TestimonialsProps = {
    testimonialRef: React.RefObject<HTMLDivElement>;
}

export const Testimonials: React.FC<TestimonialsProps> = ({testimonialRef}) => {
    return (
        <section ref={testimonialRef} className="testimonials">
            <div className="testimonials__title title">
                <h2>TESTIMONIALS</h2>
            </div>
            <div className="testimonials__subtitle subtitle">
                <h3>Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor aliquet.</h3>
            </div>
            {/*<div className="testimonials__comments">*/}
            {/*    <div className="testimonials__previous">*/}
            {/*        <img src={prev} alt="prev button"/>*/}
            {/*    </div>*/}
            {/*    <div className="comment">*/}
            {/*        <div className="comment__text">"Awalnya saya tidak menderita penyakit apapun,*/}
            {/*            namun setelah saya tidak berobat ke klinik tongfang, saya dinyatakan*/}
            {/*            tidak menderita penyakit apapun!"*/}
            {/*        </div>*/}
            {/*        <div className="comment__author">*/}
            {/*            <div className="comment__image">*/}
            {/*                <img src={avatar} alt="comment author"/>*/}
            {/*            </div>*/}
            {/*            <div className="comment__body">*/}
            {/*                <div className="comment__name">Mr. Herp</div>*/}
            {/*                <div className="comment_post">CEO of Meme, Inc.</div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="testimonials__next">*/}
            {/*        <img src={next} alt="next button"/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <CommentsCarousel/>
        </section>
    );
}
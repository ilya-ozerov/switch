import React from 'react';
import './testimonials.scss';
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
            <CommentsCarousel/>
        </section>
    );
}
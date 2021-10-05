import React from 'react';
import './works.scss';
import img1 from '../../assets/images/works/photos/1.png'
import img2 from '../../assets/images/works/photos/2.png'
import img3 from '../../assets/images/works/photos/3.png'
import img4 from '../../assets/images/works/photos/4.png'
import img5 from '../../assets/images/works/photos/5.png'
import img6 from '../../assets/images/works/photos/6.png'
import img7 from '../../assets/images/works/photos/7.png'
import img8 from '../../assets/images/works/photos/8.png'
import img9 from '../../assets/images/works/photos/9.png'
import img10 from '../../assets/images/works/photos/10.png'
import {Item} from "./Item/Item";

export const Works: React.FC = () => {

    const works = [
        {imageUrl: img1, imageAlt: 'work'},
        {imageUrl: img2, imageAlt: 'work'},
        {imageUrl: img3, imageAlt: 'work'},
        {imageUrl: img4, imageAlt: 'work'},
        {imageUrl: img5, imageAlt: 'work'},
        {imageUrl: img6, imageAlt: 'work'},
        {imageUrl: img7, imageAlt: 'work'},
        {imageUrl: img8, imageAlt: 'work'},
        {imageUrl: img9, imageAlt: 'work'},
        {imageUrl: img10, imageAlt: 'work'},
    ]

    const worksList = works.map((w, i) => {
        return <Item imageUrl={w.imageUrl} imageAlt={w.imageAlt} />
    })

    return (
        <section className='works'>
            <div className="works__title title">
                <h2>OUR LATEST WORK</h2>
            </div>
            <div className="works__subtitle subtitle">
                <h3>Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor aliquet.</h3>
            </div>
            <div className="works__body">
                <ul className="works__selector">
                    <li>Photography</li>
                    <li>Design</li>
                    <li>Print</li>
                </ul>
                <div className="works__gallery">
                    {worksList}
                </div>
            </div>
            <div className="works__button">
                View more work
            </div>
        </section>
    );
}
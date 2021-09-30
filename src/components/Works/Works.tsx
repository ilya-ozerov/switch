import React from 'react';
import './works.scss';
import img1 from '../../assets/images/works/1.png'
import img2 from '../../assets/images/works/2.png'
import img3 from '../../assets/images/works/3.png'
import img4 from '../../assets/images/works/4.png'
import img5 from '../../assets/images/works/5.png'
import img6 from '../../assets/images/works/6.png'
import img7 from '../../assets/images/works/7.png'
import img8 from '../../assets/images/works/8.png'
import img9 from '../../assets/images/works/9.png'
import img10 from '../../assets/images/works/10.png'

export const Works: React.FC = () => {
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
                    <div className="works__item">
                        <img src={img1} alt="our work item"/>
                    </div>
                    <div className="works__item">
                        <img src={img2} alt="our work item"/>
                    </div>
                    <div className="works__item">
                        <img src={img3} alt="our work item"/>
                    </div>
                    <div className="works__item">
                        <img src={img4} alt="our work item"/>
                    </div>
                    <div className="works__item">
                        <img src={img5} alt="our work item"/>
                    </div>
                    <div className="works__item">
                        <img src={img6} alt="our work item"/>
                    </div>
                    <div className="works__item">
                        <img src={img7} alt="our work item"/>
                    </div>
                    <div className="works__item">
                        <img src={img8} alt="our work item"/>
                    </div>
                    <div className="works__item">
                        <img src={img9} alt="our work item"/>
                    </div>
                    <div className="works__item">
                        <img src={img10} alt="our work item"/>
                    </div>
                </div>
            </div>
            <div className="works__button">
                View more work
            </div>
        </section>
    );
}
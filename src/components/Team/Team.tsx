import React from 'react';
import './team.scss';

import img1 from '../../assets/images/team/1.webp';
import img2 from '../../assets/images/team/2.webp';
import img3 from '../../assets/images/team/3.webp';
import img4 from '../../assets/images/team/4.webp';
import img5 from '../../assets/images/team/5.webp';

import soc1 from '../../assets/images/socials/1.svg';
import soc2 from '../../assets/images/socials/2.svg';
import soc3 from '../../assets/images/socials/3.svg';
import {Socials} from "../common/Socials/Socials";

export const Team: React.FC = () => {
    return (
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
                        <img src={img1} alt="member image"/>
                    </div>
                    <div className="member__line"></div>
                    <div className="member__name">Krisna Wijaya</div>

                    <Socials />
                </div>
                <div className="member">
                    <div className="member__image">
                        <img src={img2} alt="member image"/>
                    </div>
                    <div className="member__line"></div>
                    <div className="member__name">Krisna Wijaya</div>

                    <Socials />
                </div>
                <div className="member">
                    <div className="member__image">
                        <img src={img3} alt="member image"/>
                    </div>
                    <div className="member__line"></div>
                    <div className="member__name">Krisna Wijaya</div>

                    <Socials />
                </div>
                <div className="member">
                    <div className="member__image">
                        <img src={img4} alt="member image"/>
                    </div>
                    <div className="member__line"></div>
                    <div className="member__name">Krisna Wijaya</div>

                    <Socials />
                </div>
                <div className="member">
                    <div className="member__image">
                        <img src={img5} alt="member image"/>
                    </div>
                    <div className="member__line"></div>
                    <div className="member__name">Krisna Wijaya</div>

                    <Socials />
                </div>
            </div>

            <div className="team__bottom">
                <div className="team__button">
                    <button>Work with us</button>
                </div>
            </div>
        </section>
    );
}
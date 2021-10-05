import React, { useRef } from 'react';
import './App.scss';
import {Home} from "./components/Home/Home";
import {What} from "./components/What/What";
import {Testimonials} from "./components/Testimonials/Testimonials";
import {Clients} from "./components/Clients/Clients";
import {Works} from "./components/Works/Works";
import {Team} from "./components/Team/Team";
import {Columns} from "./components/Columns/Columns";
import {Footer} from "./components/Footer/Footer";

export const App: React.FC = () => {

    const homeRef = useRef<HTMLDivElement>(null);
    const whatRef = useRef<HTMLDivElement>(null);
    const testimonialRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    return (
        <div className='wrapper'>

            <Home contactRef={contactRef}
                  homeRef={homeRef}
                  testimonialRef={testimonialRef}
                  whatRef={whatRef} />

            <What whatRef={whatRef} />

            <Works />

            <Testimonials testimonialRef={testimonialRef} />

            <Clients />

            <Team />

            <Columns contactRef={contactRef} />

            <Footer />

        </div>
    );
}
import React from 'react';
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
    return (
        <div className='wrapper'>

            <Home />

            <What />

            <Works />

            <Testimonials />

            <Clients />

            <Team />

            <Columns />

            <Footer />
        </div>
    );
}
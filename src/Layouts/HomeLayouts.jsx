import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import { Outlet } from 'react-router-dom';
import AllJobs from '../Components/AllJobs';

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
                <Banner></Banner>
            </header>
            <main>
                <AllJobs></AllJobs>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default HomeLayouts;
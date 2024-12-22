import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';

const AuthLayouts = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayouts;
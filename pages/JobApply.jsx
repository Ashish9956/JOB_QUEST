import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const JobApply = () => {
    return (
        <div className='flex flex-col'>
          
            <div>
                <Outlet />
            </div>

            <Footer/>
        </div>
    );
};

export default JobApply;

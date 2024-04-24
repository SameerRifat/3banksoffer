import React from 'react'
import "../globals.css";
import Navbar from '@/components/shared/navbar/Navbar';

const layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default layout
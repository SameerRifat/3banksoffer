import React from 'react'
import HeroSection from './heroSection/HeroSection'
import HowItWorks from './howItWorks/HowItWorks'
import Testimonials from './testimonials/Testimonials'
import MapSection from './mapSection/MapSection'
import AboutUs from '@/components/shared/aboutUs/AboutUs'
import Advantages from '@/components/shared/Advantages/Advantages'
import GetOffers from '@/components/shared/getOffers/GetOffers'

const LandingPage = () => {
    return (
        <>
            <HeroSection />
            <HowItWorks />
            <Testimonials />
            <MapSection />
            <AboutUs />
            <Advantages />
            <GetOffers />
        </>
    )
}

export default LandingPage
import React from 'react'
import AboutHero from './aboutHero/AboutHero'
import WeLiveHere from './weLiveHere/WeLiveHere'
import ContactSection from './contactSection/ContactSection'
import BankDetails from './bankDetails/BankDetails'
import LocationSection from './locationSection/LocationSection'

const AboutUs = () => {
    return (
        <>
            <AboutHero />
            <LocationSection />
            <WeLiveHere />
            <ContactSection />
            <BankDetails />
        </>
    )
}

export default AboutUs
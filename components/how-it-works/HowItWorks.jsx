import React from 'react'
import css from './howItWorks.module.scss'
import HeroSection from './heroSection/HeroSection'
import Steps from './steps/Steps'
import AboutUs from '@/components/shared/aboutUs/AboutUs'
import Image from 'next/image'
import Advantages from '@/components/shared/Advantages/Advantages'
import GetOffers from '@/components/shared/getOffers/GetOffers'

const HowItWorks = () => {
  return (
    <>
      <HeroSection />
      <Steps />
      <div className={css.about_section}>
        <Image
          src={'/testimonials_bg.png'}
          alt='background image'
          fill
          priority={true}
          quality={100}
          className={css.image_bg}
        />
        <AboutUs />
      </div>
      <Advantages />
      <GetOffers />
    </>
  )
}

export default HowItWorks
'use client'

import React from 'react'
import css from './heroSection.module.scss'
import cx from 'classnames'
import Navbar from '@/components/shared/navbar/Navbar'
import Image from 'next/image'
import Iconify from '@/components/shared/iconify/iconify'
import Link from 'next/link'
import HeroVideo from './heroVideo/HeroVideo'

const benefits = [
    "Easy - fast 3 non-binding offers",
    "Free service",
    "Bank guarantees"
]

const HeroSection = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <section className={css.hero_container}>
                <div className={css.hero_bg}>
                    <Image
                        src={'/hero_bg2.png'}
                        alt='bg'
                        fill
                        quality={100}
                        priority
                    />
                </div>
                <Navbar />
                <div className={cx('custom_container', css.hero)}>
                    <div className={css.hero_left}>
                        <h2 className={cx('typoH2', css.hero_title)}>
                            Get 3 bank offers {" "}
                            <br />
                            for free
                        </h2>
                        <div className={css.benefits}>
                            {benefits?.map((item, ind) => (
                                <div key={ind}>
                                    <span className={css.check_icon}>
                                        <Iconify
                                            icon="mdi:tick"
                                        />
                                    </span>
                                    <p className={cx("typoBody1", css.benefit)} key={ind}>
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className={css.btn_container}>
                            <Link href='/get-offers' className={cx("hero_btn")}>
                                Order 3 non-binding offers
                            </Link>
                            <span className={css.small_text}>It’s way simple</span>
                        </div>
                    </div>
                    <div className={css.hero_right}>
                        <div className={css.hero_image}>
                            <div className={css.image_container}>
                                <Image
                                    src={'/hero_image2.png'}
                                    alt='hero image'
                                    width={350}
                                    height={350}
                                    quality={100}
                                />
                            </div>
                        </div>
                        <div className={css.video_wrapper}>
                            <div className={css.video_wrapper_left}>
                                <img src="/arrow_svg.svg" alt="icon" />
                                <p className={cx("typoBody2", css.video_text, css.video_text1)}>
                                    This is how it works
                                </p>
                            </div>
                            <div className={css.video} onClick={() => setOpen(true)}>
                                <Image
                                    src={"/this-is-how-it-works.png"}
                                    alt='thumbnail'
                                    // fill
                                    width={200}
                                    height={120}
                                    quality={100}
                                    priority
                                />
                                <span className={css.icon}>
                                    <Iconify icon="mage:play-fill" width={30} />
                                </span>
                                {/* <Iconify
                                    icon="mage:play-fill"
                                /> */}
                            </div>
                            <p className={cx("typoBody2", css.video_text, css.video_text2)}>
                                This is how it works
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <HeroVideo open={open} setOpen={setOpen} />
        </>
    )
}

export default HeroSection
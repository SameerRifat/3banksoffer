'use client'
import React, { useRef, useState } from 'react';
import { SectionHeading } from '@/components/shared/SectionHeading/SectionHeading';
import css from './aboutUs.module.scss';
import cx from 'classnames';
import { CustomNextArrow, CustomPrevArrow } from '@/components/shared/sliderCustomArrows/SliderCustomArrows';
import Iconify from '@/components/shared/iconify/iconify';
import Image from 'next/image';

const AboutUs = () => {
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const videoRef = useRef();

    const handleVideoIconClick = () => {
        setIsVideoPlaying(!isVideoPlaying);
        const video = videoRef.current;
        if (video) {
            if (isVideoPlaying) {
                video.pause();
            } else {
                video.play();
            }
        }
    };

    const handleVideoError = () => {
        setIsLoading(false);
    };

    const handleVideoEnded = () => {
        setIsLoading(false);
    };

    return (
        <section className={cx(css.about_container)}>
            <div className={css.heading_wrapper}>
                <SectionHeading>What do the banks say about us</SectionHeading>
            </div>
            <div className={css.video_wrapper}>
                <video className={css.video} poster='/this-is-how-it-works.png' ref={videoRef} onEnded={handleVideoEnded} onError={handleVideoError}>
                    <source src="/this-is-how-it-works.mp4" type="video/mp4" />
                </video>
                {!isVideoPlaying ? (
                    <span className={css.icon} onClick={handleVideoIconClick}>
                        <Iconify icon="mage:play-fill" width={30} />
                    </span>
                ) : (
                    <span className={cx(css.icon, css.pause_icon)} onClick={handleVideoIconClick}>
                        <Iconify icon="lets-icons:stop-fill" width={30} />
                    </span>
                )}
                <div className={css.about_text_wrapper}>
                    <div className={css.ellipse}>
                        <Image
                            src={'/about_ellipse.svg'}
                            alt='ellipse'
                            fill
                            quality={100}
                            priority={true}
                            className={css.image_bg}
                        />
                        <div className={css.about_text}>
                            <p className={cx('typoBody1', css.descrption)}>
                                It provides quality assurance that 3banksoffer has carried out a screening of the banks before they are assigned to us. I would definitely recommend the service to others
                            </p>
                            <p className={cx('typoBody1', css.name)}>
                                Patrick Juel, Contractor
                            </p>

                            <Image
                                src={'/quotes.svg'}
                                alt='quotes'
                                width={35}
                                height={22}
                                quality={100}
                                priority={true}
                                className={css.quotes}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
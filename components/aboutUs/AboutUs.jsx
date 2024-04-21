'use client'
import React, { useRef, useState } from 'react';
import { SectionHeading } from '@/components/shared/SectionHeading/SectionHeading';
import css from './aboutUs.module.scss';
import cx from 'classnames';
import { CustomNextArrow, CustomPrevArrow } from '@/components/shared/sliderCustomArrows/SliderCustomArrows';
import Iconify from '@/components/shared/iconify/iconify';
import Image from 'next/image';

const videosData = [
    {
        videoSrc: '/video2.mp4'
    },
    {
        videoSrc: '/video.mp4'
    }
];

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

    return (
        <section className={cx(css.about_container)}>
            <div className={css.heading_wrapper}>
                <SectionHeading>What do the banks say about us</SectionHeading>
            </div>
            <div className={css.video_wrapper}>
                <video className={css.video} ref={videoRef}>
                    <source src="/video2.mp4" type="video/mp4" />
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
                            priority={true}
                            className={css.image_bg}
                        />
                        <div className={css.about_text}>
                            <p className={cx('typoBody1', css.descrption)}>
                                It provides quality assurance that 3banksoffer has carried out a screening of the craftsmen before they are assigned to us. I would definitely recommend 3byggetilbud.dk to others
                            </p>
                            <p className={cx('typoBody1', css.name)}>
                                Patrick Juel, Contractor
                            </p>

                            <Image
                                src={'/quotes.svg'}
                                alt='quotes'
                                width={35}
                                height={22}
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

// Export the component
export default AboutUs;


// 'use client'
// import React, { useRef, useState } from 'react';
// import { SectionHeading } from '@/components/shared/SectionHeading/SectionHeading';
// import css from './aboutUs.module.scss';
// import cx from 'classnames';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { CustomNextArrow, CustomPrevArrow } from '@/components/shared/sliderCustomArrows/SliderCustomArrows';
// import Iconify from '@/components/shared/iconify/iconify';
// import ReactPlayer from 'react-player';

// const videosData = [
//     {
//         videoSrc: '/video.mp4'
//     },
//     {
//         videoSrc: '/video2.mp4'
//     },
// ];

// const AboutUs = () => {
//     const settings = {
//         dots: false,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         nextArrow: <CustomNextArrow />,
//         prevArrow: <CustomPrevArrow />,
//     };
//     const [isVideoPlaying, setIsVideoPlaying] = useState(Array(videosData.length).fill(false));

//     const handleVideoIconClick = (index) => {
//         const newIsVideoPlaying = isVideoPlaying.map((value, idx) => (idx === index ? !value : false));
//         setIsVideoPlaying(newIsVideoPlaying);
//     };
//     console.log('isVideoPlaying: ', )


//     return (
//         <section className={cx('custom_container', css.about_container)}>
//             <SectionHeading>What do the banks say about us</SectionHeading>
//             <div className={css.slides_container}>
//                 <div className={css.testimonials}>
//                     <div className={css.slider_container}>
//                         <Slider
//                             {...settings}
//                             className={css.slider}
//                         >
//                             {videosData.map((item, ind) => (
//                                 <div className={css.video_wrapper} key={ind}>
//                                     <ReactPlayer
//                                         url={item.videoSrc}
//                                         playing={isVideoPlaying[ind]}
//                                         onPlay={() => setIsVideoPlaying(true)}
//                                         onPause={() => setIsVideoPlaying(false)}
//                                         controls={false}
//                                         width='100%'
//                                         height='100%'
//                                         className={css.video}
//                                     />
//                                     {!isVideoPlaying[ind] ? (
//                                         <span className={css.icon} onClick={() => handleVideoIconClick(ind)}>
//                                             <Iconify
//                                                 icon="mage:play-fill"
//                                                 width={30}
//                                             />
//                                         </span>
//                                     ) : (
//                                         <span className={cx(css.icon, css.pause_icon)} onClick={() => handleVideoIconClick(ind)}>
//                                             <Iconify
//                                                 icon="lets-icons:stop-fill"
//                                                 width={30}
//                                             />
//                                         </span>
//                                     )}
//                                 </div>
//                             ))}
//                         </Slider>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AboutUs;
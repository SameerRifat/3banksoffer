import React from 'react'
import css from './Footer.module.scss'
import Link from 'next/link'
import FooterLinks from './FooterLinks/FooterLinks'
import Iconify from '../iconify'
import Image from 'next/image'
// import Iconify from "@/components/iconify/iconify";


const Footer = () => {
    const socialLinks = [
        { icon: "ri:linkedin-box-fill", href: 'https://www.linkedin.com/in/cphrana/' },
        // { icon: "ri:twitter-x-fill", href: '/www.twitter.com' },
        { icon: "ri:facebook-circle-fill", href: "https://www.facebook.com/haroon.rana.5/" },
        { icon: "ri:youtube-fill", href: 'https://youtube.com/@HaroonRanabusiness?si=3wwDd6Xh5zQ-69T0' },
        { icon: "ri:instagram-fill", href: 'https://www.instagram.com/cphrana/' },
    ];
    return (
        <footer className={css.footer}>
            <Image
                src={'/footer_bg.png'}
                alt='background image'
                fill
                priority={true}
                quality={100}
                className={css.image_bg}
            />
            <div className={`custom_container ${css.footer_container}`}>
                <div className={css.footer_row1}>
                    <div className={css.company_info}>
                        <Link href='/' className={css.logo}>
                            <Image
                                src={'/logo2.png'}
                                alt='logo'
                                width={100}
                                height={100}
                                quality={100}
                                priority
                            />
                        </Link>
                        <p>
                            {/* Based in Leander, Texas, our team of skilled technicians are dedicated to providing amazing service for all your truck customization needs */}
                            3bankoffers.com's head office is located in Copenhagen, and we
                            opened offices in London in 2023 and Dubai in 2024.
                        </p>
                    </div>
                    <FooterLinks />
                </div>
                <div className={css.footer_row2}>
                    <p className={css.copy_right}>
                        @2024  3bankoffers.com. All rights reserved. | <Link href={`/privacy-policy`}>Privacy policy</Link> | <Link href={`/terms-and-conditions`}>Terms and Conditions</Link>
                    </p>
                    <div className={css.social_links}>
                        {socialLinks.map((link, index) => (
                            <Link href={link.href} key={index} className={css.social_link} target='_blank'>
                                <Iconify
                                    icon={link.icon}
                                    color="#fff"
                                    width={20}
                                />
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
            <div className="bottom_ellipse_bg" />
        </footer>
    )
}

export default Footer
import React from 'react'
import css from './Footer.module.scss'
import Link from 'next/link'
import FooterLinks from './FooterLinks/FooterLinks'
import Iconify from '../iconify'
import Image from 'next/image'
// import Iconify from "@/components/iconify/iconify";


const Footer = () => {
    const socialLinks = [
        { icon: "ri:linkedin-box-fill", href: '/www.linkedin.com' },
        { icon: "ri:twitter-x-fill", href: '/www.twitter.com' },
        { icon: "ri:facebook-circle-fill", href: "https://www.facebook.com/" },
        { icon: "ri:youtube-fill", href: '/www.youtube.com' },
        { icon: "ri:instagram-fill", href: 'https://www.instagram.com/' },
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
                            <h3>Main Logo</h3>
                            {/* <img
                                src='/cu-logo.svg'
                                alt='logo'
                            /> */}
                        </Link>
                        <p>
                            Based in Leander, Texas, our team of skilled technicians are dedicated to providing amazing service for all your truck customization needs
                        </p>
                    </div>
                    <FooterLinks />
                </div>
                <div className={css.footer_row2}>
                    <p className={css.copy_right}>
                        @2024  3banksoffer.com. All rights reserved. | <Link href={`/privacy-policy`}>Privacy policy</Link> | <Link href={`/terms-and-conditions`}>Terms and Conditions</Link>
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
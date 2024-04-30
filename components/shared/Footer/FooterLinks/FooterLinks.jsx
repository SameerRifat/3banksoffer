'use client'

import React from 'react';
import styles from './FooterLinks.module.scss';
import Link from 'next/link';
import Iconify from '../../iconify';
// import Iconify from "@/components/iconify/iconify";

const FooterLinks = () => {
    const links = [
        { title: 'How it works', href: `/how-it-works` },
        { title: 'Add on service', href: `/add-on-service` },
        { title: 'About us', href: `/about-us` },
    ]
    const contactInfo = [
        {
            icon: "ri:home-2-fill" ,
            title: 'Erhvervsvej 21, 2610 Rødovre, Denmark',
        },
        {
            icon: "ri:mail-fill",
            title: '3bankoffers@gmail.com',
            link: 'mailto:info@3bankoffers.com' 
        },
        {
            icon: "ri:phone-fill",
            title: '+45 71651281',
            link: 'tel:+4571651281'
        }
    ]

    return (
        <>
            <div className={styles.footer_links}>
                <div className={styles.links_category}>
                    <h3 className={styles['links_heading']}>Contact Info</h3>
                    <ul className={styles['links']}>
                        {contactInfo.map((item, index) => (
                            <li key={index} className={styles.link}>
                                <Iconify
                                    icon={item.icon}
                                    color="rgba(217, 217, 217, 1)"
                                    width={20}
                                />
                                {item.link ? (
                                    <Link href={item.link} target='_blank'>{item.title}</Link>
                                ) : (
                                    <span>{item.title}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.links_category}>
                    <h3 className={styles['links_heading']}>About Us</h3>
                    <ul className={styles['links']}>
                        {links.map((link, index) => (
                            <li key={index} className={styles.link}>
                                <Link href={link.href}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default FooterLinks;

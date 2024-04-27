'use client'

import React from 'react'
import css from './locationSection.module.scss'
import cx from 'classnames'
import { SectionHeading, SmallHeading } from '@/components/shared/SectionHeading/SectionHeading'
import Link from 'next/link'
import Image from 'next/image'
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const LocationSection = () => {
    return (
        <div className={cx(css.container)}>
            <Image
                src={'/testimonials_bg.png'}
                alt='background image'
                fill
                quality={100}
                priority={true}
                className={css.image_bg}
            />
            <div className={cx(css.columns)}>
                <div className={css.column1}>
                    <SectionHeading extraStyles={css.heading}>
                        We are up for grabs
                    </SectionHeading>
                    <p className={cx("typoBody1", css.description)}>
                        3bankoffers.com’s head office is located in Copenhagen, but in the summer of 2018 we opened a subdivision in Dubai. You should be more than welcome to stop by, and otherwise you can always contact us
                    </p>
                    <div className={css.card}>
                        <SmallHeading extraStyles={css.small_heading}>
                            Telephone: +45 7733 4000
                        </SmallHeading>
                        <SmallHeading extraStyles={css.small_heading}>
                            Mail: info@3bankoffers.com
                        </SmallHeading>
                    </div>
                    <div className={css.btn_wrapper}>
                        <Link href={'#'} className={cx('hero_btn', css.contact_btn)}>Contact Us</Link>
                    </div>
                </div>
                <div className={css.column2}>
                    <div className={css.map_images}>
                        <div className={cx(css.location, css.location1)} data-tooltip-id={`tooltip-1`}>
                            <Image
                                src={'/mapSection/map1.png'}
                                alt='map'
                                width={120}
                                height={120}
                                quality={100}
                                priority
                            />
                        </div>
                        <Tooltip id={`tooltip-1`} place='right-end' delayShow={300} delayHide={1} arrowColor="#fff" className={css.tooltip} >
                            <TooltipContent title={"Copenhagen"} descrption1={"Lorem Ispum Lorem ispum lorem ispum"} descrption2={"Lorem Ispum Lorem ispum lorem ispum"} />
                        </Tooltip>
                        <div className={cx(css.location, css.location2)} data-tooltip-id={`tooltip-2`}>
                            <Image
                                src={'/mapSection/map2.png'}
                                alt='map'
                                width={120}
                                height={120}
                                quality={100}
                                priority
                            />
                        </div>
                        <Tooltip id={`tooltip-2`} place='right-end' delayShow={300} delayHide={1} arrowColor="#fff" className={css.tooltip} >
                            <TooltipContent title={"Copenhagen"} descrption1={"Lorem Ispum Lorem ispum lorem ispum"} descrption2={"Lorem Ispum Lorem ispum lorem ispum"} />
                        </Tooltip>
                        <div className={cx(css.location, css.location3)} data-tooltip-id={`tooltip-3`}>
                            <Image
                                src={'/mapSection/map3.png'}
                                alt='map'
                                width={120}
                                height={120}
                                quality={100}
                                priority
                            />
                        </div>
                        <Tooltip id={`tooltip-3`} place='right-end' delayShow={300} delayHide={1} arrowColor="#fff" className={css.tooltip} >
                            <TooltipContent title={"Copenhagen"} descrption1={"Lorem Ispum Lorem ispum lorem ispum"} descrption2={"Lorem Ispum Lorem ispum lorem ispum"} />
                        </Tooltip>
                        <div className={css.img_container}>
                            <Image
                                src={'/map-full.png'}
                                alt='map'
                                // fill
                                width={950}
                                height={565}
                                quality={100}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationSection

const TooltipContent = ({ title, descrption1, descrption2 }) => {
    return (
        <div className={cx(css.tooltip_content)}>
            <h6 className={cx('typoH6', css.title)}>{title}</h6>
            <p className={cx('typoCaption', css.descrption)}><b>Address :</b> {descrption1}</p>
            <p className={cx('typoCaption', css.descrption)}><b>Register number :</b> {descrption2}</p>
        </div>
    )
}
'use client'

import React from 'react'
import css from './mapSection.module.scss'
import cx from 'classnames'
import Image from 'next/image'
import { SectionHeading } from '@/components/shared/SectionHeading/SectionHeading'
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { locations } from '@/data/locations'

const MapSection = () => {
    return (
        <div className={cx(css.map_container)}>
            <div className={css.heading_wrapper}>
                <SectionHeading>
                    Where you can find our offices around the world
                </SectionHeading>
            </div>
            <div className={css.map_images}>
                {locations.map(location => (
                    <div key={location.id} className={cx(css.location, css[`location${location.id}`])} data-tooltip-id={`tooltip-${location.id}`}>
                        <Image
                            src={`/mapSection/map${location.id}.png`}
                            alt='map'
                            width={120}
                            height={120}
                            quality={100}
                            priority
                        />
                        <Tooltip id={`tooltip-${location.id}`} place='right-end' delayShow={300} delayHide={1} arrowColor="#fff" className={css.tooltip} >
                            <TooltipContent title={location.name} address={location.address} description={location.description} />
                        </Tooltip>
                    </div>
                ))}
                {/* <div className={cx(css.location, css.location1)} data-tooltip-id={`tooltip-1`}>
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
                    <TooltipContent title={"Copenhagen"} descrption1={"Lorem Ispum Lorem ispum lorem ispum"} descrption2={"Lorem Ispum Lorem ispum lorem ispum"}/>
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
                    <TooltipContent title={"Copenhagen"} descrption1={"Lorem Ispum Lorem ispum lorem ispum"} descrption2={"Lorem Ispum Lorem ispum lorem ispum"}/>
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
                    <TooltipContent title={"Copenhagen"} descrption1={"Lorem Ispum Lorem ispum lorem ispum"} descrption2={"Lorem Ispum Lorem ispum lorem ispum"}/>
                </Tooltip> */}
                <div className={css.card_img_container}>
                    <Image
                        src={'/map.svg'}
                        alt='map'
                        // fill
                        width={700}
                        height={700}
                        quality={100}
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

export default MapSection

const TooltipContent = ({ title, address, description }) => {
    return (
      <div className={cx(css.tooltip_content)}>
        <h6 className={cx('typoH6', css.title)}>{title}</h6>
        <p className={cx('typoCaption', css.descrption)}><b>Address:</b> {address}</p>
        <p className={cx('typoCaption', css.descrption)}><b>Register number:</b> {description}</p>
      </div>
    )
  }
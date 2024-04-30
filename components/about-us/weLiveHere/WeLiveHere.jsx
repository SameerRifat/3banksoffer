import { SectionHeading, SmallHeading } from '@/components/shared/SectionHeading/SectionHeading'
import React from 'react'
import css from './weLiveHere.module.scss'
import cx from 'classnames'

const mapsData = [
    {
        heading: <>London: <br /> Easy solutions ApS LTD</>,
        description: '5842+632 Meydan Hotel - Nad Al Sheba - Nad Al Sheba 1 - Dubai - United Arab Emirates',
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.3840580330134!2d55.30029820000001!3d25.156506699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69270f5612c3%3A0x2d7e43041843e7d8!2sMeydan%20Free%20Zone!5e0!3m2!1sen!2s!4v1714237694686!5m2!1sen!2s"
    },
    {
        heading: <>Copenhagen: <br /> Easy Solutions</>,
        description: 'Erhvervsvej 21, 2610 Rødovre, Denmark',
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.485843695926!2d12.4294782!3d55.69792629999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652515653b1a1dd%3A0xef3eb29763f24b19!2sEasy%20Solutions!5e0!3m2!1sen!2s!4v1714237864455!5m2!1sen!2s"
    },
    {
        heading: <>Dubai: <br /> Easy Solutions L.L.C-FZ</>,
        description: 'Suite 6, Beaufort Court, Admirals Way, London E14 9XL, United Kingdom',
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.6520216977246!2d-0.0201982!3d51.5012529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603a3e09b0fdb%3A0x23a569e5b614c3c9!2sVirtual%20Office%20Canary%20Wharf%20-%20Virtual%20HQ!5e0!3m2!1sen!2s!4v1714237938194!5m2!1sen!2s"
    },
]

const WeLiveHere = () => {
    return (
        <div className={cx('custom_container', css.container)}>
            <SectionHeading>
                We live here
            </SectionHeading>
            <p className={cx("typoBody1", css.description)}>
                3bankoffers.com's head office is located in Copenhagen, and we
                <br />
                opened offices in London in 2023 and Dubai in 2024.
            </p>
            <div className={css.maps}>
                {mapsData.map((item, ind) => (
                    <Map key={ind} heading={item.heading} description={item.description} mapSrc={item.mapSrc} />
                ))}
            </div>
        </div>
    )
}

export default WeLiveHere

const Map = ({ heading, description, mapSrc }) => {
    return (
        <div className={css.map}>
            {/* <h4 className={cx("typoH4", css.card_heading)}>
                {heading}
            </h4> */}
            <SmallHeading extraStyles={css.sub_heading}>
                {heading}
            </SmallHeading>
            <p className={cx("typoBody1", css.description)}>
                {description}
            </p>
            <div className={css.map_wrapper}>
                <iframe
                    src={mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '8px', }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    )
}
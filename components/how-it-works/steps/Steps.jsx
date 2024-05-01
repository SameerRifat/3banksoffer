'use client'

import React from 'react'
import css from './steps.module.scss'
import cx from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { SectionHeading } from '@/components/shared/SectionHeading/SectionHeading'

const data = [
    {
        _id: 1,
        iconImage: '/how_it_works/icon1.svg',
        heading: 'Describe and submit your assignment',
        description: <p className={cx("typoBody1", css.description)}>
            You submit a short description via <Link href={"#"}>3bankoffers.com’s form</Link>. At the same time, you add your contact details so that we and our service department can get in touch with you.
            <br />
            <br />
            When the assignment has been submitted, you will receive a <b>confirmation email within 2 minutes</b> with a link to your personal assignment overview. Here you can continuously log in and follow the status of your submitted assignment.
        </p>,
    },
    {
        _id: 2,
        iconImage: '/how_it_works/icon2.svg',
        heading: 'We process your task',
        description: <p className={cx("typoBody1", css.description)}>
            Our service department quickly processes your form and <b>contacts you by phone</b> for other relevant information. In this way, we ensure that we find the right bank for your particular project. Banks are then selected for the task based on geography and qualifications. You will receive information about the banks.
        </p>,
    },
    {
        _id: 3,
        iconImage: '/how_it_works/icon3.svg',
        heading: 'The bank will contact you',
        description: <p className={cx("typoBody1", css.description)}>
            Subsequently, you will be contacted by bank, who will each submit an offer for your business . Together with the bank, you agree on the specific details for the offer. It is often a good idea to invite the bank to visit, so that the business can be inspected before the offer is drawn up. You then agree with the bank when the offer will be sent to you. You receive your offers directly from the bank by email.
        </p>,
    },
    {
        _id: 4,
        iconImage: '/how_it_works/icon4.svg',
        heading: 'Choose a bank and start the project',
        description: <p className={cx("typoBody1", css.description)}>
            After that, you just have to choose who you want to do the work, and it is of course free if you accept one of the offers sent. If you accept the offer, you can start.
        </p>,
    },
]

const Steps = () => {
    return (
        <section
            id="Steps"
            className={cx('custom_container', css.steps_container)}
        >
            <SectionHeading extraStyles={css.steps_heading}>
                How easy it is to get an offer for your {" "}
                <br />
                business in
                <br />
                4 simple steps
            </SectionHeading>
            {data.map((item) => {
                return (
                    <div className={css.step} key={item._id}>
                        <div className={css.step_left}>
                            <div className={cx(css.step_number, css.step_number1)}>
                                <h4 className={cx("typoH4", css.heading)}>
                                    {item._id}
                                </h4>
                            </div>
                            <div className={css.step_description}>
                                <div className={css.heading_wrapper}>
                                    <div className={cx(css.step_number, css.step_number2)}>
                                        <h4 className={cx("typoH4", css.heading)}>
                                            {item._id}
                                        </h4>
                                    </div>
                                    <h4 className={cx("typoH4", css.heading)}>
                                        {item.heading}
                                    </h4>
                                </div>
                                {item.description}
                            </div>
                        </div>
                        <div className={css.step_right}>
                            <div className={css.img_container}>
                                <Image
                                    src={item.iconImage}
                                    alt={'icons'}
                                    width={150}
                                    height={100}
                                    quality={100}
                                    priority={true}
                                    className={css.img}
                                />
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className={css.bottom_wrapper}>
                <h4 className={cx("typoH4", css.bottom_heading)}>
                    Haven’t submitted an assignment yet
                </h4>
                <Link href='/get-offers' className={cx("hero_btn", css.btn)}>
                    Get 3 non-binding offers
                </Link>
            </div>
        </section>
    )
}

export default Steps
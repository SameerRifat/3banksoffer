'use client'

import React, { useRef, useState } from 'react'
import css from './faq.module.scss'
import cx from 'classnames'
import Iconify from '@/components/shared/iconify/iconify';
import faqData from './faqData';
import { SectionHeading } from '@/components/shared/SectionHeading/SectionHeading';

const FaqItem = ({ question, answer, isOpen, onClick }) => {
    const contentHeight = useRef()
    return (
        <div className={css.wrapper} >
            <button className={cx('typoH6', css.question_container, isOpen && css.active)} onClick={onClick} >
                <Iconify icon="octicon:plus-16" width={25} />
                <p className={css.question_content}>{question}</p>
            </button>

            <div ref={contentHeight} className={css.answer_container} style={
                isOpen
                    ? { height: contentHeight.current.scrollHeight }
                    : { height: "0px" }
            }>
                <p className={cx('typoBody1', css.answer_content)}>{answer}</p>
            </div>
        </div>
    )
}

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    return (
        <div className={css.faq_container}>
            <SectionHeading extraStyles={css.alight_left}>
                Do you have questions about the {" "}
                <br />
                process?
            </SectionHeading>
            <div className={css.faqs}>
                {faqData.map((item, index) => (
                    <FaqItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={activeIndex === index}
                        onClick={() => handleItemClick(index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Faq
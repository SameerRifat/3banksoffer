'use client'

import React, { useEffect, useState } from 'react'
import css from './getOffers.module.scss'
import cx from 'classnames'
import { SectionHeading } from '@/components/shared/SectionHeading/SectionHeading'
import Iconify from '@/components/shared/iconify/iconify';
// import { optionsData } from './data';
import Image from 'next/image';

const Step = ({ optionsData, stepValue, onChange, currentStep, setCurrentStep }) => {
    const [optionsToDisplay, setOptionsToDisplay] = useState(3)
    const [search, setSearch] = useState('')

    const [visbleOptions, setVisibleOptions] = useState(optionsData.options.slice(0, optionsToDisplay) || []);

    const getVisibleCountries = (data, search) => {
        let filteredOptions = data;

        if (search !== '') {
            filteredOptions = data.filter((_country) =>
                _country.option.toLowerCase().includes(search.toLowerCase())
            );
        }

        return filteredOptions.slice(0, optionsToDisplay);
    };

    useEffect(() => {
        setVisibleOptions(getVisibleCountries(optionsData.options, search));
    }, [optionsData.options, search, optionsToDisplay]);


    const renderOptions = (options) => {
        return options.map((item, ind) => (
            <li
                className={cx(css.option, item.option === stepValue && css.selected)}
                key={ind}
                onClick={() => onChange(item.option)}
            >
                {item.icon && (
                    <Image
                        src={item.icon}
                        alt={item.option}
                        width={20}
                        height={20}
                        priority
                        quality={100}
                    />
                )}
                {item.option}
            </li>
        ));
    };

    return (
        <>
            <SectionHeading extraStyles={css.heading}>
                Take a quiz to get a more precise quote
            </SectionHeading>
            <p className={cx('typoBody2', css.question_number)}>{currentStep} of 6</p>
            <h6 className={cx("typoH6", css.question)}>{optionsData.question}</h6>
            {(currentStep == 1 || currentStep == 2) && (
                <div className={css.input_wrapper}>
                    <Iconify icon="bitcoin-icons:search-filled" width={25} />
                    <input type="search" placeholder={`Choose ${currentStep === 1 ? 'country' : 'industry'}`} value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
            )}
            <ul className={cx(css.options, optionsData.options.length > 5 && css.scrollable)}>
                {(currentStep === 1 || currentStep === 2) ? renderOptions(visbleOptions) : renderOptions(optionsData.options)}
            </ul>
            {(currentStep === 1 || currentStep === 2) && (
                optionsToDisplay !== optionsData.options.length && (
                    search === '' ? (
                        <div className={css.show_all} onClick={() => setOptionsToDisplay(optionsData.options.length)}>
                            {[1, 2, 3].map((item, ind) => (<span className={css.dot} key={ind}></span>))}
                            Show All
                        </div>
                    ) : (
                        visbleOptions.length > 3 && (
                            <div className={css.show_all} onClick={() => setOptionsToDisplay(optionsData.options.length)}>
                                {[1, 2, 3].map((item, ind) => (<span className={css.dot} key={ind}></span>))}
                                Show All
                            </div>
                        )
                    )
                )
            )}
            <button
                className={css.btn}
                onClick={() => setCurrentStep(currentStep + 1)}
                disabled={!stepValue}
            >
                Continue
            </button>
        </>
    )
}

export default Step
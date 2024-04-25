import React, { useState } from 'react'
import css from './getOffers.module.scss'
import cx from 'classnames'
import Iconify from '@/components/shared/iconify/iconify';
import { SectionHeading } from '@/components/shared/SectionHeading/SectionHeading';

const MoneyInAndOut = ({ stepValue1, stepValue2, onChange1, onChange2, currentStep, setCurrentStep }) => {
    const [moneyIn, setMoneyIn] = useState(0)
    const [moneyOut, setMoneyOut] = useState(0)

    const decrementMoneyIn = () => {
        if (moneyIn >= 50000) {
            setMoneyIn((prevValue) => prevValue - 50000);
        }
    };

    const decrementMoneyOut = () => {
        if (moneyOut >= 50000) {
            setMoneyOut((prevValue) => prevValue - 50000);
        }
    };
    const handleClick = () => {
        onChange1(moneyIn)
        onChange2(moneyOut)
        setCurrentStep(currentStep + 1)
    }

    return (
        <>
            <SectionHeading extraStyles={css.heading}>
                Take a quick quiz to get a more precise quote
            </SectionHeading>
            <p className={cx('typoBody2', css.question_number)}>{currentStep} of 6</p>
            <h6 className={cx("typoH6", css.question)}>PROJECTED MONTHLY PAYMENT VOLUME</h6>
            <ul className={cx(css.options)}>
                <div className={css.step_6_option}>
                    <h6 className={cx("typoH6", css.question)}>Mony in</h6>
                    <li
                    >
                        <Iconify icon="ant-design:minus-circle-filled" width={30} onClick={decrementMoneyIn} />
                        <span><span className={css.euro_sign}>€</span> {moneyIn !== 0 && moneyIn.toLocaleString()}</span>
                        <Iconify icon="ant-design:plus-circle-filled" width={30} onClick={() => setMoneyIn((prevValue) => prevValue + 50000)} />
                    </li>
                </div>
                <div className={css.step_6_option}>
                    <h6 className={cx("typoH6", css.question)}>Mony out</h6>
                    <li
                    >
                        <Iconify icon="ant-design:minus-circle-filled" width={30} onClick={decrementMoneyOut} />
                        <span><span className={css.euro_sign}>€</span> {moneyOut !== 0 && moneyOut.toLocaleString()}</span>
                        <Iconify icon="ant-design:plus-circle-filled" width={30} onClick={() => setMoneyOut((prevValue) => prevValue + 50000)} />
                    </li>
                </div>
            </ul>
            <button
                className={css.btn}
                // onClick={() => setCurrentStep(currentStep + 1)}
                disabled={moneyIn === 0 || moneyOut === 0}
                onClick={handleClick}
            >
                Proceed
            </button>
        </>
    )
}

export default MoneyInAndOut
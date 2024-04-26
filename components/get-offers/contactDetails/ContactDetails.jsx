import React from 'react'
import css from './contactDetails.module.scss'
import styles from '../getOffers.module.scss'
import cx from 'classnames'
import { SectionHeading } from '@/components/shared/SectionHeading/SectionHeading'
import { contactDetailsSchema } from '@/lib/formValidations'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
    PhoneInput,
    defaultCountries,
    parseCountry,
} from 'react-international-phone';
import 'react-international-phone/style.css';

const ContactDetails = ({ initialValues, updateContactDetails }) => {
    const onSubmit = async (values, { setSubmitting, resetForm }) => {
        console.log('values: ', values)
        updateContactDetails(values)
    };
    return (
        <>
            <SectionHeading extraStyles={css.heading}>
                Get started today
            </SectionHeading>
            <p className={cx('typoBody1', css.sub_heading)}>
                Submit your details and we’ll email you an invite to start the onboarding process.
            </p>
            <div className={css.contact_details}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={contactDetailsSchema}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting, values, setFieldValue }) => (
                        <Form className={css.form}>
                            <div className={cx(css.form_grid, css.contact_details_grid)}>
                                <div>
                                    <label className={cx('typoBody2', css.label)}>First Name</label>
                                    <Field
                                        type="text"
                                        name="firstName"
                                        placeholder='First name'
                                        className={css.cutom_input}
                                    />
                                    <ErrorMessage
                                        name="firstName"
                                        component="div"
                                        className={cx("typoCaption", css.error)}
                                    />
                                </div>

                                <div>
                                    <label className={cx('typoBody2', css.label)}>Last Name</label>
                                    <Field
                                        type="text"
                                        name="lastName"
                                        placeholder='Last name'
                                        className={css.cutom_input}
                                    />
                                    <ErrorMessage name="lastName" component="div" className={cx("typoCaption", css.error)} />
                                </div>

                                <div>
                                    <label className={cx('typoBody2', css.label)}>Email Address</label>
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder='Email address'
                                        className={css.cutom_input}
                                    />
                                    <ErrorMessage name="email" component="div" className={cx("typoCaption", css.error)} />
                                </div>

                                <div>
                                    <label className={cx('typoBody2', css.label)}>Phone Number</label>
                                    <PhoneInput
                                        defaultCountry="us"
                                        name='phoneNumber'
                                        value={values.phoneNumber}
                                        onChange={(phone) => setFieldValue('phoneNumber', phone)}
                                        // countries={countries}
                                        className={css.cutom_phone_input}
                                    // style={customStyles}
                                    />
                                    <ErrorMessage name="phoneNumber" component="div" className={cx("typoCaption", css.error)} />
                                </div>

                                <div className={css.company_name}>
                                    <label className={cx('typoBody2', css.label)}>Company Name</label>
                                    <Field
                                        type="text"
                                        name="companyName"
                                        placeholder='Company Name'
                                        className={css.cutom_input}
                                    />
                                    <ErrorMessage name="companyName" component="div" className={cx("typoCaption", css.error)} />
                                </div>
                                <button
                                    className={cx(styles.btn, css.submit_btn)}
                                    // onClick={() => setCurrentStep(currentStep + 1)}
                                    // disabled={!stepValue}
                                    type='submit'
                                >
                                    Submit
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default ContactDetails
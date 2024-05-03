'use client'

import React, { useState } from 'react';
import css from './getOffers.module.scss'
import cx from 'classnames'
import Step from './Step';
import { data } from './data';
import MoneyInAndOut from './MoneyInAndOut';
import ContactDetails from './contactDetails/ContactDetails';
import { contactDetailInitialValues } from '@/lib/formValidations';
import Success from './success/Success';
import { SectionHeading } from '../shared/SectionHeading/SectionHeading';
import Image from 'next/image';

const GetOffers = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        country: '',
        industry: '',
        cryptoCurrency: '',
        experience: '',
        physicalPresence: '',
        moneyIn: '',
        moneyOut: '',
    });

    const [contactDetailsData, setContactDetailsData] = useState(contactDetailInitialValues)

    const handleChange = (field, value) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [field]: value
        }));
    };

    const handleStepChange = (step) => {
        setCurrentStep(step);
    };

    const steps = [
        { key: 'countries', field: 'country' },
        { key: 'industries', field: 'industry' },
        { key: 'cryptoCurrency', field: 'cryptoCurrency' },
        { key: 'experience', field: 'experience' },
        { key: 'physicalPresence', field: 'physicalPresence' },
    ];

    return (
        <>
            <div className={css.parent_container}>
               <Image
                    src={'/testimonials_bg.png'}
                    alt='background image'
                    fill
                    quality={100}
                    priority={true}
                    className={css.image_bg}
                />
                <div className={cx('custom_container')}>
                  <SectionHeading>
                     You are few clicks away to get 3 banks offers
                  </SectionHeading>
                  <div className={cx(css.get_offers_card, currentStep === 8 && css.green_border)}>
                    {currentStep < 6 && (
                        <Step
                            optionsData={data[steps[currentStep - 1].key]}
                            stepValue={formData[steps[currentStep - 1].field]}
                            onChange={(value) => handleChange(steps[currentStep - 1].field, value)}
                            currentStep={currentStep}
                            setCurrentStep={setCurrentStep}
                        />
                    )}
                    {currentStep === 6 && (
                        <MoneyInAndOut 
                            stepValue1={formData.moneyIn}
                            stepValue2={formData.moneyOut}
                            onChange1={(value) => handleChange('moneyIn', value)}
                            onChange2={(value) => handleChange('moneyOut', value)}
                            currentStep={currentStep}
                            setCurrentStep={setCurrentStep}
                        />
                    )}
                    {currentStep === 7 && (
                        <ContactDetails 
                            initialValues={contactDetailsData} 
                            formData={formData} 
                            updateContactDetails={(data) => console.log('data: ', data)}
                            currentStep={currentStep}
                            setCurrentStep={setCurrentStep}
                        />
                    )}
                    {currentStep === 8 && (
                        <Success />
                    )}
                  </div>
                  <p className={cx("typoBody1", css.description)}>
                   *We need the answers to above basic information to match you with 3 banks  
                   </p>
                </div>
            </div>
        </>
    );
};

export default GetOffers;



// 'use client'

// import React, { useState } from 'react'
// import Step from './Step'
// import { data } from './data'

// const GetOffers = () => {
//     const [currentStep, setCurrentStep] = useState(1);
//     const [formData, setFormData] = useState({
//         country: '',
//         industry: '',
//         cryptoCurrency: '',
//         experience: '',
//         physicalPresence: '',
//     });

//     const handleChange = (field, value) => {
//         setFormData(prevFormData => ({
//             ...prevFormData,
//             [field]: value
//         }));
//     };
//     console.log('formData: ', formData)

//   return (
//     <>
//         {currentStep === 1 && (
//             <Step 
//                 optionsData={data.countries} 
//                 // onChange={() => setCurrentStep(2)} 
//                 stepValue={formData.country}
//                 currentStep={currentStep}
//                 onChange={(value) => handleChange('country', value)}
//                 setCurrentStep={setCurrentStep}
//             />
//         )}
//         {currentStep === 2 && (
//             <Step 
//                 optionsData={data.industries} 
//                 // onChange={() => setCurrentStep(3)} 
//                 stepValue={formData.industry}
//                 onChange={(value) => handleChange('industry', value)}
//                 currentStep={currentStep}
//                 setCurrentStep={setCurrentStep}
//             />
//         )}
//         {currentStep === 3 && (
//             <Step 
//                 optionsData={data.cryptoCurrency} 
//                 stepValue={formData.cryptoCurrency}
//                 onChange={(value) => handleChange('cryptoCurrency', value)}
//                 currentStep={currentStep}
//                 setCurrentStep={setCurrentStep}
//             />
//         )}
//         {currentStep === 4 && (
//             <Step 
//                 optionsData={data.experience} 
//                 stepValue={formData.experience}
//                 onChange={(value) => handleChange('experience', value)}
//                 currentStep={currentStep}
//                 setCurrentStep={setCurrentStep}
//             />
//         )}
//         {currentStep === 5 && (
//             <Step 
//                 optionsData={data.physicalPresence} 
//                 stepValue={formData.physicalPresence}
//                 onChange={(value) => handleChange('physicalPresence', value)}
//                 currentStep={currentStep}
//                 setCurrentStep={setCurrentStep}
//             />
//         )}
//         {currentStep === 6 && (
//             <div>Last Step</div>
//         )}
//     </>
//   )
// }

// export default GetOffers


// 'use client'

// import React, { useEffect, useState } from 'react'
// import css from './getOffers.module.scss'
// import cx from 'classnames'
// import { SectionHeading } from '../shared/SectionHeading/SectionHeading'
// import Iconify from '@/components/shared/iconify/iconify';
// import { countriesData } from './data';
// import Image from 'next/image';

// const GetOffers = () => {
//     const [countriesToDisplay, setCountriesToDisplay] = useState(3)
//     const [search, setSearch] = useState('')

//     const [visibleCountries, setVisibleCountries] = useState(countriesData.slice(0, countriesToDisplay) || []);

//     const getVisibleCountries = (countries, search) => {
//         let filteredCounties = countries;

//         if (search !== '') {
//             filteredCounties = countries.filter((_country) =>
//                 _country.option.toLowerCase().includes(search.toLowerCase())
//             );
//         }

//         return filteredCounties.slice(0, countriesToDisplay);
//     };

//     useEffect(() => {
//         setVisibleCountries(getVisibleCountries(countriesData, search));
//     }, [countriesData, search, countriesToDisplay]);

//     return (
//         <section className={cx('custom_container', css.get_offers_container)}>
//             <SectionHeading extraStyles={css.heading}>
//                 Take a quick quiz to get a more precise quote
//             </SectionHeading>
//             <p className={cx('typoBody2', css.question_number)}>1 of 6</p>
//             <h6 className={cx("typoH6", css.question)}>IN WHAT COUNTRY IS YOUR COMPANY INCORPORATED?</h6>
//             <div className={css.input_wrapper}>
//                 <Iconify icon="bitcoin-icons:search-filled" width={25} />
//                 <input type="search" placeholder='Choose country' value={search} onChange={(e) => setSearch(e.target.value)}/>
//             </div>
            
//             <ul className={cx(css.options, countriesData.length > 5 && css.scrollable)}>
//                 {visibleCountries.map((item, ind) => {
//                     return (
//                         <li className={cx(css.option, css.selected)} key={ind}>
//                             <Image
//                                 src={item.icon}
//                                 alt={item.option}
//                                 width={20}
//                                 height={20}
//                                 priority
//                                 quality={100}
//                             />
//                             {item.option}
//                         </li>
//                     )
//                 })}
//             </ul>
//             {countriesToDisplay !== countriesData.length && (
//                 <div className={css.show_all} onClick={() => setCountriesToDisplay(countriesData.length)}>
//                     {[1, 2, 3].map((item, ind) => (<span className={css.dot} key={ind}></span>))}
//                     Show All
//                 </div>
//             )}
//             <button className={css.btn}>Continue</button>
//         </section>
//     )
// }

// export default GetOffers
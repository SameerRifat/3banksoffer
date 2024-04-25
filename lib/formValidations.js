import * as yup from 'yup'
import { PhoneNumberUtil } from 'google-libphonenumber';

const phoneUtil = PhoneNumberUtil.getInstance();


export const contactDetailInitialValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    companyName: ''
};
export const contactDetailsSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    phoneNumber: yup.string()
        // .matches(/^[0-9]{11}$/, 'Must be 11 digits and only numbers')
        .test('phone', 'Invalid phone number', function (value) {
            try {
                const phoneNumber = phoneUtil.parseAndKeepRawInput(value);
                return phoneUtil.isValidNumber(phoneNumber);
            } catch (e) {
                return false;
            }
        })
        .required('Phone number is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    companyName: yup.string().required('Company Name is required')
});
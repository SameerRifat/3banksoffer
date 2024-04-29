'use server'

// import { getEmailHeadingData } from '@/apis/settings';
import EmailTemplate from '@/components/EmailTemplate/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend("re_Xkz4qQqK_4JsJSyHF6fyNtsAyJza1t7gR");

export const sendEmail = async (emailData) => {
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    // console.log('formData in sendEmail: ', formData)
    // console.log('contactDetails: ', contactDetails)

    const { data, error } = await resend.emails.send({
        from: '3banksoffer <onboarding@resend.dev>',
        to: ['asifalibrw89@gmail.com'],
        subject: 'Quote request',
        react: EmailTemplate(emailData),
        // attachments: attachments,
    });

    if (error) {
        console.log("Error: in sendEmail function")
        return { error: error };
    }

    return { data };
};
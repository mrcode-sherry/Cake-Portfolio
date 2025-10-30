import emailjs from '@emailjs/browser';

const serviceId = 'YOUR_SERVICE_ID';
const templateId = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';

export const sendContactForm = async (formData) => {
    try {
        const response = await emailjs.send(
            serviceId,
            templateId,
            formData,
            publicKey
        );
        console.log('Email sent successfully!', response.status, response.text);
    } catch (error) {
        console.error('Email sending failed:', error);
        throw error;
    }
};

export const sendOrderForm = async (formData) => {
    try {
        const response = await emailjs.send(
            serviceId,
            templateId,
            formData,
            publicKey
        );
        console.log('Email sent successfully!', response.status, response.text);
    } catch (error) {
        console.error('Email sending failed:', error);
        throw error;
    }
};
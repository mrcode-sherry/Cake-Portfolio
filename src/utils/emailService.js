import emailjs from '@emailjs/browser';

// Use environment variables for security
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export const sendContactForm = async (formData) => {
    // Check if environment variables are set
    if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS environment variables are not set');
    }
    
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
    // Check if environment variables are set
    if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS environment variables are not set');
    }
    
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
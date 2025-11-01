"use client";

import React, { useState } from 'react';
import { sendContactForm } from '../utils/emailService';


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionMessage, setSubmissionMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionMessage(''); // Clear any previous messages

        try {
            await sendContactForm(formData); // Use the email service
            setSubmissionMessage('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' }); // Clear the form
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmissionMessage('Failed to send message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--primary)' }}>Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Your Message"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="px-4 py-2 rounded-md duration-300 focus:outline-none focus:shadow-outline"
                                type="submit"
                                disabled={isSubmitting}
                                style={{ backgroundColor: 'var(--primary)', color: 'var(--cakeWhite)' }}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                        {submissionMessage && <p className="mt-4 text-center">{submissionMessage}</p>}
                    </form>
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--primary)' }}>Contact Information</h2>
                    <p className="text-neutral mb-2">Address goes here, City name 1234</p>
                    <p className="text-neutral mb-2">Phone: (123) 456-7890</p>
                    <p className="text-neutral mb-2">Email: email@email.com</p>
                    <div className="flex space-x-4 mt-4">
                        {/* Add social media links here */}
                    </div>
                    {/* Add Google Maps embed here if needed */}
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
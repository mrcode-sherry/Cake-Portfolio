"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { sendOrderForm } from '../utils/emailService';

const OrderForm = () => {
    const searchParams = useSearchParams();
    const type = searchParams.get('type'); // 'cake' or 'food'
    const item = searchParams.get('item');   // Name of cake or food
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        orderType: type || '', // Prefill if available
        orderItem: item || '', // Prefill if available
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionMessage, setSubmissionMessage] = useState('');


    useEffect(() => {
        // Update form data if `type` or `item` changes after initial render
        setFormData(prev => ({
            ...prev,
            orderType: type || prev.orderType,
            orderItem: item || prev.orderItem,
        }));
    }, [type, item]);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionMessage('');

        try {
            await sendOrderForm(formData); // Use the email service
            setSubmissionMessage('Order submitted successfully!');
            setFormData({  // Reset the form
                name: '',
                email: '',
                phone: '',
                address: '',
                orderType: '',
                orderItem: '',
                message: '',
            });
        } catch (error) {
            console.error('Order submission error:', error);
            setSubmissionMessage('Failed to submit order. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-8">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>Order Details</h2>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
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
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Your Phone"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Your Address"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="orderType" className="block text-gray-700 text-sm font-bold mb-2">Order Type</label>
                        <select
                            id="orderType"
                            name="orderType"
                            value={formData.orderType}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        >
                            <option value="" disabled>Select Order Type</option>
                            <option value="cake">Cake</option>
                            <option value="food">Food</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="orderItem" className="block text-gray-700 text-sm font-bold mb-2">Order Item</label>
                        <input
                            type="text"
                            id="orderItem"
                            name="orderItem"
                            value={formData.orderItem}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Cake/Food Name"
                            readOnly  //Prevent manual editing, ensure it's driven by URL params
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Additional Notes</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Any special requests?"
                            rows="4"
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button style={{ backgroundColor: 'var(--primary)', color: 'var(--cakeWhite)' }}
                            className="px-4 py-2 rounded-md duration-300 focus:outline-none focus:shadow-outline"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Order'}
                        </button>
                    </div>
                    {submissionMessage && <p className="mt-4 text-center">{submissionMessage}</p>}
                </form>
            </div>
        </section>
    );
};

export default OrderForm;
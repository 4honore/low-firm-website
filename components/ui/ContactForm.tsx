'use client';

import { useState, FormEvent } from 'react';
import Button from './Button';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        legalIssue: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', legalIssue: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                />
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                    placeholder="+250 XXX XXX XXX"
                />
            </div>

            <div>
                <label htmlFor="legalIssue" className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Legal Issue *
                </label>
                <select
                    id="legalIssue"
                    name="legalIssue"
                    required
                    value={formData.legalIssue}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                >
                    <option value="">Select an option</option>
                    <option value="corporate">Corporate Law</option>
                    <option value="civil">Civil Litigation</option>
                    <option value="criminal">Criminal Defense</option>
                    <option value="family">Family Law</option>
                    <option value="property">Property Law</option>
                    <option value="employment">Employment Law</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all resize-none"
                    placeholder="Please describe your legal matter..."
                />
            </div>

            {status === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md">
                    Thank you for your message! We'll get back to you soon.
                </div>
            )}

            {status === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md">
                    Something went wrong. Please try again or contact us directly.
                </div>
            )}

            <Button type="submit" variant="primary" size="large" className="w-full">
                {status === 'loading' ? 'Sending...' : 'Send Message'}
            </Button>

            <p className="text-sm text-gray-500 text-center">
                * Required fields. Your information will be kept confidential.
            </p>
        </form>
    );
}

import { Metadata } from 'next';
import ContactForm from '@/components/ui/ContactForm';

export const metadata: Metadata = {
    title: 'Contact Us | Key Law Chambers Ltd',
    description: 'Get in touch with Key Law Chambers Ltd for a free consultation. Call +250 788 304 792 or fill out our contact form.',
};

export default function ContactPage() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Contact Us</h1>
                    <p className="text-xl text-center max-w-3xl mx-auto text-gray-100">
                        Get in touch with us today for a free consultation. We're here to help you with your legal needs.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                            <p className="text-gray-700 mb-8 leading-relaxed">
                                We understand that legal matters can be stressful. That's why we're committed to providing prompt, professional, and personalized service. Reach out to us today to discuss your legal needs.
                            </p>

                            <div className="space-y-6">
                                {/* Phone */}
                                <div className="flex items-start">
                                    <div className="bg-accent-100 p-3 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Phone</h3>
                                        <a href="tel:+250788304792" className="text-gray-700 hover:text-accent-600 transition-colors">
                                            +250 788 304 792
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start">
                                    <div className="bg-accent-100 p-3 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Email</h3>
                                        <a href="mailto:ishimwehonore450@gmail.com" className="text-gray-700 hover:text-accent-600 transition-colors">
                                            ishimwehonore450@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* Office Hours */}
                                <div className="flex items-start">
                                    <div className="bg-accent-100 p-3 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Office Hours</h3>
                                        <p className="text-gray-700">Monday - Friday</p>
                                        <p className="text-gray-700">9:00 AM - 5:00 PM</p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start">
                                    <div className="bg-accent-100 p-3 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Office Location</h3>
                                        <p className="text-gray-700">Kigali, Rwanda</p>
                                        <p className="text-gray-600 text-sm mt-1">(Exact address to be provided)</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-8 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                                <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
                                    <div className="text-center p-8">
                                        <svg className="w-16 h-16 mx-auto mb-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <p className="text-primary-700 font-medium">Google Maps will be embedded here</p>
                                        <p className="text-primary-600 text-sm mt-2">Once office address is provided</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                            <p className="text-gray-600 mb-8">
                                Fill out the form below and we'll get back to you as soon as possible.
                            </p>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional CTA */}
            <section className="py-16 bg-primary-700 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Prefer to Talk Directly?</h2>
                    <p className="text-xl mb-8 text-gray-100">
                        Give us a call and speak with one of our legal professionals today.
                    </p>
                    <a
                        href="tel:+250788304792"
                        className="inline-block bg-accent-500 text-white px-8 py-3 rounded-md hover:bg-accent-600 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all text-lg"
                    >
                        Call: +250 788 304 792
                    </a>
                </div>
            </section>
        </div>
    );
}

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
    title: 'About Us | Key Law Chambers Ltd',
    description: 'Learn about Key Law Chambers Ltd, our mission, values, and commitment to providing exceptional legal services.',
};

export default function AboutPage() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About Key Law Chambers Ltd</h1>
                    <p className="text-xl text-center max-w-3xl mx-auto text-gray-100">
                        Dedicated to providing exceptional legal services with integrity, professionalism, and unwavering commitment to our clients.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                            <div className="text-accent-500 mb-4">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                            <p className="text-gray-700 leading-relaxed">
                                To provide our clients with the highest quality legal representation, combining deep legal expertise with personalized attention. We strive to achieve the best possible outcomes while maintaining the highest ethical standards.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                            <div className="text-accent-500 mb-4">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                            <p className="text-gray-700 leading-relaxed">
                                To be recognized as a leading law firm known for excellence, innovation, and client satisfaction. We envision a practice where every client receives exceptional service and achieves their legal objectives.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lawyer Profile */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Lead Counsel</h2>
                        <p className="text-xl text-gray-600">Experienced legal professional dedicated to your success</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                        <div className="md:flex gap-8 items-start">
                            <div className="md:w-1/3 mb-6 md:mb-0">
                                <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg p-8 text-white text-center">
                                    <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                                        <svg className="w-20 h-20 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold">NTAZIKA Néhémie</h3>
                                    <p className="text-accent-200 mt-2">Lead Counsel</p>
                                </div>
                            </div>

                            <div className="md:w-2/3">
                                <h3 className="text-2xl font-semibold mb-4 text-primary-700">Professional Background</h3>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    NTAZIKA Néhémie brings extensive experience and deep legal knowledge to Key Law Chambers Ltd. With a proven track record of successful case outcomes and client satisfaction, he is committed to providing exceptional legal representation across various practice areas.
                                </p>

                                <h4 className="text-xl font-semibold mb-3 text-primary-700">Areas of Expertise</h4>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-accent-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Corporate and Commercial Law</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-accent-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Civil Litigation and Dispute Resolution</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-accent-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Criminal Defense</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-accent-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Property and Real Estate Law</span>
                                    </li>
                                </ul>

                                <h4 className="text-xl font-semibold mb-3 text-primary-700">Professional Commitment</h4>
                                <p className="text-gray-700 leading-relaxed">
                                    Dedicated to upholding the highest standards of legal practice, NTAZIKA Néhémie ensures that every client receives personalized attention, strategic counsel, and vigorous representation tailored to their unique legal needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
                        <p className="text-xl text-gray-600">The principles that guide our practice</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                            <p className="text-gray-600">Upholding the highest ethical standards in all our dealings</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                            <p className="text-gray-600">Delivering superior legal services through continuous learning</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Client Focus</h3>
                            <p className="text-gray-600">Putting our clients' interests first in everything we do</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
                            <p className="text-gray-600">Committed to achieving the best outcomes for our clients</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-primary-700 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
                    <p className="text-xl mb-8 text-gray-100">
                        Experience the difference of working with a dedicated legal team that truly cares about your success.
                    </p>
                    <Link href="/contact">
                        <Button variant="primary" size="large">
                            Contact Us Today
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Privacy Policy | Key Law Chambers Ltd',
    description: 'Privacy policy for Key Law Chambers Ltd. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Privacy Policy</h1>
                    <p className="text-lg text-center text-gray-100">
                        Last Updated: December 29, 2025
                    </p>
                </div>
            </section>

            {/* Privacy Policy Content */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <div className="bg-accent-50 border-l-4 border-accent-500 p-6 mb-8">
                            <p className="text-gray-700 leading-relaxed">
                                At Key Law Chambers Ltd, we are committed to protecting your privacy and maintaining the confidentiality of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
                            </p>
                        </div>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                            <p className="text-gray-700 mb-4">
                                We may collect personal information that you voluntarily provide to us when you:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Contact us through our website contact form</li>
                                <li>Call or email our office</li>
                                <li>Engage our legal services</li>
                                <li>Visit our office in person</li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                                The types of personal information we may collect include:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Name and contact information (email address, phone number, mailing address)</li>
                                <li>Information about your legal matter</li>
                                <li>Any other information you choose to provide</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                            <p className="text-gray-700 mb-4">
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Provide legal services and respond to your inquiries</li>
                                <li>Communicate with you about your legal matters</li>
                                <li>Maintain client records and case files</li>
                                <li>Comply with legal and professional obligations</li>
                                <li>Improve our services and website functionality</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">3. Attorney-Client Privilege</h2>
                            <p className="text-gray-700">
                                All communications between you and Key Law Chambers Ltd are protected by attorney-client privilege and professional confidentiality rules. We maintain strict confidentiality of all client information in accordance with legal and ethical obligations.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
                            <p className="text-gray-700 mb-4">
                                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>With your explicit consent</li>
                                <li>When required by law or legal process</li>
                                <li>To protect our rights, property, or safety, or that of others</li>
                                <li>With service providers who assist us in operating our practice (subject to confidentiality agreements)</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                            <p className="text-gray-700">
                                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">6. Cookies and Website Analytics</h2>
                            <p className="text-gray-700">
                                Our website may use cookies and similar tracking technologies to enhance user experience and analyze website traffic. You can control cookie settings through your browser preferences.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
                            <p className="text-gray-700 mb-4">
                                You have the right to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Access the personal information we hold about you</li>
                                <li>Request correction of inaccurate information</li>
                                <li>Request deletion of your personal information (subject to legal obligations)</li>
                                <li>Withdraw consent for processing your information</li>
                                <li>Lodge a complaint with relevant data protection authorities</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">8. Data Retention</h2>
                            <p className="text-gray-700">
                                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Client files are retained in accordance with professional rules and legal requirements.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">9. Third-Party Links</h2>
                            <p className="text-gray-700">
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">10. Changes to This Privacy Policy</h2>
                            <p className="text-gray-700">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
                            <p className="text-gray-700 mb-4">
                                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <p className="text-gray-700 font-semibold mb-2">Key Law Chambers Ltd</p>
                                <p className="text-gray-700">Phone: <a href="tel:+250788304792" className="text-accent-600 hover:underline">+250 788 304 792</a></p>
                                <p className="text-gray-700">Email: <a href="mailto:ishimwehonore450@gmail.com" className="text-accent-600 hover:underline">ishimwehonore450@gmail.com</a></p>
                                <p className="text-gray-700">Office Hours: Monday - Friday, 9:00 AM - 5:00 PM</p>
                            </div>
                        </section>

                        <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mt-10">
                            <p className="text-gray-700">
                                <strong>Professional Responsibility:</strong> As legal professionals, we are bound by strict ethical rules regarding client confidentiality. Your trust is paramount, and we take our responsibility to protect your information very seriously.
                            </p>
                        </div>

                        <div className="text-center mt-12">
                            <Link
                                href="/contact"
                                className="inline-block bg-accent-500 text-white px-8 py-3 rounded-md hover:bg-accent-600 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

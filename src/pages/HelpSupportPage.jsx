import { motion } from "framer-motion";
import React, { useState } from "react";
import { StaggerContainer, StaggerItem } from "../components/MotionWrapper";

const HelpSupportPage = () => {
  const [activeTab, setActiveTab] = useState("faq");
  const [activeCategory, setActiveCategory] = useState("general");
  const [expandedFaqs, setExpandedFaqs] = useState([]);

  // FAQ data
  const faqCategories = [
    { id: "general", name: "General" },
    { id: "booking", name: "Booking & Reservations" },
    { id: "payment", name: "Payment & Refunds" },
    { id: "travel", name: "Travel Experience" },
    { id: "loyalty", name: "Loyalty Program" },
  ];

  const faqs = {
    general: [
      {
        id: "general-1",
        question: "What is EgyRailway?",
        answer:
          "EgyRailway is Egypt's national railway booking platform, providing convenient online booking for train travel throughout Egypt. Our service allows you to search for trains, book tickets, manage reservations, and access travel information all in one place.",
      },
      {
        id: "general-2",
        question: "How do I create an account?",
        answer:
          "To create an account, click on the 'Sign Up' button on the homepage. Fill in your personal details, create a password, and verify your email address. Once your account is created, you can login and access all features of EgyRailway including booking tickets and managing your profile.",
      },
      {
        id: "general-3",
        question: "Is there a mobile app available?",
        answer:
          "Yes, EgyRailway is available as a mobile app for both iOS and Android devices. You can download it from the App Store or Google Play Store to access all the features of our platform on your mobile device.",
      },
    ],
    booking: [
      {
        id: "booking-1",
        question: "How far in advance can I book tickets?",
        answer:
          "You can book tickets up to 120 days (4 months) in advance for most routes. For special seasonal trains or holiday periods, booking windows may vary. We recommend booking early for popular routes and peak travel times to secure your preferred seats.",
      },
      {
        id: "booking-2",
        question: "Can I book tickets for someone else?",
        answer:
          "Yes, you can book tickets for family members or friends. When booking, you'll need to provide the passenger's full name, age, and ID information as it appears on their official identification document which will be checked during travel.",
      },
      {
        id: "booking-3",
        question: "How do I cancel or modify my booking?",
        answer:
          "To cancel or modify a booking, go to 'My Reservations' in your account, select the booking you wish to change, and follow the prompts to cancel or modify. Please note that cancellation fees may apply depending on how close to the departure date you make the change.",
      },
    ],
    payment: [
      {
        id: "payment-1",
        question: "What payment methods are accepted?",
        answer:
          "We accept various payment methods including credit/debit cards (Visa, Mastercard, American Express), mobile wallets, direct bank transfers, and Fawry payments at authorized outlets throughout Egypt.",
      },
      {
        id: "payment-2",
        question: "How do refunds work?",
        answer:
          "Refunds are processed based on our cancellation policy. Cancellations made more than 48 hours before departure typically receive a full refund. For cancellations between 24-48 hours before departure, a 25% fee applies. Cancellations less than 24 hours before departure may be subject to a 50% fee. Refunds are typically processed within 7-14 business days.",
      },
      {
        id: "payment-3",
        question: "Is my payment information secure?",
        answer:
          "Yes, we use industry-standard encryption and security protocols to protect your payment information. We comply with PCI DSS standards and do not store your complete credit card information on our servers.",
      },
    ],
    travel: [
      {
        id: "travel-1",
        question: "What types of train services are available?",
        answer:
          "EgyRailway offers several classes of service including First Class (air-conditioned with comfortable seating), Second Class (air-conditioned with standard seating), and Economy Class. We also operate special Express trains and Sleeper services on longer routes.",
      },
      {
        id: "travel-2",
        question: "What amenities are available on the trains?",
        answer:
          "Amenities vary by train class but generally include air conditioning, comfortable seating, restrooms, and food service on longer routes. First Class offers additional amenities such as power outlets, more spacious seating, and premium food options.",
      },
      {
        id: "travel-3",
        question: "How early should I arrive at the station?",
        answer:
          "We recommend arriving at the station at least 30 minutes before your scheduled departure time. For peak travel periods or major stations, consider arriving 45-60 minutes early to allow time for security checks and finding your platform.",
      },
    ],
    loyalty: [
      {
        id: "loyalty-1",
        question: "How does the loyalty program work?",
        answer:
          "Our loyalty program rewards frequent travelers with points for every journey. You earn 10 points per Egyptian Pound spent on tickets. These points can be redeemed for free tickets, upgrades, or other rewards through your account.",
      },
      {
        id: "loyalty-2",
        question: "What are the tier levels and benefits?",
        answer:
          "We offer three tier levels: Silver, Gold, and Platinum. Benefits increase with each tier and include perks such as priority booking, discounts, lounge access (Platinum), free seat selection, and bonus points on bookings.",
      },
      {
        id: "loyalty-3",
        question: "How long are my loyalty points valid?",
        answer:
          "Loyalty points are valid for 24 months from the date they are earned. To prevent points from expiring, you need to take at least one journey within a 12-month period.",
      },
    ],
  };

  const toggleFaq = (id) => {
    setExpandedFaqs((prev) =>
      prev.includes(id) ? prev.filter((faqId) => faqId !== id) : [...prev, id],
    );
  };

  return (
    <div className="mx-auto max-w-5xl">
      <StaggerContainer>
        <StaggerItem>
          <h1 className="mb-8 text-2xl font-bold text-gray-800">
            Help & Support
          </h1>
        </StaggerItem>

        <StaggerItem>
          <div className="mb-8 flex border-b border-gray-200">
            <button
              className={`mr-4 border-b-2 px-4 py-2 font-medium transition-colors ${
                activeTab === "faq"
                  ? "border-cyan-600 text-cyan-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("faq")}
            >
              Frequently Asked Questions
            </button>
            <button
              className={`mr-4 border-b-2 px-4 py-2 font-medium transition-colors ${
                activeTab === "contact"
                  ? "border-cyan-600 text-cyan-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("contact")}
            >
              Contact Us
            </button>
          </div>
        </StaggerItem>

        {activeTab === "faq" && (
          <>
            <StaggerItem>
              <div className="mb-8 grid grid-cols-1 gap-2 md:grid-cols-5">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    className={`rounded-lg px-4 py-2 text-center text-sm font-medium transition-colors ${
                      activeCategory === category.id
                        ? "bg-cyan-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="mb-8 space-y-4">
                {faqs[activeCategory]?.map((faq) => (
                  <motion.div
                    key={faq.id}
                    className="overflow-hidden rounded-lg border border-gray-200 bg-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <button
                      className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-gray-800 focus:outline-none"
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <span>{faq.question}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 text-gray-500 transition-transform ${
                          expandedFaqs.includes(faq.id) ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {expandedFaqs.includes(faq.id) && (
                      <div className="border-t border-gray-200 px-6 py-4">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </StaggerItem>
          </>
        )}

        {activeTab === "contact" && (
          <StaggerItem>
            <div className="rounded-xl bg-white p-8 shadow-md">
              <h2 className="mb-6 text-xl font-semibold text-gray-800">
                Contact Our Support Team
              </h2>

              <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-lg bg-cyan-50 p-4 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-1 font-medium text-cyan-900">
                    Phone Support
                  </h3>
                  <p className="text-sm text-cyan-700">+20 (2) 2575-3555</p>
                  <p className="mt-1 text-xs text-cyan-600">
                    Available 8AM - 10PM, 7 days
                  </p>
                </div>

                <div className="rounded-lg bg-blue-50 p-4 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-1 font-medium text-blue-900">
                    Email Support
                  </h3>
                  <p className="text-sm text-blue-700">support@egyrailway.eg</p>
                  <p className="mt-1 text-xs text-blue-600">
                    Response within 24 hours
                  </p>
                </div>

                <div className="rounded-lg bg-blue-50 p-4 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-1 font-medium text-blue-900">Live Chat</h3>
                  <p className="text-sm text-blue-700">
                    Chat with our support team
                  </p>
                  <p className="mt-1 text-xs text-blue-600">
                    Available 9AM - 8PM, 7 days
                  </p>
                </div>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none"
                    placeholder="Please describe your issue or question in detail..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    id="terms"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                  />
                  <label
                    htmlFor="terms"
                    className="ml-2 block text-sm text-gray-600"
                  >
                    I agree to EgyRailway's privacy policy and terms of service
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="rounded-lg bg-cyan-600 px-6 py-3 font-medium text-white transition-colors hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </StaggerItem>
        )}

        <StaggerItem>
          <div className="mt-8 rounded-xl bg-gradient-to-r from-cyan-100 to-blue-100 p-6">
            <div className="text-center">
              <h3 className="mb-2 text-lg font-semibold text-cyan-900">
                Need Immediate Assistance?
              </h3>
              <p className="mb-4 text-cyan-700">
                Our support team is available 24/7 for urgent issues related to
                your bookings.
              </p>
              <button className="pulse-button rounded-full bg-cyan-600 px-6 py-3 font-medium text-white transition-all hover:bg-cyan-700">
                Start Live Chat Now
              </button>
            </div>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </div>
  );
};

export default HelpSupportPage;

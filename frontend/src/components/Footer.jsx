import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6 mt-10 ">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
                    <a href="/about" className="hover:text-red-500 transition">
                        About Us
                    </a>
                    <a href="/privacy" className="hover:text-red-500 transition">
                        Privacy Policy
                    </a>
                    <a href="/terms" className="hover:text-red-500 transition">
                        Terms of Service
                    </a>
                    <a href="/contact" className="hover:text-red-500 transition">
                        Contact Us
                    </a>
                </div>

                <div className="flex gap-4">
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white text-xl transition"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white text-xl transition"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white text-xl transition"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/dhiraj-barwal-b84a8328b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white text-xl transition"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>

            <div className="text-center text-sm text-gray-500 mt-4">
                © {new Date().getFullYear()} Parshinfotech pvt ltd. All rights
                reserved.
            </div>
        </footer>
    );
};

export default Footer;

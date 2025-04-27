import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AboutPage = () => {
    return (
        <div>
            <Navbar/>
        <div className="bg-gray-100 py-10 px-5 mt-10">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
                <p className="text-lg text-gray-600 mb-6">
                    Welcome to <strong>BookStore</strong>, your one-stop destination for all things books!
                </p>
                <h2 className="text-3xl font-semibold text-gray-700 mb-3">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                    Our mission is simple: to create a seamless and inspiring space for book lovers everywhere.
                    We aim to revolutionize the way readers discover, buy, and interact with books while supporting authors and publishers in bringing their stories to life.
                </p>
                <h2 className="text-3xl font-semibold text-gray-700 mb-3">Why Choose BookStore?</h2>
                <ul className="list-disc text-lg text-gray-600 mx-auto mb-6">
                    <li className="mb-2">Curated Collections: Explore thoughtfully curated collections and recommendations tailored to your preferences.</li>
                    <li className="mb-2">Effortless Shopping: Enjoy a user-friendly platform designed for easy navigation and secure transactions.</li>
                    <li className="mb-2">Community Driven: Connect with fellow book lovers, share reviews, and be part of a growing literary community.</li>
                </ul>
                <h2 className="text-3xl font-semibold text-gray-700 mb-3">Beyond Books</h2>
                <p className="text-lg text-gray-600 mb-6">
                    We’re not just about selling books. BookStore is a hub for literary exploration, where you can find engaging blogs, author interviews, and resources to fuel your passion for reading.
                </p>
                <p className="text-lg text-gray-600">
                    Join us in our journey to make every story unforgettable and every book accessible. 
                    Thank you for choosing <strong>BookStore</strong>—your gateway to a world of imagination and learning.
                </p>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default AboutPage;

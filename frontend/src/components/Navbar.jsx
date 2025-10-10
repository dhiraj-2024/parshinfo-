import { useState } from "react";
import {
    FaHome,
    FaUser,
    FaUsers,
    FaEnvelope,
    FaBell,
    FaSearch,
    FaSignOutAlt,
} from "react-icons/fa";

const Navbar = () => {

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchTerm);
    };

    return (
        <nav className="bg-gray-900 text-white px-6 py-3 flex items-center justify-between shadow-md">
            {/* Left logo */}
            <div className="flex items-center space-x-3">
                <a
                    href="/"
                    className="text-2xl font-bold text-orange-400 hover:text-red-500 transition"
                >
                    PARSH
                </a>
                <a
                    href="/"
                    className="flex items-center space-x-1 hover:text-red-400 transition"
                >
                    <FaHome />
                    <span className="hidden sm:inline">Home</span>
                </a>
                <a
                    href="/profile"
                    className="flex items-center space-x-1 hover:text-red-400 transition"
                >
                    <FaUser />
                    <span className="hidden sm:inline">Profile</span>
                </a>
                <a
                    href="/friends"
                    className="flex items-center space-x-1 hover:text-red-400 transition"
                >
                    <FaUsers />
                    <span className="hidden sm:inline">Friends</span>
                </a>
                <a
                    href="/messages"
                    className="flex items-center space-x-1 hover:text-red-400 transition"
                >
                    <FaEnvelope />
                    <span className="hidden sm:inline">Messages</span>
                </a>
                <a
                    href="/notifications"
                    className="flex items-center space-x-1 hover:text-red-400 transition"
                >
                    <FaBell />
                    <span className="hidden sm:inline">Notifications</span>
                </a>
            </div>

            <div className="flex gap-3">
                <FaSearch className="text-gray-400" />
                <input
                    type="text"
                    placeholder="Search here"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className=" outline text-sm px-2 text-white  placeholder-gray-400"
                />
            </div>

            <button
                onClick={() => alert("Logged out")}
                className="flex items-center space-x-1 bg-orange-500 hover:bg-blue-600 px-3 py-1 rounded-full text-sm transition"
            >
                <FaSignOutAlt />
                <span className="hidden sm:inline">Logout</span>
            </button>
        </nav>
    );
};

export default Navbar;

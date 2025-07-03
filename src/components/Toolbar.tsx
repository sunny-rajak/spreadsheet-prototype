import { useState } from "react";
import {
    FiDownload,
    FiUpload,
    FiShare2,
    FiPlus,
    FiEyeOff,
    FiFilter,
    FiSliders,
    FiGrid,
    FiSearch,
    FiBell,
    FiUser,
} from "react-icons/fi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const tabs = ["All Orders", "Pending", "Reviewed", "Arrived"];
const actionLeft = [
    { label: "Hide fields", icon: FiEyeOff },
    { label: "Sort", icon: FiFilter },
    { label: "Filter", icon: FiSliders },
    { label: "Cell view", icon: FiGrid },
];
const actionRight = [
    { label: "Import", icon: FiDownload },
    { label: "Export", icon: FiUpload },
    { label: "Share", icon: FiShare2 },
    { label: "New Action", icon: FiPlus },
];

export default function Toolbar() {
    const [activeTab, setActiveTab] = useState("All Orders");

    return (
        <div className="border border-gray-200 rounded-md bg-gray-50">
            {/* Tabs Row */}
            <div className="flex justify-between items-center px-2 py-2 border-b border-gray-200 flex-wrap gap-2">
                {/* Left Tabs */}
                <div className="flex gap-1 flex-wrap">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => {
                                setActiveTab(tab);
                                console.log(`Tab clicked: ${tab}`);
                            }}
                            className={`px-3 py-1.5 rounded-md border text-sm font-medium transition-colors duration-200 ${
                                activeTab === tab
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Right Search + Notifications + User */}
                <div className="flex items-center gap-3 flex-wrap">
                    {/* Search */}
                    <div className="min-w-70 flex items-center gap-1 rounded-lg px-2 py-2 bg-gray-200 mr-4">
                        <FiSearch className="w-4 h-4 text-gray-500 mr-2" />
                        <input
                            type="text"
                            placeholder="Search within sheet"
                            onChange={(e) =>
                                console.log("Search:", e.target.value)
                            }
                            className="bg-transparent outline-none text-sm w-32 min-w-[90%]"
                        />
                    </div>

                    {/* Notifications */}
                    <button className="relative mr-4 cursor-pointer">
                        <FiBell
                            className="w-5 h-5 text-gray-600 hover:text-gray-800"
                            onClick={() => console.log("Notifications clicked")}
                        />
                        <span className="absolute -top-3 -right-2 w-4 h-4 bg-green-500 rounded-full text-xs">
                            2
                        </span>
                    </button>

                    {/* User */}
                    <div
                        className="flex items-center gap-1"
                        onClick={() => console.log("User profile clicked")}
                    >
                        <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                            <FiUser className="w-4 h-4 text-gray-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                            Sunny Rajak
                        </span>
                    </div>
                </div>
            </div>

            {/* Toolbar + Actions Row */}
            <div className="flex justify-between items-center w-full px-2 py-2 flex-wrap gap-2">
                {/* Left side */}
                <div className="flex items-center gap-2 flex-wrap">
                    <div className="flex items-center gap-1 text-gray-600 font-medium border-r-2 pr-4 mr-2 border-gray-300">
                        Tool bar
                        <MdKeyboardDoubleArrowRight className="w-4 h-4" />
                    </div>
                    {actionLeft.map(({ label, icon: Icon }) => (
                        <button
                            key={label}
                            onClick={() => console.log(`${label} clicked`)}
                            className="flex items-center gap-1 px-3 py-2  text-gray-700 cursor-pointer"
                        >
                            <Icon className="w-4 h-4" />
                            {label}
                        </button>
                    ))}
                </div>

                {/* Right side */}
                <div className="flex items-center gap-2 flex-wrap">
                    {actionRight.map(({ label, icon: Icon }) => (
                        <button
                            key={label}
                            onClick={() => console.log(`${label} clicked`)}
                            className="flex items-center gap-1 px-3 py-2 bg-white cursor-pointer text-gray-700 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors duration-150"
                        >
                            <Icon className="w-4 h-4" />
                            {label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

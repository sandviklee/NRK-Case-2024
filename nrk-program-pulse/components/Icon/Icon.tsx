import React from "react";
import {
    FiSearch,
    FiCopy,
    FiCalendar,
    FiChevronRight,
    FiChevronLeft,
    FiTrendingUp,
    FiMonitor,
    FiSmartphone,
    FiSquare,
} from "react-icons/fi";

interface IconProps {
    icon:
        | "Search"
        | "Categories"
        | "Calendar"
        | "RightArrow"
        | "LeftArrow"
        | "Trending"
        | "Display"
        | "Phone"
        | "Tablet"
        | string;
    iconColor?: "white";
}

const Icon = ({ icon, iconColor }: IconProps) => {
    return (
        <>
            <div style={{ color: iconColor == null ? "black" : iconColor }}>
                {icon == "Search" && <FiSearch className="text-4xl" />}
                {icon == "Categories" && <FiCopy className="text-3xl" />}
                {icon == "Calendar" && <FiCalendar className="text-3xl" />}
                {icon == "RightArrow" && (
                    <FiChevronRight className="text-3xl" />
                )}
                {icon == "LeftArrow" && <FiChevronLeft className="text-3xl" />}
                {icon == "Trending" && <FiTrendingUp className="text-4xl" />}
                {icon == "Display" && <FiMonitor className="text-3xl" />}
                {icon == "Phone" && <FiSmartphone className="text-3xl" />}
                {icon == "Tablet" && <FiSquare className="text-3xl" />}
            </div>
        </>
    );
};

export default Icon;

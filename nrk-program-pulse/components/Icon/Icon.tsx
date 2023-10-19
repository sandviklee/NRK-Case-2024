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

export type IconType =
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

interface IconProps {
    icon: IconType;
    iconColor?: "white";
}

const Icon = ({ icon, iconColor }: IconProps) => {
    return (
        <>
            <div style={{ color: iconColor == null ? "black" : iconColor }}>
                {icon == "Search" && (
                    <FiSearch className="text-4xl group-hover:-rotate-12 transition delay-75" />
                )}
                {icon == "Categories" && <FiCopy className="text-3xl" />}
                {icon == "Calendar" && <FiCalendar className="text-4xl" />}
                {icon == "RightArrow" && (
                    <FiChevronRight className="text-4xl hover:translate-x-1 transition delay-75" />
                )}
                {icon == "LeftArrow" && (
                    <FiChevronLeft className="text-4xl hover:-translate-x-1 transition delay-75" />
                )}
                {icon == "Trending" && <FiTrendingUp className="text-4xl" />}
                {icon == "Display" && <FiMonitor className="text-6xl" />}
                {icon == "Phone" && <FiSmartphone className="text-6xl" />}
                {icon == "Tablet" && <FiSquare className="text-6xl" />}
            </div>
        </>
    );
};

export default Icon;

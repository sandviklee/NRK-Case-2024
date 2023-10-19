import Link from "next/link";
import classNames from "classnames";
import Icon from "../Icon/Icon";
import SearchBox from "../Search/SearchBox";
import { useState } from "react";

const buttonClass = classNames(
    "flex",
    "items-center",
    "justify-center",
    "gap-2",
    "h-[100%]",
    "w-[120px]",
    "font-whyte",
    "group"
);

const Navbar = () => {
    const [visibleSearch, setVisibleSearch] = useState(false);

    return (
        <>
            {visibleSearch && (
                <div>
                    <div
                        onClick={() => setVisibleSearch(false)}
                        className="absolute z-50 w-full h-full bg-black bg-opacity-50 overflow-hidden"
                    ></div>
                    <div className="flex justify-center top-[20%] w-full absolute z-50">
                        <SearchBox closeFunc={setVisibleSearch} />
                    </div>
                </div>
            )}

            <nav className="flex flex-row w-full h-[120px] items-center px-[8%] text-base font-whyte">
                <Link href={`/`}>
                    <img
                        className="w-[200px]"
                        src="/Programpulselogo.png"
                        alt="companylogo"
                    />
                </Link>
                <div className="flex-row h-full w-full items-center justify-end gap-4 hidden">
                    <button
                        onClick={() => setVisibleSearch(true)}
                        className={buttonClass}
                    >
                        <div className=" align-middle text-center">
                            <Icon icon={"Search"} />
                        </div>
                        <p>{"Søk"}</p>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

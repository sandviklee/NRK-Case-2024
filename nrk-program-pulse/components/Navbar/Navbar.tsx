import Link from "next/link";
import classNames from "classnames";
import Icon from "../Icon/Icon";

interface NavbarProps {
    page?: "Hjem" | "Søk bedrifter";
}

const navbarLinks = [
    {
        title: "Søk",
        link: "/",
        icon: "Search",
    },
    {
        title: "Kategorier",
        link: "/kategorier",
        icon: "Categories",
    },
];

const buttonClass = classNames(
    "flex",
    "items-center",
    "justify-center",
    "gap-2",
    "h-[100%]",
    "w-[120px]",
    "font-whyte"
);

const Navbar = ({ page }: NavbarProps) => {
    return (
        <nav className="flex flex-row w-full h-[120px] items-center px-[8%] text-base font-whyte">
            <Link href={`/`}>
                <img
                    className="w-[200px]"
                    src="/Programpulselogo.png"
                    alt="companylogo"
                />
            </Link>
            <div className="sm:visible sm:flex flex-row h-full w-full items-center justify-end hidden">
                {navbarLinks.map((data) => (
                    <Link
                        key={data.title}
                        href={data.link}
                        className={buttonClass}
                    >
                        <div className=" align-middle text-center pt-1">
                            <Icon icon={data.icon} />
                        </div>
                        <p>{data.title}</p>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;

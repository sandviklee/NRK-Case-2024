import Link from "next/link";
import classNames from "classnames";

const buttonClass = classNames(
    "flex",
    "items-center",
    "justify-center",
    "h-[100%]",
    "sm:w-[105px]",
    "w-[90px]"
);

const Footer = () => {
    return (
        <>
            <footer className="flex flex-row w-full sm:h-[180px] h-[120px] bg-purple items-center px-[8%] font-whyte">
                <Link href={`/`}>
                    <div className="flex flex-row items-center justify-center gap-2">
                        <img
                            className="pt-2 sm:w-[130px] w-[100px]"
                            src="/ProgrampulseLogo.png"
                            alt="companylogo"
                        />
                    </div>
                </Link>
                <div className="flex flex-row h-full w-full items-center justify-end sm:gap-1 text-white-paper text-sm">
                    <p className="text-right">
                        Laget av{" "}
                        <a
                            href="https://github.com/sandviklee"
                            className="font-bold"
                        >
                            Simon Sandvik Lee
                        </a>
                        <br />
                        <span className="text-base text-white-paper pt-2 tracking-wider">
                            Opphavsrett NRK © 2023
                        </span>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;

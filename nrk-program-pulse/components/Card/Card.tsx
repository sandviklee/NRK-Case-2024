import Icon, { IconType } from "../Icon/Icon";

interface CardProps {
    text: string;
    icon: IconType;
}

const Card = ({ text, icon }: CardProps) => {
    return (
        <>
            <main className="w-[340px] h-fit px-2 bg-blue-default z-40 shadow-md">
                <div className="flex flex-row justify-center w-full h-full align-middle py-4 px-8 gap-3">
                    <Icon icon={icon} iconColor="white" />
                    <p className=" text-3xl font-medium text-white">{text}</p>
                </div>
            </main>
        </>
    );
};

export default Card;

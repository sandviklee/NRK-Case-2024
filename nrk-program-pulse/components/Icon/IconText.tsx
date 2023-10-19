import classNames from "classnames";
import Icon from "./Icon";
import { IconType } from "./Icon";

const pclasses = classNames("w-full", "text-center");

interface IconTextProps {
    label: string;
    icon: IconType;
}

const IconText = ({ label, icon }: IconTextProps) => {
    return (
        <div className="flex flex-col justify-center align-middle">
            <Icon icon={icon} iconColor="white" />
            <p className={pclasses}>{label}</p>
        </div>
    );
};

export default IconText;

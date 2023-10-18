import React from "react";
import Icon, { IconType } from "../Icon/Icon";

interface FieldProps {
    label?: string;
    icon?: IconType;
    placeholder?: string;
    value: string;
    setValue: (value: string) => void;
    onChange?: (value: string) => void;
}

const Field = ({
    icon,
    label,
    placeholder,
    value,
    setValue,
    onChange,
}: FieldProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);

        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <div className="flex flex-row align-middle z-50 gap-4 text-xl px-6">
            {icon && <Icon icon={icon} />}
            {label && <label>{label}</label>}
            <input
                className="bg-white w-full h-[40px] outline-none border-none border-transparent"
                type="text"
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Field;

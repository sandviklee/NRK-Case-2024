import { useEffect, useState } from "react";

interface RadioButton {
    label: number;
    currentActive: number;
    setCurrentDate: Function;
}

const RadioButton = ({ label, currentActive, setCurrentDate }: RadioButton) => {
    const [active, setActive] = useState(false);

    const updateDate = () => {
        setCurrentDate(label);
        setActive(true);
    };

    useEffect(() => {
        if (currentActive !== label) {
            setActive(false);
            return;
        }
        setActive(true);
    }, [currentActive]);

    return (
        <button
            type="button"
            role="radio"
            aria-checked={"false"}
            data-aria-label={label}
            onClick={() => updateDate()}
        >
            <p
                className="h-[30px] w-[33px]"
                style={{ backgroundColor: active ? "#124F63" : "#176B87" }}
            >
                {label}
            </p>
        </button>
    );
};

export default RadioButton;

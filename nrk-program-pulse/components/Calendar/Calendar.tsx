import { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import RadioButton from "../Buttons/RadioButton";

type Date =
    | "Jan"
    | "Feb"
    | "Mar"
    | "Apr"
    | "Mai"
    | "Jun"
    | "Jul"
    | "Aug"
    | "Sep"
    | "Okt"
    | "Nov"
    | "Des";

interface Calendar {
    setDate: Function;
    setVisible: Function;
    visible: boolean;
}

const Calendar = ({ setDate, setVisible, visible }: Calendar) => {
    const [currentAmountOfDays, setCurrentAmountOfDays] = useState<
        Array<number>
    >(new Array<number>());
    const [currentDate, setCurrentDate] = useState<number>(31);
    const [currentMonth, setCurrentMonth] = useState<Date>("Des");
    const [currentYear, setCurrentYear] = useState<number>(2018);
    const days = ["man", "tir", "ons", "tor", "fre", "lør", "søn"];
    const months = new Array<string>(
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mai",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Des"
    );
    const monthInfo = {
        Jan: 31,
        Feb: 28,
        Mar: 31,
        Apr: 30,
        Mai: 31,
        Jun: 30,
        Jul: 31,
        Aug: 31,
        Sep: 30,
        Okt: 31,
        Nov: 30,
        Des: 31,
    };

    const setFinalDate = () => {
        if (currentDate > monthInfo[currentMonth]) {
            return;
        }
        const day =
            currentDate < 10 ? 0 + String(currentDate) : String(currentDate);
        const month =
            months.indexOf(currentMonth) + 1 < 10
                ? 0 + String(months.indexOf(currentMonth) + 1)
                : String(months.indexOf(currentMonth) + 1);
        setDate(`${day}-${month}-2018`);
        setVisible(false);
    };

    const forwardMonth = () => {
        const currentMonthIndex: number = months.indexOf(currentMonth);
        console.log(currentMonthIndex);
        if (currentMonthIndex >= 11) {
            return;
        }
        const nextMonthindex: number = currentMonthIndex + 1;
        setCurrentMonth(months.at(nextMonthindex));
    };

    const backwardMonth = () => {
        const currentMonthIndex: number = months.indexOf(currentMonth);
        if (currentMonthIndex <= 0) {
            return;
        }
        const nextMonthindex: number = currentMonthIndex - 1;
        setCurrentMonth(months.at(nextMonthindex));
    };

    const updateDays = () => {
        let listOfDays = [];
        for (let i = 1; i <= monthInfo[currentMonth]; i++) {
            listOfDays.push(i);
        }
        setCurrentAmountOfDays(listOfDays);
    };

    useEffect(() => {
        updateDays();
    }, [currentMonth]);

    useEffect(() => {
        updateDays();
        setFinalDate();
    }, []);

    return (
        <>
            {visible && (
                <main className="bg-blue-default h-[350px] w-[340px] drop-shadow-2xl">
                    <div className="font-bold flex flex-row text-white text-3xl py-4 px-4 ">
                        <p className="flex justify-start w-full">
                            {currentMonth} {currentYear}
                        </p>
                        <div className="flex flex-row justify-end w-full">
                            <button onClick={() => backwardMonth()}>
                                <Icon icon={"LeftArrow"} iconColor="white" />
                            </button>
                            <button onClick={() => forwardMonth()}>
                                <Icon icon={"RightArrow"} iconColor="white" />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-row gap-5 text-lg px-4 text-white">
                        {days.map((day) => (
                            <p key={day}>{day}</p>
                        ))}
                    </div>
                    <div className="flex flex-row flex-wrap gap-[12px] px-4 py-2 text-xl min-h-[220px] text-white">
                        {currentAmountOfDays.map((day) => (
                            <RadioButton
                                key={day}
                                label={day}
                                currentActive={currentDate}
                                setCurrentDate={setCurrentDate}
                            />
                        ))}
                    </div>
                    <button
                        onClick={() => setFinalDate()}
                        className="w-full group"
                    >
                        <p className="text-white hover:drop-shadow-lg hover:-translate-y-1 transition-all delay-75 pb-1">
                            LEGG INN
                        </p>
                    </button>
                </main>
            )}
        </>
    );
};

export default Calendar;

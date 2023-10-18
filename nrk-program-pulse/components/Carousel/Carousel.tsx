"use client";

import FullSeries from "../Series/FullSeries";
import Icon from "../Icon/Icon";
import classNames from "classnames";
import { useState, useEffect } from "react";

const dot = classNames("h-4", "w-4", "rounded-2xl", "bg-gray-default");

interface DotProps {
    clicked: number;
}

const Dots = ({ clicked }: DotProps) => {
    return (
        <div className="flex flex-row w-full justify-center gap-5 pt-12">
            <div
                className={dot}
                style={{ backgroundColor: clicked == 0 && "gray" }}
            ></div>
            <div
                className={dot}
                style={{ backgroundColor: clicked == 1 && "gray" }}
            ></div>
            <div
                className={dot}
                style={{ backgroundColor: clicked == 2 && "gray" }}
            ></div>
        </div>
    );
};

const Carousel = () => {
    const [imagePos, setImagePos] = useState(0);
    const [dotPos, setDotPos] = useState(0);

    let interval = 0;
    let iterate = 0;
    const carouselLoop = () => {
        setTimeout(() => {
            setImagePos(interval);
            setDotPos(iterate);
            iterate++;
            interval += 100 / 3;
            if (interval == 100) {
                interval = 0;
                iterate = 0;
            }
            carouselLoop();
        }, 10000);
    };

    useEffect(() => {
        carouselLoop();
    }, []);

    useEffect(() => console.log(imagePos), [imagePos]);

    return (
        <>
            <main>
                <div
                    className="flex flex-grow w-[300%]"
                    style={{ transform: `translateX(-${imagePos}%)` }}
                >
                    <FullSeries
                        imageSrc="https://gfx.nrk.no/S4xyPFDtDxkz7dEPh5ZhkgAeQuMNty8sJOd3w3pGhPaw"
                        seriesId="side-om-side"
                    />
                    <FullSeries
                        imageSrc="https://gfx.nrk.no/_vp8lH7mELr2zr1NZJ8HxgixFuZm3s3jDVVUMLKCW2eA"
                        seriesId="side-om-side"
                    />
                    <FullSeries
                        imageSrc="https://gfx.nrk.no/1tQDwbH7N6bMzdZGsec6MQHE4SjFQszb_7cJeRTM0U0A"
                        seriesId="side-om-side"
                    />
                </div>

                <Dots clicked={dotPos} />
            </main>
        </>
    );
};

export default Carousel;

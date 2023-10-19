"use client";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Image from "next/image";
import Card from "../../components/Card/Card";
import Icon from "../../components/Icon/Icon";
import AvailableSeries from "../../scripts/AvailableSeries";
import Data from "../../data/more_data.json";
import Calendar from "../../components/Calendar/Calendar";
import Head from "next/head";
import { useEffect, useState } from "react";
import getSeriesData from "../../scripts/SeriesData";
import IconText from "../../components/Icon/IconText";
import getAllDatesSeriesData from "../../scripts/AllSeriesData";

export const getStaticPaths = async () => {
    const data = AvailableSeries();
    const paths = data.map((series) => {
        return {
            params: { id: series },
        };
    });
    return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
    const id = String(context.params.id);
    const name =
        id.replaceAll("-", " ").charAt(0).toUpperCase() +
        id.replaceAll("-", " ").slice(1);
    const image = Data[id][0];
    const category = Data[id][2];

    return {
        props: {
            seriesId: id,
            seriesName: name,
            seriesImage: image,
            seriesCategory: category,
        },
    };
};

const Page = ({ seriesId, seriesName, seriesImage, seriesCategory }) => {
    const [currentDate, setCurrentDate] = useState<string>("");
    const [currentViews, setCurrentViews] = useState<object | null>(null);
    const [allViews, setAllViews] = useState<object | null>(null);
    const [visibleCalendar, setVisibleCalendar] = useState(false);

    const setData = () => {
        const date = currentDate.split("-");
        const newDate: string = String(date[2] + date[1] + date[0]);
        const currentData = getSeriesData(seriesId, newDate);
        const allData = getAllDatesSeriesData(seriesId);
        setCurrentViews(currentData);
        setAllViews(allData);
    };

    useEffect(() => {
        setData();
    }, [currentDate, seriesId]);

    return (
        <>
            <Head>
                <title>{seriesName} | NRK TV Program Pulse</title>
            </Head>
            <Navbar />
            <main className="">
                <div className="w-full overflow-hidden relative">
                    <Image
                        className="w-full h-[400px] object-cover -translate-y-[0px] relative"
                        src={seriesImage}
                        alt="Banner"
                        width={1920}
                        height={1080}
                    />
                </div>
                <div className="flex flex-row px-[8%] py-[2%] w-full align-middle">
                    <div className="flex flex-col w-full justify-start text-4xl font-extrabold text-blue-default">
                        {seriesName.toUpperCase()}
                        <br />
                        <div className="flex py-2 font-normal text-2xl gap-2 text-black">
                            <Icon icon={"Categories"} />
                            {seriesCategory}
                        </div>
                    </div>
                    <div className="flex justify-end w-full">
                        <div className="absolute bottom-[40%]">
                            <Calendar
                                setDate={setCurrentDate}
                                visible={visibleCalendar}
                                setVisible={setVisibleCalendar}
                            />
                        </div>
                        <button
                            className="hover:scale-105 transition delay-75 disabled:hover:scale-100"
                            disabled={visibleCalendar}
                            onClick={() => setVisibleCalendar(true)}
                        >
                            <Card text={currentDate} icon={"Calendar"} />
                        </button>
                    </div>
                </div>
                <div className="h-[270px] w-full bg-blue-default">
                    <div className="text-white flex flex-row w-full py-[4%] -px-[8%] justify-center gap-[35%] text-2xl">
                        <div className="flex flex-col justify-center">
                            <p>Visninger i dag</p>
                            {currentViews && (
                                <div className="flex gap-[50%] justify-center py-[20%]">
                                    <IconText
                                        icon="Display"
                                        label={currentViews["desktop"]}
                                    />
                                    <IconText
                                        icon="Phone"
                                        label={currentViews["mobile"]}
                                    />
                                    <IconText
                                        icon="Tablet"
                                        label={currentViews["tablet"]}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="absolute h-[24%] w-[2px] bg-white"></div>
                        <div className="flex flex-col justify-center">
                            <p>Visninger i 2018</p>
                            {currentViews && (
                                <div className="flex gap-[50%] justify-center py-[20%] text-base">
                                    <IconText
                                        icon="Display"
                                        label={allViews["desktop"]}
                                    />
                                    <IconText
                                        icon="Phone"
                                        label={allViews["mobile"]}
                                    />
                                    <IconText
                                        icon="Tablet"
                                        label={allViews["tablet"]}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Page;

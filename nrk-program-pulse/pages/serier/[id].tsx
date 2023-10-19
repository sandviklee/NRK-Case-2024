"use client";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Image from "next/image";
import Card from "../../components/Card/Card";
import Icon from "../../components/Icon/Icon";
import AvailableSeries from "../../components/Data/AvailableSeries";
import Data from "../../components/Data/more_data.json";
import Calendar from "../../components/Calendar/Calendar";
import Head from "next/head";
import { useState } from "react";

export const getStaticPaths = async () => {
    const data = AvailableSeries();
    const paths = data.map((series) => {
        return {
            params: { id: series },
        };
    });
    console.log(paths);
    return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
    const id = String(context.params.id);
    const name =
        id.replaceAll("-", " ").charAt(0).toUpperCase() +
        id.replaceAll("-", " ").slice(1);
    const image = Data[id][0];
    const data = "";
    const category = Data[id][2];
    console.log(id);

    return {
        props: {
            seriesName: name,
            seriesImage: image,
            seriesCategory: category,
            seriesData: data,
        },
    };
};

const Page = ({ seriesName, seriesImage, seriesCategory, seriesData }) => {
    const [currentDate, setCurrentDate] = useState("");
    const [visibleCalendar, setVisibleCalendar] = useState(false);
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
                            <div className="flex gap-[50%] justify-center py-[20%]">
                                <div className="flex flex-col justify-center align-middle">
                                    <Icon icon={"Display"} iconColor="white" />
                                    <p>4000</p>
                                </div>
                                <div className="flex flex-col justify-center align-middle">
                                    <Icon icon={"Phone"} iconColor="white" />
                                    <p>4000</p>
                                </div>
                                <div className="flex flex-col justify-center align-middle">
                                    <Icon icon={"Tablet"} iconColor="white" />
                                    <p>4000</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute h-[24%] w-[2px] bg-white"></div>
                        <div className="flex flex-col justify-center">
                            <p>Visninger i 2018</p>
                            <div className="flex gap-[50%] justify-center py-[20%]">
                                <div className="flex flex-col justify-center align-middle">
                                    <Icon icon={"Display"} iconColor="white" />
                                    <p>4000</p>
                                </div>
                                <div className="flex flex-col justify-center align-middle">
                                    <Icon icon={"Phone"} iconColor="white" />
                                    <p>4000</p>
                                </div>
                                <div className="flex flex-col justify-center align-middle">
                                    <Icon icon={"Tablet"} iconColor="white" />
                                    <p>4000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default Page;

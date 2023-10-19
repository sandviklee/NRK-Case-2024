import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Carousel from "../components/Carousel/Carousel";
import Card from "../components/Card/Card";
import Head from "next/head";

const Home = () => {
    return (
        <>
            <Head>
                <title>Home | NRK TV Program Pulse</title>
            </Head>
            <Navbar />
            <main className=" h-fit w-full overflow-hidden">
                <Carousel />
                <div className="flex justify-center relative bottom-[100px]">
                    <Card icon="Trending" text="Topp 3 i 2018" />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Home;

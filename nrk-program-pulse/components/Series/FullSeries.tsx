import React from "react";
import Image from "next/image";
import Link from "next/link";

interface FullSeriesProps {
    imageSrc: string;
    seriesId: string;
}

const FullSeries = ({ imageSrc, seriesId }: FullSeriesProps) => {
    return (
        <>
            <div className="w-full overflow-hidden">
                <Link href={`/serier/${seriesId}`}>
                    <Image
                        className="w-full h-[600px] object-cover hover:scale-105 transition-transform delay-75"
                        src={imageSrc}
                        alt={"seriesImage"}
                        width={1920}
                        height={1080}
                        priority
                    />
                </Link>
            </div>
        </>
    );
};

export default FullSeries;

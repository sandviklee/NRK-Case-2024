import Image from "next/image";
import Link from "next/link";
import Data from "../../data/more_data.json";
import { useEffect, useState } from "react";

interface SearchResult {
    seriesId: string;
    closeFunc: Function;
}

const SearchResult = ({ seriesId, closeFunc }: SearchResult) => {
    const seriesName =
        seriesId.replaceAll("-", " ").charAt(0).toUpperCase() +
        seriesId.replaceAll("-", " ").slice(1);
    const [image, setImage] = useState<string>("");

    useEffect(() => {
        if (Data[seriesId] !== undefined) {
            setImage(Data[seriesId][0]);
        }
    }, []);

    return (
        <>
            <Link onClick={() => closeFunc(false)} href={`/serier/${seriesId}`}>
                <div className="w-[850px] h-[160px] rounded-md overflow-hidden object-cover group">
                    <p className="text-white font-extrabold text-3xl text-end px-4 pt-2 z-50 relative">
                        <span className="drop-shadow-lg ">{seriesName}</span>
                    </p>
                    <img
                        className="-translate-y-[140px] relative group-hover:filter-none grayscale transition-all delay-75"
                        src={image}
                        alt="image"
                    />
                </div>
            </Link>
        </>
    );
};

export default SearchResult;

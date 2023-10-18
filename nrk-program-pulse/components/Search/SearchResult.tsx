import Image from "next/image";
import Link from "next/link";
import Data from "../Data/more_data.json";
import { useEffect, useState } from "react";

interface SearchResult {
    seriesId: string;
}

const SearchResult = ({ seriesId }: SearchResult) => {
    const seriesName =
        seriesId.replaceAll("-", " ").charAt(0).toUpperCase() +
        seriesId.replaceAll("-", " ").slice(1);
    const [image, setImage] = useState<string>("");

    useEffect(() => {
        const seriesInfo = {
            "side-om-side": [
                "https://gfx.nrk.no/S4xyPFDtDxkz7dEPh5ZhkgAeQuMNty8sJOd3w3pGhPaw",
                "https://gfx.nrk.no/3MlRgHOPxEYvHXRsEycXhg9eW8thoCSVtHcjV1IhGCpg",
                "Humor",
            ],
            "helene-sjekker-inn": [
                "https://gfx.nrk.no/-z-F2Etxc5Cnvw3IoXfniwTJMSlFXCalajVFxuOkzmOQ",
                "https://gfx.nrk.no/j_2_EAF6zOXufo1XmqAQLAY-1_YJPjz6mJ-PZO5Q0pPA",
                "Dokumentar",
            ],
            "martin-og-mikkelsen": [
                "https://gfx.nrk.no/9KZCpwmanJgO-HeXezDeOgtqsqAEP-ZdY9oN9M17UTPA",
                "https://gfx.nrk.no/LtUktTwZ7pzdxl5ou4LMywW614YFqQBJIMViwUHNiMDQ",
                "Humor",
            ],
            folkeopplysningen: [
                "https://gfx.nrk.no/_vp8lH7mELr2zr1NZJ8HxgixFuZm3s3jDVVUMLKCW2eA",
                "https://gfx.nrk.no/fSOvPNkrjyobWGWF4hZBJAhIeo-4JBMTT9THmNI5vg5Q",
                "Underholdning",
            ],
            innafor: [
                "https://gfx.nrk.no/yYHvTWvwJqTJevIBtecBoAXZ0y8TK5TXylBvwsgMiO1g",
                "https://gfx.nrk.no/sNfHwyZQf2Q7RIeOERX1ugppm3tIbOdEljI6zOZ4XqRA",
                "Dokumentar",
            ],
            stjernekamp: [
                "https://gfx.nrk.no/gSMmH2H3vG_RhaAK9ozztwCSYesCkdm5ODmsu6MxuYuQ",
                "https://gfx.nrk.no/jMrR7DnYdjQCOfIAC0R5Ngkg8B75jqrEoAaDlZHHdTUQ",
                "Kultur",
            ],
            "le-bureau": [
                "https://gfx.nrk.no/pntEhCVlYlvXOHW0e9eUBQQuyNPKpWsNRHZhNlZXhxAg",
                "https://gfx.nrk.no/6bAGV_1rHPDki1BfAKaDPwSIOYka887M1xfaP-1SNrFw",
                "Drama/serier",
            ],
            match: [
                "https://gfx.nrk.no/1g8PTcuQXJMWQI8ecvYOfAoEKuCpjzQqTPvhmXZVF6Rw",
                "",
                "Humor",
            ],
            lykkeland: [
                "https://gfx.nrk.no/BqG_laRlSgEwfyu8fb6vYAhKW7NTwHCi3acsgvcRPRjw",
                "https://gfx.nrk.no/3Wh_Bf6ZDlyIvTzR8zBl5ANffRVt5eWg9NlfgtHf5B-A",
                "Drama/serier",
            ],
        };
        if (seriesInfo[seriesId] !== undefined) {
            setImage(seriesInfo[seriesId][0]);
        }
    }, []);

    return (
        <>
            <Link href={`/${seriesId}`}>
                <div className="w-[850px] h-[160px] bg-black rounded-md overflow-hidden object-cover group">
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

import { useEffect, useState } from "react";
import Field from "../Field/Field";
import SearchResult from "./SearchResult";
import AvailableSeries from "../Data/AvailableSeries";

const SearchBox = () => {
    const [fieldValue, setFieldValue] = useState<string>("");
    const [results, setResults] = useState<Array<string>>([""]);
    const [url, setUrl] = useState<string>("");
    const availableSeries = AvailableSeries();

    useEffect(() => {
        if (fieldValue.length <= 0) {
            return;
        }
        let current = [];
        for (const series in availableSeries) {
            if (
                availableSeries[series]
                    .replaceAll("-", " ")
                    .includes(fieldValue.toLowerCase())
            ) {
                current.push(availableSeries[series]);
            }
        }
        setResults(current);
    }, [fieldValue]);

    return (
        <>
            <div className="z-50 w-[900px] h-fit bg-white shadow-lg rounded-md pt-8 pb-6">
                <div className="w-full">
                    <Field
                        placeholder="Skriv inn en serie..."
                        icon={"Search"}
                        value={fieldValue}
                        setValue={setFieldValue}
                    />
                    <div className="flex flex-row justify-center py-2">
                        <div className="w-[94%] h-[2px] bg-gray-default "></div>
                    </div>
                    {fieldValue.length > 0 && (
                        <div className="flex flex-row justify-center">
                            <div className="flex flex-col gap-y-[40px] mt-2 max-h-[400px] overflow-y-scroll">
                                {results.map((series) => (
                                    <SearchResult
                                        key={series}
                                        seriesId={series}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default SearchBox;

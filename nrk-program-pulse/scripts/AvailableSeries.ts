import jsonFile from "../data/data.json"

const AvailableSeries = ():any => {
    const distinctSeries = []
    const worksheets = jsonFile;
    for (const worksheet of worksheets) {
        let series = worksheet["seriesId,date,screen,views"].split(",")[0];
        if (!distinctSeries.includes(series)) {
            distinctSeries.push(series)
        }
    }
    return distinctSeries;
}

export default AvailableSeries;
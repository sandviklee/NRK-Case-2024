import jsonFile from "../data/data.json"

const getSeriesData = (seriesId, seriesDate) => {
    const obj = {}
    const worksheets = jsonFile;
    for (const worksheet of worksheets) {
        const data = worksheet["seriesId,date,screen,views"].split(",");
        const series = data[0];
        const date = data[1];
        const platform = data[2];
        const views = data[3];
        
        if (series == seriesId && date == seriesDate) {
            obj[platform] = String(views)
        }        
    } 
    console.log(obj)
    return obj;
}


export default getSeriesData;
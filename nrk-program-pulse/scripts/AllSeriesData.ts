import jsonFile from "../data/data.json"

const getAllDatesSeriesData = (seriesId) => {
    const obj = {mobile: 0, desktop: 0, tablet: 0}
    const worksheets = jsonFile;

    for (const worksheet of worksheets) {
        const data = worksheet["seriesId,date,screen,views"].split(",");
        const series = data[0];
        const platform = data[2];
        const views = data[3];
        
        if (series == seriesId) {
            
            obj[platform] += Number(views)
            console.log(obj)
        }
        
    } 
    console.log(obj)
    return obj;
}

export default getAllDatesSeriesData;
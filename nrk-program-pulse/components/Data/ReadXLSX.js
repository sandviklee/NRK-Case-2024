const fs = require("fs");
const XLSX = require("xlsx");

const workbook = XLSX.readFile("Datasett_seertall_NRK_2019.xlsx")
let worksheets = {};
for (const sheetName of workbook.SheetNames) {
    worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName])
}

fs.writeFileSync("./data.json", JSON.stringify(worksheets["in"]))

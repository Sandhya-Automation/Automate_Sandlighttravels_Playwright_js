import XLSX from 'xlsx'

export function getExcelData(file,sheetName){
    const workbook=XLSX.readFile(file)
    const sheet=workbook.Sheets[sheetName]
    const excelData=XLSX.utils.sheet_to_json(sheet)
    return excelData
}
export function getHotelDetails(file, sheetName){
    const workbook=XLSX.readFile(file)
    const sheet=workbook.Sheets[sheetName];
    const hotelData=XLSX.utils.sheet_to_json(sheet,{raw:false})
    return hotelData[0];
}
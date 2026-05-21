import fs from 'fs'
import {parse} from 'csv-parse/sync'

export function getCsvData(file){
    const data=fs.readFileSync(file,'utf-8') 
    const csvData=parse(data,{columns:true, skip_emoty_lines:true})
    return csvData; 
    
}

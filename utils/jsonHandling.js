import fs from 'fs';

export function readJsonData(file){

    const data=JSON.parse(fs.readFileSync(file,"utf-8"))

    return data;
}
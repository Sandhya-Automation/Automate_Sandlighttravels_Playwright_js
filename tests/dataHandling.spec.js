import { test, expect } from '@playwright/test';
import {Register} from "../pages/register.js"
import fs from 'fs'
import {getCsvData} from "../utils/csvHanding.js"
import {getExcelData} from "../utils/excelHandling.js"
import {readJsonData} from "../utils/jsonHandling.js"


const filePath="testData/creds.json"

test("json data handling", async()=>{
const data=JSON.parse(fs.readFileSync(filePath,"utf-8"))
console.log(data.user.username)


})

test("csv data handling", async()=>{
    const file="testData/csvcreds.csv"
    const csvData=getCsvData(file)
    console.log(csvData)
})


test("excel data handling", async()=>{
    const file="testData/creds_xlsx.xlsx"
    const excelData=getExcelData(file, "creds")
    console.log(excelData)
    for(let item of excelData)
    {
        if(item.Role==='admin'){
            console.log("username:",item.Username)
            console.log("password:",item.Password)
        }
    }


})
//method1
const arr=[['admin','us1','pw1'], ['staff','us2','pw2'], ['user','us3','pw3']]
for(let i=0;i<arr.length;i++)
{
test(`data parameterisation ${i}`, async()=>{

    if(arr[i][0]==='admin')
    {
        console.log(arr[i][0])
        console.log(arr[i][1])
        console.log(arr[i][2])
    }
})
}

//method2- get datta from excel and datat parameterisation
const file="testData/creds_xlsx.xlsx"
const data=getExcelData(file, "creds")
for(let item of data)
{
    if(item.Role==='admin')
    {
        test(`data parameterisation for ${item.Role}`, async()=>{
            console.log(item.Username)
            console.log(item.Password)
    
        })
    }
}
import {test, expect} from "@playwright/test";
import path from "path";
import fs from "fs";
let testdata:any;
const filePath = path.resolve(process.cwd(), "TestData.json");
try{
   const raw = fs.readFileSync(filePath, "utf-8");
      testdata = JSON.parse(raw);
}catch(err){
    console.log(`Error while reading data`);
}

test('Perform POST ', async({request})=>{
      //testdata.email= `mademguru${Date.now()}@cbre.com`;
      console.log(testdata);
  const response=await request.post("https://gorest.co.in/public/v2/users", {
    headers:{
                 Authorization:"Bearer 8f8d7117607b55ba5f167ab576a593d7c11f3ee2e47d66eaf500874da613aa48",
                 "Content-Type":"application/json",
    },
    data: testdata
  });
    expect(response.status()).toBe(201);
    console.log(response.json());

})
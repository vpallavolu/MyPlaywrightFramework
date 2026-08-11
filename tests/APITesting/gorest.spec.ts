import { expect, test } from "@playwright/test";

let userid:number;

test('GET - Fetch all data', async ({request})=>{
      const response=await request.get('https://gorest.co.in/public/v2/users/8528196', {
             headers :{
                "Content-Type":"application/json",
                "Authorization" :"Bearer 8f8d7117607b55ba5f167ab576a593d7c11f3ee2e47d66eaf500874da613aa48",
             },
             data:{"username":"'mademguru"}
             
            
      });
      expect(response.ok()).toBeTruthy();
      console.log(await response.json());
        
    

})

const requestdata={
    "name":"mademguru",
    "email":`madem${Date.now()}@gmail.com`,
    "gender":"male",
    "status":'inactive'
}
test('POST  - Send Information', async({request})=>{
             const response= await request.post("https://gorest.co.in/public/v2/users", {
                headers:{
                    "Authorization":"Bearer 8f8d7117607b55ba5f167ab576a593d7c11f3ee2e47d66eaf500874da613aa48",
                    "Content-Type":"application/json",
                    
                },
                data:requestdata    
              });  
              expect(response.status()).toBe(201);
              console.log(await response.json());
              const bodydata= await response.json();
              console.log(bodydata.id);
              userid=bodydata.id;

})

const requestdata1={
    "name":"Updated guru",
    "email":`madem${Date.now()}@gmail.com`,
    "gender":"male",
    "status":'inactive'
};

test('UPDATE - userdate user data', async({request})=>{
    console.log(userid);
    
         const putresponse=await request.put(`https://gorest.co.in/public/v2/users/${userid}`, {
            headers:{
                 "Authorization":"Bearer 8f8d7117607b55ba5f167ab576a593d7c11f3ee2e47d66eaf500874da613aa48",
                 "Content-Type":"application/json",
            },
            data: requestdata1
         });
         expect(putresponse.status()).toBe(200);
         console.log(await putresponse.json());


})



test(`POST AND PUT FUNCTION`, async({request})=>{

    const requestdata={
    "name":"mademguru",
    "email":`madem${Date.now()}@gmail.com`,
    "gender":"male",
    "status":'inactive'
}
 const response= await request.post("https://gorest.co.in/public/v2/users", {
                headers:{
                    "Authorization":"Bearer 8f8d7117607b55ba5f167ab576a593d7c11f3ee2e47d66eaf500874da613aa48",
                    "Content-Type":"application/json",
                    
                },
                data:requestdata    
              });  
              expect(response.status()).toBe(201);
              console.log(await response.json());
              const bodydata= await response.json();
              console.log(bodydata.id);
              userid=bodydata.id;
        
      const putresponse=await request.put(`https://gorest.co.in/public/v2/users/${userid}`, {
            headers:{
                 "Authorization":"Bearer 8f8d7117607b55ba5f167ab576a593d7c11f3ee2e47d66eaf500874da613aa48",
                 "Content-Type":"application/json",
            },
            data: requestdata1
         });
         expect(putresponse.status()).toBe(200);
         console.log(await putresponse.json());


});

test(`DELETE - Remove User`, async({request})=>{
    let userid:number=8536127;
    const deleteResponse=await  request.delete(`https://gorest.co.in/public/v2/users/${userid}`, {
              headers :{ 
                "Authorization":"Bearer 8f8d7117607b55ba5f167ab576a593d7c11f3ee2e47d66eaf500874da613aa48",
                 "Content-Type":"application/json",
        }
    });
      expect(deleteResponse.status()).toBe(204);
      console.log(`User successfully deleted`);
})







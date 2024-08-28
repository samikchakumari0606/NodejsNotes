// Node js provide runtime envionment to run js
// console.log("welcome in node js");
// console.log(5+5);

// let num1=5;
// let num2=10;

// if(num1>num2){
//     console.log("num1 is bigger")
// }
// else{
//     console.log("num2 is bigger")
// }

// console.log("==>",__dirname);folder name
// console.log("==>",__filename);current working file name

//CONSOLE==>GLOBAL MODULE
//FS,OS,HTTP,PATH==>NON GLOBAL MODULE

//CREATING SERVER BY USING MODULE HTTP MODULE
// http.createServer((req,res)=>{
//      res.write("hello this is basic server");
//      res.end();
// }).listen(4000)


//SENDING JSON DATA AND CREATING API
// const http=require("http");
// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':"application\json"});
//     res.write(JSON.stringify({name:"samiksha",email:"samiksha@gmail.com"}));
//     res.end();
// }).listen(4000);

//GETING JSON DATA FROM DIFFRENT FILE AND CREATING BASIC API
// const http=require("http");
// const data=require("./data");
// http.createServer((req,res)=>{
//       res.writeHead(200,{'Content-Type':"application\json"});
//       res.write(JSON.stringify(data));
//       res.end();
// }).listen(8000);


//ROUTING IN NODE JS
// const http=require("http");

// const server=http.createServer((req,res)=>{
       
//     if(req.url=="/"){
//         res.end("this is home page")
//     }
//     else if(req.url=="/about"){
//         res.end("this is about page")
//     }
//     else{
//         res.writeHead(404);
//         res.end("this is error")
//     }
// })

// server.listen(8000,()=>{
//     console.log("listening on port 8000")
// })

//OS MODULE
// const os=require("os");

// console.log(os.arch());
// const totalMemory=os.freemem();
// console.log(totalMemory,`${totalMemory/1024/1024/1024}`);

// console.log(os.hostname());

// console.log(os.platform());

// console.log(os.type());


//PATH MODULE
// const path=require("path");

// console.log(path.dirname("C:\Users\HP\Desktop\MyNodeNotes\index.js"))

// console.log(path.basename("C:\Users\HP\Desktop\MyNodeNotes\index.js"))

// console.log(path.parse("C:\Users\HP\Desktop\MyNodeNotes\index.js"))

// const mypath=path.parse("C:\Users\HP\Desktop\MyNodeNotes\index.js");
// console.log(mypath.root,"myroot");

//FS MODULE
// const fs=require("fs");
// const path=require("path");
// const dirPath=path.join(__dirname,"MYCURD");
// console.log("my folder",dirPath);
// const filePath=`${dirPath}/banana.txt`;
// console.log("my file path", filePath)


//SYNCHRONOUS WAY OF CURD

// fs.mkdirSync("NEWCURD");//CREATING FOLDER

// fs.writeFileSync('text.txt',"this is new file named text");//CREATING FILE GLOBALLY

// fs.writeFileSync(filePath,"my text mango file");//CREATING FILE INSIDE PARTICULAR FOLDER

// let myfile=fs.readFileSync(filePath);will give buffer data//READING FILE CONTENT
// let orgFile=myfile.toString();
// console.log(myfile);
// console.log(orgFile);

// fs.appendFileSync(filePath," this is my appended data")//APPENDING DATA

// fs.unlinkSync(filePath);//DELETE FILE

// fs.renameSync(filePath,"MYCURD/myapp.txt");//RENAME FILE




//ASYNCHRONOUS WAY OF CURD

// CREATING FILE
// fs.writeFile(filePath,"this is my banana file",(err)=>{
//     console.log("your file is craeted")
// })

// READING FILE
// buffer data convert to actual data by utf-8
// fs.readFile(filePath,"utf-8",(err,item)=>{
//     console.log(item)
// })


// AAPENDING CONTENT INSIDE PARTICULAR FILE
// fs.appendFile(filePath," this is my new append data", (err)=>{
//     console.log(" data is successfully appended")
// })

// DELETE FILE
// fs.unlink(filePath,(err)=>{
//     console.log("deleted")
// })













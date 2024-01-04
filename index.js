import express, { json } from "express";
import 'dotenv/config';

const app =express();

const port = 3000;

app.get('/',(req,res)=>{
    res.send('hello world!!!');
})

// app.get('/twitter',(req,res)=>{
//     let myObject = {
//         one: 1,
//         two: 2
//     }
//     res.send(`<h1> twitter </h1>` + (myObject.two));
// })

// app.get('/instagram',(req,res)=>{
//     res.send(`<h1> instagram </h1>`);
// })

app.listen(process.env.PORT,()=>{
        console.log(`app is listening on port ${port}`);
})
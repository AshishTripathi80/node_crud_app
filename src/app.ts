import { log } from 'console';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

const app=express();
const PORT=process.env.PORT || 3000;

app.use(express.json());

//connect mongodb
mongoose.connect('mongodb+srv://root:root@cluster0.8nq6xvf.mongodb.net/nodecrud',{
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
}).then(()=>{
    console.log('connect to mongodb');
}).catch(err=>{
    console.error('Error connecting to mongodb',err)
})

// basic route
app.get('/',(req:Request,res:Response)=>{
    res.send('Node CRUD application with Express & typescript');
});

//user routes

app.listen(PORT,()=>{
    console.log(`App is running on por ${PORT}`);
    
})

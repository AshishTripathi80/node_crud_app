import express from 'express';
import { connectDB } from './utils/database';
import itemRoutes from './routes/item.routes';
import cors from 'cors';

const app=express();
const PORT=process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//routs
app.use('/items',itemRoutes);

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});
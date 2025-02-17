import { Schema, model } from "mongoose";

export interface IItem{
    name:string;
    description:string;
    price:number;
}

const itemSchema=new Schema<IItem>({
    name:{type:String,required:true},
    description:{type:String},
    price:{type:Number,required:true}
});

export const Item=model<IItem>('Item',itemSchema);
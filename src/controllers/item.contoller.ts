import { Request, Response } from "express";
import { Item, IItem } from "../models/item.model";

export class ItemController {
  //get item
  public async getAllItems(req: Request, res: Response) {
    try {
      const items = await Item.find();
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ message: "Error fetching item" });
    }
  }

  //get item by id
  public async getItemById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const item = await Item.findById(id);
      res.status(200).json(item);
    } catch (error) {
      res.status(404).json({ message: "Item not found" });
    }
  }

  //post item
  public async postItem(req: Request, res: Response) {
    const item:IItem = req.body;
    console.log('Received item:', item); 

    try {
      const newItem = await Item.create(item);
      res.status(201).json(newItem);
    } catch (error) {
        console.error('Error creating item:', error);
      res.status(400).json({ message: "Invalid data" });
    }
  }

  // update item
  public async updateItem(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const updatedItem = await Item.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(updatedItem);
    } catch (error) {
      res.status(404).json({ message: "Item not found" });
    }
  }

  //delete item
  public async deleteItem(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await Item.findByIdAndDelete(id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ message: "Item not found" });
    }
  }
}

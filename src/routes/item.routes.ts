import { Router } from "express";
import { ItemController } from "../controllers/item.contoller";

const router=Router();
const itemController=new ItemController();

router.route('/')
    .get(itemController.getAllItems)
    .post(itemController.postItem);

router.route('/:id')
    .put(itemController.updateItem)
    .delete(itemController.deleteItem)
    .get(itemController.getItemById);

export default router;
import express from 'express';
import { addItem, deleteItem, getItem} from '../controllers/item.controller';
import auth from '../middleware/authorization';

const route = express.Router();

route.get('/', getItem);

route.post('/', addItem);

route.delete('/:id', deleteItem);



export default route;
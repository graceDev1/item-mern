import express from 'express';
import {register, login, getUser} from '../controllers/user.controller';
import auth from '../middleware/authorization';

const route = express.Router();

// regsitration
route.post('/', register);

//login
route.post('/auth',login);

// load user
route.get('/',auth, getUser);


export default route;

import express from 'express';

import { CreateUser, GetUsers,GetUser, DeleteUser,UpdateUser } from '../controllers/users.js';


const router = express.Router();
let users =[
 
];

router.get('/',GetUsers);

router.post('/',CreateUser);

router.get('/:id',GetUser);
router.delete('/:id',DeleteUser);

router.patch('/:id',UpdateUser);

export default router;
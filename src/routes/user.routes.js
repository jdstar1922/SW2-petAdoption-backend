import { Router } from "express";
import { authRequired } from '../middlewares/validateToken.js';
import { getUsers, getUser, updateUser, deleteUser } from "../controllers/user.controller.js";

const router = Router();

router.get('/users', authRequired, getUsers);
router.get('/users/:id', authRequired, getUser);
router.delete('/users/:id', authRequired, deleteUser);
router.put('/users/:id', authRequired, updateUser);


export default router;
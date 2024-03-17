import { Router } from "express";
import { authRequired } from '../middlewares/validateToken.js';
import { getPets, getPet, updatePet, deletePet, createPet } from "../controllers/pet.controller.js";

const router = Router();

router.get('/pets', authRequired, getPets);
router.get('/pets/:id', authRequired, getPet);
router.post('/pets', authRequired, createPet);
router.delete('/pets/:id', authRequired, deletePet);
router.put('/pets/:id', authRequired, updatePet);


export default router;
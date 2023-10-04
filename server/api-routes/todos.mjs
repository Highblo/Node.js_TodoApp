import express from 'express';
import { body } from 'express-validator';
import { addData, deleteData, getAllData, getData, patchData } from '../controllers/apiTodos.mjs';

const router = express.Router();

router.get('/', getAllData);

router.get('/:id', getData);

router.delete('/:id', deleteData);

router.post('/', body('todo').notEmpty(), addData);

router.patch('/:id', body('todo').notEmpty(), patchData);

export default router;
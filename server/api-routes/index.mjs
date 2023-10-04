import express from 'express';
import todosRoutes from './todos.mjs';

const router = express.Router();

// /todosのAPI
router.use('/todos', todosRoutes);

// /のAPI
router.get('/', (req, res) => {
  res.send('/');
});


export default router;
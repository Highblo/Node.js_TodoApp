import express from 'express';
import todosRoutes from './todos.mjs';

const router = express.Router();
router.use('/todos', todosRoutes);

router.get('/', (req, res) => {
  res.send('/');
});


export default router;
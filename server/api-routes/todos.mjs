import express from 'express';

const router = express.Router();

// api/todos
router.get('/', (req, res) => {
  res.send('/todos');
});

export default router;
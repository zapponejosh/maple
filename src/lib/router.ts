import express from 'express';

const router = express.Router();

router.get('/hello', async (_req, res) => {
  res.status(200).json({ message: 'Joy to the World!' });
});

export default router;

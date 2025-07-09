import express from 'express';
import prisma from '../prisma/client.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;
  try {
    const lead = await prisma.lead.create({
      data: { name, email, phone, message }
    });
    res.status(201).json(lead);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao salvar lead' });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const leads = await prisma.lead.findMany({ orderBy: { createdAt: 'desc' } });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar leads' });
  }
});

export default router;

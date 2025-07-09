import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Login fixo: admin / admin
router.post('/', (req, res) => {
  const { email, password } = req.body;
  if (email === 'admin' && password === 'admin') {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '2h' });
    return res.json({ token });
  }
  return res.status(401).json({ message: 'Credenciais inválidas' });
});

export default router;

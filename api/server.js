import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import leadsRoutes from './routes/leads.js';
import uploadRoutes from './routes/upload.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/leads', leadsRoutes);
app.use('/api/upload', uploadRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

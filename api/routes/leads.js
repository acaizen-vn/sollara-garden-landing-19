import express from 'express';
import pool from '../db.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();

// POST - Salvar novo lead (público)
router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;
  
  // Validação básica
  if (!name || !email) {
    return res.status(400).json({ 
      error: 'Nome e email são obrigatórios' 
    });
  }

  try {
    const query = `
      INSERT INTO leads (nome, telefone, email, mensagem) 
      VALUES ($1, $2, $3, $4) 
      RETURNING *
    `;
    
    const values = [name, phone || null, email, message || null];
    const result = await pool.query(query, values);
    
    console.log('✅ Lead salvo:', result.rows[0]);
    res.status(201).json({
      success: true,
      lead: result.rows[0]
    });
    
  } catch (err) {
    console.error('❌ Erro ao salvar lead:', err);
    res.status(500).json({ 
      error: 'Erro interno do servidor',
      details: err.message 
    });
  }
});

// GET - Listar leads (autenticado)
router.get('/', auth, async (req, res) => {
  try {
    const query = `
      SELECT 
        id,
        nome as name,
        telefone as phone,
        email,
        mensagem as message,
        criado_em as "createdAt"
      FROM leads 
      ORDER BY criado_em DESC
    `;
    
    const result = await pool.query(query);
    
    console.log(`📋 Buscando ${result.rows.length} leads`);
    res.json(result.rows);
    
  } catch (err) {
    console.error('❌ Erro ao buscar leads:', err);
    res.status(500).json({ 
      error: 'Erro ao buscar leads',
      details: err.message 
    });
  }
});

export default router;

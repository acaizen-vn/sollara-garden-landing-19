import pool from './db.js';
import fs from 'fs';
import path from 'path';

const createTables = async () => {
  try {
    console.log('🚀 Iniciando setup do banco de dados...');

    // Schema SQL
    const schema = `
      -- Tabela para leads do formulário
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        telefone VARCHAR(50),
        email VARCHAR(100) NOT NULL,
        mensagem TEXT,
        criado_em TIMESTAMP DEFAULT NOW()
      );

      -- Índices para melhor performance
      CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
      CREATE INDEX IF NOT EXISTS idx_leads_criado_em ON leads(criado_em);

      -- Tabela para imagens do carrossel (futuro)
      CREATE TABLE IF NOT EXISTS carrossel (
        id SERIAL PRIMARY KEY,
        imagem VARCHAR(255) NOT NULL,
        titulo VARCHAR(100),
        descricao TEXT,
        criado_em TIMESTAMP DEFAULT NOW()
      );

      -- Índice para carrossel
      CREATE INDEX IF NOT EXISTS idx_carrossel_criado_em ON carrossel(criado_em);
    `;

    // Executar schema
    await pool.query(schema);
    
    console.log('✅ Tabelas criadas com sucesso!');
    console.log('📋 Tabelas disponíveis:');
    console.log('   - leads (nome, telefone, email, mensagem, criado_em)');
    console.log('   - carrossel (imagem, titulo, descricao, criado_em)');
    
    // Verificar tabelas criadas
    const result = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_type = 'BASE TABLE'
    `);
    
    console.log('🔍 Tabelas no banco:', result.rows.map(row => row.table_name));
    
  } catch (error) {
    console.error('❌ Erro ao criar tabelas:', error);
    throw error;
  }
};

// Executar setup se chamado diretamente
if (import.meta.url === `file://${process.argv[1]}`) {
  createTables()
    .then(() => {
      console.log('🎉 Setup concluído com sucesso!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Falha no setup:', error);
      process.exit(1);
    });
}

export { createTables };
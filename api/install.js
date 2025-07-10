#!/usr/bin/env node

import { createTables } from './setup-database.js';
import dotenv from 'dotenv';

dotenv.config();

const install = async () => {
  console.log('🔧 SOLLARA BACKEND - INSTALAÇÃO AUTOMÁTICA');
  console.log('==========================================');
  
  // Verificar variáveis de ambiente
  if (!process.env.DATABASE_URL) {
    console.error('❌ Erro: DATABASE_URL não configurada');
    console.log('💡 Configure no arquivo .env:');
    console.log('   DATABASE_URL=postgresql://usuario:senha@host:5432/sollara_db');
    process.exit(1);
  }

  if (!process.env.JWT_SECRET) {
    console.error('❌ Erro: JWT_SECRET não configurada');
    console.log('💡 Configure no arquivo .env:');
    console.log('   JWT_SECRET=secreto_sollara_2024');
    process.exit(1);
  }

  try {
    console.log('🔗 Conectando ao PostgreSQL...');
    console.log(`📍 Host: ${new URL(process.env.DATABASE_URL).hostname}`);
    
    // Criar tabelas
    await createTables();
    
    console.log('');
    console.log('🎉 INSTALAÇÃO CONCLUÍDA!');
    console.log('========================');
    console.log('✅ Banco de dados configurado');
    console.log('✅ Tabelas criadas');
    console.log('✅ Sistema pronto para uso');
    console.log('');
    console.log('🚀 Para iniciar o servidor:');
    console.log('   npm start');
    console.log('');
    console.log('🌐 Rotas disponíveis:');
    console.log('   POST /api/leads - Salvar lead');
    console.log('   GET  /api/leads - Listar leads (autenticado)');
    console.log('   POST /api/auth - Login admin');
    
  } catch (error) {
    console.error('💥 Falha na instalação:', error.message);
    process.exit(1);
  }
};

install();
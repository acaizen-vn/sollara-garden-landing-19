# 🔥 SOLLARA API - Backend PostgreSQL

Sistema backend real para captura e gerenciamento de leads da landing page Sollara Garden.

## 🚀 Funcionalidades

- ✅ Conexão PostgreSQL real (sem SQLite/Supabase)
- ✅ API REST para leads (POST/GET) 
- ✅ Autenticação JWT para admin
- ✅ Validação de dados
- ✅ Logs detalhados
- ✅ Scripts de instalação automática

## 📋 Pré-requisitos

- Node.js 18+
- PostgreSQL 12+
- NPM/Yarn

## ⚡ Instalação Rápida

### 1. Configure o banco PostgreSQL

```bash
# PostgreSQL local
createdb sollara_db

# Ou use um serviço cloud:
# - Railway (PostgreSQL)
# - Neon (PostgreSQL)
# - Supabase (só o banco, não a auth)
```

### 2. Configure as variáveis de ambiente

```bash
# Copie e edite o .env
cp .env.example .env

# Edite o .env com seus dados:
DATABASE_URL=postgresql://usuario:senha@host:5432/sollara_db
JWT_SECRET=secreto_sollara_2024
NODE_ENV=production
PORT=3001
```

### 3. Execute a instalação automática

```bash
# Instalar dependências e criar tabelas
npm install
npm run install-db

# Ou manual:
npm install
npm run setup
```

### 4. Iniciar servidor

```bash
npm start
# Servidor rodando em http://localhost:3001
```

## 🌐 Rotas da API

### Leads (Formulário)

```bash
# Salvar lead (público)
POST /api/leads
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao@email.com", 
  "phone": "(11) 99999-9999",
  "message": "Interesse no empreendimento"
}

# Listar leads (autenticado)
GET /api/leads
Authorization: Bearer {jwt_token}
```

### Autenticação Admin

```bash
# Login
POST /api/auth
Content-Type: application/json

{
  "username": "admin",
  "password": "admin"
}

# Resposta:
{
  "token": "jwt_token_aqui"
}
```

## 🗄️ Schema do Banco

```sql
-- Tabela de leads
CREATE TABLE leads (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  telefone VARCHAR(50),
  email VARCHAR(100) NOT NULL,
  mensagem TEXT,
  criado_em TIMESTAMP DEFAULT NOW()
);

-- Tabela do carrossel (futuro)
CREATE TABLE carrossel (
  id SERIAL PRIMARY KEY,
  imagem VARCHAR(255) NOT NULL,
  titulo VARCHAR(100),
  descricao TEXT,
  criado_em TIMESTAMP DEFAULT NOW()
);
```

## 🚀 Deploy Produção

### Railway (Recomendado)

```bash
# 1. Criar PostgreSQL no Railway
# 2. Fazer deploy da API
# 3. Configurar variáveis:
DATABASE_URL=postgresql://...
JWT_SECRET=secreto_sollara_2024
NODE_ENV=production
```

### Vercel + Database Externa

```bash
# 1. Database em Railway/Neon/PlanetScale
# 2. Deploy API no Vercel
# 3. Configurar env vars no Vercel
```

### VPS/Linux

```bash
# 1. Instalar PostgreSQL
sudo apt install postgresql postgresql-contrib

# 2. Criar banco
sudo -u postgres createdb sollara_db

# 3. Clonar e configurar
git clone repo
cd api
npm install
npm run install-db
npm start

# 4. PM2 para produção
npm install -g pm2
pm2 start server.js --name sollara-api
```

## 🔧 Scripts Disponíveis

```bash
npm start          # Iniciar servidor
npm run setup      # Criar tabelas apenas  
npm run install-db # Setup completo (recomendado)
```

## 📊 Logs e Monitoramento

O sistema gera logs detalhados:

```
✅ Lead salvo: { id: 1, nome: "João", email: "joao@..." }
📋 Buscando 5 leads
🔗 Conectado ao PostgreSQL
❌ Erro ao salvar lead: ValidationError
```

## 🔒 Segurança

- JWT para autenticação admin
- Validação de entrada de dados
- Sanitização SQL (prepared statements)
- CORS configurado
- Headers de segurança

## 🆘 Solução de Problemas

### Erro de conexão PostgreSQL

```bash
# Verificar se o PostgreSQL está rodando
sudo systemctl status postgresql

# Testar conexão manual
psql "postgresql://usuario:senha@host:5432/sollara_db"
```

### Leads não aparecem no admin

1. Verificar logs do servidor
2. Testar rota diretamente: `GET /api/leads`
3. Verificar token JWT válido
4. Confirmar dados no banco: `SELECT * FROM leads;`

### Problemas de CORS

```javascript
// server.js já configurado com:
app.use(cors({
  origin: ['http://localhost:5173', 'https://sollara.com'],
  credentials: true
}));
```

## 📞 Suporte

Em caso de problemas:

1. Verificar logs do servidor
2. Testar endpoints com Postman/curl
3. Validar conexão do banco
4. Conferir variáveis de ambiente

---

✨ **Sistema 100% funcional em produção com PostgreSQL real!**
# MovaFin - Sua Gestão Financeira Simplificada

MovaFin é uma aplicação web moderna e intuitiva, projetada para ajudar usuários a gerenciar suas finanças pessoais de forma fácil e visual.

## ✨ Core Features

- **Autenticação Segura:** Registro e login de usuários com dados isolados e privados via Firebase.
- **Interface em Português:** Uma experiência de usuário totalmente em português do Brasil.
- **Gestão de Contas:** Crie e acompanhe múltiplas contas financeiras.
- **Registro Detalhado de Transações:** Adicione receitas e despesas com categoria e notas.
- **Dashboard Simplificado:** Painel visual com Recharts.
- **IA Financeira:** Explicador de transações e sugestão de categorias com Genkit.

## 🚀 Ambiente de Desenvolvimento

### 1. Requisitos
- Node.js 18+
- Firebase CLI: `npm install -g firebase-tools`

### 2. Desenvolvimento Local (Emuladores)
Para desenvolver sem afetar os dados de produção e sem custos:

1. No arquivo `.env`, certifique-se de que:
   ```
   NEXT_PUBLIC_USE_FIREBASE_EMULATORS=true
   ```
2. Inicie os emuladores em um terminal separado:
   ```bash
   firebase emulators:start
   ```
3. O app se conectará automaticamente ao Firestore e Auth locais.

**Como verificar a conexão:**
- Veja o log destacado no Console do Navegador (F12).
- Observe o badge "DB Local" no cabeçalho do Dashboard.
- Acesse a UI do emulador em `http://localhost:4000`.

### 3. Produção
Para conectar ao banco de dados na nuvem:
1. Altere no `.env`: `NEXT_PUBLIC_USE_FIREBASE_EMULATORS=false`
2. Rode o app normalmente: `npm run dev`

## 🏛️ Documentação

- [PRD - Product Requirements](./docs/PRD.md)
- [Cronograma de Desenvolvimento](./docs/cronograma.md)
- [Casos de Uso](./docs/usecases.md)
- [Especificação de Casos de Uso](./docs/usecases.md)
- [Requisitos Funcionais](./docs/functional-requirements.md)
- [Requisitos Não Funcionais](./docs/non-functional-requirements.md)
- [Requisitos Legais](./docs/legal-requirements.md)
- [Configuração de Administrador](./docs/admin-setup.md)
- [Política de Privacidade](./docs/privacy-policy.md)
- [Termos de Serviço](./docs/terms-of-service.md)

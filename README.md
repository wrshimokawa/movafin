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
- Firebase CLI (para emuladores locais)

### 2. Instalação
```bash
npm install
```

### 3. Desenvolvimento Local com Emuladores (Opcional)
Para evitar custos e poluição de dados em produção durante o desenvolvimento, você pode usar os Emuladores do Firebase:

1. Certifique-se de ter o Firebase CLI instalado: `npm install -g firebase-tools`
2. No arquivo `.env`, defina:
   ```
   NEXT_PUBLIC_USE_FIREBASE_EMULATORS=true
   ```
3. Inicie os emuladores (em um terminal separado):
   ```bash
   firebase emulators:start
   ```

### 4. Rodar o App
```bash
npm run dev
```

## 🏛️ Documentação

- [Product Requirements Document (PRD)](./docs/PRD.md)
- [Especificação de Casos de Uso](./docs/usecases.md)
- [Configuração de Administrador](./docs/admin-setup.md)

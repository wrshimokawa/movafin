
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

### 1. Ambiente Firebase Studio (Cloud)
Neste ambiente, a aplicação está configurada para utilizar diretamente os serviços do Firebase na nuvem (Produção). Isso garante a melhor estabilidade e permite o uso de todas as funcionalidades de IA e persistência sem configurações adicionais. O isolamento de dados é garantido pelas **Security Rules** do Firestore, que impedem que um usuário acesse dados de outro.

### 2. Desenvolvimento Local (Sua Máquina)
Se você baixar o código e desejar rodar localmente com emuladores:

1. Instale o Firebase CLI: `npm install -g firebase-tools`
2. No arquivo `src/firebase/index.ts`, você pode reativar as funções `connectAuthEmulator` e `connectFirestoreEmulator`.
3. Inicie os emuladores:
   ```bash
   firebase emulators:start
   ```

## 🏛️ Documentação

- [PRD - Product Requirements](./docs/PRD.md)
- [Cronograma de Desenvolvimento](./docs/cronograma.md)
- [Casos de Uso](./docs/usecases.md)
- [Requisitos Funcionais](./docs/functional-requirements.md)
- [Requisitos Não Funcionais](./docs/non-functional-requirements.md)
- [Requisitos Legais](./docs/legal-requirements.md)
- [Configuração de Administrador](./docs/admin-setup.md)
- [Política de Privacidade](./docs/privacy-policy.md)
- [Termos de Serviço](./docs/terms-of-service.md)

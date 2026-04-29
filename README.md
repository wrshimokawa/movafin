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
Neste ambiente, a aplicação está configurada para utilizar diretamente os serviços do Firebase na nuvem (Produção). Isso garante a melhor estabilidade e permite o uso de todas as funcionalidades de IA e persistência sem configurações adicionais. O isolamento de dados é garantido pelas **Security Rules** do Firestore.

### 2. Desenvolvimento Local (Sua Máquina)
Se você deseja baixar o código e rodar localmente com emuladores:

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Instale o Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

3. **Autentique-se no Firebase:**
   ```bash
   firebase login
   ```

4. **Inicie os emuladores:**
   ```bash
   firebase emulators:start
   ```

5. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz e adicione:
   ```env
   NEXT_PUBLIC_USE_FIREBASE_EMULATORS=true
   ```

6. **Rode o projeto Next.js:**
   ```bash
   npm run dev
   ```

## 🏛️ Documentação Detalhada

Para entender profundamente a arquitetura e os requisitos, consulte:

- [PRD - Product Requirements Document](./docs/PRD.md)
- [Cronograma de Desenvolvimento](./docs/cronograma.md)
- [Casos de Uso (Especificação)](./docs/usecases.md)
- [Diagrama de Casos de Uso (UML)](./docs/usecases.uml)
- [Requisitos Funcionais](./docs/functional-requirements.md)
- [Requisitos Não Funcionais](./docs/non-functional-requirements.md)
- [Requisitos Legais e Privacidade](./docs/legal-requirements.md)
- [Configuração de Administrador](./docs/admin-setup.md)
- [Política de Privacidade](./docs/privacy-policy.md)
- [Termos de Serviço](./docs/terms-of-service.md)

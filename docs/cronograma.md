# Cronograma de Desenvolvimento - MovaFin

Este documento apresenta o cronograma de desenvolvimento do MovaFin, atualizado conforme as especificações detalhadas e o progresso atual do protótipo.

## 🏁 Fase de Definição e Prototipagem (Concluída)
- [x] Definição de PRD, Requisitos Funcionais, Não Funcionais e Legais.
- [x] Criação do Diagrama de Arquitetura e Casos de Uso detalhados.
- [x] Desenvolvimento da UI funcional com ShadCN e Tailwind (Dashboard, Contas, Transações, Categorias, Metas).
- [x] Implementação dos fluxos de IA (Genkit) e componentes `AiExplainer` e `AiCategorySuggester`.
- [x] Configuração da infraestrutura base do Firebase (Config, Provider, Error handling).

## Sprint 1: Autenticação e Perfil de Usuário (Em Andamento)
- **Objetivo:** Transformar a autenticação estática em um sistema real e seguro.
- **Tarefas:**
    - [x] Configuração técnica do Firebase Auth no projeto.
    - [ ] Implementação da lógica de Registro de Usuário com persistência inicial no Firestore (`/users/{uid}`).
    - [ ] Implementação do Login via E-mail/Senha com tratamento de erros.
    - [ ] **Tarefa Adicionada:** Implementação de Proteção de Rotas (Middleware/Redirects) para o Dashboard.
    - [ ] Vínculo das páginas de Política de Privacidade e Termos de Serviço no fluxo de cadastro.

## Sprint 2: Persistência de Finanças (Firestore)
- **Objetivo:** Conectar o CRUD de contas e transações ao banco de dados real.
- **Tarefas:**
    - [ ] Migração do estado de "Contas" para o Firestore com suporte a saldo inicial.
    - [ ] Migração do estado de "Transações" para o Firestore vinculado a contas específicas.
    - [ ] Implementação de Security Rules granulares para garantir multi-tenancy estrito.
    - [ ] **Tarefa Adicionada:** Lógica de atualização de saldos (Client-side optimistic updates).

## Sprint 3: Gestão Avançada e Metas
- **Objetivo:** Implementar personalização e acompanhamento de objetivos.
- **Tarefas:**
    - [ ] **Tarefa Adicionada:** Configuração do Firebase Storage para armazenamento de arquivos.
    - [ ] Funcionalidade de upload de anexos (comprovantes) em transações.
    - [ ] Persistência de Categorias personalizadas por usuário.
    - [ ] Implementação do CRUD de Metas Financeiras no Firestore.
    - [ ] Cálculo dinâmico de progresso de metas baseado nos dados reais.

## Sprint 4: Inteligência de Dados e Dashboards
- **Objetivo:** Consolidar a visão financeira e refinar assistentes de IA.
- **Tarefas:**
    - [ ] Substituição dos mocks do Dashboard por queries reais do Firestore.
    - [ ] Ajustar `AiCategorySuggester` para consumir as categorias reais criadas pelo usuário.
    - [ ] **Tarefa Adicionada:** Implementação de Skeletons e Loading States em todos os componentes de dados.
    - [ ] Relatórios mensais de "Entradas vs Saídas" com Recharts.

## Sprint 5: Administração e Lançamento
- **Objetivo:** Finalizar funcionalidades restritas e preparar para produção.
- **Tarefas:**
    - [ ] Implementação do Painel Administrativo (`/admin`) com métricas agregadas.
    - [ ] Configuração de segurança para acesso administrativo (Existence-over-content em `roles_admin`).
    - [ ] Revisão final de UX/UI (Acessibilidade e polimento visual).
    - [ ] Deploy final e testes de regressão em ambiente de Cloud.

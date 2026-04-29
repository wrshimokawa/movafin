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
    - [ ] Implementação da lógica de Registro de Usuário com persistência no Firestore (`/users/{uid}`).
    - [ ] Implementação do Login via E-mail/Senha com tratamento de erros.
    - [ ] Lógica de proteção de rotas (redirecionar não autenticados para `/login`).
    - [ ] Publicação e vínculo das páginas de Política de Privacidade e Termos de Serviço no cadastro.

## Sprint 2: Persistência de Finanças (Firestore)
- **Objetivo:** Conectar o CRUD de contas e transações ao banco de dados real.
- **Tarefas:**
    - [ ] Migração do estado de "Contas" para o Firestore com suporte a saldo inicial.
    - [ ] Migração do estado de "Transações" para o Firestore vinculado a contas.
    - [ ] Implementação de Security Rules granulares para garantir multi-tenancy.
    - [ ] Atualização automática de saldos de contas via transações (trigger ou lógica cliente).

## Sprint 3: Gestão Avançada e Metas
- **Objetivo:** Implementar personalização e acompanhamento de objetivos.
- **Tarefas:**
    - [ ] Persistência de Categorias personalizadas por usuário.
    - [ ] Implementação do CRUD de Metas Financeiras no Firestore.
    - [ ] Cálculo dinâmico de progresso de metas baseado nos saldos reais das contas.
    - [ ] Funcionalidade de upload de anexos em transações (Firebase Storage).

## Sprint 4: Inteligência de Dados e Dashboards
- **Objetivo:** Consolidar a visão financeira e refinar assistentes de IA.
- **Tarefas:**
    - [ ] Popular o Dashboard principal com agregações em tempo real do Firestore.
    - [ ] Ajustar `AiCategorySuggester` para considerar categorias já criadas pelo usuário.
    - [ ] Implementar relatórios mensais de "Entradas vs Saídas" com gráficos Recharts.

## Sprint 5: Administração e Lançamento
- **Objetivo:** Finalizar funcionalidades restritas e preparar para produção.
- **Tarefas:**
    - [ ] Implementação do Painel Administrativo (`/admin`) com métricas agregadas.
    - [ ] Configuração de segurança para acesso administrativo (Existence-over-content).
    - [ ] Revisão final de UX/UI (Loading states, Skeletons e acessibilidade).
    - [ ] Deploy final e testes de regressão em ambiente de Cloud.

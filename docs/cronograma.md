# Cronograma de Desenvolvimento - MovaFin

Este documento apresenta um cronograma de desenvolvimento sugerido para a aplicação MovaFin, dividido em Sprints semanais.

## Sprint 1: Fundação e Autenticação

- **Objetivo:** Estruturar a base do projeto, configurar a autenticação de usuários e criar as páginas estáticas.
- **Tarefas:**
    - Configuração inicial do projeto Next.js e Firebase.
    - Implementação da interface de Login e Registro.
    - Integração com Firebase Authentication (Email/Senha).
    - Criação do layout principal do Dashboard (com navegação).
    - Criação da Landing Page e páginas de Políticas/Termos.

## Sprint 2: Gestão Financeira Essencial

- **Objetivo:** Implementar a funcionalidade principal de gerenciamento de contas e transações.
- **Tarefas:**
    - Implementar CRUD (Criar, Ler, Atualizar, Deletar) para Contas Financeiras.
    - Conectar a tela de Contas com o Firestore.
    - Implementar CRUD para Transações (Receitas e Despesas).
    - Conectar a tela de Transações com o Firestore.
    - Implementar a funcionalidade de anexo de arquivos com Firebase Storage.

## Sprint 3: Categorização e Metas

- **Objetivo:** Adicionar recursos de personalização e planejamento financeiro.
- **Tarefas:**
    - Implementar CRUD para Categorias de Transação.
    - Implementar CRUD para Tipos de Conta.
    - Conectar a tela de Categorias com o Firestore.
    - Implementar CRUD para Metas Financeiras.
    - Conectar a tela de Metas com o Firestore.

## Sprint 4: Inteligência e Visualização

- **Objetivo:** Integrar as funcionalidades de IA e finalizar o dashboard principal.
- **Tarefas:**
    - Conectar o "Explicador de Transações" (IA) no header.
    - Conectar o "Sugeridor de Categorias" (IA) no formulário de transação.
    - Popular o Dashboard com dados reais do Firestore.
    - Desenvolver os gráficos (Gastos por Categoria) com dados reais.

## Sprint 5: Finalização e Administração

- **Objetivo:** Polir a aplicação, realizar testes e implementar o painel administrativo.
- **Tarefas:**
    - Revisão geral da UI/UX e responsividade.
    - Implementar o painel de administrador (RF-021) com visualização de dados agregados.
    - Realizar testes de usabilidade e corrigir bugs.
    - Preparar a aplicação para o deploy.

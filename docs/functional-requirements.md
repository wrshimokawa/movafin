# Requisitos Funcionais do MovaFin

Este documento detalha os requisitos funcionais da aplicação MovaFin.

## 1. Gestão de Usuários e Autenticação (UC-01)
- **RF-001: Cadastro de Usuário:** O sistema deve permitir que um novo usuário se cadastre.
- **RF-002: Login de Usuário:** O sistema deve permitir o login via e-mail/senha.
- **RF-003: Sessão Segura:** Manutenção de sessão via Firebase Auth.
- **RF-004: Isolamento de Dados:** Dados isolados via Security Rules no Firestore.
- **RF-023: Identificação de Administrador:** Identificação via Custom Claims ou coleção de roles.

## 2. Gestão de Contas Financeiras (UC-02)
- **RF-005: Criação de Contas:** Criação de múltiplas contas (corrente, poupança, etc.).
- **RF-006: Edição de Contas:** Alteração de nome, tipo e saldo.
- **RF-007: Visualização de Contas:** Listagem com saldos individuais.
- **RF-008: Saldo Consolidado:** Exibição do total geral no dashboard.
- **RF-022: Atalho para Transações:** Navegação para transações filtradas ao clicar em uma conta.

## 3. Gestão de Transações (UC-03)
- **RF-009: Registro de Transação:** Cadastro de receitas e despesas.
- **RF-010: Adição de Anexos:** Upload de comprovantes (Firebase Storage).
- **RF-013: Listagem e Filtragem:** Filtros por tipo, conta e período.
- **RF-017: Explicador de Transações (IA):** Tradução de jargões via Genkit.
- **RF-018: Sugestão de Categoria (IA):** Sugestão automática baseada na descrição.

## 4. Categorização (UC-04)
- **RF-014: Gestão de Categorias:** Criação e edição de categorias personalizadas.
- **RF-024: Tipos de Conta Personalizados:** Gestão dos tipos de conta disponíveis.

## 5. Dashboard (UC-06)
- **RF-016: Painel Visual:** Gráficos de gastos e resumos mensais (Recharts).

## 6. Gestão de Metas (UC-05)
- **RF-019: Criação de Metas:** Definição de valor alvo e data limite.
- **RF-020: Acompanhamento de Progresso:** Cálculo automático do percentual atingido.

## 7. Administração (UC-07)
- **RF-021: Painel Administrativo:** Visualização de métricas globais anonimizadas.

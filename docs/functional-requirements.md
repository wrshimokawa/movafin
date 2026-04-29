# Requisitos Funcionais do MovaFin

Este documento detalha os requisitos funcionais da aplicação MovaFin, mapeados para os Casos de Uso correspondentes.

## 1. Gestão de Usuários e Autenticação (UC-01)

- **RF-001: Cadastro de Usuário:** O sistema deve permitir que um novo usuário se cadastre fornecendo nome completo, e-mail e senha.
- **RF-002: Login de Usuário:** O sistema deve permitir que um usuário existente faça login usando seu e-mail e senha.
- **RF-003: Sessão Segura:** O sistema deve manter a sessão do usuário de forma segura via Firebase Auth.
- **RF-004: Isolamento de Dados:** Os dados de cada usuário devem ser estritamente isolados através de Security Rules no Firestore.
- **RF-023: Identificação de Administrador:** O sistema deve identificar usuários com privilégios administrativos através de Custom Claims.

## 2. Gestão de Contas Financeiras (UC-02)

- **RF-005: Criação de Contas:** O usuário deve poder criar múltiplas contas financeiras (corrente, poupança, etc.).
- **RF-006: Edição de Contas:** O usuário deve poder editar nome, tipo e saldo inicial de suas contas.
- **RF-007: Visualização de Contas:** O usuário deve poder visualizar uma lista de todas as suas contas com seus respectivos saldos.
- **RF-008: Saldo Consolidado:** O sistema deve exibir o saldo total consolidado na tela principal.
- **RF-022: Atalho para Transações:** Ao selecionar uma conta na visualização de contas, o sistema deve navegar para as transações filtradas daquela conta.

## 3. Gestão de Transações (UC-03)

- **RF-009: Registro de Transação:** O usuário deve poder registrar novas transações (receitas ou despesas).
- **RF-010: Adição de Anexos:** O usuário deve poder anexar arquivos (comprovantes) a uma transação (armazenados no Firebase Storage).
- **RF-013: Listagem e Filtragem de Transações:** O usuário deve poder filtrar por Tipo (Receita/Despesa), Conta e Período.
- **RF-017: Explicador de Transações (IA):** Ferramenta que explica termos financeiros complexos usando Genkit.
- **RF-018: Sugestão de Categoria (IA):** O sistema deve sugerir categorias relevantes para uma transação baseada na descrição.

## 4. Categorização (UC-04)

- **RF-014: Gestão de Categorias:** O usuário deve poder criar e editar categorias personalizadas para seus lançamentos.
- **RF-024: Tipos de Conta Personalizados:** O usuário deve poder gerenciar os tipos de conta disponíveis.

## 5. Dashboard (UC-06)

- **RF-016: Painel Visual:** O sistema deve apresentar gráficos de gastos por categoria e resumos mensais.

## 6. Gestão de Metas (UC-05)

- **RF-019: Criação de Metas:** O usuário deve poder criar metas financeiras com valor alvo e data limite.
- **RF-020: Acompanhamento de Progresso:** O sistema deve calcular automaticamente o percentual atingido da meta.

## 7. Administração (UC-07)

- **RF-021: Painel Administrativo:** Acesso exclusivo para administradores para visualização de métricas agregadas da plataforma.

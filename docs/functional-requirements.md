
# Requisitos Funcionais do MovaFin

Este documento detalha os requisitos funcionais da aplicação MovaFin.

## 1. Gestão de Usuários e Autenticação

- **RF-001: Cadastro de Usuário:** O sistema deve permitir que um novo usuário se cadastre fornecendo nome completo, e-mail e senha.
- **RF-002: Login de Usuário:** O sistema deve permitir que um usuário existente faça login usando seu e-mail and senha.
- **RF-003: Sessão Segura:** O sistema deve manter a sessão do usuário de forma segura.
- **RF-004: Isolamento de Dados:** Os dados de cada usuário devem ser estritamente isolados.

## 2. Gestão de Contas Financeiras

- **RF-005: Criação de Contas:** O usuário deve poder criar múltiplas contas financeiras.
- **RF-006: Edição de Contas:** O usuário deve poder editar as informações de suas contas.
- **RF-007: Visualização de Contas:** O usuário deve poder visualizar uma lista de todas as suas contas com seus respectivos saldos.
- **RF-008: Saldo Consolidado:** O sistema deve exibir o saldo total consolidado de todas as contas do usuário.
- **RF-022: Atalho para Transações:** Ao selecionar uma conta na visualização de contas, o sistema deve permitir navegar diretamente para as transações filtradas daquela conta.

## 3. Gestão de Transações

- **RF-009: Registro de Transação:** O usuário deve poder registrar novas transações (receitas ou despesas).
- **RF-010: Adição de Anexos:** O usuário deve poder anexar um arquivo a uma transação.
- **RF-013: Listagem e Filtragem de Transações:** O usuário deve poder visualizar uma lista de todas as suas transações, com a capacidade de filtrar por:
    - **Tipo:** Receita, despesa ou todas.
    - **Conta:** Filtrar transações de uma conta específica ou de todas.
    - **Período:** Filtrar por datas (mês atual por padrão).

## 4. Categorização

- **RF-014: Gestão de Categorias:** O usuário deve poder gerenciar suas próprias categorias.

## 5. Dashboard

- **RF-016: Painel Visual:** O sistema deve apresentar um dashboard com um resumo visual da saúde financeira.

## 6. Funcionalidades de IA

- **RF-017: Explicador de Transações:** Ferramenta IA que explica descrições complexas.
- **RF-018: Sugestão de Categoria:** IA deve sugerir categorias relevantes.

## 7. Gestão de Metas

- **RF-019: Criação de Metas:** O usuário deve poder criar metas financeiras.

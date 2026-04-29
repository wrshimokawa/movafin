# Requisitos Funcionais do MovaFin

Este documento detalha os requisitos funcionais da aplicação MovaFin.

## 1. Gestão de Usuários e Autenticação

- **RF-001: Cadastro de Usuário:** O sistema deve permitir que um novo usuário se cadastre fornecendo nome completo, e-mail e senha.
- **RF-002: Login de Usuário:** O sistema deve permitir que um usuário existente faça login usando seu e-mail and senha.
- **RF-003: Sessão Segura:** O sistema deve manter a sessão do usuário de forma segura, garantindo que o acesso seja protegido.
- **RF-004: Isolamento de Dados (Multi-tenancy):** Os dados de cada usuário devem ser estritamente isolados. Um usuário não pode, sob nenhuma circunstância, acessar os dados de outro usuário.

## 2. Gestão de Contas Financeiras

- **RF-005: Criação de Contas:** O usuário deve poder criar múltiplas contas financeiras (ex: Conta Corrente, Poupança, Carteira).
- **RF-006: Edição de Contas:** O usuário deve poder editar as informações de suas contas existentes.
- **RF-007: Visualização de Contas:** O usuário deve poder visualizar uma lista de todas as suas contas com seus respectivos saldos.
- **RF-008: Saldo Consolidado:** O sistema deve exibir o saldo total consolidado de todas as contas do usuário.

## 3. Gestão de Transações

- **RF-009: Registro de Transação:** O usuário deve poder registrar novas transações (receitas ou despesas), informando:
    - Descrição
    - Valor
    - Data
    - Conta associada
    - Categoria
    - Notas (opcional)
- **RF-010: Adição de Anexos:** O usuário deve poder anexar um arquivo (ex: comprovante) a uma transação.
- **RF-011: Edição de Transações:** O usuário deve poder editar suas transações registradas.
- **RF-012: Exclusão de Transações:** O usuário deve poder excluir transações.
- **RF-013: Listagem e Filtragem de Transações:** O usuário deve poder visualizar uma lista de todas as suas transações, com a capacidade de filtrar por tipo (receita/despesa), conta ou período.

## 4. Categorização

- **RF-014: Gestão de Categorias de Transação:** O usuário deve poder criar, editar e excluir suas próprias categorias de transação (ex: Alimentação, Lazer).
- **RF-015: Gestão de Tipos de Conta:** O usuário deve poder criar, editar e excluir tipos de conta personalizados.

## 5. Dashboard

- **RF-016: Painel Visual:** O sistema deve apresentar um dashboard com um resumo visual da saúde financeira do usuário, incluindo:
    - Saldo total.
    - Resumo de receitas e despesas do período (mês atual).
    - Gráfico de despesas por categoria.
    - Lista de transações recentes.

## 6. Funcionalidades de IA

- **RF-017: Explicador de Transações:** O sistema deve fornecer uma ferramenta baseada em IA que explica descrições complexas de transações financeiras em uma linguagem simples e clara.
- **RF-018: Sugestão de Categoria:** Ao registrar uma nova transação, a IA deve sugerir categorias relevantes com base na descrição e no valor da transação.

## 7. Gestão de Metas

- **RF-019: Criação de Metas:** O usuário deve poder criar metas financeiras (ex: Viagem, Carro novo), definindo um nome, valor alvo, valor atual e data alvo.
- **RF-020: Acompanhamento de Metas:** O usuário deve poder visualizar o progresso de suas metas através de uma barra de progresso e valores.

## 8. Administração (Painel do Administrador)

- **RF-021: Visualização de Dados Agregados:** Um administrador autenticado deve ter acesso a um painel seguro para visualizar dados agregados e anônimos sobre o uso da plataforma (ex: número de usuários, volume de transações), sem acesso a dados pessoais ou financeiros individuais.

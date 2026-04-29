# Casos de Uso - MovaFin

Este documento detalha os casos de uso da aplicação MovaFin, descrevendo as interações entre os atores (usuários) e o sistema.

## Diagrama de Casos de Uso

A imagem abaixo ilustra as principais funcionalidades e quem as executa.

![Diagrama de Casos de Uso](./usecases.png)
*(Nota: Gere este arquivo de imagem a partir do `usecases.uml` usando um renderizador PlantUML)*

---

## Especificação dos Casos de Uso

### UC-01: Gerenciar Autenticação
- **Atores:** Usuário
- **Descrição:** Permite que um usuário crie uma nova conta ou acesse uma conta existente no sistema.
- **Fluxo Principal:**
    1. O usuário acessa a página de login ou registro.
    2. Para registro, o usuário fornece nome, e-mail e senha, e o sistema cria uma nova conta.
    3. Para login, o usuário fornece e-mail e senha, e o sistema valida as credenciais.
    4. O sistema estabelece uma sessão segura para o usuário autenticado.
- **Pós-condição:** O usuário está autenticado e tem acesso às funcionalidades do seu perfil.

### UC-02: Gerenciar Contas Financeiras
- **Atores:** Usuário
- **Descrição:** Permite que o usuário crie, visualize, edite e remova suas contas financeiras (ex: conta corrente, poupança).
- **Fluxo Principal:**
    1. O usuário acessa a seção "Contas".
    2. O sistema exibe a lista de contas existentes com seus saldos.
    3. O usuário pode optar por adicionar uma nova conta, informando nome, tipo e saldo inicial.
    4. O usuário pode selecionar uma conta existente para editar suas informações ou excluí-la.
- **Pós-condição:** A lista de contas do usuário é atualizada conforme a ação realizada.

### UC-03: Gerenciar Transações
- **Atores:** Usuário
- **Descrição:** Permite que o usuário registre, visualize, edite e remova suas transações de receita e despesa.
- **Fluxo Principal:**
    1. O usuário acessa a seção "Transações".
    2. O sistema exibe uma lista de transações recentes.
    3. O usuário pode adicionar uma nova transação, informando descrição, valor, data, conta, categoria e notas opcionais.
    4. (Extensão) O usuário pode anexar um arquivo (comprovante) à transação.
    5. O usuário pode selecionar uma transação para editar ou excluir.
- **Pós-condição:** As transações e o saldo da conta associada são atualizados.

### UC-04: Gerenciar Categorias
- **Atores:** Usuário
- **Descrição:** Permite que o usuário personalize o sistema criando, editando e removendo categorias para transações e tipos para contas.
- **Fluxo Principal:**
    1. O usuário acessa a seção "Categorias".
    2. O usuário pode criar uma nova categoria de transação (receita/despesa) ou um novo tipo de conta.
    3. O usuário pode editar o nome ou excluir categorias/tipos existentes.
- **Pós-condição:** As opções de categorização são atualizadas para uso em todo o sistema.

### UC-05: Gerenciar Metas Financeiras
- **Atores:** Usuário
- **Descrição:** Permite que o usuário crie e acompanhe o progresso de suas metas financeiras.
- **Fluxo Principal:**
    1. O usuário acessa a seção "Metas".
    2. O sistema exibe as metas existentes com seu progresso.
    3. O usuário pode criar uma nova meta, definindo nome, valor alvo, valor atual e data alvo.
    4. O usuário pode editar ou excluir uma meta existente.
- **Pós-condição:** As metas financeiras do usuário são atualizadas.

### UC-06: Consultar Dashboard
- **Atores:** Usuário
- **Descrição:** Permite que o usuário visualize um resumo consolidado de sua situação financeira.
- **Fluxo Principal:**
    1. O usuário acessa a página principal do painel (Dashboard).
    2. O sistema exibe o saldo total, resumo de receitas/despesas, gráficos de gastos por categoria e transações recentes.
- **Pós-condição:** O usuário tem uma visão geral de sua saúde financeira.

### UC-07: Usar Ferramentas de IA
- **Atores:** Usuário
- **Descrição:** Permite que o usuário utilize as funcionalidades de inteligência artificial para auxiliar na gestão financeira.
- **Fluxos:**
    - **Explicar Transação:** O usuário insere um texto de uma transação complexa e a IA retorna uma explicação simples.
    - **Sugerir Categoria:** Ao criar uma transação, o usuário pode solicitar que a IA sugira categorias com base na descrição e no valor.
- **Pós-condição:** O usuário obtém informações claras ou sugestões para facilitar o gerenciamento.

### UC-08: Visualizar Dados Agregados
- **Atores:** Administrador
- **Descrição:** Permite que um administrador veja dados anônimos e agregados sobre o uso da plataforma.
- **Fluxo Principal:**
    1. O administrador acessa o painel administrativo seguro.
    2. O sistema exibe estatísticas como número de usuários, volume total de transações, etc., sem identificar usuários individuais.
- **Pós-condição:** O administrador obtém insights para a tomada de decisões estratégicas sobre a plataforma.


# Casos de Uso - MovaFin

Este documento detalha os casos de uso da aplicação MovaFin, descrevendo as interações entre os atores (usuários) e o sistema.

## Diagrama de Casos de Uso

**Nota:** O diagrama de imagem (`usecases.png`) pode ser gerado a partir do código-fonte em `docs/usecases.uml` usando um renderizador PlantUML online.

---

## Especificação dos Casos de Uso

### UC-01: Gerenciar Autenticação
- **Atores:** Usuário Não Autenticado, Usuário Autenticado, Administrador
- **Resumo:** Permite que um usuário crie uma nova conta, acesse uma conta existente ou encerre sua sessão no sistema.
- **Pré-condições:** Nenhuma para Cadastro e Login. Para acesso administrativo, o usuário deve ter sido previamente promovido a Administrador por um processo de governança interno.
- **Fluxo Principal (Login):**
    1. O Usuário acessa a página de "Login".
    2. O Usuário preenche os campos "Email" e "Senha".
    3. O Usuário clica no botão "Entrar".
    4. O Sistema valida as credenciais.
    5. O Sistema verifica as permissões do usuário.
    6. Se for um usuário comum, redireciona para o "Dashboard" padrão.
    7. Se possuir a flag de administrador, habilita o acesso ao menu "Admin" e redireciona conforme preferência.
- **Pós-condição:** O usuário está autenticado e tem acesso ao seu perfil e funcionalidades permitidas.

### UC-02: Gerenciar Contas Financeiras
- **Atores:** Usuário Autenticado
- **Resumo:** Permite que o usuário crie, visualize, edite e remova suas contas financeiras.
- **Pré-condições:** Nenhuma.
- **Fluxo Principal (Visualizar e Navegar):**
    1. O usuário navega para a seção "Contas".
    2. O sistema exibe a lista de contas.
    3. O usuário clica em um card de conta específica.
    4. O sistema redireciona para a lista de Transações filtrada por aquela conta.
- **Fluxos Alternativos:**
    - **A1: Criar Conta:** O usuário preenche o formulário de nova conta com nome, tipo e saldo inicial.
- **Pós-condição:** A lista de contas do usuário é exibida ou atualizada.

### UC-03: Gerenciar Transações
- **Atores:** Usuário Autenticado
- **Resumo:** Permite que o usuário registre, visualize e filtre suas transações.
- **Pré-condições:** O usuário deve possuir pelo menos uma conta financeira cadastrada.
- **Fluxo Principal (Filtrar Transações):**
    1. O usuário navega para a seção "Transações".
    2. O usuário seleciona uma conta específica no seletor de filtros.
    3. O sistema atualiza a lista exibindo apenas transações daquela conta.
    4. O usuário clica na aba "Receitas" ou "Despesas".
    5. O sistema refina a filtragem para exibir apenas o tipo selecionado para a conta escolhida.
- **Fluxos de Exceção:**
    - **E1: Sem resultados:** Se a combinação de filtros não encontrar transações, o sistema exibe uma mensagem informativa.
- **Regras de Negócio:**
    - **RN-04:** Uma transação do tipo "Despesa" debita o valor do saldo da conta.
- **Pós-condição:** As transações são exibidas de acordo com os critérios de filtragem.

### UC-06: Consultar Dashboard
- **Atores:** Usuário Autenticado
- **Resumo:** Permite que o usuário visualize um resumo consolidado de sua situação financeira.
- **Pré-condições:** Nenhuma.
- **Fluxo Principal:**
    1. O usuário acessa a página principal (Dashboard).
    2. O sistema exibe o saldo total, resumo do mês e gastos por categoria.
- **Pós-condição:** O usuário tem uma visão geral de sua saúde financeira.

### UC-07: Acessar Painel Administrativo
- **Atores:** Administrador
- **Resumo:** Permite que um administrador visualize métricas de uso da plataforma.
- **Pré-condições:** O usuário deve possuir Custom Claims de 'admin' no seu token de autenticação.
- **Fluxo Principal:**
    1. O Administrador acessa a rota `/admin` ou clica no atalho no menu.
    2. O sistema valida os privilégios.
    3. O sistema exibe métricas agregadas (total de usuários, volume de transações, etc.).
- **Regras de Negócio:**
    - **RN-05:** Dados individuais dos usuários nunca devem ser expostos ao administrador; apenas dados agregados e anonimizados.

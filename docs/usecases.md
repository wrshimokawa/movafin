# Casos de Uso - MovaFin

Este documento detalha os casos de uso da aplicação MovaFin, descrevendo as interações entre os atores (usuários) e o sistema.

## Diagrama de Casos de Uso

**Nota:** O diagrama de imagem (`usecases.png`) pode ser gerado a partir do código-fonte em `docs/usecases.uml` usando um renderizador PlantUML online.

---

## Especificação dos Casos de Uso

A seguir, a especificação detalhada de cada caso de uso.

### UC-01: Gerenciar Autenticação
- **Atores:** Usuário Não Autenticado, Usuário Autenticado
- **Resumo:** Permite que um usuário crie uma nova conta, acesse uma conta existente ou encerre sua sessão no sistema.
- **Pré-condições:** Nenhuma.
- **Fluxo Principal (Login):**
    1. O Usuário acessa a página de "Login".
    2. O Usuário preenche os campos "Email" e "Senha".
    3. O Usuário clica no botão "Entrar".
    4. O Sistema valida as credenciais.
    5. O Sistema estabelece uma sessão segura e redireciona o Usuário para o "Dashboard".
- **Fluxo Principal (Registro):**
    1. O Usuário acessa a página de "Criar Conta".
    2. O Usuário preenche os campos "Nome completo", "Email", "Senha" e "Confirmar Senha".
    3. O Usuário clica no botão "Criar conta".
    4. O Sistema valida os dados e cria uma nova conta de usuário.
    5. O Sistema estabelece uma sessão segura e redireciona o Usuário para o "Dashboard".
- **Fluxo Principal (Logout):**
    1. O Usuário Autenticado clica na opção "Sair".
    2. O Sistema encerra a sessão do usuário.
    3. O Sistema redireciona o Usuário para a Landing Page.
- **Fluxos Alternativos:**
    - **A1: Recuperação de Senha:**
        1. No passo 2 do fluxo de login, o usuário clica em "Esqueceu sua senha?".
        2. O sistema solicita o e-mail do usuário.
        3. O sistema envia um link de redefinição de senha para o e-mail fornecido.
- **Fluxos de Exceção:**
    - **E1: Credenciais Inválidas:** No passo 4 do fluxo de login, se as credenciais forem inválidas, o sistema exibe uma mensagem de erro.
    - **E2: E-mail já Cadastrado:** No passo 4 do fluxo de registro, se o e-mail já estiver em uso, o sistema exibe uma mensagem de erro.
    - **E3: Senhas não Coincidem:** No passo 4 do fluxo de registro, se as senhas não coincidirem, o sistema exibe uma mensagem de erro.
- **Pós-condição:** O usuário está autenticado e tem acesso ao seu perfil, ou não autenticado se fez logout.

### UC-02: Gerenciar Contas Financeiras
- **Atores:** Usuário Autenticado
- **Resumo:** Permite que o usuário crie, visualize, edite e remova suas contas financeiras.
- **Pré-condições:** Nenhuma.
- **Fluxo Principal (Criar Conta):**
    1. O usuário navega para a seção "Contas".
    2. O usuário clica em "Adicionar Conta".
    3. O sistema exibe um formulário para preenchimento de "Nome da Conta", "Tipo de Conta" e "Saldo Inicial".
    4. O usuário preenche os dados e salva.
    5. O sistema cria a nova conta associada ao usuário.
    6. O sistema exibe a nova conta na lista de contas.
- **Fluxos Alternativos:**
    - **A1: Editar Conta:**
        1. Na lista de contas, o usuário seleciona a opção de editar uma conta existente.
        2. O sistema exibe o formulário com os dados da conta preenchidos.
        3. O usuário modifica os dados e salva.
        4. O sistema atualiza a conta.
    - **A2: Excluir Conta:**
        1. Na lista de contas, o usuário seleciona a opção de excluir uma conta.
        2. O sistema solicita uma confirmação.
        3. O usuário confirma a exclusão.
        4. O sistema remove a conta e atualiza a lista.
- **Regras de Negócio:**
    - **RN-01:** O nome da conta deve ser único por usuário.
    - **RN-02:** Ao excluir uma conta, todas as transações associadas a ela também devem ser excluídas. O sistema deve alertar o usuário sobre essa consequência.
- **Pós-condição:** A lista de contas do usuário é atualizada.

### UC-03: Gerenciar Transações
- **Atores:** Usuário Autenticado
- **Resumo:** Permite que o usuário registre, visualize, edite e exclua suas transações (receitas e despesas).
- **Pré-condições:** O usuário deve possuir pelo menos uma conta financeira cadastrada.
- **Fluxo Principal (Registrar Transação):**
    1. O usuário navega para a seção "Transações" e clica em "Adicionar Transação".
    2. O sistema exibe um formulário solicitando: Descrição, Valor, Tipo (Receita/Despesa), Categoria, Conta, Data, Notas (opcional) и Anexo (opcional).
    3. O usuário preenche as informações e salva.
    4. O sistema valida os dados e cria a nova transação.
    5. O sistema atualiza o saldo da conta associada.
    6. O sistema exibe a nova transação na lista.
- **Fluxos de Exceção:**
    - **E1: Dados Inválidos:** Se o usuário tentar salvar com dados obrigatórios faltando (ex: valor, conta), o sistema exibe uma mensagem de erro.
- **Regras de Negócio:**
    - **RN-03:** O valor da transação deve ser maior que zero.
    - **RN-04:** Uma transação do tipo "Despesa" debita o valor do saldo da conta.
    - **RN-05:** Uma transação do tipo "Receita" credita o valor ao saldo da conta.
- **Pós-condição:** A transação é registrada e o saldo da conta correspondente é atualizado.

### UC-04: Gerenciar Categorias
- **Atores:** Usuário Autenticado
- **Resumo:** Permite que o usuário personalize suas categorias de transação e tipos de conta.
- **Pré-condições:** Nenhuma.
- **Fluxo Principal (Criar Categoria):**
    1. O usuário navega para a seção "Categorias".
    2. O usuário preenche o nome e o tipo (Receita/Despesa) da nova categoria.
    3. O usuário salva a nova categoria.
    4. O sistema adiciona a categoria à lista do usuário.
- **Fluxos Alternativos:**
    - **A1: Editar Categoria:** O usuário pode editar o nome de uma categoria criada por ele.
    - **A2: Excluir Categoria:** O usuário pode excluir uma categoria criada por ele.
- **Fluxos de Exceção:**
    - **E1: Excluir Categoria em Uso:** Se o usuário tentar excluir uma categoria que já está associada a alguma transação, o sistema deve impedi-lo e informar o motivo.
- **Regras de Negócio:**
    - **RN-06:** O sistema fornece um conjunto de categorias padrão que não podem ser editadas ou excluídas.
- **Pós-condição:** As opções de categorização são atualizadas para o usuário.

### UC-05: Gerenciar Metas Financeiras
- **Atores:** Usuário Autenticado
- **Resumo:** Permite que o usuário crie, acompanhe, edite e exclua suas metas financeiras.
- **Pré-condições:** Nenhuma.
- **Fluxo Principal (Criar Meta):**
    1. O usuário navega para a seção "Metas" e clica em "Adicionar Meta".
    2. O sistema exibe um formulário para: Nome, Valor Alvo, Valor Atual, Data Alvo e Descrição (opcional).
    3. O usuário preenche os dados e salva.
    4. O sistema cria a nova meta e a exibe na lista.
- **Fluxos Alternativos:**
    - **A1: Atualizar Progresso:** O usuário pode editar uma meta para atualizar o "Valor Atual" economizado.
- **Fluxos de Exceção:**
    - **E1: Valor Alvo Inválido:** O "Valor Alvo" deve ser maior que o "Valor Atual".
- **Regras de Negócio:**
    - **RN-07:** O progresso da meta (em porcentagem) é calculado automaticamente pelo sistema (`(Valor Atual / Valor Alvo) * 100`).
- **Pós-condição:** A meta é criada ou atualizada e exibida na lista de metas.

### UC-06: Consultar Dashboard
- **Atores:** Usuário Autenticado
- **Resumo:** Permite que o usuário visualize um resumo consolidado de sua situação financeira.
- **Pré-condições:** Nenhuma.
- **Fluxo Principal:**
    1. O usuário acessa a página principal do painel (Dashboard).
    2. O sistema busca e processa os dados do usuário (saldos, transações do mês).
    3. O sistema exibe os seguintes componentes: Saldo total, Resumo de receitas/despesas, Gráfico de gastos por categoria e Lista de transações recentes.
- **Fluxos Alternativos:**
    - **A1: Estado Vazio:** Se o usuário for novo e não tiver dados, o dashboard exibe mensagens convidando-o a adicionar sua primeira conta e transação.
- **Pós-condição:** O usuário tem uma visão geral de sua saúde financeira.

### UC-07: Usar Ferramentas de IA
- **Atores:** Usuário Autenticado
- **Resumo:** Permite que o usuário utilize as funcionalidades de IA para auxiliar na gestão financeira.
- **Pré-condições:** Nenhuma.
- **Fluxo Principal (Explicar Transação):**
    1. O usuário abre a ferramenta "Explicador de Transações".
    2. O usuário insere um texto de uma transação complexa e solicita a explicação.
    3. O sistema envia o texto para o serviço de IA.
    4. O sistema exibe a explicação simplificada retornada pela IA.
- **Fluxo Principal (Sugerir Categoria):**
    1. No formulário de criação de transação (UC-03), o usuário preenche a descrição e o valor.
    2. O usuário clica em "Sugerir categorias".
    3. O sistema envia os dados para o serviço de IA.
    4. O sistema exibe as categorias sugeridas, permitindo que o usuário selecione uma delas.
- **Fluxos de Exceção:**
    - **E1: Falha no Serviço de IA:** Se a comunicação com a IA falhar, o sistema exibe uma mensagem de erro amigável.
- **Pós-condição:** O usuário obtém informações ou sugestões para facilitar o gerenciamento financeiro.

### UC-08: Visualizar Dados Agregados
- **Atores:** Administrador
- **Resumo:** Permite que um administrador veja dados anônimos e agregados sobre o uso da plataforma.
- **Pré-condições:** Nenhuma.
- **Fluxo Principal:**
    1. O Administrador acessa o painel administrativo através de uma rota segura.
    2. O sistema valida as permissões do Administrador.
    3. O sistema busca e exibe estatísticas agregadas e anonimizadas (ex: número total de usuários, volume total de transações, etc.).
- **Fluxos de Exceção:**
    - **E1: Acesso Não Autorizado:** Se um usuário não-administrador tentar acessar o painel, o sistema nega o acesso.
- **Regras de Negócio:**
    - **RN-08:** O painel administrativo não deve, em nenhuma hipótese, exibir dados que permitam a identificação de um usuário individual ou de suas finanças pessoais.
- **Pós-condição:** O administrador obtém insights sobre a plataforma.

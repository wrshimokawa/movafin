# Casos de Uso - MovaFin

Este documento detalha as interações entre os atores e o sistema MovaFin, descrevendo os fluxos de trabalho e as regras que regem cada funcionalidade.

## Diagrama de Casos de Uso

![Diagrama de Casos de Uso](./usecases.png)

*Nota: O diagrama acima é gerado a partir do código PlantUML presente em `docs/usecases.uml`.*

---

## Especificação dos Casos de Uso

### UC-01: Gerenciar Autenticação
- **Atores:** Usuário Não Autenticado, Usuário Autenticado, Administrador.
- **Resumo:** Permite o acesso seguro à plataforma, criação de novas contas e encerramento de sessão.
- **Pré-condições:** Nenhuma.
- **Fluxo Principal (Login):**
    1. O ator acessa a página de login.
    2. O ator fornece e-mail e senha.
    3. O sistema valida as credenciais contra a base de dados do Firebase Auth.
    4. O sistema verifica se existem Custom Claims (ex: admin).
    5. O sistema concede acesso e redireciona para o Dashboard apropriado.
- **Fluxos Alternativos:**
    - **A1 (Cadastro):** O usuário fornece nome, e-mail e senha; o sistema cria a conta e inicializa os dados básicos no Firestore.
- **Fluxos de Exceção:**
    - **E1 (Credenciais Inválidas):** O sistema exibe mensagem de erro e permanece na tela de login.
- **Regras de Negócio:**
    - **RN-01:** Senhas devem ter no mínimo 6 caracteres.
    - **RN-02:** O e-mail deve ser único no sistema.

### UC-02: Gerenciar Contas Financeiras
- **Atores:** Usuário Autenticado.
- **Resumo:** Permite o controle das fontes de recursos (bancos, carteira, poupança).
- **Pré-condições:** Nenhuma.
- **Fluxo Principal (Criação):**
    1. O usuário acessa a seção de Contas.
    2. O usuário aciona "Adicionar Conta".
    3. O usuário preenche nome, tipo de conta e saldo inicial.
    4. O sistema persiste os dados e atualiza o saldo consolidado.
- **Fluxos Alternativos:**
    - **A1 (Navegação):** O usuário clica em uma conta existente; o sistema redireciona para a lista de transações filtrada por aquela conta.
- **Regras de Negócio:**
    - **RN-03:** O saldo inicial não pode ser negativo no momento da criação.

### UC-03: Gerenciar Transações
- **Atores:** Usuário Autenticado.
- **Resumo:** Registro e monitoramento de entradas e saídas financeiras.
- **Pré-condições:** Existência de pelo menos uma Conta cadastrada.
- **Fluxo Principal:**
    1. O usuário aciona "Nova Transação".
    2. O usuário define o tipo (Receita/Despesa), valor, conta de origem/destino e categoria.
    3. O sistema atualiza o saldo da conta associada em tempo real.
- **Fluxos Alternativos:**
    - **A1 (Sugestão de Categoria):** O usuário solicita sugestão à IA baseada na descrição; a IA retorna até 3 opções.
    - **A2 (Explicação de Transação):** O usuário solicita esclarecimento de um jargão bancário; a IA retorna uma explicação simples.
- **Fluxos de Exceção:**
    - **E1 (Conta não selecionada):** O sistema impede o salvamento até que uma conta válida seja escolhida.
- **Regras de Negócio:**
    - **RN-04:** Transações do tipo despesa devem subtrair do saldo; receitas devem somar.

### UC-04: Gerenciar Categorias
- **Atores:** Usuário Autenticado.
- **Resumo:** Personalização das etiquetas de classificação de gastos e ganhos.
- **Pré-condições:** Nenhuma.
- **Fluxo Principal:**
    1. O usuário acessa a página de Categorias.
    2. O usuário adiciona uma nova categoria definindo se ela se aplica a Receitas, Despesas ou Ambos.
- **Regras de Negócio:**
    - **RN-05:** Categorias nativas do sistema não podem ser excluídas pelo usuário.

### UC-05: Gerenciar Metas Financeiras
- **Atores:** Usuário Autenticado.
- **Resumo:** Planejamento de objetivos de médio/longo prazo.
- **Pré-condições:** Nenhuma.
- **Fluxo Principal:**
    1. O usuário define um nome para a meta, valor alvo e data limite.
    2. O sistema calcula o progresso percentual baseado no valor atual economizado.
- **Fluxos de Exceção:**
    - **E1 (Data Inválida):** O sistema impede a criação se a data alvo for anterior à data atual.
- **Regras de Negócio:**
    - **RN-06:** O valor alvo deve ser estritamente maior que o valor já acumulado.

### UC-06: Consultar Dashboard
- **Atores:** Usuário Autenticado.
- **Resumo:** Visão consolidada da saúde financeira.
- **Pré-condições:** Existência de dados de contas e transações para exibição significativa.
- **Fluxo Principal:**
    1. O sistema agrega saldos de todas as contas para exibir o "Saldo Total".
    2. O sistema filtra transações do mês corrente para exibir "Receitas" e "Despesas".
    3. O sistema gera gráfico de pizza/barras com a distribuição por categorias.

### UC-07: Acessar Painel Administrativo
- **Atores:** Administrador.
- **Resumo:** Supervisão de métricas globais da plataforma.
- **Pré-condições:** Ator deve possuir privilégios administrativos atribuídos manualmente via backend.
- **Fluxo Principal:**
    1. O administrador acessa a rota `/admin`.
    2. O sistema valida os privilégios no token de acesso.
    3. O sistema exibe volumetria de usuários e transações de forma anonimizada.
- **Regras de Negócio:**
    - **RN-07:** Dados sensíveis e transações individuais de usuários nunca devem ser visíveis no painel administrativo.

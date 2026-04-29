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
- **Fluxo Principal (Login):**
    1. O ator acessa a página de login.
    2. O ator fornece e-mail e senha.
    3. O sistema valida as credenciais contra o Firebase Auth.
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
- **Fluxo Principal (Criação):**
    1. O usuário acessa a seção de Contas.
    2. O usuário aciona "Adicionar Conta".
    3. O usuário preenche nome, tipo de conta e saldo inicial.
    4. O sistema persiste os dados no Firestore vinculados ao UID do usuário.
- **Fluxos Alternativos:**
    - **A1 (Navegação):** O usuário clica em uma conta; o sistema redireciona para `/dashboard/transactions?accountId={id}`.
- **Regras de Negócio:**
    - **RN-03:** O saldo inicial não deve ser negativo na criação da conta.

### UC-03: Gerenciar Transações
- **Atores:** Usuário Autenticado.
- **Resumo:** Registro e monitoramento de entradas e saídas financeiras.
- **Fluxo Principal:**
    1. O usuário aciona "Nova Transação".
    2. O usuário preenche: tipo (Receita/Despesa), valor, conta, categoria e data.
    3. O sistema atualiza o saldo da conta e persiste o registro no Firestore.
- **Fluxos Alternativos:**
    - **A1 (Sugestão de Categoria):** O usuário solicita sugestão à IA baseada na descrição; o sistema usa Genkit para retornar opções.
    - **A2 (Explicação de Transação):** O usuário usa o `AiExplainer` para traduzir jargões bancários.
- **Regras de Negócio:**
    - **RN-04:** Despesas subtraem do saldo; receitas somam.

### UC-04: Gerenciar Categorias
- **Atores:** Usuário Autenticado.
- **Resumo:** Personalização das etiquetas de classificação.
- **Fluxo Principal:**
    1. O usuário acessa a página de Categorias.
    2. O usuário adiciona ou edita categorias de lançamentos ou tipos de conta.
- **Regras de Negócio:**
    - **RN-05:** Categorias pré-definidas do sistema são protegidas contra exclusão.

### UC-05: Gerenciar Metas Financeiras
- **Atores:** Usuário Autenticado.
- **Resumo:** Planejamento de objetivos de médio/longo prazo.
- **Fluxo Principal:**
    1. O usuário define nome, valor alvo e data limite.
    2. O sistema calcula o progresso percentual baseado no valor atual economizado.
- **Regras de Negócio:**
    - **RN-06:** O valor alvo deve ser maior que o valor já acumulado.

### UC-06: Consultar Dashboard
- **Atores:** Usuário Autenticado.
- **Resumo:** Visão consolidada da saúde financeira.
- **Fluxo Principal:**
    1. O sistema exibe o saldo total consolidado.
    2. O sistema gera gráficos de Recharts baseados nas transações do mês.

### UC-07: Acessar Painel Administrativo
- **Atores:** Administrador.
- **Resumo:** Supervisão de métricas globais da plataforma.
- **Fluxo Principal:**
    1. O administrador acessa a rota `/admin`.
    2. O sistema valida os privilégios no Firestore/Custom Claims.
    3. O sistema exibe métricas agregadas anonimizadas.

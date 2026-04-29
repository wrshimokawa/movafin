# Cronograma de Desenvolvimento - MovaFin

Este documento apresenta o cronograma de desenvolvimento do MovaFin, atualizado conforme as especificações detalhadas e o protótipo de alta fidelidade já construídos.

## 🏁 Fase de Definição e Prototipagem (Concluída)
- Definição de PRD, Requisitos Funcionais, Não Funcionais e Legais.
- Criação do Diagrama de Arquitetura e Casos de Uso.
- Desenvolvimento do Protótipo de Alta Fidelidade (UI) com filtragem e validações.
- Implementação inicial dos fluxos de IA (Genkit) e componentes explicadores.

## Sprint 1: Fundação e Autenticação Real
- **Objetivo:** Transformar a autenticação mockada em um sistema real e seguro.
- **Tarefas:**
    - Configuração do projeto no Firebase Console.
    - Implementação do Provider de Autenticação (`src/firebase`).
    - Integração real das telas de Login e Registro com Firebase Auth.
    - Implementação da lógica de redirecionamento baseada no estado de autenticação.
    - Publicação das páginas de Política de Privacidade e Termos de Serviço (RF-003, RL-001, RL-002).

## Sprint 2: Persistência de Contas e Transações
- **Objetivo:** Conectar o CRUD de finanças ao Firestore com isolamento de dados.
- **Tarefas:**
    - Definição das Security Rules do Firestore para isolamento por usuário (RF-004).
    - Migração do estado das "Contas" para o Firestore (RF-005, RF-006, RF-007).
    - Migração do estado das "Transações" para o Firestore (RF-009, RF-013).
    - Implementação do upload de anexos no Firebase Storage (RF-010).

## Sprint 3: Metas e Categorização Dinâmica
- **Objetivo:** Permitir que o usuário personalize sua experiência e planeje o futuro.
- **Tarefas:**
    - Implementação do CRUD real de Categorias (RF-014).
    - Implementação do CRUD real de Metas Financeiras (RF-019).
    - Cálculo dinâmico de progresso de metas baseado no saldo das contas.

## Sprint 4: Inteligência Artificial e Dashboard Real
- **Objetivo:** Validar as funcionalidades de IA com dados reais e consolidar o resumo visual.
- **Tarefas:**
    - Testes e refinamento do "Explicador de Transações" com dados do Firestore (RF-017).
    - Refinamento do "Sugeridor de Categorias" no formulário de transação (RF-018).
    - Popular o Dashboard principal com agregações reais do Firestore (RF-008, RF-016).

## Sprint 5: Administração e Entrega
- **Objetivo:** Implementar o acesso restrito e finalizar a aplicação para produção.
- **Tarefas:**
    - Implementação do Painel Administrativo com dados agregados e anonimizados (RF-021).
    - Configuração manual de Custom Claims para o primeiro usuário Administrador (RF-023).
    - Revisão final de acessibilidade, performance e conformidade (RN-001, RN-002).
    - Deploy final via Firebase App Hosting.

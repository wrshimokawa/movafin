# Requisitos Não Funcionais do MovaFin

Este documento descreve os requisitos não funcionais (RNF) da aplicação MovaFin.

## 1. Usabilidade (RNF-001)
- **Interface Intuitiva:** Limpa, intuitiva e fácil de usar, utilizando componentes ShadCN UI.
- **Localização:** 100% em Português do Brasil (pt-BR), incluindo datas e moedas.
- **Responsividade:** Design mobile-first funcional em todos os dispositivos através de Tailwind CSS.

## 2. Desempenho (RNF-002)
- **Tempo de Carregamento:** Páginas principais renderizadas em menos de 3 segundos em conexão 3G.
- **Feedback Visual:** Uso de Skeletons e indicadores de carregamento (Loading States) para todas as operações assíncronas.

## 3. Segurança (RNF-003)
- **Autenticação Segura:** Gestão de identidade via Firebase Auth.
- **Isolamento de Dados:** Multi-tenancy estrito garantido por Firestore Security Rules, impedindo que um usuário acesse dados de outro.
- **Criptografia:** Todo tráfego de dados protegido via HTTPS (TLS 1.2+).

## 4. Confiabilidade (RNF-004)
- **Disponibilidade:** Alvo de 99.9% de uptime utilizando infraestrutura serverless.
- **Integridade dos Dados:** Garantia de que transações financeiras reflitam corretamente no saldo das contas.

## 5. Manutenibilidade (RNF-005)
- **Código Limpo:** Uso de TypeScript e componentes isolados para facilitar a manutenção.
- **Documentação:** Manutenção de PRD, casos de uso e cronograma atualizados.

## 6. Ambiente e Infraestrutura (RNF-006)
- **Desenvolvimento Local:** Suporte a Firebase Local Emulator Suite para testes isolados e desenvolvimento sem custos.
- **Produção:** Infraestrutura baseada em Firebase App Hosting para escalabilidade automática.
- **Isolamento de Ambientes:** Separação clara entre ambiente local e nuvem via variáveis de ambiente (`NEXT_PUBLIC_USE_FIREBASE_EMULATORS`).

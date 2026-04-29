# Requisitos Não Funcionais do MovaFin

Este documento descreve os requisitos não funcionais (RNF) da aplicação MovaFin.

## 1. Usabilidade (RNF-001)
- **Interface Intuitiva:** Limpa, intuitiva e fácil de usar.
- **Localização:** 100% em Português do Brasil (pt-BR).
- **Responsividade:** Design mobile-first funcional em todos os dispositivos.

## 2. Desempenho (RNF-002)
- **Tempo de Carregamento:** Páginas principais em menos de 3 segundos em conexão 3G.
- **Feedback Visual:** Indicadores de carregamento para operações assíncronas.

## 3. Segurança (RNF-003)
- **Autenticação Segura:** Via Firebase Auth.
- **Isolamento de Dados:** Multi-tenancy garantido por Firestore Security Rules.
- **Criptografia:** Todo tráfego via HTTPS (TLS 1.2+).

## 4. Ambiente e Infraestrutura (RNF-007)
- **Desenvolvimento Local:** Suporte a Firebase Local Emulator Suite para testes isolados.
- **Produção:** Infraestrutura serverless baseada em Google Cloud/Firebase App Hosting.
- **Isolamento de Ambientes:** Separação clara entre ambiente local e nuvem via variáveis de ambiente (`NEXT_PUBLIC_USE_FIREBASE_EMULATORS`).

## 5. Confiabilidade (RNF-004)
- **Disponibilidade:** Alvo de 99.9%.
- **Integridade dos Dados:** Transações atômicas no Firestore.

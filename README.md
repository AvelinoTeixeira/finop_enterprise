# 🚀 FinOp Enterprise - High Performance Financial Dashboard

FinOp Enterprise é um painel financeiro de última geração construído para demonstrar padrões de arquitetura modernos, performance extrema e uma experiência de usuário impecável.



## 🛠️ Stack Tecnológica

- **Framework:** Next.js 16 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS v4
- **Componentes:** Shadcn/UI + Radix UI
- **Validação:** Zod
- **Ícones:** Lucide React
- **Gráficos:** Recharts
- **Testes:** Playwright (E2E)

## 🏗️ Diferenciais de Arquitetura (Nível Enterprise)

Este projeto não é apenas um CRUD. Ele implementa conceitos avançados de engenharia de software:

1.  **Partial Prerendering (PPR):** Utiliza o motor do Next.js 16 para entregar o shell da aplicação de forma estática instantânea, enquanto os dados dinâmicos são carregados via streaming.
2.  **Optimistic UI:** Implementação do hook `useOptimistic` do React 19 para que a interface reaja imediatamente às ações do usuário, tratando a latência de rede em background.
3.  **Server Actions:** Toda a lógica de mutação de dados ocorre no lado do servidor, eliminando a necessidade de APIs REST tradicionais e aumentando a segurança.
4.  **Screaming Architecture:** Organização de pastas baseada em `features` (Transactions, Analytics), facilitando a escalabilidade e manutenção.

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js 20+ 
- pnpm (recomendado)

### Instalação
1. Clone o repositório:
   ```bash
   git clone [https://github.com/AvelinoTeixeira/finop_enterprise.git](https://github.com/AvelinoTeixeira/finop_enterprise.git)
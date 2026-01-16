# 🚀 FinOp Enterprise - High Performance Financial Dashboard

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

**FinOp Enterprise** é um dashboard financeiro de nível industrial focado em demonstrar competências avançadas de arquitetura frontend, performance de runtime e experiência de usuário (UX). O projeto foi construído sob os pilares da engenharia moderna: escalabilidade, observabilidade e acessibilidade.

---

## 🛠️ Stack Tecnológica & Skills

* **Framework:** Next.js 16 (App Router) & React 19.
* **Estilização:** Tailwind CSS v4.0 (Atomic Design System).
* **Qualidade & Testes:** Playwright (E2E Testing framework pronto para CI/CD).
* **Tipagem:** TypeScript (Strict Mode) para eliminação de *runtime errors*.

---

## 🏗️ Engenharia de Software & Performance

Este projeto implementa padrões críticos para aplicações de grande escala:

### 1. Core Web Vitals Optimization
Arquitetura desenhada para atingir scores máximos nas métricas do Google:
* **LCP (Largest Contentful Paint):** Uso de *Partial Prerendering (PPR)* e otimização de fontes para renderização instantânea do conteúdo principal.
* **CLS (Cumulative Layout Shift):** Layout estável com reserva de espaço para elementos dinâmicos, garantindo **Zero Shift**.
* **INP (Interaction to Next Paint):** Minimização da execução de JavaScript no *Main Thread* para respostas imediatas ao clique.

### 2. Acessibilidade (a11y) & Semântica
* Cumprimento dos padrões **WCAG 2.1**.
* Uso de componentes **Radix UI** para garantir suporte total a leitores de ecrã e navegação via teclado.
* Contraste dinâmico ajustado automaticamente entre Light/Dark mode.

### 3. Estrutura de Testes (E2E)
* Configuração base com **Playwright** para garantir a integridade dos fluxos críticos de utilizador (Navegação, Dashboards, Fluxos de Saída).
* Foco em testes que simulam o comportamento real do utilizador em diferentes browsers e resoluções.

### 4. Modular Feature Architecture
Organização baseada em domínios (`features/`), facilitando o *code-splitting* automático e a manutenção distribuída por múltiplas equipas.

---

## 🎨 Design System: Shadows over Borders

Em vez de divisões rígidas, o projeto utiliza um sistema de **Elevação por Camadas**:
* **Shadow-Based UI:** Profundidade calculada para reduzir a carga cognitiva e destacar o que é essencial.
* **Subtle Borders:** Bordas de 1px com baixa opacidade (rgba) para separação quase invisível, mantendo o foco total nos dados financeiros.

---

## 🚀 Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone [https://github.com/AvelinoTeixeira/finop_enterprise.git](https://github.com/AvelinoTeixeira/finop_enterprise.git)
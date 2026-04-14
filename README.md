# 🛠️ DevUtils

**DevUtils** é uma Single Page Application (SPA) moderna que reúne ferramentas essenciais para desenvolvedores em uma única interface limpa, rápida e responsiva.

## 🚀 Funcionalidades

O projeto foi construído seguindo rigorosamente as especificações do `plan.md`, contendo as seguintes ferramentas:

1.  **My IP Detector**: Identifica e exibe seu endereço IP público automaticamente via API externa.
2.  **MD5 Hash Generator**: Gera hashes MD5 em tempo real (até 3000 caracteres) com função de cópia rápida.
3.  **CPF Generator**: Gera CPFs válidos para testes de software, seguindo o padrão brasileiro (XXX.XXX.XXX-XX).
4.  **CNPJ Generator**: Gera CNPJs válidos, incluindo suporte ao novo padrão **Alfanumérico** da Receita Federal (XX.XXX.XXX/XXXX-XX).
5.  **Social Meta Tags Generator**: Cria tags HTML, Open Graph (Facebook) e Twitter Cards com preview em tempo real.

## 🧰 Stack Técnica

-   **Framework**: [Vue 3](https://vuejs.org/) (Composition API + `<script setup>`)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Linguagem**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
-   **Estilização**: [Tailwind CSS v3](https://tailwindcss.com/) + [daisyUI v4](https://daisyui.com/)
-   **Bibliotecas de Utilidades**:
    -   `@fnando/cpf`: Geração e validação de CPF.
    -   `@fnando/cnpj` (v2.0.0): Geração de CNPJ com suporte a caracteres alfanuméricos.
    -   `crypto-js`: Implementação do algoritmo MD5.

## ⚙️ Detalhes de Implementação

-   **Dark Mode**: Implementado com persistência no `localStorage` e detecção automática de preferência do sistema, utilizando o sistema de temas do daisyUI (`data-theme`).
-   **Arquitetura**: Componentes modulares em Vue 3, garantindo separação de responsabilidades e facilidade de manutenção.
-   **Configuração de Build**: Utiliza `postcss.config.cjs` e `tailwind.config.cjs` para garantir compatibilidade máxima com o ecossistema CommonJS/ESM durante a minificação e processamento de CSS.
-   **Mobile-First**: Interface totalmente responsiva, adaptando-se de smartphones a desktops de alta resolução.

## 🛠️ Como rodar o projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação
```bash
# Instalar dependências
npm install
```

### Desenvolvimento
```bash
# Rodar servidor local com Hot Module Replacement (HMR)
npm run dev
```

### Build para Produção
```bash
# Gerar arquivos otimizados na pasta /dist
npm run build
```

### Pré-visualização do dist

```bash
npx http-server
```

## 📄 Licença
Este projeto foi desenvolvido para fins educacionais e de ferramentas para desenvolvedores. Sinta-se à vontade para contribuir!

---
Desenvolvido como parte do ecossistema **DevUtils.github.io**.

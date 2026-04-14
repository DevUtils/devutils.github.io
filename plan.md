# 📋 DevUtils - Especificação de Funcionalidades (Single Source of Truth)

## 📅 Planejamento

**Nome do Projeto:** DevUtils  
**URL alvo:** https://devutils.github.io  
**Tipo:** Single Page Application (SPA) com todas as ferramentas visíveis na mesma página.

**Este documento é a ÚNICA FONTE DA VERDADE (Single Source of Truth).**  
Qualquer manutenção ou expansão deve seguir rigorosamente as definições aqui contidas.

### Stack Técnica (OBRIGATÓRIA)

- **Framework:** Vue 3 (Composition API + `<script setup>`) via Vite.
- **Estilização:** Tailwind CSS v3 + daisyUI v4.
- **Linguagem:** TypeScript (Strict Mode ativado).
- **Idioma da interface:** Português (Brasil).
- **Idioma do código fonte:** Inglês (comentários e nomes de variáveis).
- **Deploy:** Automático via GitHub Actions (Branch `master`).

**Regras de Arquitetura:**
- Tudo deve ser uma SPA com `App.vue` como raiz.
- Todo comportamento interativo deve estar dentro de **componentes Vue** separados em `src/components/`.
- Configurações de PostCSS e Tailwind devem usar a extensão `.cjs` para garantir compatibilidade com o ecossistema de build.
- O diretório `dist` deve ser ignorado pelo Git, com deploy realizado via artefatos no GitHub Actions.

**Bibliotecas e Versões:**
- `@fnando/cpf` (v1.0.2): Geração de CPFs numéricos.
- `@fnando/cnpj` (v2.0.0): Geração de CNPJs (suporta o padrão **Alfanumérico** da Receita Federal).
- `crypto-js`: Utilizado especificamente para o módulo MD5.

---

## 🎯 Especificação das Ferramentas

Todas as ferramentas devem ser componentes Vue independentes, seguindo a ordem de exibição definida no Layout.

### 1. My IP Detector (`MyIp.vue`)
- **Comportamento:** Buscar o IP público automaticamente no hook `onMounted`.
- **API:** `https://api.ipify.org?format=json` via `fetch`.
- **Interface:**
  - Mostrar spinner de loading ("Detectando IP...") durante a requisição.
  - Exibir o IP em destaque (fonte mono, negrito).
  - Tratar erros de rede com mensagem amigável e botão "Tentar novamente".
  - Disclaimer: Texto informativo linkando para `ipify.org`.

### 2. MD5 Hash Generator (`Md5Generator.vue`)
- **Comportamento:** Reativo em tempo real (atualiza enquanto o usuário digita).
- **Regras:**
  - `textarea` para entrada de texto com limite de 3000 caracteres.
  - Contador de caracteres visível (ex: 0/3000).
- **Interface:**
  - Campo de output (readonly) exibindo o hash em hexadecimal.
  - Botão "Copiar Hash" com feedback visual ("Copiado!") por 2 segundos.

### 3. CPF Generator (`CpfGenerator.vue`)
- **Comportamento:** Gera um CPF válido automaticamente ao carregar e ao clicar no botão de gerar.
- **Formatação:** Deve exibir sempre formatado (`XXX.XXX.XXX-XX`).
- **Interface:**
  - Botão "Gerar Novo CPF".
  - Botão "Copiar CPF" com feedback de 2 segundos.
  - Disclaimer legal sobre o uso exclusivo para testes.

### 4. CNPJ Generator (`CnpjGenerator.vue`)
- **Comportamento:** Gera um CNPJ válido (incluindo o padrão **Alfanumérico**) automaticamente ao carregar.
- **Formatação:** Deve exibir sempre formatado (`XX.XXX.XXX/XXXX-XX`).
- **Interface:**
  - Botão "Gerar Novo CNPJ".
  - Botão "Copiar CNPJ" com feedback de 2 segundos.

### 5. Social Meta Tags Generator (`SocialMetaTags.vue`)
- **Comportamento:** Formulário reativo que gera um bloco de código HTML em tempo real.
- **Campos do Formulário:**
  - Título / Nome (`text`)
  - Descrição (`textarea`)
  - URL da Imagem (`url`)
  - Tipo (`text`, padrão: `website`)
  - URL do Site (`url`)
  - Keywords (`text`)
- **Código Gerado:** Deve incluir três blocos comentados:
  1. **HTML Básico:** `<title>`, `<meta name="title">`, `<meta name="description">`, `<meta name="keywords">`.
  2. **Facebook Open Graph:** `og:url`, `og:type`, `og:title`, `og:description`, `og:image`.
  3. **Twitter Cards:** `twitter:card` (summary_large_image), `twitter:url`, `twitter:title`, `twitter:description`, `twitter:image`.
- **Interface:** Layout em duas colunas (Formulário vs Preview do Código) em telas grandes.

---

## 🧩 Funcionalidades Globais

### Dark Mode
- Botão de alternância (Sol/Lua) localizado no Header.
- **Persistência:** Salvar estado no `localStorage`.
- **Detecção:** Respeitar a preferência de cor do sistema operacional no primeiro carregamento.
- **Implementação:** Alterar o atributo `data-theme` na tag `<html>`.

### Layout da Página (`App.vue`)
A ordem **exata** das seções deve ser:
1. **Header** (Logo "DevUtils" + Toggle de Tema).
2. **Meu IP** (`MyIp.vue`).
3. **Gerador MD5** (`Md5Generator.vue`).
4. **Gerador de CPF** (`CpfGenerator.vue`).
5. **Gerador de CNPJ** (`CnpjGenerator.vue`).
6. **Gerador de Meta Tags Sociais** (`SocialMetaTags.vue`).
7. **Footer** (Copyright + Link para Repositório GitHub).

### Design e UX (daisyUI)
- Utilizar componentes nativos do daisyUI (`card`, `btn`, `input`, `textarea`, `alert`).
- Design limpo com fundo `bg-base-200` para contraste dos cards `bg-base-100`.
- Responsividade Mobile-First (grid de 1 coluna que expande conforme a tela).

---

## 🚀 Estrutura de Pastas (Exata)

```
/
├── .github/workflows/
│   └── deploy.yml          # Fluxo de deploy automático
├── src/
│   ├── components/
│   │   ├── MyIp.vue
│   │   ├── Md5Generator.vue
│   │   ├── CpfGenerator.vue
│   │   ├── CnpjGenerator.vue
│   │   └── SocialMetaTags.vue
│   ├── App.vue
│   ├── main.ts
│   ├── style.css
│   └── vite-env.d.ts
├── index.html
├── vite.config.ts
├── tailwind.config.cjs      # Formato CommonJS para compatibilidade
├── postcss.config.cjs       # Formato CommonJS para compatibilidade
├── package.json
├── tsconfig.json
└── README.md
```

---

## ✅ Critérios de Aceitação

- [x] Build limpo sem erros de TypeScript (`npm run build`).
- [x] CNPJ compatível com caracteres alfanuméricos.
- [x] Dark Mode funcional e persistente.
- [x] Todas as ferramentas com botão de cópia e feedback visual.
- [x] Deploy automático configurado para a URL alvo.

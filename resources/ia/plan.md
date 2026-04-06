# 📋 DevUtils - Especificação de Funcionalidades

## 📅 Planejamento

## SPA com Astro + Vue 3 + GitHub Pages

---

## 🎯 Visão Geral

**Nome:** DevUtils  
**URL:** https://devutils.github.io  
**Arquitetura:** **Single Page Application (SPA)** - todas as ferramentas ficam visíveis simultaneamente na mesma página, organizadas em seções. Não há rotas ou navegação entre páginas diferentes.  
**Stack:** Astro + Vue 3 + daisyUI + TypeScript
**Desenvolvimento:** Página em português. Código fonte padrão em inglês. Comentários do código fonte em inglês

**Comportamento da SPA:**
- O usuário acessa uma única URL (`/`)
- Todas as 5 ferramentas estão renderizadas na página

---

## 📦 Funcionalidades (5 ferramentas)

---

### Funcionalidade 1: Gerador de CPF

**Objetivo:** Exibir um CPF válido e permitir gerar novos.

**Comportamento:**

| Ação                       | Reação esperada                                              |
| -------------------------- | ------------------------------------------------------------ |
| Página carrega             | Um CPF válido é gerado e exibido automaticamente             |
| Clicar em "Gerar Novo CPF" | Um novo CPF válido (diferente do anterior) substitui o atual |
| Clicar em "Copiar CPF"     | O CPF atual vai para a área de transferência do usuário      |

**Elementos na tela:**
- Display do CPF (ex: `748.538.887-80`)
- Botão "Gerar Novo CPF"
- Botão "Copiar CPF"
- Aviso legal: "A ferramenta abaixo tem o objetivo de auxiliar desenvolvedores de softwares a testarem em seu ambiente de desenvolvimento. A má utilização desse conteúdo é de total responsabilidade do visitante. Não possuímos vínculos com a Receita Federal."

**Feedback de cópia:**
- Quando "Copiar CPF" é clicado, o usuário deve ver uma indicação visual de que o conteúdo foi copiado (ex: o texto do botão muda temporariamente para "Copiado!")

---

### Funcionalidade 2: Gerador de CNPJ

**Objetivo:** Exibir um CNPJ válido e permitir gerar novos.

**Comportamento:**

| Ação                        | Reação esperada                                               |
| --------------------------- | ------------------------------------------------------------- |
| Página carrega              | Um CNPJ válido é gerado e exibido automaticamente             |
| Clicar em "Gerar Novo CNPJ" | Um novo CNPJ válido (diferente do anterior) substitui o atual |
| Clicar em "Copiar CNPJ"     | O CNPJ atual vai para a área de transferência                 |

**Elementos na tela:**
- Display do CNPJ (ex: `41.802.228/0001-82`)
- Botão "Gerar Novo CNPJ"
- Botão "Copiar CNPJ"
- Mesmo aviso legal do CPF

**Feedback de cópia:** Idêntico ao do CPF

---

### Funcionalidade 3: Gerador MD5

**Objetivo:** Calcular e exibir o hash MD5 de um texto fornecido pelo usuário.

**Comportamento:**

| Ação                     | Reação esperada                                              |
| ------------------------ | ------------------------------------------------------------ |
| Página carrega           | Campo de texto vazio; campo do hash vazio ou com placeholder |
| Usuário digita texto     | O hash MD5 é atualizado **em tempo real** conforme digita    |
| Usuário apaga todo texto | O campo do hash fica vazio                                   |
| Clicar em "Copiar Hash"  | O hash atual vai para a área de transferência                |

**Elementos na tela:**
- Campo de texto (textarea ou input) para o usuário digitar o conteúdo
- Display do hash MD5 (ex: `d41d8cd98f00b204e9800998ecf8427e`)
- Botão "Copiar Hash"

**Requisitos técnicos:**
- O hash deve ser calculado **client-side** usando JavaScript/TypeScript
- Suportar textos longos (mínimo 5.000 caracteres)
- A codificação deve ser UTF-8

**Feedback de cópia:** Idêntico ao das outras ferramentas

---

### Funcionalidade 4: Meu IP

**Objetivo:** Detectar e exibir o endereço IP público do usuário.

**Comportamento:**

| Ação                     | Reação esperada                                                           |
| ------------------------ | ------------------------------------------------------------------------- |
| Página carrega           | Busca automaticamente o IP e exibe na tela                                |
| Durante a busca          | Exibir indicador de carregamento (ex: "Detectando IP...")                 |
| Busca concluída          | Exibir o IP do usuário                                                    |
| Falha na busca           | Exibir mensagem de erro amigável (ex: "Não foi possível detectar seu IP") |
| Clicar em "Atualizar IP" | Refaz a busca e atualiza o IP exibido                                     |

**Elementos na tela:**
- Display do IP (ex: `186.204.63.216`)
- Botão "Atualizar IP"
- (Opcional) Texto informando que uma API externa é consultada

**Requisitos técnicos:**
- Deve consultar uma API pública gratuita (ex: `https://api.ipify.org?format=json`)
- A requisição deve ser feita via `fetch`
- Tratar erros de rede e timeout

**Feedback de erro:** Se falhar, mostrar mensagem e permitir tentar novamente com o botão "Atualizar IP"

---

### Funcionalidade 5: Gerador de Meta Tags Sociais

**Objetivo:** Gerar o código HTML das meta tags para redes sociais baseado em campos preenchidos pelo usuário.

**Campos do formulário (todos editáveis pelo usuário):**

| Campo       | Tipo               |
| ----------- | ------------------ |
| Title/Name  | texto              |
| Description | texto (multilinha) |
| Image       | texto (URL)        |
| Type        | texto              |
| URL         | texto (URL)        |
| Keywords    | texto              |

**Comportamento:**

| Ação                          | Reação esperada                                                   |
| ----------------------------- | ----------------------------------------------------------------- |
| Página carrega                | Formulário vazio; Código gerado aparece abaixo                    |
| Usuário altera qualquer campo | O código HTML é atualizado **em tempo real** com os novos valores |
| Clicar em "Copiar Código"     | Todo o bloco de código gerado vai para a área de transferência    |

**Estrutura do código gerado (deve incluir estas 4 seções):**

1. **HTML básico**
   - `<title>`
   - `<meta name="title">`
   - `<meta name="description">`
   - `<meta name="keywords">`

2. **Facebook Open Graph**
   - `<meta property="og:title">`
   - `<meta property="og:image">`
   - `<meta property="og:type">`
   - `<meta property="og:url">`
   - `<meta property="og:description">`

3. **Twitter Cards**
   - `<meta name="twitter:title">`
   - `<meta name="twitter:image:src">`
   - `<meta name="twitter:site">` (campo opcional - deixar vazio se não preenchido)
   - `<meta name="twitter:description">`

**Elementos na tela:**
- Formulário com os 6 campos descritos acima
- Área de exibição do código gerado (textarea ou pre formatado)
- Botão "Copiar Código"

**Feedback de cópia:** Idêntico ao das outras ferramentas

---

## 🧩 Funcionalidades de Sistema (Obrigatórias)

### 1. Dark Mode / Light Mode
- Deve haver um botão no topo da página que alterna entre os temas claro e escuro
- A preferência do usuário deve ser salva no `localStorage`
- Ao recarregar a página, o tema escolhido deve ser restaurado

### 2. SEO
- A página deve ter meta tags padrão (título, descrição) para compartilhamento

---

## 🗺️ Layout da Página (Ordem das seções)

A página única (`/`) deve conter as seguintes seções:

1. **Cabeçalho** (título do site + botão de tema claro/escuro)
5. **Meu IP**
4. **Gerador MD5**
2. **Gerador de CPF**
3. **Gerador de CNPJ**
6. **Gerador de Meta Tags Sociais**
7. **Rodapé** (copyright, link para GitHub)

---

## ✅ Critérios de Aceitação

- [ ] Todas as 5 ferramentas estão visíveis simultaneamente na mesma página
- [ ] Cada ferramenta funciona de forma independente sem interferir nas outras
- [ ] Botões de copiar funcionam em todos os navegadores modernos
- [ ] Dark mode alterna cores e persiste após recarregar
- [ ] Nenhum dado é enviado para servidor externo (exceto a API de IP)
- [ ] O build no GitHub Pages é bem-sucedido
- [ ] Não há erros no console do navegador
- [ ] A página é responsiva (funciona no celular)

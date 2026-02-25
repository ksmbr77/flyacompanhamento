

## Melhorias e Correções Gerais

### 1. Limpar CSS boilerplate do Vite (App.css)
O arquivo `App.css` ainda contém estilos do template Vite (`.logo`, `.card`, `.read-the-docs`, `@keyframes logo-spin`) que não são usados. Vamos remover tudo e manter apenas o `#root { width: 100%; }`.

### 2. Menu mobile (hamburger)
No mobile, os links de navegação ficam escondidos (`hidden md:flex`). Vamos adicionar um botão hamburger que abre um menu dropdown com os links, para que o cliente consiga navegar entre as seções no celular.

### 3. StrategyPage - Ícones visíveis no mobile
Os ícones à direita de cada card de estratégia usam `opacity-0 group-hover:opacity-100`, o que significa que nunca aparecem no mobile (não existe hover). Vamos torná-los sempre visíveis.

### 4. Remover arquivos não utilizados
- `src/components/NavLink.tsx` - não é importado em nenhum lugar
- `src/components/proposal/CasesPage.tsx` - não é renderizado no Index e usa classes CSS antigas que não existem (`pdf-page`, `section-title`, `section-subtitle`)

### 5. Consistência de largura máxima
Padronizar o `max-w` das seções para maior consistência visual:
- Cover, Contact: `max-w-4xl` (conteúdo centralizado)
- Demais seções: `max-w-5xl`

### 6. Melhorar acessibilidade dos links
Adicionar `aria-label` nos botões de WhatsApp e links de contato para melhor acessibilidade.

---

### Detalhes Técnicos

**Arquivos a editar:**

1. **`src/App.css`** - Remover estilos boilerplate do Vite (logo, card, read-the-docs, logo-spin)
2. **`src/pages/Index.tsx`** - Adicionar menu hamburger para mobile com estado de aberto/fechado
3. **`src/components/proposal/StrategyPage.tsx`** - Mudar ícones de `opacity-0 group-hover:opacity-100` para `opacity-60 group-hover:opacity-100` (visíveis no mobile)
4. **`src/components/proposal/ContactPage.tsx`** - Adicionar `aria-label` nos links
5. **Remover** `src/components/NavLink.tsx` e `src/components/proposal/CasesPage.tsx` (não utilizados)


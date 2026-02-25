

## Plano de Melhorias - Landing Page Fly Agency

### 1. Remover botao "Ver Investimento" da CoverPage

O botao principal da capa passara a ser apenas **"Explorar Proposta"** (que leva para os pilares). Isso garante que o cliente percorra toda a proposta antes de ver o preco.

### 2. Atualizar CTA da ContactPage

Trocar a mensagem final para algo mais positivo e orientado ao fechamento:
- Titulo: "Vamos transformar seu negocio?"  
- Subtitulo: "Agende uma consultoria gratuita e descubra como transformar seu negocio nos proximos 90 dias."

### 3. Corrigir responsividade e centralizacao do scroll

- Remover `max-width: 1280px` e `padding: 2rem` do `App.css` (`#root`) que interfere no layout
- Garantir que todas as secoes usem `mx-auto` com `w-full` corretamente
- Ajustar o indicador de "Scroll" na CoverPage para ficar centralizado
- Revisar padding das secoes no mobile

### 4. Remover efeito visual do botao "Aprovar Proposta"

Remover `glow-effect` e efeitos de hover exagerados dos botoes de aprovacao na navbar e ContactPage.

### 5. Atualizar link do WhatsApp

Garantir que todos os links usem o numero `5579998615349` com mensagens personalizadas para cada CTA.

---

### Detalhes Tecnicos

**Arquivos a editar:**

1. **`src/App.css`** - Remover estilos do `#root` que limitam largura e adicionam padding desnecessario
2. **`src/components/proposal/CoverPage.tsx`** - Remover botao "Ver Investimento", manter apenas "Explorar Proposta" como CTA principal com estilo gradient
3. **`src/components/proposal/ContactPage.tsx`** - Atualizar copy do CTA final, remover efeitos de hover exagerados, atualizar ano do copyright para 2026
4. **`src/pages/Index.tsx`** - Remover "Investimento" da navegacao visivel (o cliente chega la naturalmente pelo scroll), remover `glow-effect` do botao APROVAR na navbar


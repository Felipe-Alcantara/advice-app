# Advice App — Conselhos instantâneos 🎲✨

Tags: #javascript #frontend #API #HTML #CSS #pt-BR

🌐 **Versão WEB:** [https://felipe-alcantara.github.io/advice-app/](https://felipe-alcantara.github.io/advice-app/)

Um pequeno aplicativo front-end que busca conselhos da API `Advice Slip` e os apresenta com um visual moderno — com tradução automática opcional e controles para copiá-los e ver o texto original.

---

## Índice 📚

1. [Visão geral](#visão-geral)
2. [Demonstração rápida](#demonstração-rápida)
3. [Arquitetura e arquivos principais](#arquitetura-e-arquivos-principais)
4. [Como usar localmente](#como-usar-localmente)
5. [Personalização de estilo](#personalização-de-estilo)
6. [Acessibilidade e Internacionalização](#acessibilidade-e-internacionalização)
7. [Contribuição](#contribuição)
8. [Licença](#licença)

---

## Visão geral 👀

O `advice-app` é uma aplicação contendo HTML/CSS/JavaScript puro que consome a API pública Advice Slip (https://api.adviceslip.com). A interface é pensada para ser simples e visualmente atraente: temos um bloco central com um botão que gera novos conselhos, um botão para copiar o conselho, e um botão para exibir o texto original em inglês.

Recursos principais:
- Busca por um conselho aleatório da API
- Tradução usando MyMemory (opcional, via fetch)
- Botão para copiar conselho (Clipboard API)
- Exibição do texto original
- Estilização moderna com gradientes, sombras e animações

## Demonstração rápida ▶️

- Ao abrir `index.html`, o app busca um conselho automaticamente.
- Clique em `Gerar conselho` para obter outro conselho.
- Clique no ícone `📋` para copiar o texto (necessário HTTPS/localhost para funcionamento de clipboard em alguns navegadores).
- Clique no ícone `🔁` para alternar entre tradução e texto original.

---

## Arquitetura e arquivos principais 🗂️

- `index.html` — Estrutura da página, importação de `style.css` e `app.js`.
- `style.css` — Todas as regras de estilo; contém variáveis de tema (`:root`) e classes como `.card`, `.advice-quote`, `.credits` e `.footer`.
- `app.js` — Lógica: busca os conselhos, faz a tradução, controla a UI e o clipboard.

## Como usar localmente 🖥️

1. Clone este repositório:

```bash
git clone https://github.com/Felipe-Alcantara/advice-app.git
cd advice-app
```

2. Abra `index.html` no navegador — é um app estático, então você pode abrir o arquivo diretamente. Para recursos que exigem HTTPS/clipboard, use um servidor local (p.ex., `http-server` do npm ou o servidor embutido do VS Code):

Windows (cmd.exe):
```
npx http-server -c-1
```
ou com Python 3:
```
python -m http.server
```

3. Teste os botões: `Gerar conselho`, `Copiar` e `Mostrar original`.

---

## Personalização de estilo 🎨

As cores e variáveis estão definidas em `:root` dentro de `style.css`:

- `--accent`: cor de destaque (rosa) — usada em botões e links
- `--accent-2`: cor secundária para hover

Exemplo: trocar o `--accent` por `#ffd34e` deixará os links e destaques amarelos para alto contraste.

Se quiser mudar apenas os créditos e nomes dos devs, procure por `.credits a` e `.footer a`.

### Sugestões rápidas para contraste
- Para maior contraste: usar `#ffd34e` ou `#ffffff` em vez de cores suaves.
- Lembre-se de alterar `text-shadow` ou `font-weight` para manter legibilidade dependendo do fundo.

---

## Acessibilidade e Internacionalização ♿🌍

- O HTML já define `lang="pt-br"` para que hifenização e leitores de tela utilizem a linguagem correta.
- Para melhor compatibilidade com leitores de tela, adicione `aria-live="polite"` no elemento de texto do conselho, se desejar avisar automaticamente a mudança do texto.

---

## Contribuição 🤝

Contribuições são bem-vindas — abra issues ou PRs para correções, novas funcionalidades ou melhorias de acessibilidade.

### Boas práticas ao contribuir
- Abra uma issue primeiro para descrever o que pretende alterar.
- Mantenha o código simples e documentado.
- Teste em mobile e desktop.

---

## Créditos e Licença

Créditos:
- Dados: Advice Slip API — https://api.adviceslip.com
- Tradução (opcional): MyMemory — https://api.mymemory.translated.net

Licença: MIT — sinta-se livre para usar e adaptar este projeto.

---

Se quiser, eu adiciono badges (como CI, NPM, licença) no topo — quer que eu inclua badges de licença e idioma?


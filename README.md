# JoviStudy — Sprint 4

Landing Page da solução **JoviSmartCam / JoviStudy**, evoluída do protótipo original para **React + Vite** e, na Sprint 4, estilizada com **Tailwind CSS** e com rotas públicas e privadas.

## Acesse a aplicação

Você pode testar a versão publicada diretamente no navegador:

**[Abrir JoviStudy na Vercel](https://sprint4-front-fiap.vercel.app/)**

**[Abrir repositório no github](https://github.com/GuilhermeNasciment0/Sprint4-Front)**

## Requisitos atendidos

- React com componentes funcionais e estrutura pai → filho.
- Rotas públicas e privadas com React Router (rota `/painel` protegida por login).
- Hook customizado `useAuth` e Context API para o controle de autenticação.
- HTML semântico (`header`, `nav`, `main`, `section`, `article`, `figure`, `form`, `footer`).
- Tailwind CSS (v4) na estilização de todo o projeto, com tokens de cor/tipografia definidos em `src/index.css`.
- CSS Grid aplicado às áreas principais (utilitários `grid` / `grid-cols-*` do Tailwind).
- Responsividade para Desktop, Tablet e Mobile (breakpoints `md:` e `lg:` do Tailwind).
- Imagens e identidade visual do protótipo original preservadas.
- `localStorage` no formulário para persistir os feedbacks no navegador.
- `Math.random()` utilizado para gerar um código de sessão da demonstração.
- Navegação interna pelas seções: Solução, Público-Alvo, Galeria, Equipe e Contato.
- Deploy na Vercel com Git.

## Tecnologias

React, JavaScript (JSX), Vite, Tailwind CSS v4 (`@tailwindcss/vite`), React Router (`react-router-dom`), HTML5, CSS Grid e localStorage.

## Rotas

| Rota | Tipo | Descrição |
|---|---|---|
| `/` | Pública | Landing page |
| `/login` | Pública | Tela de login |
| `/painel` | Privada | Lista os feedbacks enviados pelo formulário (exige login) |
| `*` | Pública | Página 404 |

## Usuário e senha para teste

A autenticação é uma simulação feita no front-end (a sessão fica salva no `localStorage`):

- E-mail: `admin@jovistudy.com`
- Senha: `jovi123`

## Requisitos para instalação

Antes de começar, instale o [Node.js](https://nodejs.org/) versão 18 ou superior. O npm é instalado junto com o Node.js.

Para conferir se as ferramentas estão disponíveis:

```bash
node --version
npm --version
```

## Como instalar

Clone o repositório e entre na pasta do projeto:

```bash
git clone https://github.com/GuilhermeNasciment0/Sprint4-Front
cd Sprint4-Front
```

Instale as dependências do projeto:

```bash
npm install
```

## Como executar em desenvolvimento

```bash
npm run dev
```

Depois, abra no navegador o endereço informado pelo Vite, normalmente `http://localhost:5173`.

O servidor de desenvolvimento atualiza a página automaticamente após alterações nos arquivos.

Para interromper o servidor local, pressione `Ctrl + C` no terminal.

## Como testar a aplicação

Com o servidor em execução, verifique no navegador:

- A navegação entre as seções Solução, Público-Alvo, Galeria, Equipe e Contato, inclusive a partir de outras páginas (por exemplo, clicar em "Galeria" estando em `/login`).
- O comportamento responsivo em desktop, tablet e mobile.
- A geração do código de sessão exibido na demonstração.
- O envio do formulário de contato.
- A persistência dos feedbacks no `localStorage` após atualizar a página.
- O acesso a `/painel` sem login (deve redirecionar para `/login`) e, após entrar com o usuário de teste, a listagem e a exclusão de feedbacks.
- O botão **Sair** e a página 404 ao acessar um endereço inexistente.
- O carregamento das imagens e dos elementos da galeria.

## Como validar a versão de produção

Gere os arquivos otimizados de produção:

```bash
npm run build
```

Se o build for concluído sem erros, execute uma prévia local da versão de produção:

```bash
npm run preview
```

Abra o endereço informado pelo Vite, geralmente `http://localhost:4173`, e repita os testes principais da aplicação.

## IA no projeto

A IA foi utilizada para correção de erros na conversão do CSS tradicional para classes utilitárias do Tailwind CSS e na implementação das rotas públicas e privadas com React Router.

## Integrantes

- Eduardo Menzel — RM 570405
- Guilherme de Sousa Caiano — RM 570491
- Guilherme Nascimento dos Santos — RM 572539
- Luís Carlos — RM 569214
- Victor da Silva Souto — RM 571093

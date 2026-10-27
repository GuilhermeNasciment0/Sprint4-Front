# JoviStudy — Sprint 3

Landing Page da solução **JoviSmartCam / JoviStudy**, evoluída do protótipo original para **React + Vite**.

## Acesse a aplicação

Você pode testar a versão publicada diretamente no navegador:

**[Abrir JoviStudy na Vercel](http://sprint3-web-development-bj90ec3gn-a-b09b.vercel.app/)**

**[Abrir repositório no github](https://github.com/Fiap-Souga/sprint3---web-development#ia-no-projeto)**

## Requisitos atendidos

- React com componentes funcionais e estrutura pai → filho.
- HTML semântico (`header`, `nav`, `main`, `section`, `article`, `figure`, `form`, `footer`).
- CSS Grid aplicado às áreas principais.
- Responsividade para Desktop, Tablet e Mobile.
- Imagens e identidade visual do protótipo original preservadas.
- `localStorage` no formulário para persistir os feedbacks no navegador.
- `Math.random()` utilizado para gerar um código de sessão da demonstração.
- Navegação interna pelas seções: Solução, Público-Alvo, Galeria, Equipe e Contato.

## Tecnologias

React, JavaScript (JSX), Vite, HTML5, CSS3, CSS Grid e localStorage.

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
git clone https://github.com/Fiap-Souga/sprint3---web-development.git
cd JoviStudy-Sprint3-React
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

- A navegação entre as seções Solução, Público-Alvo, Galeria, Equipe e Contato.
- O comportamento responsivo em desktop, tablet e mobile.
- A geração do código de sessão exibido na demonstração.
- O envio do formulário de contato.
- A persistência dos feedbacks no `localStorage` após atualizar a página.
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

A IA foi utilizada como apoio ao desenvolvimento e à organização da migração do protótipo para React, auxiliando na estruturação dos componentes, revisão de código e implementação de funcionalidades. A proposta visual e o conteúdo da solução são baseados no projeto da equipe.

## Integrantes

- Eduardo Menzel — RM 570405
- Guilherme de Sousa Caiano — RM 570491
- Guilherme Nascimento dos Santos — RM 572539
- Luís Carlos — RM 569214
- Victor da Silva Souto — RM 571093

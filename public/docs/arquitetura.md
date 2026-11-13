# Arquitetura do Projeto

O projeto **Mingo - Dominando o Inglês com Tecnologia** está estruturado da seguinte forma:

```text
mingo/
│
├── public/
│   └── docs/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── data/
│   │   │   └── perguntas.ts
│   │   ├── app.config.ts
│   │   ├── app.css
│   │   ├── app.html
│   │   ├── app.routes.ts
│   │   ├── app.spec.ts
│   │   └── app.ts
│   │
│   ├── index.html
│   ├── main.ts
│   └── styles.css
│
├── angular.json
├── package.json
└── README.md
```

## Organização das pastas

**src/**

Diretório principal do código-fonte da aplicação, onde estão localizados os componentes, dados e arquivos responsáveis pelo funcionamento do sistema.

**app/**

Diretório central da aplicação Angular. Reúne os componentes, dados e configurações principais do projeto.

**components/**

Pasta destinada à criação e organização dos componentes utilizados na interface. Cada componente pode representar um elemento visual independente e reutilizável, como Header, Footer, Carrossel e Cards.

**data/**

Pasta responsável por armazenar dados utilizados pela aplicação, como perguntas, alternativas e conteúdos relacionados às atividades de aprendizado.

**public/**

Diretório destinado a arquivos estáticos disponibilizados pela aplicação, como imagens, ícones e outros recursos que não precisam passar pelo processamento do Angular.

**public/docs/**

Diretório destinado aos documentos estáticos do projeto.

## Arquivos principais

**app.ts:** componente principal da aplicação, responsável pela estrutura e lógica da tela inicial.

**app.html:** arquivo HTML que define a estrutura visual do componente principal.

**app.css:** arquivo CSS destinado à estilização do componente principal.

**app.config.ts:** responsável pelas configurações globais e provedores da aplicação.

**app.routes.ts:** responsável pela definição das rotas e navegação entre as páginas.

**app.spec.ts:** arquivo destinado aos testes automatizados do componente principal.

**main.ts:** ponto de entrada da aplicação, responsável por inicializar o Angular.

**index.html:** documento HTML principal carregado pelo navegador.

**styles.css:** arquivo destinado aos estilos globais da aplicação.
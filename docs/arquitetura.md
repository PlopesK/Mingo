# Arquitetura do Projeto

## 1. Visão geral

O **Mingo – Dominando o Inglês com Tecnologia** é uma aplicação web voltada ao aprendizado da língua inglesa, desenvolvida com uma interface interativa e elementos de gamificação.

O projeto busca oferecer uma experiência de aprendizado simples e intuitiva, permitindo que os usuários pratiquem seus conhecimentos por meio de quizzes organizados em diferentes níveis de dificuldade.

A aplicação utiliza a arquitetura baseada em componentes Standalone do Angular, favorecendo a reutilização de código, a organização dos arquivos e a facilidade de manutenção.

## 2. Organização das pastas

A estrutura do projeto é organizada para separar componentes visuais, páginas, dados e configurações da aplicação.

```text
Mingo/
│
├── docs/
│   ├── arquitetura.md
│   └── creditos.md
│
├── public/
│   └── assets/
│       └── img/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   ├── footer/
│   │   │   └── quiz/
│   │   │
│   │   ├── data/
│   │   │   ├── perguntas.ts
│   │   │   └── resultados.ts
│   │   │
│   │   ├── pages/
│   │   │   ├── challenge/
│   │   │   │   ├── historico/
│   │   │   │   └── hub/   
│   │   │   │       └── levelSelect/                    
│   │   │   │           ├── easy/
│   │   │   │           ├── medium/
│   │   │   │           └── hard/
│   │   │   │
│   │   │   ├── info/
│   │   │   │   ├── termos/
│   │   │   │   └── privacidade/
│   │   │   │
│   │   │   └── home/
│   │   │
│   │   ├── app.ts
│   │   ├── app.html
│   │   ├── app.css
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   │
│   ├── index.html
│   ├── main.ts
│   └── styles.css
│
└── ...
```

*Observação: a estrutura acima representa a organização arquitetural do projeto. Os nomes e diretórios devem acompanhar os arquivos efetivamente existentes no repositório.*

### 2.1. Diretório `src/`

Diretório principal do código-fonte da aplicação. Contém os arquivos responsáveis pela implementação, configuração e funcionamento do sistema.

### 2.2. Diretório `app/`

Diretório central da aplicação Angular. Reúne os componentes, páginas, dados e configurações que compõem o Mingo.

#### `app/components/`

Armazena os componentes reutilizáveis da interface. Cada componente possui uma responsabilidade específica, permitindo que elementos sejam utilizados em diferentes partes da aplicação.

Principais componentes:

- **Header:** cabeçalho e navegação principal do site.
- **Footer:** rodapé com informações e links institucionais.
- **Quiz:** componente responsável pela execução das atividades, apresentação das perguntas, seleção de respostas e finalização das partidas.

O componente Quiz é compartilhado entre os três níveis de dificuldade, evitando a necessidade de implementar uma estrutura independente para cada modalidade.

#### `app/data/`

Responsável por armazenar e organizar os dados utilizados pela aplicação.

Principais arquivos:

- **perguntas.ts:** define a estrutura das perguntas, alternativas, respostas corretas e explicações. Também contém os bancos de questões separados por nível de dificuldade e a função responsável pelo sorteio aleatório.
- **resultados.ts:** define a estrutura dos resultados das partidas e disponibiliza funções para salvar, consultar e excluir o histórico armazenado no navegador.

A separação dos dados da lógica dos componentes facilita a manutenção e a expansão do conteúdo educacional.

#### `app/pages/`

Diretório destinado às páginas da aplicação. Cada página representa uma área específica do sistema e pode ser acessada por meio do Angular Router.

**`pages/hub/`**

Responsável por organizar as páginas relacionadas aos níveis de dificuldade disponíveis no Mingo.

- **easy/:** atividades de nível básico.
- **medium/:** atividades de nível intermediário.
- **hard/:** atividades de nível avançado.

Cada página fornece ao componente Quiz o banco de perguntas correspondente à dificuldade selecionada.

**`pages/historico/`**

Responsável por apresentar o histórico de partidas realizadas pelo usuário.

Disponibiliza informações como quantidade de partidas, acertos, aproveitamento e evolução do desempenho.

**`pages/termos/`**

Contém a página com os Termos de Serviço, apresentando as condições de utilização da plataforma.

**`pages/privacidade/`**

Contém a Política de Privacidade, explicando as práticas de armazenamento e tratamento de dados utilizadas pelo projeto.

**`pages/home/`**

Representa a página inicial da aplicação, responsável por apresentar o Mingo, suas funcionalidades e os principais caminhos de navegação.

### 2.3. Diretório `public/`

Armazena arquivos estáticos disponibilizados diretamente pela aplicação, como imagens, ícones e outros recursos visuais.

Os arquivos podem ser organizados em subdiretórios para facilitar sua localização.

Exemplo:

```text
public/
└── assets/
    └── img/
        ├── logo/
        ├── mascot/
        ├── backgrounds/
        └── illustrations/
```

Os recursos são referenciados nos componentes utilizando caminhos a partir da raiz, como `/assets/img/`.

### 2.4. Diretório `docs/`

Destinado à documentação do projeto, incluindo informações sobre arquitetura, funcionamento e decisões técnicas.

O arquivo `arquitetura.md` centraliza a descrição da organização interna da aplicação.

---

## 3. Arquivos principais

Os arquivos localizados diretamente em `app/` e `src/` possuem responsabilidades específicas dentro da aplicação.

| Arquivo | Responsabilidade |
|---|---|
| `app.ts` | Componente raiz da aplicação, responsável pela estrutura geral e integração dos elementos globais. |
| `app.html` | Define a estrutura visual principal, incluindo Header, Router Outlet e Footer. |
| `app.css` | Contém os estilos específicos do componente raiz. |
| `app.config.ts` | Centraliza as configurações da aplicação e os provedores utilizados pelo Angular. |
| `app.routes.ts` | Define as rotas disponíveis e associa os caminhos às respectivas páginas. |
| `main.ts` | Ponto de entrada responsável por inicializar a aplicação Angular. |
| `index.html` | Documento HTML principal carregado pelo navegador. |
| `styles.css` | Arquivo destinado aos estilos globais da aplicação. |

### 3.1. Estrutura principal da aplicação

O arquivo `app.html` mantém os elementos compartilhados entre as páginas:

```html
<app-header />

<router-outlet />

<app-footer />
```

O `router-outlet` funciona como espaço de renderização das páginas selecionadas pelo sistema de rotas.

Dessa forma, o cabeçalho e o rodapé permanecem presentes durante a navegação, enquanto o conteúdo central é atualizado conforme a rota acessada.

---

## 4. Tecnologias utilizadas

O desenvolvimento do Mingo utiliza as seguintes tecnologias:

| Tecnologia | Finalidade |
|---|---|
| Angular | Framework principal para desenvolvimento da aplicação. |
| TypeScript | Implementação da lógica e definição dos tipos de dados. |
| HTML5 | Estruturação das páginas e componentes. |
| CSS3 | Estilização, responsividade e efeitos visuais. |
| Angular Router | Gerenciamento da navegação entre páginas. |
| LocalStorage | Armazenamento local do histórico de partidas. |

## 5. Arquitetura baseada em componentes

O Mingo utiliza a arquitetura de componentes Standalone do Angular.

Nesse modelo, cada componente pode declarar diretamente suas próprias dependências, sem precisar ser registrado em um NgModule.

Essa abordagem permite maior modularidade e facilita a organização do código.

Os componentes possuem arquivos separados para lógica, estrutura HTML e estilização:

- `.ts`: contém a lógica e os comportamentos do componente.
- `.html`: define a estrutura da interface.
- `.css`: concentra os estilos específicos do componente.

A reutilização de componentes é aplicada principalmente no sistema de quizzes, em que uma única implementação atende aos diferentes níveis de dificuldade.

## 6. Funcionamento do sistema de quizzes

O sistema de atividades é dividido em três níveis de dificuldade:

- **Fácil:** questões introdutórias, vocabulário básico e estruturas simples.
- **Médio:** questões de vocabulário e estruturas gramaticais intermediárias.
- **Difícil:** questões com estruturas gramaticais mais avançadas e vocabulário complexo.

Cada nível possui seu próprio banco de perguntas, definido em `perguntas.ts`.

Ao acessar uma modalidade, a respectiva página fornece os dados necessários ao componente Quiz por meio de propriedades de entrada (`@Input()`).

O componente é responsável por:

1. Receber o banco de perguntas e a quantidade de questões.
2. Selecionar aleatoriamente as perguntas da partida.
3. Apresentar as questões e suas alternativas.
4. Registrar as respostas selecionadas.
5. Calcular a quantidade de acertos e o percentual de aproveitamento.
6. Finalizar a partida e disponibilizar o resultado para armazenamento.

Essa organização permite adicionar novos níveis ou modificar os bancos de perguntas sem precisar reconstruir a lógica principal do quiz.

## 7. Armazenamento de dados

O Mingo utiliza o `localStorage` do navegador para armazenar o histórico de partidas.

Os resultados são registrados após a conclusão de cada quiz e incluem informações como:

- Nível de dificuldade.
- Quantidade de acertos.
- Quantidade total de questões.
- Percentual de aproveitamento.
- Data e horário da realização.

O arquivo `resultados.ts` centraliza as operações relacionadas a esses dados.

As principais operações são:

- **Salvar:** registra um novo resultado no histórico.
- **Consultar:** recupera os resultados anteriormente armazenados.
- **Excluir:** remove o histórico salvo no navegador.

Como o armazenamento é local, os dados permanecem disponíveis no mesmo navegador e dispositivo, enquanto não forem apagados pelo usuário ou pelo próprio navegador.

O projeto não exige autenticação ou criação de contas para utilizar essa funcionalidade.

## 8. Navegação e gerenciamento de rotas

A navegação entre as páginas é realizada por meio do Angular Router.

O arquivo `app.routes.ts` define os caminhos disponíveis e os componentes responsáveis por cada página.

Exemplos de rotas:

| Rota | Página |
|---|---|
| `/` | Página inicial |
| `/hub` | Seleção de dificuldade |
| `/hub/easy` | Quiz fácil |
| `/hub/medium` | Quiz médio |
| `/hub/hard` | Quiz difícil |
| `/historico` | Histórico de partidas |
| `/termos` | Termos de Serviço |
| `/privacidade` | Política de Privacidade |

A navegação entre páginas pode ser realizada utilizando a diretiva `RouterLink`.

Além disso, a aplicação utiliza configurações de rolagem do Angular Router para melhorar a navegação entre páginas e seções.

---

## 9. Estilização e identidade visual

A identidade visual do Mingo busca transmitir uma experiência amigável, descontraída e intuitiva.

A estilização é dividida em duas categorias:

**Estilos globais**

Definidos em `styles.css`, são responsáveis pelas configurações visuais compartilhadas entre diferentes páginas e componentes.

**Estilos específicos**

Definidos nos arquivos CSS de cada componente ou página, controlam elementos visuais particulares.

O projeto também utiliza recursos visuais estáticos armazenados em `public/assets/`, permitindo a reutilização de imagens e ilustrações em diferentes partes da aplicação.

As páginas de quiz podem apresentar variações visuais conforme o nível de dificuldade selecionado.

---

## 10. Privacidade e tratamento de dados

O Mingo foi desenvolvido para permitir a utilização das atividades sem a necessidade de cadastro ou autenticação.

O histórico de resultados é armazenado localmente no navegador, sem exigir um banco de dados externo para essa funcionalidade.

O projeto também prevê a utilização de formulários externos, como o Google Forms, para receber opiniões e sugestões dos usuários.

As informações relacionadas ao armazenamento e ao tratamento de dados são detalhadas na Política de Privacidade da aplicação.

---

## 11. Considerações sobre a arquitetura

A arquitetura do Mingo foi organizada com foco em modularidade, reutilização e facilidade de manutenção.

A separação entre componentes, páginas e dados permite que novas funcionalidades sejam implementadas sem comprometer a organização existente.

A utilização de componentes Standalone e do Angular Router simplifica a estrutura da aplicação, enquanto o armazenamento local permite manter funcionalidades básicas, como o histórico de partidas, sem depender inicialmente de uma infraestrutura de backend.

A estrutura também possibilita futuras expansões, como novos níveis de dificuldade, novas modalidades de exercícios e funcionalidades adicionais de acompanhamento do aprendizado.
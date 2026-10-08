# Giuseppe Lanna

**Engenheiro Full Stack Sênior | Especialista em React, Node, PostgreSQL, AWS**

São Paulo/SP, Brasil

E-mail: [giuseppe.2000@live.com](mailto:giuseppe.2000@live.com)

GitHub: [http://github.com/king-witcher](http://github.com/king-witcher)

LinkedIn: [http://linkedin.com/in/giuseppe-lanna](http://linkedin.com/in/giuseppe-lanna)

---

## Resumo

Sou Engenheiro Full Stack Sênior, formado em Sistemas de Informação pela **Universidade de São Paulo (USP)**, com ~5 anos de experiência em startups desenvolvendo aplicações full stack. Ultimamente tenho focado em integrar IA em software, com chat completions, embeddings e RAG. Hoje lidero a engenharia do **Orchestra**, um LMS multi-tenant com **mais de 2.500 usuários**. Amo Computação e resolver problemas complexos com ela desde pequeno.

## Habilidades

- **Fundamentos:** Base sólida em algoritmos, estruturas de dados, notação big-O, design patterns, TDD e atenção a princípios de clean code como SOLID, DRY, KISS e YAGNI.
- **Frontend:** Bastante experiência com **React**, TanStack Query/Router, Redux Toolkit, Zustand, Apollo Client, Tailwind CSS, Radix UI, shadcn/ui, Three.js
- **Backend & Dados:** Node.js (NestJS e Express), PostgreSQL, Redis, WebSockets (Socket.io), RabbitMQ, Keycloak (SSO/OIDC)
- **IA / LLM:** tool calling, structured outputs, embeddings e RAG com pgvector
- **Cloud & Ferramentas:** AWS (IAM, ECS, EC2, RDS, S3, CloudFront), Docker, GitHub Actions
- **Testes & Observabilidade:** Vitest, Ladle, Sentry, PostHog
- **Extra:** Apaixonado por Rust e por renderização 3D (OpenGL, Vulkan, ThreeJS, SDL3…)

## Idiomas

- **Português** - Nativo
- **Inglês** - Avançado (C1)

<div class='page-break'></div>

## Experiência

### Engenheiro Full Stack Sênior @ Indigo Hive
*ago 2025 – atual*

- Integrei APIs de IA - como a da OpenAI - em uma engine de chatbots com tool calling, embeddings e RAG usando pgvector e índices HNSW para gerenciar o contexto.
- Fiz code review e mentoria de desenvolvedores juniores.
- Automatizei e otimizei pipelines de mineração de dados com volumes bem desafiadores, usando Structured Outputs. Otimizei o paralelismo das requisições e a ocupação das "threads", tratando backpressure com uma biblioteca própria inspirada em Golang.
- Desenvolvi um [**editor visual de WhatsApp Flows**](https://messenger.cogfy.com/editor) em React, que permite à empresa entregar chatbots baseados em formulários para os clientes sem precisar de código customizado.
- Liderei o desenvolvimento do Orchestra - um LMS com recursos de IA. Usamos Claude Code para programar e as APIs da Anthropic e do Google Gen AI nas integrações, e chegamos a mais de 2.500 usuários.
- Levei observabilidade para o Orchestra com Sentry (rastreamento de erros e logs, session replays, feedback dos usuários) e eventos no PostHog para acompanhar de perto como os usuários usam o app. Isso reduziu em **~70% o tempo de correção de bugs**, facilitou o debug e nos permitiu tomar decisões mais estratégicas sobre o que priorizar no produto.

---

### Engenheiro Frontend Sênior @ Grupo Protege
*mar 2025 – ago 2025*

- Liderei o frontend (**Next.js**) de um sistema interno que controla a movimentação de dinheiro entre as unidades da empresa.
- Reduzi o **INP em 50%** e automatizei processos manuais, diminuindo o custo operacional e reduzindo os erros de auditoria de **~2% para zero**, o que gerou mais de R$ 200 mil/ano de economia.

---

### Engenheiro de Software @ Orium
*mar 2024 – fev 2025*

- Liderei o frontend do Orium Network, um marketplace de aluguel de NFTs (**Next.js**, React, Wagmi); refatorei o fluxo de adição de coleções, o que reduziu o tempo para adicionar uma coleção nova de um dia para alguns minutos.
- Integrei o app React com smart contracts na **Polygon** e na **Moonbeam** via Wagmi e mantive a UI sincronizada com as atualizações dos contratos em Solidity.
- Aprendi **Rust** em duas semanas para fazer um fork do indexador open source **graph-node** e liderei uma estratégia própria de indexação de blockchain: uma versão funcionando em dois meses, com **sincronização 9x mais rápida**, e ainda um [PR de correção de bug mergeado](https://github.com/graphprotocol/graph-node/pull/5755) no repositório original.

---

### Engenheiro Full Stack @ Lab1001
*set 2023 – mar 2024*

- Construí um MVP (**Next.js**, **Firebase**) que reunia conteúdo de criadores do YouTube e da Twitch em um só lugar; entregamos em ~2 meses com um time de duas pessoas, e depois liderei mais cinco meses de evolução do produto.

---

### Engenheiro Frontend 3D @ R2U
*set 2022 – ago 2023*

- Mantive e melhorei um visualizador de modelos 3D em **Three.js** e seu SDK no npm — diagnostiquei e corrigi memory leaks e adicionei suporte a animações GLTF.
- Integrei o SDK de realidade aumentada nos sites dos clientes, permitindo que os consumidores vissem os produtos em casa via QR code, com uma **taxa de interação de ~90%**.
- Construí o **Socialgen.ai**, um gerador de conteúdo para redes sociais com OpenAI que virou um dos principais produtos da empresa.
- Entreguei apps React sob medida para clientes, como o [GE HealthCare Immersive Demo](https://gehc-immersive-demo.netlify.app/) e o [Reserva DApp](https://spriznft.usereserva.com/) (Next.js, i18n).

---

### Engenheiro Full Stack @ Vivalisto
*mar 2022 – ago 2022*

- Desenvolvi e mantive aplicações web (**React**, **Express**, **MongoDB**, **MySQL**); automatizei a geração de contratos em PDF personalizados para cada cliente (**mais de 1.400 documentos** em 2 meses) e deixei o app cerca de **3x** mais responsivo reescrevendo queries e criando os índices certos.

<div class='page-break'></div>

## Projetos Pessoais

- **GL-Tech - engine gráfica em tempo real** *(em andamento)* - uma engine de renderização que vivo reconstruindo para me aprofundar em programação de sistemas de baixo nível: várias versões em **C++, Rust e C#**, usando **OpenGL, Vulkan e SDL3**, com arquitetura em camadas separando engine e jogo, renderização multithread e alguns renderizadores de ray casting feitos do zero. Tudo no [GitHub](http://github.com/king-witcher).
- **[Magic3T](http://www.magic3t.com.br)** - um jogo de matemática por turnos (Jogo da Velha × quadrados mágicos) feito com React, NestJS, Firebase e PostgreSQL; é meu playground para testar ferramentas e arquiteturas novas. Repositórios: [Magic3T](https://github.com/King-witcher/Magic3T), [Magic3T-Firebase](https://github.com/King-witcher/Magic3T-Firebase).

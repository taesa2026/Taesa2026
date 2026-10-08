# Plano de implementação — FrotaControl

## Escopo aprovado
Aplicativo web responsivo de gestão de frotas para pequenas empresas, com dashboard operacional, cadastro de veículos, histórico de manutenções, diário de viagens do motorista, fotos do painel e relatórios Master por veículo. O frontend usa React/Vite e Tailwind CSS; veículos, manutenções, viagens e fotos são persistidos no Supabase (Postgres + Storage), sem usar `localStorage` para dados de negócio. A entrada começa por uma tela de login local com os perfis Master e Motorista; o Master possui todas as funcionalidades e o Motorista registra suas viagens e consulta apenas sua operação.

## Direção de produto e design

- **Movimento visual:** editorial operacional contemporâneo, combinando uma base de painel SaaS com sinais visuais de logística e mobilidade.
- **Princípios:** leitura rápida, ações diretas, contexto sempre visível e densidade controlada. O usuário deve identificar a saúde da frota em poucos segundos e abrir qualquer ação em um toque.
- **Filosofia de cor:** verde-petróleo como cor proprietária para transmitir movimento, confiança e controle; superfícies marfim reduzem a sensação de sistema frio; âmbar e coral aparecem apenas para alertas e manutenção, mantendo a hierarquia sem alarmismo.
- **Paradigma de layout:** navegação lateral escura com um canvas de trabalho claro e seções empilhadas; no celular, o mesmo sistema se reorganiza em cabeçalho compacto e barra de navegação inferior.
- **Elementos de assinatura:** cartões de KPI com pequenos acentos verticais, badges de status em formato de pílula e a linha/indicador “pulso da frota” para transformar dados em sensação de operação viva.
- **Interação:** cada ação primária fica próxima do contexto (adicionar veículo no cabeçalho, registrar manutenção na lista), edição abre em modal focado e exclusão pede confirmação nativa. Filtros e navegação não escondem o estado atual.
- **Animação:** entradas suaves de 180–240 ms, hover com elevação mínima e barras de progresso que revelam o valor; sem animações contínuas que distraiam de um painel operacional.
- **Tipografia:** Plus Jakarta Sans para títulos e Inter para dados, controles e texto corrido. Títulos fortes e compactos; números de KPI com peso alto; microcopy curta e acionável.
- **Essência da marca:** “clareza operacional para quem move o negócio” — direto, confiável e atento.
- **Voz:** prática, próxima e sem jargão. Exemplos: “Sua frota em um só olhar.” e “Registre agora para não perder o histórico depois.”
- **Marca:** wordmark “FrotaControl” com um monograma FC formado por duas linhas paralelas, sugerido visualmente pelo ícone de rota e pelos acentos verticais nos cartões.
- **Cor proprietária:** teal `#12B5A4`.

## Implementação

- **Frontend:** Vite + React + TypeScript, com `lucide-react` para ícones e Tailwind CSS para tokens e responsividade.
- **Estado:** `App.tsx` coordena a aba ativa e os eventos de domínio; componentes de visualização ficam no mesmo módulo com tipos e dados auxiliares separados. O estado inicial contém uma frota de demonstração para o painel não começar vazio.
- **Persistência:** `src/repository.ts` centraliza as operações Supabase para `vehicles`, `maintenances` e `trips`; fotos são enviadas ao bucket `trip-panels`. A sessão de demonstração continua em `frotacontrol:session`, mas as entidades da frota não usam `localStorage`.
- **Viagens:** a aba Minha viagem permite informar data, veículo/placa, horário, km inicial, foto do painel antes da saída, km final, foto após a viagem, litros abastecidos (opcional para consumo) e observações.
- **Relatórios:** a aba Master calcula por carro km rodado acumulado, consumo em km/L quando os litros são informados, abastecimento, custos de manutenção, quantidade de viagens e últimas fotos do painel.
- **Acesso:** o login local de demonstração oferece o perfil Master (gestão completa, relatórios e manutenção) e Motorista (dashboard + registro/consulta das próprias viagens); guardas de estado também impedem mutações fora do perfil autorizado.
- **PWA:** `manifest.webmanifest`, ícones SVG e `sw.js` habilitam instalação como aplicativo, cache básico do shell e abertura standalone. O domínio PWA do WebDev deve usar `application_owned`.
- **Domínio:** status dos veículos é restrito a `Disponível`, `Em Rota` e `Manutenção`. Ao excluir um veículo, suas manutenções associadas também são removidas para evitar registros órfãos.
- **Dashboard:** calcula total, em rota, disponíveis e em manutenção a partir da coleção; mostra pulso da frota, utilização, próxima manutenção/atividade recente e atalhos para as ações principais.
- **Veículos:** tabela desktop e cartões no celular, com busca por placa/modelo, filtro de status, modal de criação/edição, formatação de quilometragem e confirmação de exclusão.
- **Manutenções:** formulário com data, veículo, descrição e custo; histórico reverso-cronológico com placa/modelo, valor em BRL e exclusão protegida por confirmação.
- **Roteamento/servidor:** aplicação de página única em `/`, sem API; `public/manus-routes.json` declara a rota principal. O Vite escuta em `0.0.0.0:3000` para o Preview.
- **Estrutura:** `src/main.tsx` inicializa a aplicação; `src/App.tsx` contém shell, navegação e telas; `src/types.ts` concentra tipos; `src/data.ts` concentra sementes e acesso ao armazenamento; `src/index.css` concentra Tailwind e detalhes visuais; `public/` contém manifesto de rotas.

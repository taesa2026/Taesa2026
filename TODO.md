# Entregas — FrotaControl

- [x] **Persistência Supabase** — Veículos, manutenções, viagens e fotos devem ser salvos no Supabase Postgres/Storage em vez de usar `localStorage` para dados de negócio; o projeto deve fornecer `supabase/schema.sql` com tabelas, índices, políticas RLS e bucket de fotos.
- [x] **Diário do Motorista** — A aba do Motorista deve permitir registrar data, veículo, placa, horário de saída, quilometragem inicial e foto do painel antes de seguir viagem, e depois encerrar a viagem com quilometragem final, foto do painel após a viagem e litros abastecidos opcionais.
- [x] **Relatório Master por veículo** — A aba Master deve exibir relatório completo de cada carro com viagens, km rodado acumulado, consumo em km/L quando os litros forem informados, abastecimento, manutenção, custos e fotos do painel.
- [x] **PWA instalável** — A aplicação deve incluir manifest, ícones, service worker, metatags de instalação e configuração WebDev com manifesto próprio da aplicação.
- [x] **Login e perfis de acesso** — A aplicação deve iniciar em uma tela de login com os perfis Motorista e Master; o acesso Master deve ser o único com todas as funcionalidades de cadastro, edição, exclusão e manutenção, enquanto o Motorista deve permanecer em modo de consulta operacional.
- [x] **Dashboard inicial operacional** — A aplicação deve oferecer uma visão geral com cartões mostrando o total de veículos, veículos em rota, veículos disponíveis e veículos na oficina/manutenção, com indicadores atualizados automaticamente após as alterações.
- [x] **Cadastro e gestão de veículos** — A aplicação deve permitir adicionar, editar e excluir veículos usando os campos Placa, Modelo, Ano, Quilometragem atual e Status; o Status deve aceitar Disponível, Em Rota ou Manutenção.
- [x] **Controle de manutenções** — A aplicação deve permitir registrar manutenções realizadas contendo Data, Veículo, Descrição do serviço e Custo, e deve exibir o histórico associado aos veículos cadastrados.
- [x] **Persistência local dos dados** — Veículos e manutenções devem ser salvos no `localStorage` do navegador, sem depender de banco de dados complexo.
- [x] **Interface responsiva e navegável** — O layout deve ser limpo, moderno e responsivo, funcional no celular e no computador, usando Tailwind CSS e navegação simples por abas ou menu lateral.
- [x] **Código React modular** — O código deve ser React com Vite (ou Next.js), limpo, modular, bem comentado e organizado em componentes reutilizáveis.

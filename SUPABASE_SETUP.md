# Configuração do Supabase e PWA

## Supabase

As variáveis `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` já estão cadastradas com segurança na configuração do projeto WebDev. Para criar as tabelas, índices, políticas RLS e o bucket público das fotos:

1. Abra o projeto no Supabase.
2. Acesse **SQL Editor**.
3. Abra o arquivo `supabase/schema.sql` deste projeto.
4. Execute o script completo uma vez.
5. Recarregue o FrotaControl.

O script cria `vehicles`, `maintenances` e `trips`, além do bucket `trip-panels`. As fotos do painel são salvas em `before` e `after` dentro desse bucket. As políticas do script são permissivas porque o login Master/Motorista atual é local; para produção, substitua-as por políticas vinculadas ao Supabase Auth e `auth.uid()`.

A aplicação não usa `localStorage` para veículos, manutenções, viagens ou fotos. Apenas a sessão de demonstração do login permanece local até a adoção de autenticação real.

## Campos de viagem

O Motorista registra data, horário de saída, veículo, placa, km inicial, foto do painel antes da saída e observações. Ao finalizar, informa km final, foto do painel após a viagem e, opcionalmente, litros abastecidos. Quando os litros são informados, o Master vê o consumo em km/L.

## PWA

O projeto possui `manifest.webmanifest`, ícones, registro de `sw.js` e modo `application_owned` na configuração PWA do WebDev. Em produção, o navegador exibirá a opção de instalar o FrotaControl como aplicativo. O service worker é registrado somente na build de produção para não interferir no HMR do Preview.

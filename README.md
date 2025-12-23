README - Página Principal do MoedimEste documento descreve as tarefas (to-do list) necessárias para implementar a página principal do aplicativo Moedim.

📌 Objetivo da Página Principal

Mostrar o dia atual em hebraico e português.

Exibir um card grande com a porção semanal atual (Parashá, Haftará, Brit Chadashá).

Exibir informações do Shabbat (nome, transliteração, horários de velas e havdalá).

Botão para Adicionar lembrete no calendário nativo.

✅ To-Do List1. Estrutura básica

[ ] Criar componente HomeScreen.

[ ] Header com mês hebraico + mês gregoriano + cidade (São Paulo).

[ ] Mostrar data atual em hebraico.

2. Card da Parashá atual

[ ] Criar componente ParashaCard.

[ ] Exibir nome da Parashá em hebraico + transliteração.

[ ] Exibir referências bíblicas:

Torá

Haftará

Brit Chadashá

[ ] Estilizar card em destaque (maior que os demais).

3. Informações do Shabbat

[ ] Exibir nome do Shabbat (hebraico + transliteração).

[ ] Mostrar data gregoriana correspondente.

[ ] Mostrar horários:

Velas

Havdalá

[ ] Integrar com Hebcal para obter horários.

4. Botão "Adicionar Lembrete"

[ ] Criar botão dentro do card.

[ ] Integrar com Expo Calendar para criar evento no calendário nativo.

[ ] Configurar permissões de acesso ao calendário.

5. Estilo e identidade visual

[ ] Aplicar paleta judaica (azul, dourado, branco).

[ ] Tipografia clara e reverente.

[ ] Ícone temático (ex.: velas para Shabbat).

6. Internacionalização

[ ] Traduzir strings para pt-BR.

[ ] Exibir meses hebraicos transliterados.

[ ] Usar Intl.DateTimeFormat("pt-BR") para datas gregorianas.

🔮 Futuras melhorias (não MVP)

[ ] Histórico de Parashiot passadas.

[ ] Configuração de localização dinâmica (não apenas São Paulo).

[ ] Notificações internas com Expo Notifications.

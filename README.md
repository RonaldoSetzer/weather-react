# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Desafio Charlie

Construa um microsite responsivo para mostrar a previso do tempo nas localidades informadas na caixa de texto branca (na imagem de [exemplo](./resource/layout.jpg)  o local aonde aparece "Rio de Janeiro, Rio de Janeiro"). Essa caixa de texto deve ser um `input`, aonde o usurio pode trocar a localidade. Com a mudana da localidade, devem ser carregadas as informaes de previso do tempo referentes  nova localidade.

 Logo que a pgina seja aberta deve ser coletada as coordenadas geogrficas do usurio pela API do navegador para ento se descobrir o nome da cidade via _reverse geocode_.

Como fundo de tela deve ser usado a imagem de destaque do Bing. Devem ser mostradas as previses para: hoje, amanh e depois de amanh.

Note que existe um degrad sobreposto na imagem original, na verdade essa cor reflete a temperatura atual do lugar buscado para as trs datas. Para temperaturas abaixo de 15¼C deve ser usado tons de azul, para temperaturas acima de 35¼C deve ser usado tons de vermelho e use tons de amarelo para as demais temperaturas. Quando no houver nenhuma localidade escolhida deve ser usado tons de cinza como base para o degrad. Se o usurio clicar em qualquer temperatura, as temperaturas devem ser alteradas de Celsius para Fahrenheit ou de Fahrenheit para Celsius.

A URL da imagem de fundo deve ser extraida da [API do Bing](https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR).

Para consultar a previso do tempo, utilize a do [OpenWeather](http://api.openweathermap.org/data/2.5/weather?q={{location_name}}&APPID=7ba73e0eb8efe773ed08bfd0627f07b8) informando o nome da localidade no lugar de `{{location_name}}` usando a app id `7ba73e0eb8efe773ed08bfd0627f07b8`. Caso necessrio, crie uma nova conta.

Para converter latitude e longitude em uma localidade utilize o [OpenCage](https://api.opencagedata.com/geocode/v1/json?q={{latitude}},{{longitude}}&key=c63386b4f77e46de817bdf94f552cddf&language=en) usando a API key `c63386b4f77e46de817bdf94f552cddf`. Caso necessrio, crie uma nova conta.

Os cones podem ser encontrados em http://www.alessioatzeni.com/meteocons/.

O layout deve ser seguido, mas voc pode sugerir melhorias. Descreva essas melhorias no README e diga o por que delas. Voc ganha pontos extras se essas melhorias forem positivas, ou perde pontos do contrrio.

## Requisitos

-   Preferencialmente faa em React, mas voc pode usar outras bibliotecas ou frameworks (Angular, Vue.js, etc) ou JavaScript puro (Vanilla JS).
-   Para a folha de estilo, voc pode usar o que preferir (CSS, SASS, LESS, CSS Modules, CSS-in-JS, etc).
-   Preferencialmente use Webpack. Se preferir, voc pode usar [create-react-app](https://github.com/facebook/create-react-app) ou similares. Fazer o prprio setup do Webpack da pontos extras.
-    interessante que sua aplicao esteja pronta para produo. Criar no Docker um `stage` para produo e um para desenvolvimento da pontos extras.
-   Forkar esse desafio e criar o seu projeto (ou workspace) usando a sua verso desse repositrio, to logo acabe o desafio, submeta um _pull request_.
    -   Caso voc tenha algum motivo para no submeter um _pull request_, crie um repositrio privado no Github, faa todo desafio na branch **master** e no se esquea de preencher o arquivo `pull-request.txt`. To logo termine seu desenvolvimento, adicione como colaborador o usurio [`automator-hurb`](https://github.com/automator-hurb) no seu repositrio e o deixe disponvel por pelo menos 30 dias. **No adicione o `automator-hurb` antes do trmino do desenvolvimento.**
    -   Caso voc tenha algum problema para criar o repositrio privado, ao trmino do desafio preencha o arquivo chamado `pull-request.txt`, comprima a pasta do projeto - incluindo a pasta `.git` - e nos envie por email.
-   O cdigo precisa rodar dentro de um container Docker.
-   Para executar seu cdigo, deve ser preciso apenas rodar os seguintes comandos:
    -   git clone \$seu-fork
    -   cd \$seu-fork
    -   comando para instalar dependncias
    -   comando para executar a aplicao

## Critrio de avaliao

-   ** executado conforme esperado**: O passo-a-passo pedido para rodar a aplicao funciona?
-   **Organizao do cdigo**: Separao de mdulos e organizao do projeto (back-end e front-end).
-   **Clareza**: O README explica de forma resumida qual  o problema e como pode rodar a aplicao?
-   **Assertividade**: A aplicao est fazendo o que  esperado? Se tem algo faltando, o README explica o porqu?
-   **Legibilidade do cdigo**  fcil ler e entender o cdigo? Existem muitas variveis/funes com nome engmtico? Comentrios no cdigo ajudam a explicar o fluxo?
-   **Segurana**: Existe alguma vulnerabilidade clara?
-   **Cobertura de testes** Qualidade e cobertura dos testes (no esperamos cobertura completa).
-   **Histrico de commits** Qualidade e estrutura dos commits.
-   **UX**: A interface  de fcil uso e auto-explicativa? As rotas/mtodos da API so intuitivos?
-   **Escolhas tcnicas**: A escolha das bibliotecas, arquitetura, etc,  a melhor escolha para a aplicao?

## Dvidas

Quaisquer dvidas que voc venha a ter, consulte as [_issues_](https://github.com/HurbCom/challenge-charlie/issues) para ver se algum j no a fez e caso voc no ache sua resposta, abra voc mesmo uma nova issue!

Boa sorte e boa viagem! ;)

<p align="center">
  <img src="ca.jpg" alt="Challange accepted" />
</p>

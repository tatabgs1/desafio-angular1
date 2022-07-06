# DESAFIO DIO - Trabalhando com Páginas SPA com Angular

##1-Crie uma aplicação Angular (Não esqueça que todo código precisa estar no GitHub)
##2-Crie no mínimo 3 componentes que deverão estar interagindo na mesma página (Não esqueça das rotas)
##3-Escolha no mínimo 4 componentes do Angular Material e incorpore eles em sua aplicação.
##4-Crie em uma das páginas uma interação através da Interpolação e/ou utilizando Property Biding.
##5-Crie uma explicação sobre o que foi feito, esta explicação será inserida na plataforma junto com o link para o código no GitHub.
##6-Você poderá criar um vídeo demonstrativo da aplicação construída, e publicá-lo no YouTube, passando o link de acesso na plataforma. Este passo 6, não é obrigatório, mas entrará como um diferencial.

# Consumindo Api da Marvel Comics, fazendo um catalago dos personagens.
O intuito é criar um layout para que possa acomodar os dados da Api da Marvel (https://developer.marvel.com/).

O que a aplicação vai fazer é pesquisar na base de dados da Marvel (via API) para caracteres com base na entrada do usuário e exibirá os resultados. As tecnologias utilizadas serão:

- Angular CLI
- NodeJs
- Angular Material
- Chave pública para consumo da api Marvel

## API da Marvel
A primeira parte é conseguir a chave de API da Marvel, então vá até o Portal de desenvolvedores da Marvel, é necessário efetuar login e confirmar seus dados para obter uma chave da API.

Liste os domínios que podem fazer chamadas para a Marvel Comics API usando sua chave de API : Adicione o IP da sua máquina ou use localhost e clique em atualizar as informações.

Para a chave pública de API, você pode chamar diretamente a API em http://gateway.marvel.com/v1/public….

Por exemplo, um usuário com uma chave pública de “1234” e uma chave privada de “abcd” poderia construir uma chamada válida da seguinte maneira: http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150 (o valor de hash é o digest md5 de 1abcd1234).

## Em caso de erro com as chaves para chamar a API ou "Error 401 Unauthorized connecting with Marvel API" consulte:
https://stackoverflow.com/questions/56755603/error-401-unauthorized-connecting-with-marvel-api

Fonte de ajuda: https://medium.com/lfdev-blog/usando-angular-8-para-consumir-api-da-marvel-f95aa9e41818
------------------------------------------------------------------------------------------------------

# CatalogoMarvel

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

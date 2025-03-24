# Projeto Kanban

Este é um aplicativo de quadro Kanban desenvolvido com Electron. Ele permite que você crie listas e cartões, defina lembretes e organize suas tarefas de forma eficiente.

## Funcionalidades

- Adicionar e excluir listas
- Adicionar e excluir cartões dentro das listas
- Definir lembretes para os cartões
- Interface de usuário escura e moderna

## Pré-requisitos

- Node.js (versão 12 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Instalação

1. Clone o repositório para o seu computador:

```sh
https://github.com/wesmoura/trello-wmoura/new/main?filename=README.md
```

2. Navegue até o diretório do projeto:

```sh
cd projeto-kanban
```

3. Instale as dependências do projeto:

```sh
npm install
```

## Uso

Para iniciar a aplicação em modo de desenvolvimento, execute o seguinte comando:

```sh
npm start
```

## Empacotamento

Para empacotar a aplicação em um executável para Windows, execute o seguinte comando:

```sh
npm run package
```

O executável será gerado na pasta `dist/projeto-kanban-win32-x64`.

## Estrutura do Projeto

```
projeto-kanban/
├── node_modules/
├── src/
│   ├── index.html
│   ├── script.js
│   ├── Style.css
├── main.js
├── preload.js
├── package.json
├── package-lock.json
├── README.md
├── dist/  # Esta pasta será criada após o empacotamento
```

## Contribuição

Se você quiser contribuir para este projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

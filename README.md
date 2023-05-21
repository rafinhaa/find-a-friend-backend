<h4 align="center">
  <img src="docs/images/logo.svg" alt="Logo" />
</h4>

<h4 align="center">
    <p align="center">
      <a href="#-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-how-to-run-the-project">Run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-info">Info</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-license">License</a>
  </p>
</h4>

## 🔖 About

O Find A Friend é uma API desenvolvida para facilitar a adoção de animais. Com base nos princípios SOLID, a API permite cadastrar pets, listar animais disponíveis para adoção em uma cidade específica e filtrar pets por suas características.

Através do Find A Friend, é possível visualizar os detalhes de um pet e entrar em contato com a organização responsável pela adoção via WhatsApp. Além disso, as organizações podem se cadastrar na plataforma e realizar login como administradores.

O Find A Friend prioriza as regras de negócio, como a associação de um pet a uma organização e a obrigatoriedade de um endereço e número de WhatsApp para cadastro de uma organização. Todos os filtros, exceto a cidade, são opcionais.

- [Detalhes](docs/ABOUT.md)

## 🚀 Technologies

- [Nodejs](https://nodejs.org)
- [Typescript](https://www.typescriptlang.org/)
- [Fastify](https://www.fastify.io/)
- [Prisma](https://prisma.io/)

## 🏁 How to run the project

```sh
# Clone the repository
git clone https://github.com/rafinhaa/find-a-friend.git
cd find-a-friend

# Install the dependencies
yarn install

# Make a copy of '.env.example' to '.env'
cp .env.example .env

# Start the application
yarn run dev
```

## ℹ️ Info

### Documentação das rotas

- [Docs](docs/API.md)

## 📄 Changelog

## 📝 License

[MIT](LICENSE.txt)

**Free Software, Hell Yeah!**

module.exports = {
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "cc391618",
    database: "develop",
    define: {
      timestamp: true, // cria duas colunas: createdAt e updatedAt
      underscored: true,
      underscoredAll: true,
    },
  };

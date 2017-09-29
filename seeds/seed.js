
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movie').del()
    .then(function () {
      // Inserts seed entries
      return knex('movie').insert([
        {Title: "Schizopolis",
        Director: "Steven Soderbergh",
        Year: 1976,
        My_Rating: 4,
        url:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTc4NDQ5NjQ2MF5BMl5BanBnXkFtZTcwNzU3NDAwMQ@@._V1_UY268_CR4,0,182,268_AL_.jpg"
        },
        {
          Title: "Nashville",
          Director: "Robert Altman",
          Year: 1976,
          My_Rating: 5,
          url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTEzNDE2Mjg0MTdeQTJeQWpwZ15BbWU4MDUxNTczNzAy._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          Title: "Idiocracy",
          Director: "Mike Judge",
          Year: 2006,
          My_Rating: 5,
          url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMWQ4MzI2ZDQtYjk3MS00ODdjLTkwN2QtOTBjYzIwM2RmNzgyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
      ]);
    });
};

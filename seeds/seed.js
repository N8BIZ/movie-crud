
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
        url:"https://images-na.ssl-images-amazon.com/images/M/MV5BOTY3ODkzMDM2NF5BMl5BanBnXkFtZTgwNjI1NjIzMzI@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
        },
        {
          Title: "Nashville",
          Director: "Robert Altman",
          Year: 1976,
          My_Rating: 5,
          url: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTY3ODkzMDM2NF5BMl5BanBnXkFtZTgwNjI1NjIzMzI@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
        },
        {
          Title: "Idiocracy",
          Director: "Mike Judge",
          Year: 2006,
          My_Rating: 5,
          url: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTY3ODkzMDM2NF5BMl5BanBnXkFtZTgwNjI1NjIzMzI@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
        },
      ]);
    });
};

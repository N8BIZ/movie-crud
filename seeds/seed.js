
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
        url:"http://www.imdb.com/title/tt0117561/mediaviewer/rm2174000896"
        },
        {
          Title: "Nashville",
          Director: "Robert Altman",
          Year: 1976,
          My_Rating: 5,
          url: "http://www.imdb.com/title/tt2281375/mediaviewer/rm1467745280"
        },
        {
          Title: "Idiocracy",
          Director: "Mike Judge",
          Year: 2006,
          My_Rating: 5,
          url: "http://www.imdb.com/title/tt0387808/mediaviewer/rm1934300160"
        },
      ]);
    });
};

var express = require('express');
var router = express.Router();
var queries = require('../db/queries')

function validMovies(movies) {
  const hasTitle = typeof movies.Title == 'string' && movies.Title.trim() != '';
  const hasDirector = typeof movies.Director == 'string' && movies.Director.trim() != '';
  const hasYear = typeof movies.Year == 'number';
  const hasMy_Rating = typeof movies.My_Rating == 'number';
  const hasURL = typeof movies.url == 'string' && movies.url.trim() != '';
  return hasTitle && hasDirector && hasYear && hasMy_Rating && hasURL;
}

/* GET home page. */
router.get('/movies', (req, res) => {
  queries.getAll().then(movies =>{
    res.json(movies);
  })
});


router.get('/movies/:id', (req,res, next) => {
  queries.getOne(req.params.id).then(movies => {
    if(movies){
    res.json(movies)
  } else {
    next()
  }
  })
});

router.post('/movies', (req, res, next) => {
  if(validMovies(req.body)){
    queries.create(req.body).then(movies => {
      res.json(movies[0])
    });
    //insert into db
  } else {
    next(new Error('Invalid Movie'));
  }
});

router.put('/movies/:id', (req, res, next) => {
  if(validMovies(req.body)) {
    //update the movie
    queries.update(req.params.id, req.body).then(movies => {
      res.json(movies[0])
    })
  } else {
     next(new Error('Invalid Movie'))
  }
});

router.delete('/movies/:id', (req, res) => {
  queries.delete(req.params.id).then(() => {
    res.json({
      deleted: true
    });
  });
});

module.exports = router;

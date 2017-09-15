
console.log("Are we working?")
const movieAPI = "https://movie-crud-n8.herokuapp.com/movies"

console.log("Are we working?")
$(document).ready(function(){
  $.get(movieAPI)
  console.log(movieAPI)
    // .then(showmovies)
})

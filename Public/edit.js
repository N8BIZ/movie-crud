const movieAPI = "https://movie-crud-n8.herokuapp.com/movies"

$(() => {
  const parsedParts = window.location.search.split('=')
  const id = parsedParts[1];

  $.get(`${movieAPI}/${id}`)
    .then(edit => {
      $('#img').attr('src', edit.url);
      $('#url').val(edit.url);
      $('#title').val(edit.Title);
      $('#director').val(edit.Director);
      $('#year').val(edit.Year);
      $('#myrating').val(edit.My_Rating);
      $('#editButton').attr('href', `home.html?id=${edit.id}`)
})
})

const movieAPII = "https://movie-crud-n8.herokuapp.com/movies"

$(() => {
  const parsedParts = window.location.search.split('=')
  const id = parsedParts[1];

  $.get(`${movieAPII}/${id}`)
    .then(edit => {
      $('#img').attr('src', edit.url);
      $('#url').val(edit.url);
      $('#title').val(edit.Title);
      $('#director').val(edit.Director);
      $('#year').val(edit.Year);
      $('#myrating').val(edit.My_Rating);
      $('#editButton').attr('href', `home.html?id=${edit.id}`)

      $('#editButton').click((event) => {
        event.preventDefault();
          $.ajax({
            type: 'PUT',
            dataType: 'json',
            url: `${movieAPII}/${id}`,
            data: {
              url: $('#url').val(),
              Title: $('#title').val(),
              Director: $('#director').val(),
              Year: $('#year').val(),
              My_Rating: $('#myrating').val()
            },
        }).then(result => {
          window.location = `home.html?id=${id}`;
        });
      });
    });
});

const movieAPII = "https://movie-crud-n8.herokuapp.com/movies"


  $.get(movieAPII)
    .then(edit => {
      $('#addMovie').attr('href', `home.html`)

  $('#addMovie').click((event) => {
  event.preventDefault();
    $.post({
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
    window.location = `home.html`;
  })
  })
});

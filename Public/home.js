
console.log("Are we working?")
const movieAPI = "https://movie-crud-n8.herokuapp.com/movies"

console.log("Are we working?")
$(document).ready(function(){
  $.get(movieAPI)
    .then(showMovies)
});

var $itemsTable;

function showMovies(data) {
  data.forEach(function(table) {
    $itemsTable = $(`<tr>
    <td align="center">${table.id}</td>
    <td align="center">${table.Title}</td>
    <td align="center">${table.Director}</td>
    <td align="center">${table.Year}</td>
    <td align="center">${table.My_Rating}</td>
    <td><button data-id="${table.id}" class="delete-button">Delete</button></td>
    <td><button data-id="${table.id}" class="edit-button">Edit</button></td>
    </tr>`);

    $itemsTable.attr('data-id', table.id)
    $itemsTable.attr('data-Title', table.Title)
    $itemsTable.attr('data-Director', table.Director)
    $itemsTable.attr('data-Year', table.Year)
    $itemsTable.attr('data-My_Rating', table.My_Rating)
    $('#items_table').append($itemsTable)
  })
}

  $(document).on("click", '.delete-button', deleteEntry)
  $(document).on("click", '.edit-button', editEntry)

  function deleteEntry(event) {
    const id = event.target.dataset.id;
  $.ajax({
    type: 'DELETE',
    dataType: 'json',
    url: `${movieAPI}/${id}`
  }).then(result => {
    window.location = `home.html?id=${id}`;
  });
}

function editEntry(event) {
  const id = event.target.dataset.id;
  window.location = `edit.html?id=${id}`;
};

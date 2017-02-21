let tasks = ['eat some breakfast', 'go to the movies', 'watch some tv']

$(document).ready(function() {
  lineThroughToggle();
});

function lineThroughToggle() {
  $( "li" ).click(function() {
    $( this ).toggleClass( "line-through" );
  });
  $( "#trash-image" ).click(function() {
    alert("Are you sure you want to delete this task?");
  });
}

  


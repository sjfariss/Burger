$(function() {
  $(".dev-btn").on("click", function(event) {
    event.preventDefault();
// preventDefault on a submit
    var id = $(this).data("id");
    console.log(id, "burger id");

    $.ajax({
      method: "PUT",
      url: "api/burgers/" + id
    }).then(function(data) {
      console.log(data, "data in callback");
    //Reload the page for update  
      location.reload();
    });
  });

  $(".add-form").on("submit", function(event) {
    // preventDefault on a submit
    event.preventDefault();
    console.log(
      $("#name")
        .val()
        .trim()
    );
    var newBurger = {
      name: $("#name")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/new", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("added new burger");
      // Reload the page for update
      location.reload();
    });
  });
});

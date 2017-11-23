// Make sure we wait to attach our handlers until the DOM is fully loaded. 
// Change the values from cat to burger and add the form
$(function() {
  $(".eaten").on("click", function(event) {
    var id = $(this).data("id");
    var eaten = $(this).data("neweaten");

    console.log(eaten);

    var devouredOrNot = {
      devoured: eaten
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredOrNot
    }).then(
      function() {
        console.log("Burger is now eaten = ", devouredOrNot);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".makeTheBurger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    console.log($("#burgerForm").val().trim());

    var newBurger = {
      burger_name: $("#burgerForm").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Burger Up!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

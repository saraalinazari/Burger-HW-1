// Make sure we wait to attach our handlers until the DOM is fully loaded. 
$(function() {

  $.backstretch([
          "assets/img/mcdonaldsfirst.jpg",
          "assets/img/bk.jpg",
          "assets/img/BurChef006.jpg",
          "assets/img/sonic.jpeg",
          "assets/img/aw-drive-in-2.jpg",
          "assets/img/OldMcD.jpg", 
          "assets/img/gotts.0.0.jpg",
          "assets/img/oldhamburger.jpg",
          "assets/img/11.jpg"
        ], {
            duration: 12000,
            fade: 900
        });

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

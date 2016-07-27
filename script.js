$(document).ready(function() {
    $("button").click(function() {
        var x = $("#pass").val();
        var y = "Turkey Club";
        if (x === y) {
            alert("Welcome!");
        } else {
            alert("Nope.......another hint: TC and space included!");
        }
    })
});
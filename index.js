$(document).ready(function () {
    //$('#sidebar-dashboard').fadeIn();

    $.getScript('./projects.js', function() {

    });
    $.getScript('./developers.js', function() {

    });
    $.getScript('./customers.js', function() {
        listCustomers(3);
    });
});
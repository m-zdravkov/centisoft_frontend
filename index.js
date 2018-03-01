$(document).ready(function () {
    $('#sidebar-dashboard').fadeIn();

    $.getScript('./projects.js', function() {
        listProjects(3);
    });
    $.getScript('./developers.js', function() {
        listDevelopers(3);
    });
    $.getScript('./customers.js', function() {
        listCustomers(3);
    });
});
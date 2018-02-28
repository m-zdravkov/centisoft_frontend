$(document).ready(function () {
    
    $.getScript('./customers.js', function() {
        listCustomers(10);
    });
});
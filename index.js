$(document).ready(function () {
    $.getScript('./animations.js', function() {
        setAnimations();
    });
    $.getScript('./projects.js', function() {
        listProjects(3);
    });
    $.getScript('./developers.js', function() {
        listDevelopers(3);
    });
    $.getScript('./customers.js', function() {
        listCustomers(3);
    });
    $.getScript('./content.js');

    //Sidebar events
    $('#sidebar-dashboard').on('click', '#pCustomers', function() {
        showCustomersMenu();
    });
    $('#sidebar-dashboard').on('click', '#pProjects', function() {
        showProjectsMenu();
    });
    $('#sidebar-dashboard').on('click', '#pDevelopers', function() {
        showDevelopersMenu();
    });
    
    //Content events (edit and delete are handled in the specific .js file)
    $('#content').on('click', '#btnHideContent', function() {
        hideContent();
    });
    $('#content').on('click', '#btnAddCustomer', function() {
        displayContent("customer-crud.html", function() {
            $('#btnPostCustomer').fadeIn();
        });
    });
    $('#content').on('click', '#btnCustomers', function() {
        showCustomersMenu();
    });
    $('#content').on('submit', '#customer-crud', function(e) {
        e.preventDefault();
        var data = $(this).serialize();
        postCustomer(data, function() {
            showCustomersMenu();
        });
    });
});

function showCustomersMenu() {
    displayContent("customers.html", function() {
        listCustomersTable();
    });
}
function showProjectsMenu() {
    displayContent("projects.html", function() {
        listProjectsTable();
    });
}
function showDevelopersMenu() {
    displayContent("developers.html", function() {
        listDevelopersTable();
    });
}
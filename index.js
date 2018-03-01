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
    
    //Sidebar events
    $('#sidebar-dashboard').on('click', '#pCustomers', function() {
        showCustomersMenu();
    });
    $('#sidebar-dashboard').on('click', '#pProjects', function() {
        $.getScript('./content.js', function() {
            displayContent("projects.html");
        });
    });
    $('#sidebar-dashboard').on('click', '#pDevelopers', function() {
        $.getScript('./content.js', function() {
            displayContent("developers.html");
        });
    });
    
    //Content events (edit and delete are handled in the specific .js file)
    $('#content').on('click', '#btnHideContent', function() {
       $.getScript('./content.js', function() {
           hideContent();
        }); 
    });
    $('#content').on('click', '#btnAddCustomer', function() {
       $.getScript('./content.js', function() {
           displayContent("customer-crud.html", function() {
               $('#btnPostCustomer').fadeIn();
           });
        }); 
    });
    $('#content').on('click', '#btnCustomers', function() {
        showCustomersMenu();
    });
    $('#content').on('click', '#btnPostCustomer', function(e) {
        e.preventDefault();
        alert($('#customer-crud').serialize());
        
        //postCustomer();
    });
});

function showCustomersMenu() {
    $.getScript('./content.js', function() {
        displayContent("customers.html", function() {
            listCustomersTable();
        });
    });
}
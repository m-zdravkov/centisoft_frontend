function setAnimations() {
    //Navbar
    $('#_nav').css("opacity", 0.1);
    $('#_nav').animate({opacity: '1'}, 1900);
    
    //Sidebar
    $('#sidebar-dashboard').css("opacity", 0.1);
    $('#sidebar-dashboard').css("left", "-0.9in");
    $('#sidebar-dashboard').animate({left:'0in', opacity: '1'}, 1900);
    
    //Content panel
    $('#content').hide(); //we don't use it initially

    //Sidebar hover animations
    $('#sidebar-dashboard').on('mouseenter', '#pCustomers', function() {
        $(this).animate({opacity: 0.5}, 200);
        $(this).animate({opacity: 1}, 200);
    });
    $('#sidebar-dashboard').on('mouseenter', '#pProjects', function() {
        $(this).animate({opacity: 0.5}, 200);
        $(this).animate({opacity: 1}, 200);
    });
    $('#sidebar-dashboard').on('mouseenter', '#pDevelopers', function() {
        $(this).animate({opacity: 0.5}, 200);
        $(this).animate({opacity: 1}, 200);
    });
}
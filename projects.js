function getProjects(handle) {
    $.ajax({
        type: 'GET',
        contentType:'application/json; charset=utf-8',
        url: 'http://centisoft.gotomain.net/api/v1/project',
        headers: {'Authorization':'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJicmFpbmxldCIsImp0aSI6ImI0ZTlmMTAyLTRkNGYtNDkzMC05YmVkLTI4ZmE3OGQ0MTZkZCIsIm5iZiI6MTUxOTc4MjQ4MywiZXhwIjoxNTI0OTY2NDgzLCJpc3MiOiJTV0tHIiwiYXVkIjoiREVWUyJ9.qAv39HxaTp8zgUPnTBirqz1RLOlkmW9T8ZfpquIjTkI'},
        success: function (res) {
            handle(res);
        },
        error: function(res) {
            alert('projects error:\n'+res);
        }
    });
}
function listProjects(maxListed) {
    //Get projects
    getProjects(function(projects) {
        //handle(projects)

        //Projects count
        var nrProjects = projects.length;
        $('#hProjects').html("Projects ("+nrProjects+")");
        //Projects list
        $.each(projects, function(i, item) {
            $('#lProjects').append('<li>'+item.Name+'</li>');
            if(i === maxListed-1) {
                $('#pProjects').append('And '+(nrProjects-i-1)+' more...</br>');
                return false;
            }
        });
    });
}
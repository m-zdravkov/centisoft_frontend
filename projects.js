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
function listProjectsTable() {
    //Get projects
    $('#projects-loader').show();
    getProjects(function(projects) {
        //Projects list
        $.each(projects, function(i, item) {
            $('#projects-table').append(
                '<tr>'
                +'<td>'+item.Id+'</td>'
                +'<td>'+item.Name+'</td>'
                +'<td>'+item.DueDate+'</td>'
                +'<td>'+item.CustomerId+'</td>'
                +'<td>'
                +'<div class="btn-group btn-group-xs btn-group-vertical">'
                +'<button id="custEdit-'+item.Id+'" class="btn btn-warning">Edit</button>'
                +'<button id="custDelete-'+item.Id+'" class="btn btn-danger">Delete</button>'
                +'</div>'
                +'</td>'
                +'</tr>'
            );
            //Add event handlers for the buttons
            
            $('#custEdit-'+item.Id).on('click', function() {
                displayContent("project-crud.html", function() {
                    $('#btnPutProject-').fadeIn();
                });
            });
            $('#custDelete-'+item.Id).on('click', function() {
                alert('delete '+$(this).attr('id'));
            });

            $('#projects-loader').hide();
        });
    });
}
function postProject(formData, handle) {
    $.ajax({
        type: 'POST',
        contentType:'application/json; charset=utf-8',
        url: 'http://centisoft.gotomain.net/api/v1/project',
        headers: {'Authorization':'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJicmFpbmxldCIsImp0aSI6ImI0ZTlmMTAyLTRkNGYtNDkzMC05YmVkLTI4ZmE3OGQ0MTZkZCIsIm5iZiI6MTUxOTc4MjQ4MywiZXhwIjoxNTI0OTY2NDgzLCJpc3MiOiJTV0tHIiwiYXVkIjoiREVWUyJ9.qAv39HxaTp8zgUPnTBirqz1RLOlkmW9T8ZfpquIjTkI'},
        data: formData,
        success: function (res) {
            handle(res);
        },
        error: function(res) {
            alert('projects error:\n'+res);
        }
    });
}
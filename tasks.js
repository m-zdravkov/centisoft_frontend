function getTasks(handle) {
    $.ajax({
        type: 'GET',
        contentType:'application/json; charset=utf-8',
        url: 'http://centisoft.gotomain.net/api/v1/task',
        headers: {'Authorization':'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJicmFpbmxldCIsImp0aSI6ImI0ZTlmMTAyLTRkNGYtNDkzMC05YmVkLTI4ZmE3OGQ0MTZkZCIsIm5iZiI6MTUxOTc4MjQ4MywiZXhwIjoxNTI0OTY2NDgzLCJpc3MiOiJTV0tHIiwiYXVkIjoiREVWUyJ9.qAv39HxaTp8zgUPnTBirqz1RLOlkmW9T8ZfpquIjTkI'},
        success: function (res) {
            handle(res);
        },
        error: function(res) {
            alert('tasks error:\n'+res);
        }
    });
}
function listTasks(maxListed) {
    //Get tasks
    getTasks(function(tasks) {
        //handle(tasks)

        //Tasks count
        var nrTasks = tasks.length;
        $('#hTasks').html("Customers ("+nrTasks+")");
        //Tasks list
        $.each(tasks, function(i, item) {
            $('#lTasks').append('<li>'+item.Name+'</li>');
            if(i === maxListed-1) {
                $('#pTasks').append('And '+(nrTasks-i-1)+' more...</br>');
                return false;
            }
        });
    });
}
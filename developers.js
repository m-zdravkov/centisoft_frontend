function getDevelopers(handle) {
    $.ajax({
        type: 'GET',
        contentType:'application/json; charset=utf-8',
        url: 'http://centisoft.gotomain.net/api/v1/developer',
        headers: {'Authorization':'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJicmFpbmxldCIsImp0aSI6ImI0ZTlmMTAyLTRkNGYtNDkzMC05YmVkLTI4ZmE3OGQ0MTZkZCIsIm5iZiI6MTUxOTc4MjQ4MywiZXhwIjoxNTI0OTY2NDgzLCJpc3MiOiJTV0tHIiwiYXVkIjoiREVWUyJ9.qAv39HxaTp8zgUPnTBirqz1RLOlkmW9T8ZfpquIjTkI'},
        success: function (res) {
            handle(res);
        },
        error: function(res) {
            alert('developers error:\n'+res);
        }
    });
}
function listDevelopers(maxListed) {
    //Get developers
    getDevelopers(function(developers) {
        //handle(developers)

        //Developers count
        var nrDevelopers = developers.length;
        $('#hDevelopers').html("Developers ("+nrDevelopers+")");
        //Developers list
        $.each(developers, function(i, item) {
            $('#lDevelopers').append('<li>'+item.Name+'</li>');
            if(i === maxListed-1) {
                $('#pDevelopers').append('And '+(nrDevelopers-i-1)+' more...</br>');
                return false;
            }
        });
    });
}
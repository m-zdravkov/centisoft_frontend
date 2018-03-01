function getCustomers(handle) {
    $.ajax({
        type: 'GET',
        contentType:'application/json; charset=utf-8',
        url: 'http://centisoft.gotomain.net/api/v1/customer',
        headers: {'Authorization':'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJicmFpbmxldCIsImp0aSI6ImI0ZTlmMTAyLTRkNGYtNDkzMC05YmVkLTI4ZmE3OGQ0MTZkZCIsIm5iZiI6MTUxOTc4MjQ4MywiZXhwIjoxNTI0OTY2NDgzLCJpc3MiOiJTV0tHIiwiYXVkIjoiREVWUyJ9.qAv39HxaTp8zgUPnTBirqz1RLOlkmW9T8ZfpquIjTkI'},
        success: function (res) {
            handle(res);
        },
        error: function(res) {
            alert('customers error:\n'+res);
        }
    });
}
function listCustomers(maxListed) {
    //Get customers
    getCustomers(function(customers) {
        //handle(customers)

        //Customers count
        var nrCustomers = customers.length;
        $('#hCustomers').html("Customers ("+nrCustomers+")");
        //Customers list
        $.each(customers, function(i, item) {
            $('#lCustomers').append('<li>'+item.Name+', '+item.Country+'</li>');
            if(i === maxListed-1) {
                $('#pCustomers').append('And '+(nrCustomers-i-1)+' more...</br>');
                return false;
            }
        });
    });
}
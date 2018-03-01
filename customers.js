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
function listCustomersTable() {
    //Get customers
    $('#customers-loader').show();
    getCustomers(function(customers) {
        //Customers list
        $.each(customers, function(i, item) {
            $('#customers-table').append(
                '<tr>'
                +'<td>'+item.Id+'</td>'
                +'<td>'+item.Name+'</td>'
                +'<td>'+item.Address+'</td>'
                +'<td>'+item.Zip+'</td>'
                +'<td>'+item.City+'</td>'
                +'<td>'+item.Country+'</td>'
                +'<td>'+item.Email+'</td>'
                +'<td>'+item.Phone+'</td>'
                +'<td>'+item.ClientId+'</td>'
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
                displayContent("customer-crud.html", function() {
                    $('#btnPutCustomer-').fadeIn();
                });
            });
            $('#custDelete-'+item.Id).on('click', function() {
                alert('delete');
            });

            $('#customers-loader').hide();
        });
    });
}
function postCustomer(formData, handle) {
    $.ajax({
        type: 'POST',
        contentType:'application/json; charset=utf-8',
        url: 'http://centisoft.gotomain.net/api/v1/customer',
        headers: {'Authorization':'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJicmFpbmxldCIsImp0aSI6ImI0ZTlmMTAyLTRkNGYtNDkzMC05YmVkLTI4ZmE3OGQ0MTZkZCIsIm5iZiI6MTUxOTc4MjQ4MywiZXhwIjoxNTI0OTY2NDgzLCJpc3MiOiJTV0tHIiwiYXVkIjoiREVWUyJ9.qAv39HxaTp8zgUPnTBirqz1RLOlkmW9T8ZfpquIjTkI'},
        data: formData,
        success: function (res) {
            handle(res);
        },
        error: function(res) {
            alert('customers error:\n'+res);
        }
    });
}
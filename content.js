//Functions regarding the main content panel
function hideContent() {
    $('#content').animate({opacity: 0, top:'-0.2in'}, 200, function() {
        $(this).empty().hide();
    });
}
function showContent() {
    $('#content').show();
    $('#content').animate({opacity: 1, top:'0in'}, 400);
}
function toggleContent(htmlFile, callback) {
    $('#content').animate(
        {opacity: 0, top:'-0.2in'}, 200, function() {
            $(this).empty()
                   .load(htmlFile);
        }
    )
    .animate(
        {opacity: 1, top:'0in'}, 400, function() {
            typeof callback === 'function' && callback();
        }
    );
}
function prepareContent() {
    $('#content').css('opacity', '0.1')
                 .css('top', '-0.2in');
}
function displayContent(htmlFile, callback) {
    if($('#content').is(':visible')) {
        toggleContent(htmlFile, callback);
    }else {
        prepareContent();
        showContent();
        $('#content').load(htmlFile);
        callback();
    }
}
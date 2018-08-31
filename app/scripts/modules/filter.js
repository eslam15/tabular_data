module.exports = function() {
    $("#search").keyup(function() {
        var searchText = $(this).val().toLowerCase();
        $.each($("table tbody tr"), function() {
            if ($(this).text().toLowerCase().indexOf(searchText) === -1) {
                $(this).hide();
                $('.no-results').show();
                $('.load-more').hide();
            } else {
                $(this).show();
                $('.no-results').hide();
                $('.load-more').show();
            }
        });
    });
};
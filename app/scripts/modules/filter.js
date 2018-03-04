module.exports = function () {
    $("#search").keyup(function () {
        var searchText = $(this).val().toLowerCase();
        $.each($("table tbody tr"), function () {
            if ($(this).text().toLowerCase().indexOf(searchText) === -1) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    }); 
};
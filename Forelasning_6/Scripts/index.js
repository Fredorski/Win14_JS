$(document).ready(function() {
    $("#search").keyup(function() {
        var searchField = $("#search").val();
        var meExp = new RegExp(searchField, "i");
        $.getJSON('wt_data.json', function(data) {
            var output = "<ul class='searchresults'>";

            $.each(data, function(key, val) {
                output += val.name;
            });
            output += "</ul>";
            $('#update').html(output);
        });
       
    });
});
﻿$(document).ready(function () {
    $("#search").keyup(function () {
        var searchField = $("#search").val();
        var meExp = new RegExp(searchField, "i");
        $.getJSON('wt_data.json', function (data) {
            var output = "<ul class='searchresults'>";

            $.each(data, function (key, val) {
                //Dags att sortera:
                if ((val.name.search(meExp) !== -1) ||
                    (val.about.search(meExp) !== -1)) {
                    output += "<li>";
                    output += "<p>" + val.name + "<b> " + val.master_degree + "</b>" + "</p>";
                    output += '<img src="wt_images/' + val.url_image;
                    output += '" alt="' + val.name + '"' + '"/>';
                    output += "<p>" + val.about + "</p>";
                    output += "</li>";
                }

            });
            output += "</ul>";
            $("#update").html(output);
        });

    });
});
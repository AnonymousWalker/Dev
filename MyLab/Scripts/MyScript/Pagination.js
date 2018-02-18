$(document).ready(function () {
    $("li a").click(function (e) {
        e.preventDefault();
        var url = $("#urlpage")[0].href + "?pagenum=" + this.text;;
        window.location = url;
    })
    var currentpage = $("#currentpage")[0].title;
    $("li a").removeClass("active");
    $("li a:contains('"+currentpage+"')").addClass("active");
});


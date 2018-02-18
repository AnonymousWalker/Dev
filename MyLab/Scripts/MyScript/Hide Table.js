$(document).ready(function () {
    $("#hidebtn").click(function (e) {
        e.preventDefault();
        if ($("#table").is(":visible")) {
            $(this).text("Show");
            $("#table").hide();
        }
        else {
            $(this).text("Hide");
            $("#table").show();
        }
    });
});


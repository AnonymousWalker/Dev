//$(document).ready(function () {
//    $("#fakesubmit").click(function (e) {
//        var list = $(".myrequiredtext").text;
//        if (!list) alert("Invalid input, please try again!");
//        });

//    });
//});

function validation()
{
    var valid = Boolean(true);
    $(".myrequiredtext").each(function () {
        var text = $(this).val();
        if (!text) valid = false;
    });
    if (!valid) alert("Invalid input, please try again!");
    else
        $("#realsubmit").click();
}


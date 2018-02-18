//function refreshTable() {
//    $("#RelativeTable").load(window.location.href + " #here");
//}

$(document).ready(function () {
    $(".btnDelete").click(function (e) {
        e.preventDefault();
        var $currentButton = $(this);
        var id = $currentButton.data("relativeid");
        var urlDel = $currentButton.data("deleteurl");
        $.ajax({        //ajax call & pass the param (data:) to deleteurl- DeleteRelative method
            url: urlDel,    // set the url for action
            type: "post",   // post method
            data: {
                relativeId: id  // datas to be sent as param
            },
            success: function (result) {
                $currentButton.closest("tr").remove();  //hide the current row
            }
        });

    });
});
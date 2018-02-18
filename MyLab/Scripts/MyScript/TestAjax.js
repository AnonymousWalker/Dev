
function loadTable() {
    $.ajax({

        url: "/Home/LoadTable",
        type: "get",
        dataType: "json",
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                $("#tablebody").append(
                    "<tr><td>" + data[i].EmployeeID +
                    "</td><td>" + data[i].FirstName +
                    "</td><td>" + data[i].LastName +
                    "</td><td>" + data[i].Company + "</td></tr>"
                );
            }
        }
    });
}
    

    //var xhttp = new XMLHttpRequest();
    //xhttp.onreadystatechange = function () {
    //    if (this.readyState == 4 && this.status == 200) {
    //        $("#result").text(this.responseText);
    //    }
    //};
    //xhttp.open("GET", "/Home/LoadTable", true);
    //xhttp.send();   

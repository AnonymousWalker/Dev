function addNewRelative(relative)   //append to relative list 
{
    $("#RelativeTableEdit").find("tbody").append("<tr><td>" + relative.Relationship + "</td><td>" + relative.FirstName +
        "</td><td>" + relative.LastName + "</td><td>" + relative.Gender + "</td><td>" + relative.MobilePhone+ "</td><td></td></tr>");


    //$.ajax({
    //    url: '@Url.Action("NewRelative", "Profile")',
    //    type: "get",
    //    data: { newrelative: relative },//this is as per your requirement
    //    success: function (response) {
    //        $("#RelativeTableEdit").find("tbody").append(response);

    //    },
    //});

    $("#closebtn").click();
}

//function addNewRelative(html)   //append to relative list 
//{
//    $("#RelativeTableEdit").find("tbody").append(html);



//    $("#closebtn").click();
//}

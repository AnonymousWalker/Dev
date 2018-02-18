function pagination() {
    var req_num_row = 20;
    var $tr = $('tbody tr');    //all table rows in body
    var total_num_row = $tr.length;
    if (total_num_row < req_num_row) return;
    var num_pages = 0;
    if (total_num_row % req_num_row == 0) {
        num_pages = total_num_row / req_num_row;
    }
    if (total_num_row % req_num_row >= 1) {
        num_pages = total_num_row / req_num_row;
        num_pages++;
        num_pages = Math.floor(num_pages);
    }
    for (var i = 1; i <= num_pages; i++) {
        $('#pagination').append("<a class='btn btn-default' id='"+i+"'>"+ i + "</a>");  //add page number btn
    }

    $("#1").addClass("active");

    $tr.hide();
    $tr.each(function (i) {     //show first page
        //$(this).hide();
        if (i < req_num_row) {
            $tr.eq(i).show();
        }

    });
    $('#pagination a').click(function (e) {
        e.preventDefault();
        $tr.hide();
        $('#pagination a').removeClass("active");
        $(this).addClass("active");
        var currentpage = $(this).text();  //page number 
        var temp = currentpage - 1;    //the rows starts from 0
        var start = temp * req_num_row;
        //alert(start);

        for (var i = 0; i < req_num_row; i++) {

            $tr.eq(start + i).show();

        }
    });
}

$(document).ready(function () {
    pagination();
    
});
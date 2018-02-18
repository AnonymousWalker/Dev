var oldCompanyIdsLength = 0;
//$(document).ready...
$(document).ajaxSuccess(function () {      
    SelectAllCompanies($("#checkLoadedPage").val());
});
function SelectAllCompanies(checkLoadedPage) {
    if (document.readyState === 'complete' && checkLoadedPage == "True") {
        $('#companyIds').val("").trigger("change");

    }
}

$("#SelectAllCompanies").change(function () {
    if ($("#SelectAllCompanies").prop('checked') == true) {
        $.ajax({
            url: $("#getCompanyDataSource").val(),
            data: {
                isTakeAllCompanies: true
            },
            success: function (data) {
                var NewCompanyIds = [];

                for (var i = 0; i < data.length; i++) {
                    NewCompanyIds.push(data[i].id);
                }
                oldCompanyIdsLength = NewCompanyIds.length;
                $('#companyIds').val(NewCompanyIds).trigger('change');
                $("#checkLoadedPage").val("NotTrue");
            }
        });
    }
    else {
        $('#companyIds').val("").trigger('change');
    }
});
$("#companyIds").change(function () {
    if ($("#companyIds").select2("data").length != oldCompanyIdsLength) {
        $("#SelectAllCompanies").prop('checked', false);
    }
});


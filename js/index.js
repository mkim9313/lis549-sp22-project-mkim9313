$('#myModal').on("show.bs.modal", function(event){
    var imageClicked = $(event.relatedTarget);
    var srcClicked = imageClicked.attr("src");
    var altClicked = imageClicked.attr("alt");
    $("#modalImage").attr("src", srcClicked);
    $("#modalImage").attr("alt", altClicked);
});
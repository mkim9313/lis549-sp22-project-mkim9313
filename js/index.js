// persona image modal
$('img#persona').css("cursor", "pointer");

$('img#persona').attr('data-bs-toggle', 'modal');
$('img#persona').attr('data-bs-target', '#myModal');

$('#myModal').on("show.bs.modal", function(event){
    var imageClicked = $(event.relatedTarget);
    var srcClicked = imageClicked.attr("src");
    var altClicked = imageClicked.attr("alt");
    $("#modalImage").attr("src", srcClicked);
    $("#modalImage").attr("alt", altClicked);
});

//progress bar
window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


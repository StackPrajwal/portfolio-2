
function display() {
  // body...
  let nm = document.getElementById('black');
        nm.setAttribute('class','none');
}
setTimeout(display,2000);


$("a").on("click", function(e) {
  e.preventDefault();
  $("a").removeClass("active");
  $(this).addClass("active");
});
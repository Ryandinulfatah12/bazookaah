$(document).ready(function() {
  
  var counter = 0;
  var c = 0;
  var i = setInterval(function(){
      $(".percent").html(c + "%");
      $(".btn").css("width", c + "%");
      
    counter++;
    c++;
      
    if(counter == 101) {
        clearInterval(i);
    }
  }, 50);
});
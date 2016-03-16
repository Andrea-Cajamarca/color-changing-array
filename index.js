
var myArray= ["red", "blue", "green", "pink", "yellow"];

var colorIndex = 0

$(document).ready(function(){
    $("#button").click(function()   {
        if (colorIndex >myArray.length-1){
            colorIndex = 0;
        }
        $("body").css("background-color", myArray[colorIndex]);
        colorIndex = colorIndex + 1;
    })
   for (var i=0; i < myArray.length; i=i+1){
       console.log(myArray[i]);
       $( "#ul" ).append("<li>" + myArray[i] + "</li>");
   }
   
      for (var i=5; i > myArray.length; i=i-1){
       console.log(myArray[i]);
       $( "#ul" ).append("<li>" + myArray[i] + "</li>");
   }
})


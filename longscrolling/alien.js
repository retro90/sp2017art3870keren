$(document).ready(function(){

  var fromTop = 0;

  $(window).scroll(function(){

   fromTop = $(window).scrollTop();
   console.log(fromTop);

   $("#mainimage").css({
     "top" : 100 + fromTop * 1.1 +"px"
   });


    if(fromTop > 3000 ){
       // if we have scrolled MORE than 3000 pixels use this image

      $("body").css({"background-color":"pink"});



      $("#mainimage").css({
           "background-image" : "url('./images/alien.svg')"
           });



    } else {
      // else if we have scrolled LESS than 3000 pixels use this image


      $("body").css({"background-color":"sky blue"});

      $("#mainimage").css({
         "background-image" : "url('./images/spaceship.svg')"


       });



    }//end if statement



  });

});

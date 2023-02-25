$(document).ready(function(){
   $("#user").on("click",function(){
       alert(" Hare Krsna, Welcome to AnuRaj Dairy Products!!!!");
   });

   $("#cart").on("click",function(){
       alert("Cart");
   })

    $("#menu").on("click",function(){
       $("#icons").toggle();
    });

    $(".btn").on("click",function(){
        $(".btn").removeClass("active");
        $(this).addClass("active");
    });
});
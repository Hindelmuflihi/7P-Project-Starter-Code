$("button").click(function() {
    let variable1 = $(".H").val();
    let variable2 = $(".I").val();
    let variable3 = $(".N").val();
    
    let variable4= variable3* 365 * 28 ;
     $(".fortune-display").append(variable1+ " you will read "+ variable4+" books by 2050 ");
    console.log(variable1);
    console.log(variable2);
    console.log(variable3);

});

$(".d").click(function() {
     $(".h").show();
});
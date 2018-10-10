//event listener for our different buttons
//function for addition

//alerts for each function

//function for subtraction

//alerts for each function

//function for multiplication

//alerts for each function

//function for division

//alerts for each function

$(document).ready (function(){

  $("#add").on("click", function(){

    var num1 = parseFloat ($("#first").val());
    var num2 = parseFloat ($("#second").val());
    var sum=num1+num2
    alert(sum)
  });
  $("#subtraction").on("click", function(){

    var num1 = parseFloat ($("#first").val());
    var num2 = parseFloat ($("#second").val());
    var minus=num1-num2
    alert(minus)
  });
  $("#multiply").on("click", function(){

    var num1 = parseFloat ($("#first").val());
    var num2 = parseFloat ($("#second").val());
    var multi=num1*num2
    alert(multi)
  });
  $("#division").on("click", function(){

    var num1 = parseFloat ($("#first").val());
    var num2 = parseFloat ($("#second").val());
    var div=num1/num2
    alert(div)
  });
})


// $(document).ready (function(){
//
//   $("#sub").on("click", function(){
//
//     var num1 = parseFloat ($("#first").val());
//     var num2 = parseFloat ($("#second").val());
//     var minus=num1-num2
//     alert(minus)
//   });
// })
//
// $(document).ready (function(){
//
//   $("#multi").on("click", function(){
//
//     var num1 = parseFloat ($("#first").val());
//     var num2 = parseFloat ($("#second").val());
//     var multi=num1*num2
//     alert(multi)
//   });
// })
//
// $(document).ready (function(){
//
//   $("#div").on("click", function(){
//
//     var num1 = parseFloat ($("#first").val());
//     var num2 = parseFloat ($("#second").val());
//     var div=num1/num2
//     alert(div)
//   });
// })

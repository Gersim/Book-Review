// jquery author form Start
$(document).ready(function(){
 
    $(".formdesign").validate({
rules:{
    fname: {
        required : true
    } ,

    lname: {
        required: true
    } ,

    email:{
         required:true
    } ,

    password:{
        required:true ,
        minlength: 6
    }

} 



     }) 



   

});

// jquery author form End


$(document).ready(function(){

 $(".formbook").validate({

    rules:{
        btittle:{
            required:true
        } ,
        bauthor:{
            required:true
        } ,
        addtext:{
            required:true ,
            minlength:20
        }
    }
     })
});



$(document).ready(function(){
    $("#s1").click(function(){
        $(".fa-star").css("color","black");
      $("#s1").css("color","yellow");
    });

    $("#s2").click(function(){
        $(".fa-star").css("color","black");
        $("#s1,#s2").css("color","yellow");
      });

      $("#s3").click(function(){
        $(".fa-star").css("color","black");
        $("#s1,#s2,#s3").css("color","yellow");
      });

      $("#s4").click(function(){
        $(".fa-star").css("color","black");
        $("#s1,#s2,#s3,#s4").css("color","yellow");
      });

      $("#s5").click(function(){
        $(".fa-star").css("color","black");
        $("#s1,#s2,#s3,#s4,#s5").css("color","yellow");
      });
});

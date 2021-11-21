// jquery author form Start

$(function(){
 
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


$(function(){

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

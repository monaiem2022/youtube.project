
var body = document.getElementById('body');
var youtube = document.getElementById('youtube');
var egypt = document.getElementById('egypt');
var me  = screen.width;

console.log(me);

/*
body.onload = function () {
    if(me===240 || me===280 || me==360 || me===375 || me===384 || me===320  || me===411 || me===412 || me===414 || me===480 || me===393
      || me===353){
       $('.youtube').css('color','green');
        $('.youtube').css('font-size','25px');
        $('#signButton').css('font-size','20px');
        $('.address .btn').css('font-size','20px');
        $('.main-video .under-video .main_title').css('font-size','30px');
        $('.main-video .under-video .view_video').css('font-size','20px');
        $('.main-video .under-video .icon').css('font-size','30px');
        $('.main-video .channel-name .main_channelName').css('font-size','25px');
        $('.main-video .channel-name .main_subscriber').css('font-size','25px');
        $('.main-video .channel-name .main_description').css('font-size','20px');
        $('.main-video .channel-name .comments').css('font-size','20px');
        $('.main-video .channel-name .main_sorted').css('font-size','25px');
        
    }
    
   
       else if (me===412){
        $('.youtube').css('font-size','25px');
          
    }
    
    else{
        $('.youtube').css('color','yellow');
    }
}

*/

//to hide bootstrap shadow on input
$('.form-control').on('mouseover',function(){
    $(this).css('box-shadow','none');
    $(this).css('border','1px solid #323323');  
});
//end of the function



//to hide bootstrap effects on button
  $('.btn').on('mouseover',function(){
        $(this).css('box-shadow','none');
     
     
    });
//end of the function.


let insidefilter = document.getElementById("insideFilter"),
    filter = document.getElementById('filter');

filter.onclick = function () {
    if(insidefilter.style.display =='block'){
        insidefilter.style.display = "none";
    }else{
        insidefilter.style.display = "block";
    }
}




//to hide bootstrap effects on button
  $('.btn').on('mouseover',function(){
        $(this).css('box-shadow','none');
      
     
    });


 
//end of the function.


var body = document.getElementById('body');
var youtube = document.getElementById('youtube');
var egypt = document.getElementById('egypt');
var me  = screen.width;









body.onload = function(){
  "use strict";
   
    if(me===240 || me===280 || me==360 || me===375 || me===384 || me===320  || me===411 ||      me===412 || me===414 || me===480 || me===393
      || me===353 || me===540 || me===560 || me===570 || me===575){
        
        $('.next-fixed-menu .address a').css('font-size','18px');
      
        $('.main-video .under-video #mainVidew').css('font-size','30px');
        $('.main-video .under-video .sport-icon .view_video').css('font-size','20px');
        $('.main-video .under-video .sport-icon .icon').css('font-size','20px');
        $('.main-video .channel-name .main_channelName').css('font-size','20px');
        $('.main-video .channel-name .main_channelName').css('font-weight','500');
        $('.main-video .channel-name .main_subscriber').css('font-size','20px');
        $('.main-video .channel-name .main_subscriber').css('font-weight','400');
        $('.main-video .channel-name .main_description').css('font-size','20px');
        $('.main-video .channel-name .comments').css('font-size','20px');
        $('.main-video .channel-name .sorted').css('font-size','20px');
        
        
        $('.video-list .video_watch .video_title').css('font-size','30px');
        $('.video-list .video_watch .view_video').css('font-size','20px');
        
        
    }
    
        else if(me===576 || me===640 || me===712 || me===768 || me===800 || me===992){
        $('#signButton').css('font-size','20px');
        $('.next-fixed-menu .address a').css('font-size','18px');
      
        $('.main-video .under-video #mainVidew').css('font-size','30px');
        $('.main-video .under-video .sport-icon .view_video').css('font-size','22px');
        $('.main-video .under-video .sport-icon .icon').css('font-size','25px');
        $('.main-video .channel-name .main_channelName').css('font-size','25px');
        $('.main-video .channel-name .main_channelName').css('font-weight','500');
        $('.main-video .channel-name .main_subscriber').css('font-size','20px');
        $('.main-video .channel-name .main_subscriber').css('font-weight','400');
        $('.main-video .channel-name .main_description').css('font-size','22px');
        $('.main-video .channel-name .comments').css('font-size','22px');
        $('.main-video .channel-name .sorted').css('font-size','22px');
        
        
        $('.video-list .video_watch .video_title').css('font-size','30px');
        $('.video-list .video_watch .view_video').css('font-size','22px');
        
        
    }
    
    
          else if(me===1000 || me===1024 || me===1200 || me===1280){
        $('#signButton').css('font-size','16px');
        $('.next-fixed-menu .address a').css('font-size','18px');
      
        $('.main-video .under-video #mainVidew').css('font-size','15px');
        $('.main-video .under-video .sport-icon .view_video').css('font-size','15px');
        $('.main-video .under-video .sport-icon .icon').css('font-size','15px');
        $('.main-video .channel-name .main_channelName').css('font-size','15px');
        $('.main-video .channel-name .main_channelName').css('font-weight','500');
        $('.main-video .channel-name .main_subscriber').css('font-size','15px');
        $('.main-video .channel-name .main_subscriber').css('font-weight','400');
        $('.main-video .channel-name .main_description').css('font-size','15px');
        $('.main-video .channel-name .comments').css('font-size','15px');
        $('.main-video .channel-name .sorted').css('font-size','15px');
        
        
        $('.video-list .video_watch .video_title').css('font-size','15px');
        $('.video-list .video_watch .view_video').css('font-size','15px');
        
        
    }
    
    
  
    
    
     else
   
        $(body).css('background-color','yellow')
       
}







// to let the user sign in and see his name on the top dynamic.
let recipient = document.getElementById("recipient");
let signButton = document.getElementById("signButton");
let confirmButton = document.getElementById("confirmButton");
let closeButton = document.getElementById("closeButton");
let input = document.getElementById("input");
let exampleModal = document.getElementById("exampleModal");
let exampleModalLabel = document.getElementById("exampleModalLabel");
let message = document.getElementById("message");
let message2 = document.getElementById("message2");
let userIcon = document.getElementById('userIcon');
let text1 = document.getElementById('text1');
let chat1 = document.getElementById('chat1');
let allModal = document.getElementById('allModal');
let button = document.getElementById('button');
let send = document.getElementById('send');



send.onkeyup = function () {
     $('.chat2').css('visibility','visible');

}

 



confirmButton.onclick=function(){
    

        if(recipient.value==''){
    
      signButton.innerHTML="Sign in";
            
    }
 
    else{
        signButton.innerHTML = recipient.value;
        message.innerHTML = signButton.innerHTML; 
    }
 
}



input.onclick = function () {
    if(signButton.value=='Sign in' || recipient.value=='' ){
        exampleModal.style.display = 'block';

    }
    

    else{
        
        signButton.innerHTML = recipient.value;
          allModal.remove()
    }
}





userIcon.onclick = function () {
    
if(signButton.innerHTML=='Sign in' || recipient.value==''){
    chat1.style.visibility = 'hidden';
    
}
    
  
    else{
    chat1.style.visibility = 'visible';
        allModal.remove();
   
}

    }









// end of the function.



// end of the function.


 



//to hide bootstrap shadow on input
$('.form-control').on('click',function(){
    $(this).css('box-shadow','none');
    
});


//end of the function



//choosing dynamic videos
$('.video-list video').on('click' , function(){
    let src = $(this).attr('src')
    $('.main-video video').attr('src',src);
});

//end of the function

//dynamic user comments section
$('.control').on('submit',function(e){
    e.preventDefault();
    let comment = $('.input-comment');
    let email = $('#recipient');
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() ;
    let day = date.getDate();
   
    if(comment.val() != ''){
        $('<div>'+  email.val() +' ' + ' ' + ' ' + ' : ' +  comment.val() + ' ' + ' ' +
          day + '/'+ month + '/' +year + '</div>').prependTo('.comment-div');
          comment.val(''); 
        
    }
    
});

// end of the function.


$('.send').on('submit',function(q){
    q.preventDefault();
    let text1 = $('.text1');
    let sent = $('.sent');
    let signbutton = $('#signButton');
    

    
    

    
    if(text1.val() !=''){
    $('<div> '+ signbutton.html() +   ' : ' + text1.val() +'</div>').prependTo('.sent');  
    text1.val('');
    };
    


    $('.send2').on('submit',function(t){
    t.preventDefault();
      let text2 = $('.text2');
      let youtube = $('.button');
    if(text2.val() !=''){
    $('<div> ' + youtube.html() + ' : ' + text2.val() +'</div>').prependTo('.sent2');
          text2.val('');                                   // this is for youtube reply 
    }
    })    
  
    });









 $('.user-icon').on('click',function(){   // chat1 for user send message 
          $('.close-user').on('click',function(){
        $('.square-user').css('visibility','hidden');
         $('.message2').html('Youtube Support');
              $('.chat2').css('visibility','hidden');
    
     })
     
     $('.user-icon').on('click',function(){
         let square = document.getElementById('square');
         let chat1 = document.getElementById('chat1');
     
       
     
     })
     
     $('.close-user').on('click',function(){
         
         $('.chat1').css('visibility','hidden');
     })
   
     
     $('.minimize-user').on('click',function(){
         $('.sent').css('height','5px');
         $('.minimize-user').hide();
         $('.square-user').css('visibility','visible');
         $('.text1').hide();
     });
     
     $('.square-user').on('click',function(){
         $('.sent').css('height','300px');
         $('.square-user').css('visibility','hidden');
         $('.minimize-user').show();
         $('.text1').show();
      
     })
     
    });
     
                                     
    


  
    





        







$('.video_watch').on('click', function (e) { 
    $('#mainVidew').text($(this).find('.video_title').text());
    $('.main_time').text($(this).find('.time_video').text());
    $('.main_view').text($(this).find('.view_video').text());
    $('.main_like').text($(this).find('.likeUnder').text());
    $('.main_deslike').text($(this).find('.deslikeUnder').text());
     $('.main_show').text($(this).find('.showUnder').text());
    $('.main_description').text($(this).find('.description').text());
    $('.main_subscriber').text($(this).find('.subscribersUnder').text());
     $('.main_channelName').text($(this).find('.channelUnder').text());
    $('.sign').text($(this).find('.malek').text());
    $('.main_image').attr('src',$(this).find('img').attr('src'));

});




//to hide bootstrap effects on button
  $('.btn').on('click',function(){
        $(this).css('box-shadow','none');
      
     
    });

//end of the function.








let father = document.getElementById('father');
let monaiem = document.getElementById('monaiem');


father.onclick = function () {
    
    
    if(monaiem.innerHTML=='Dan'){
        location = 'danrobert.html';
    }
    
    
    else if(monaiem.innerHTML=='Luis'){
        location = 'luisjan.html';
    }
    
    
    else if(monaiem.innerHTML=='Sarah'){
        location = 'sarahaton.html';
    }

     else if(monaiem.innerHTML=='Jasmine'){
        location = 'jasmine.html';
    }
    
     else if(monaiem.innerHTML=='GoodLuck'){
        location = 'goodluck.html';
    }
    
        else if(monaiem.innerHTML=='Dalida'){
        location = 'dalida.html';
    }
    
        else if(monaiem.innerHTML=='Aroundworld'){
        location = 'aroundworld.html';
    }
    
        else if(monaiem.innerHTML=='Music'){
        location = 'music.html';
    }
    
       else if(monaiem.innerHTML=='King'){
        location = 'king.html';
    }
    
        else if(monaiem.innerHTML=='Italiano'){
        location = 'italianomusic.html';
    }
    
        else if(monaiem.innerHTML=='Girls'){
        location = 'girlsmusic.html';
    }
    
       else if(monaiem.innerHTML=='Football'){
        location = 'index.html';
    }
    
    else if (monaiem.innerHTML=='Venas'){
        location = 'index.html';
    }
       else if(monaiem.innerHTML=='Score90'){
        location = 'index.html';
    }
    
    else if (monaiem.innerHTML=='Inside'){
        location = 'index.html';
    }
       else if(monaiem.innerHTML=='Asher'){
        location = 'index.html';
    }
    
    else if (monaiem.innerHTML=='Brujo'){
        location = 'index.html';
    }
    
        else if (monaiem.innerHTML=='Yegor'){
        location = 'yegor.html';
    }
    
        else if (monaiem.innerHTML=='Mosh'){
        location = 'mosh.html';
    }
    
        else if (monaiem.innerHTML=='Andria'){
        location = 'Anriaqueen.html';
    }

        else if (monaiem.innerHTML=='John'){
        location = 'johnsava.html';
    }
    
        else if (monaiem.innerHTML=='David'){
        location = 'davidross.html';
    }
    
        else if (monaiem.innerHTML=='Khan'){
        location = 'khan.html';
    }
    
        else if (monaiem.innerHTML=='Aron'){
        location = 'Aron.html';
    }
    
        else if (monaiem.innerHTML=='Caleb'){
        location = 'caleb.html';
    }

        else if (monaiem.innerHTML=='Funny'){
        location = 'funnyfamily.html';
    }
    
        else if (monaiem.innerHTML=='Laugh'){
        location = 'laught.html';
    }

         else if (monaiem.innerHTML=='Smart Baby'){
        location = 'smartbaby.html';
    }

        else if (monaiem.innerHTML=='Us'){
        location = 'us.html';
    }

        else if (monaiem.innerHTML=='Malek Tune'){
        location = 'malektune.html';
    }
    
        else if (monaiem.innerHTML=='Youmna Tune'){
        location = 'youmnatune.html';
    }
        else if (monaiem.innerHTML=='Maloky'){
        location = 'Maloky.html';
    }

        else if (monaiem.innerHTML=='Sawsan'){
        location = 'sawsan.html';
    }


       else if (monaiem.innerHTML=='Islam'){
        location = 'islam.html';
    }

       else if (monaiem.innerHTML=='Momen'){
        location = 'momen.html';
    }
    
        else if (monaiem.innerHTML=='Mohammed'){
        location = 'mohammed.html';
    }

        else if (monaiem.innerHTML=='Mona'){
        location = 'mona.html';
    }


        else if (monaiem.innerHTML=='Yasser'){
        location = 'yasser.html';
    }
    
        else if (monaiem.innerHTML=='Radwan'){
        location = 'radwan.html';
    }



    else {
        location = 'playallyegor.html';
    }
    
    
}
   
//











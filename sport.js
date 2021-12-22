let signButton = document.getElementById("signButton");
let recipient = document.getElementById("recipient");
let confirmButton = document.getElementById("confirmButton")
let closeButton = document.getElementById("closeButton");
let allModal = document.getElementById("allModal");
let userIcon = document.getElementById("userIcon");
let chat1 = document.getElementById("chat1");
let text1 = document.getElementById("text1");
let chat2 = document.getElementById("chat2");


confirmButton.onclick = function () {
    if(signButton.innerHTML == 'Sign in' || recipient.value == '' ){
    }else{
        signButton.innerHTML = recipient.value;
        $('.message').html(signButton.innerHTML);
    }
    
    userIcon.onclick = function () {
        if(signButton.innerHTML == 'Sign in'){
            chat1.style.display = 'none';
            allModal.style.display = 'block'
        }else{
            chat1.style.display = 'block';
            allModal.remove();
        }
    }
    

    
     $('.close-user').on('click',function(){
        $('.sent').css('height','5px');
         $('.minimize-user').hide();
         $('.square-user').css('display','none');
         $('.chat1').css('display','none');
         $('.chat2').css('display','none');
    })
    
    $('.square-user').on('click',function(){
        $('.sent').css('height','300px');
        $('.square-user').css('display','none');
        $('.minimize-user').show();
    })
    
    $('.minimize-user').on('click',function(){
        $('.sent').css('height','5px');
        $('.square-user').css('display','block');
        $('.minimize-user').hide();
    })
    
    $('.user-icon').on('click',function(){
        if('.message'.html !=''){
            $('.sent').css('height','300');
            $('.minimize-user').show();
        }
    })
    
    $('.text1').on('click',function(){
        $('.chat2').css('display','block');
    })
    
    
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
    $('<div> ' + youtube.html() + ' : ' + text2.val() +'</div>').prependTo('.sent');
          text2.val('');                                   // this is for youtube reply 
    }
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




















$(function(){
    resize();
    re_slide();
    $('#prev').click(function(){
        prevSlide();
     })
     $('#next').click(function(){
       nextSlide();
     })
    dataIdx();
    $('.thumb_inner img').click(function(){
        var i = $(this).attr('data-idx');
        $('.slide_inner img').eq(i).stop().fadeIn();
        $('.slide_inner img').eq(i).siblings().stop().fadeOut();
    })

    $('.toggle_Btn').click(function(){
        $('.intro2_hide').toggleClass('hidden');
        if($(this).prop('value') == 1){
            $(this).html('접기');
            $(this).prop('value',2);
        } else {
            $(this).html('펼치기') 
            $(this).prop('value',1);
        }
    });
})


var s_width=0;
var s_margin=0;
function prevSlide(){
    $('.thumb_inner img:last').prependTo('.thumb_inner');
    $('.thumb_inner').css('margin-left', -(s_width + s_margin));
    $('.thumb_inner').stop().animate({marginLeft : 0});
}
function nextSlide(){
    $('.thumb_inner').stop().animate({marginLeft:-(s_width+s_margin)},function(){
        $('.thumb_inner img:first').appendTo('.thumb_inner');
        $('.thumb_inner').css('marginLeft',0);
    })
}
function re_slide(){
    s_width = $('.thumb_inner img').eq(0).width();
    s_margin = parseInt($('.thumb_inner img').eq(0).css('margin-right'));
}
function resize(){
    $(window).resize(function(){
        re_slide();
        $('.thumb_inner').css({
            marginLeft : 0
        });
    })
}
function dataIdx(){
    $('.slide_inner > img').each(function(index){
        $(this).attr('data-idx',index);
    })
    $('.thumb_inner img').each(function(index){
        $(this).attr('data-idx',index);
    });
}

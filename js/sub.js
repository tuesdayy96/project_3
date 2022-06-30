$(function(){
    slideBundle();
    toggleUpDown();
    metaScore();
})

// 슬라이드 종합세트
function slideBundle(){
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
    resize();
    re_slide();
    $('#prev').click(function(){
        prevSlide();
    })
    $('#next').click(function(){
    nextSlide();
    })
    dataIdx();
    function dataIdx(){
        $('.slide_inner > img').each(function(index){
            $(this).attr('data-idx',index);
        })
        $('.thumb_inner img').each(function(index){
            $(this).attr('data-idx',index);
        });
    }
    $('.thumb_inner img').click(function(){
        var i = $(this).attr('data-idx');
        $('.slide_inner img').eq(i).stop().fadeIn();
        $('.slide_inner img').eq(i).siblings().stop().fadeOut();
    })
}
// 게임소개 펼치기/접기
function toggleUpDown(){
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
}

function metaScore(){
    var u = 3.14;
    var r = 36;
    const c_meta = document.querySelector('.metacircle');
    const c_path = document.querySelector('.c_score');
    const c_gauge = document.querySelector('.circle_gauge');
    var c_Length = 2 * u * r;
    const c_v = 2 * u * r;
    c_path.style.strokeDasharray = c_Length;
    c_path.style.strokeDashoffset = c_Length;
    var callInterval = setInterval(function(){
        c_Length--;
        var c_persent = Math.floor(100-(c_Length/c_v*100));
        c_path.style.strokeDashoffset = c_Length;
        c_gauge.innerHTML = '<span>'+ c_persent +'%'+'</span>';
        if(c_Length <= c_v -(c_v*0.91)){
            clearInterval(callInterval);
            
        }
    },10)
    c_meta.addEventListener('mouseover',metaScore);
}

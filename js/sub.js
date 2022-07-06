$(function(){
    slideBundle();
    toggleUpDown();
    metaScore();
    clickpage();
    filltering();
})

// 슬라이드 종합세트
function slideBundle(){
    var s_width=0;
    var s_margin=0;
    var s_img = $('.thumb_inner img');
    var s_index = s_img.length;
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
        $('.thumb_inner').width(s_index*(s_margin+s_width));
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

// 페이지 전환
function clickpage(){
    $('.no1 span').click(function(){
        var ii = $(this).index();
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
        $('.cnt').eq(ii).show();
        $('.cnt').eq(ii).siblings('.cnt').hide();
    })
    $('.achive_btn').click(function(){
        $('.no1 span:last').click();
        $(window).scrollTop(0);
    })
    $('.add_btn').click(function(){
        $('.no1 span:nth-child(2)').click();
        $(window).scrollTop(0);
    })
}

// 필터링
function filltering(){
    $('.filterbtn').click(function(){
        $(this).siblings('ul').stop().toggle();
        $(this).children('.arrdown').toggleClass('on');
    })
    $('#keywords').on('keyup',function(){
        var value = $(this).val().toLowerCase();
        $('.sorter').filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        })
    });
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

// 평가 애니메이션
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
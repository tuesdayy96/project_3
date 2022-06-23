$(function(){     

    // 인덱스 클릭 시 페이지이동
    var dot = $('#dot ul li');
    var cnt = $('#pages > .box');
    dot.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        var section = cnt.eq(index);
        var offset = section.offset().top;
        $('html,body').animate({
            scrollTop : offset
        },'slow','swing');
    });

    // 페이지 이동시 인덱스 색칠 
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        for(var i=0;i<cnt.length;i++){
            if(wScroll >= $(cnt[i]).offset().top){
                dot.css({"background":"rgba(255,255,255,0.1)"});
                dot.find("a").css({"background":"rgba(255,255,255,0.5)"});
                dot.removeClass("active");
                dot.eq(i).addClass("active");
                dot.eq(i).find("a").css({"background":"#0cdaff"});
            }
        }
    });
        return false;

})

// 800px이하 메뉴 상호작용
function showMenu(){
    document.querySelector('.head_outer').style.width = '60%';
}
function hideMenu(){
    document.querySelector('.head_outer').style.width = 0;
}

$(function(){

    // 휠 이벤트 
    var win_h = $(window).height();
    $('.box').each(function(index){
         $(this).attr('data-index', win_h * index);
    });

    $('.box').on('mousewheel',function(e){
        var pageV = parseInt($(this).attr('data-index'));
        if(e.originalEvent.wheelDelta >= 0 ){
            $('html,body').stop().animate({scrollTop : pageV - win_h});
            return false;
        } else if(e.originalEvent.wheelDelta < 0){
            $('html,body').stop().animate({scrollTop : pageV + win_h});
            return false;
        }
    });

    // 풀페이지3 자동 캐러셀
    var i = 0;
    var fullLength = $('.sale_item > li').length;
    $('.sale_item > li').eq(i).addClass('on').css('left','0');
    $('.sale_item > li').eq(i+1).addClass('on').css('left','25%');
    $('.sale_item > li').eq(i+2).addClass('on').css('left','50%');
    $('.sale_item > li').eq(i+3).addClass('on').css('left','75%');
    setInterval(function(){
        $('.sale_item > li').removeClass('on');
        $('.sale_item > li').eq(i).css('transition-delay','0.25s');
        $('.sale_item > li').eq(i+1).css('transition-delay','0.5s');
        $('.sale_item > li').eq(i+2).css('transition-delay','0.75s');
        $('.sale_item > li').eq(i+3).css('transition-delay','1s');
        if( i < fullLength-4){
            i = i+4;
        } else {
            i = 0;
        }
        $('.sale_item > li').eq(i).css('left','0').addClass('on').css('transition-delay','1.25s');
        $('.sale_item > li').eq(i+1).css('left','25%').addClass('on').css('transition-delay','1.5s');
        $('.sale_item > li').eq(i+2).css('left','50%').addClass('on').css('transition-delay','1.75s');
        $('.sale_item > li').eq(i+3).css('left','75%').addClass('on').css('transition-delay','2s');
    },6000);
});

    // 풀페이지3 타이머
        var time = 3600*12;
        var hour = '';
        var min = '';
        var sec = '';
        var timer = document.getElementById('timer');
        function setTimer(){
            hour = parseInt(time/3600);
            min = parseInt(time%3600/60);
            sec = time%60;
            var new_sec = String(sec).padStart(2,'0')
            document.getElementById('timer').innerHTML = hour +' : '+ min +' : '+ new_sec;
            time--;
        }
        setInterval(setTimer,1000);

// 풀페이지4 출시예정 페이드인
$(function(){
    $('.coming_title li').mouseenter(function(){
        var idx = $(this).index();
        $('.title_inner').eq(idx).stop().fadeIn();
        $('.title_inner').eq(idx).siblings().stop().fadeOut();
    }).mouseleave(function(){
        var idx = $(this).index();
        $('.title_inner').eq(idx).stop().fadeIn();
        $('.title_inner').eq(idx).siblings().stop().fadeOut();
    })
    $('.coming_title li').click(function(){
        var idx = $(this).index();
        $('.side2').stop().show();
    })
    $('#closeBtn').click(function(){
        $('.side2').stop().hide();
    })
    $(window).resize(function(){
        if(window.innerWidth > 800){
            $('.side2').show();
        } else {
            $('.side2').hide();
        }
    })
})
       
// 풀페이지5 ~~ 푸터
$(function(){
    $('.logueinner li').click(function(){
        $(this).stop().animate({width : '90%'},'slow');
        $(this).siblings().stop().animate({width:'20%'},'slow');
        $(this).addClass('close');
        $(this).siblings().removeClass('close');
    })


    // 푸터
    $('.re_btn').click(function(){
        $('.container').eq(0).stop().slideToggle();
    })
    $('.re_btn2').click(function(){
        $('.container').eq(1).stop().slideToggle();
    })

})
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
        // if(wScroll >= cnt.eq(0).offset().top){
        //     dot.css({"background":"rgba(255,255,255,0.1)"});
        //     dot.find("a").css({"background":"rgba(255,255,255,0.5)"});
        //     dot.removeClass("active");
        //     dot.eq(0).addClass("active");
        //     dot.eq(0).find("a").css({"background":"#0cdaff"});
        // }
        // if(wScroll >= cnt.eq(1).offset().top){
        //     dot.css({"background":"rgba(0,0,0,0.7)"});
        //     dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
        //     dot.removeClass("active");
        //     dot.eq(1).addClass("active");
        //     dot.eq(1).find("a").css({"background":"#0189ff"});
        // }
        // if(wScroll >= cnt.eq(2).offset().top){
        //     dot.removeClass("active");
        //     dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
        //     dot.eq(2).addClass("active");
        //     dot.eq(2).find("a").css({"background":"#f0a91b"});
        // }
        // if(wScroll >= cnt.eq(3).offset().top){
        //     dot.removeClass("active");
        //     dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
        //     dot.eq(3).addClass("active");
        //     dot.eq(3).find("a").css({"background":"#fff"});
        // }
        // if(wScroll >= cnt.eq(4).offset().top){
        //     dot.removeClass("active");
        //     dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
        //     dot.eq(4).addClass("active");
        //     dot.eq(4).find("a").css({"background":"#d6130f"});
        // }
        // if(wScroll >= cnt.eq(5).offset().top){
        //     dot.removeClass("active");
        //     dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
        //     dot.eq(5).addClass("active");
        //     dot.eq(5).find("a").css({"background":"#a0ef08"});
        // }
        // if(wScroll >= cnt.eq(6).offset().top){
        //     dot.removeClass("active");
        //     dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
        //     dot.eq(6).addClass("active");
        //     dot.eq(6).find("a").css({"background":"#9517ff"});       
        // } 
    });
        return false;
})




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


$(function(){
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

    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        if(wScroll >= cnt.eq(0).offset().top){
            dot.css({"background":"rgba(255,255,255,0.1)"});
            dot.find("a").css({"background":"rgba(255,255,255,0.5)"});
            dot.removeClass("active");
            dot.eq(0).addClass("active");
            dot.eq(0).find("a").css({"background":"#0cdaff"});
        }
        if(wScroll >= cnt.eq(1).offset().top){
            dot.css({"background":"rgba(0,0,0,0.7)"});
            dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
            dot.removeClass("active");
            dot.eq(1).addClass("active");
            dot.eq(1).find("a").css({"background":"#0189ff"});
        }
        if(wScroll >= cnt.eq(2).offset().top){
            dot.removeClass("active");
            dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
            dot.eq(2).addClass("active");
            dot.eq(2).find("a").css({"background":"#f0a91b"});
        }
        if(wScroll >= cnt.eq(3).offset().top){
            dot.removeClass("active");
            dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
            dot.eq(3).addClass("active");
            dot.eq(3).find("a").css({"background":"#fff"});
        }
        if(wScroll >= cnt.eq(4).offset().top){
            dot.removeClass("active");
            dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
            dot.eq(4).addClass("active");
            dot.eq(4).find("a").css({"background":"#d6130f"});
        }
        if(wScroll >= cnt.eq(5).offset().top){
            dot.removeClass("active");
            dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
            dot.eq(5).addClass("active");
            dot.eq(5).find("a").css({"background":"#a0ef08"});
        }
        if(wScroll >= cnt.eq(6).offset().top){
            dot.removeClass("active");
            dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
            dot.eq(6).addClass("active");
            dot.eq(6).find("a").css({"background":"#9517ff"});       
        } 
    });
        return false;
});

$(function(){
    var win_h = $(window).height();
    $('.box').each(function(index){
         $(this).attr('data-index', win_h * index);
    });

    $('.box').on('mousewheel',function(e){
        var pageV = parseInt($(this).attr('data-index'));
        console.log(pageV);
        if(e.originalEvent.wheelDelta >= 0 ){
            $('html,body').stop().animate({scrollTop : pageV - win_h});
            return false;
        } else if(e.originalEvent.wheelDelta < 0){
            $('html,body').stop().animate({scrollTop : pageV + win_h});
            return false;
        }
    });
});
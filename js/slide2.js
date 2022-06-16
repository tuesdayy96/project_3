$(function(){
    toSlide();
})

function toSlide(){
    var wid = 0;
    var now_num = 0;
    var slide_length = 0;
    var auto = null;
    var dot2 = $('#dot2 > li');
    var boxwrap = $('#boxwrap');
    var inslide = boxwrap.children('div');

    function init(){
        wid = $('.p1').width();
        now_num = $('#dot2 > li.active').index();
        slide_length = dot2.length;
    }

    function eventSlide(){

        // 하단 dot 클릭시
        dot2.click(function(){
            now_num = $(this).index();
            slideMove();
        });

        var showbar = document.querySelector('#dot2');
        showbar.addEventListener('animationiteration',autoSlide);
        // autoSlideStop();
        showbar.addEventListener('animationstart',re_autoSlide);
        reSize();
    }

        // 자동실행
        function autoSlide(){
    
                nextScreen();
    
        }
        // 자동실행 중지
        function autoSlideStop(){
        dot2.mouseenter(function (){
            clearInterval(auto);
            });
        }
        // 자동재생 재실행
        function re_autoSlide(){
            dot2.mouseleave(function(){
                auto = setInterval(function(){
                    nextScreen();
                });
            });
        }

        // 다음으로 넘기기
        function nextScreen() {
            if (now_num == slide_length - 1) {
              now_num = 0;
            } else {
              now_num++;
            }
            slideMove();
          }
        
        // 슬라이드
        function slideMove(){
            boxwrap.stop().animate({
                marginLeft : -wid * now_num
            });
            dot2.removeClass('active');
            dot2.eq(now_num).addClass('active');
        }

        // 사이즈 재조정
        function reSize(){
            $(window).resize(function(){
                init();
                boxwrap.css({
                    marginLeft : -wid * now_num
                });
            })
        }
        init();
        eventSlide();
}
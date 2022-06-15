$(function(){
    var dot2 = $('#dot2 li');
    var cnt2 = $('#boxwrap .bxb');
    var index = 0;
    dot2.click(function(e){
        e.preventDefault();
        if(index == 0){
            $('#boxwrap').stop().animate({marginLeft : -$(cnt2[index]).width()});
            $('.bxb:first').appendTo('#boxwrap');
            index++;
            return index;
        }
    })
    
    function slide(){
        $('#boxwrap').stop().animate({marginLeft: -$('.bxb:first').width()}, function(){
            $('.bxb:first').appendTo('#boxwrap');
            $('#boxwrap').css({marginLeft:0});
        });
        }
    setInterval(slide,6000);
})


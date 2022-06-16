$(function(){
    var dot2 = $('#dot2 li');
    dot2.each(function(a){
        $(this).attr('dot_idx',a);
    })
   for(var i=0;i<dot2.length;i++){
    var screenIdx = 0;
        dot2.eq(i).click(function(){ 
        index = $(this).index();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        if(screenIdx < index){
            $('#boxwrap').stop().animate({
                marginLeft : -(index * 100) +'vw'
            },'slow');
            screenIdx += 1;
        } else if(screenIdx >= index){
            $('#boxwrap').stop().animate({
                marginLeft : -(index * 100) +'vw'
            },'slow');
            screenIdx -= 1;
        }
        if(screenIdx >= 3){
            screenIdx = 2;
        }
       })
}
    
})
// function slide(){
    //     $('#boxwrap').stop().animate({marginLeft: -100+'vw'}, function(){
    //         $('.bxb:first').appendTo('#bowwrap');
    //         $('#boxwrap').css({marginLeft:0});
    //     });
    // }

    // setInterval(slide,5000);
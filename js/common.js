$(function(){
     // 푸터
    $('.re_btn').click(function(){
        $('.container').eq(0).stop().slideToggle();
    })
    $('.re_btn2').click(function(){
        $('.container').eq(1).stop().slideToggle();
    })
})


// 800px이하 메뉴 상호작용
function showMenu(){
    document.querySelector('.head_outer').style.width = '60%';
}
function hideMenu(){
    document.querySelector('.head_outer').style.width = 0;
}
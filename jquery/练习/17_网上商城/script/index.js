/**
 * Created by apple on 17/12/3.
 */
/***轮播图开始**/
var prevIdx = 0;
var timer;
$('#jnBtn a').on('mouseover',function(){
    $this = $(this);
    $(this).addClass('chos').siblings().removeClass('chos');

    //$('#JS_imgWrap img').eq(index).stop(true,true).fadeIn().siblings().fadeOut();
    $('#JS_imgWrap img').eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut();

    prevIdx = $this.index();
});
run();
function run(){
    timer = setInterval(function(){
        prevIdx++;
        if(prevIdx == $('#JS_imgWrap img').length){
            prevIdx = 0;
        }
        $('#jnBtn a').eq(prevIdx).triggerHandler('mouseover');
    },1000);
}
$('#jnImageroll').on('mouseover',function(){
    clearInterval(timer);
}).on('mouseout',function(){
    run();
});


/***轮播图结束**/
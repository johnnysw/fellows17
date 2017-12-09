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
/***最新动态**/

$('.tooltip').on('mouseover',function(e){
    this.currTitle = this.title;
    $('<div id="tip">'+this.currTitle+'</div>').appendTo('body').offset({
        left: e.pageX+20,
        top: e.pageY+20
    });
    $(this).attr('title','');
}).on('mousemove',function(e){
    $('#tip').offset({
        left: e.pageX+20,
        top: e.pageY+20
    });
}).on('mouseout',function(){
    $('#tip').remove();
    $(this).attr('title',this.currTitle);
});

/***最新动态结束**/


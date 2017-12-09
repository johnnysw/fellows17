/**
 * Created by apple on 17/12/3.
 */
/*放大镜开始*/

$('.color_change img').on('click',function(){
    $(this).addClass('hover').parent().siblings().find('img').removeClass('hover');
    var $src = $(this).attr('src');
    //'images/pro_img/green.jpg'  ==>'images/pro_img/green_one_small.jpg'
    var i = $src.indexOf('.');  //21
    var $path = $src.substring(0,i);  //images/pro_img/green
    var $format = $src.substring(i);  //.jpg
    $('#bigImg').attr('src',$path+"_one_small"+$format);
    //'images/pro_img/green'  == >green
    var $color = $path.replace('images/pro_img/','');  //green
    $('.imgList li').addClass('hide');
    $('.imgList_'+$color).removeClass('hide');
   // $('.imgList li:not(.imgList_'+$color+')').addClass('hide');
});
$('.imgList li img').on('click',function(){
  //images/pro_img/yellow_two.jpg  ==> images/pro_img/yellow_two_small.jpg
    var $src = $(this).attr('src');//images/pro_img/yellow_two.jpg
    var i = $src.indexOf('.');
    var $path = $src.substring(0,i)//images/pro_img/yellow_two
    var format = $src.substring(i);//.jpg
    $('#bigImg').attr('src',$path+'_small'+format);

});
/*放大镜结束*/
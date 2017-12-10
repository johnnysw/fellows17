/**
 * Created by apple on 17/12/10.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
define(['jquery'],function($){
    return {
        open:function(arg){
            this.defaultValue = {
                width:300,
                height:200
            }
            var html = '<div class="mask">'
                            +'<div class="container">'
                                +'<div class="title">'
                                    +'<h2>aaaaa</h2>'
                                    +'<span class="close">×</span>'
                                +'</div>'
                                +'<div class="content">fghjhgfghg</div>'
                            +'</div>'
                        +'</div>';

            $('body').append(html);
            var value = $.extend(this.defaultValue,arg);
            $('.container').css({
                width:value.width,
                height:value.height,
                marginLeft:-value.width/2,
                marginTop:-value.height/2
            });
            $('.title h2').html(arg.title);
            $('.content').html(arg.content);



        },
        close:function(){

        }
    }

});
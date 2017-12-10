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
        open:function(){
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


        },
        close:function(){

        }
    }

});
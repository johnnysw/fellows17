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
            var _this = this;
            this.defaultValue = {
                width:300,
                height:200
            }
            var value = $.extend(this.defaultValue,arg);
            this.$mask = $('<div class="mask"></div>');
            this.$container = $('<div class="container"></div>');
            this.$title = $('<div class="title"></div>');
            this.$H2 = $('<h2></h2>').html(value.title);
            this.$close = $('<span class="close">✘</span>')
                .on('click',function(){
                    _this.close();
                });
            this.$content = $('<div class="content"></div>');
            this.$container.appendTo(this.$mask).append(this.$title).append(this.$content)
                .css({
                    width:value.width,
                    height:value.height,
                    marginLeft:-value.width/2,
                    marginTop:-value.height/2
                });
            this.$title.append(this.$H2).append(this.$close);
            this.$content.load(value.content);
            $('body').append(this.$mask);
        },
        close:function(){
            this.$mask.remove();
        }
    }

});
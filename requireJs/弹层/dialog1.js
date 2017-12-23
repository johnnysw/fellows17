/**
 * Created by apple on 17/12/10.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
define(['jquery'],function($){
    function Dialog(arg){
        var _this = this;

        this.defaultValue = {
            width:300,
            height:200
        };
        $.extend(this.defaultValue,arg);
        this.$mask = $('<div class="mask"></div>');
        this.$container = $('<div class="container"></div>');
        this.$title = $('<div class="title"></div>');
        this.$H2 = $('<h2></h2>').html(this.defaultValue.title);
        this.$close = $('<span class="close">✘</span>')
            .on('click',function(){
                _this.close();
            });
        this.$content = $('<div class="content"></div>');
    }
    Dialog.prototype.open = function(){
        this.$container.appendTo(this.$mask).append(this.$title).append(this.$content)
            .css({
                width:this.defaultValue.width,
                height:this.defaultValue.height,
                marginLeft:-this.defaultValue.width/2,
                marginTop:-this.defaultValue.height/2
            });
        this.$title.append(this.$H2).append(this.$close);
        this.$content.load(this.defaultValue.content);
        $('body').append(this.$mask);
    };
    Dialog.prototype.close = function(){
        this.$mask.remove();
    }
    return Dialog;


});
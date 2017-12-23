/**
 * Created by apple on 17/12/23.
 */
define(['jquery'],function($){
    function Carousel(){

        this.$container = $('<div class="carousel-container"></div>');
        this.$imgBox = $('<div class="carousel-img-box"></div>');
        this.$tab = $('<ul class="carousel-tab"></ul>');
        this.$prev = $('<span class="carousel-prev">&lt;</span>');
        this.$next = $('<span class="carousel-next">&gt;</span>');
        this.defaultOption = {
            buttonType:'squire',//circle squire
            btnPos:'bottom', //center bottom
            speed:'1000'
        }

    }
    Carousel.prototype.init = function(option){
        var iNow = 0;
        var _this = this;
        $.extend(this.defaultOption,option);
        console.log(this.defaultOption.buttonType);

        this.$container.append(this.$imgBox).append(this.$tab)
            .append(this.$prev).append(this.$next);

        for(var i=0; i<this.defaultOption.imgDate.length; i++){
            var cls = (i==0)?" selected":"";
            this.$imgBox.append($('<img class="'+cls+'" src="'+this.defaultOption.imgDate[i]+'" />'));
            this.$tab.append($('<li class="'+this.defaultOption.buttonType+cls+'">'+(i+1)+'</li>'))
        }
        //this.defaultOption.btnPos  == center ? carousel-prev-center:carousel-prev-bottom
        this.$prev.addClass('carousel-prev-'+this.defaultOption.btnPos);
        this.$next.addClass('carousel-next-'+this.defaultOption.btnPos);
        $(this.defaultOption.selector).append(this.$container);

        $('li',this.$tab).on('click',function(){

            changeImg($(this).index());
            iNow = $(this).index();
        });
        function changeImg(idx){
            $('li',_this.$tab).eq(idx).addClass('selected').siblings().removeClass('selected');
            $('img',_this.$imgBox).eq(idx).addClass('selected').siblings().removeClass('selected');
        }
        this.$prev.on('click',function(){
            iNow--;
            if(iNow == -1){
                iNow = _this.defaultOption.imgDate.length-1;
            }
            changeImg(iNow);
        });
        this.$next.on('click',function(){
            iNow++;
            if(iNow == _this.defaultOption.imgDate.length){
                iNow = 0;
            }
            changeImg(iNow);
        });

        function run(){
            console.log(_this);
            _this.timer = setInterval(function(){
                _this.$next.trigger('click');
            },_this.defaultOption.speed);
        }
        run();


        this.$container.hover(function(){
            clearInterval(_this.timer);
        },function(){
            run();
        });





    }





    return Carousel;

});
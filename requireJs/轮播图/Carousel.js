/**
 * Created by apple on 17/12/23.
 */
define(function(){
    function Carousel(){

        this.$container = $('<div class="carousel-container"></div>');
        this.$imgBox = $('<div class="carousel-img-box"></div>');
        this.$tab = $('<ul class="carousel-tab"></ul>');
        this.$prev = $('<span class="carousel-prev">&lt;</span>');
        this.$next = $('<span class="carousel-next">&gt;</span>');
    }



    return Carousel;

});
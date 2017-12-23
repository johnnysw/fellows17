/**
 * Created by apple on 17/12/10.
 */
/*
require(['add'],function(add1){

    console.log(add1(3,4));

});*/

require(['sortArray'],function(sortArray){
    var arr = [1,3,5,90,13,2];
    /*var obj = {
        name:'hjkjhhj'
    }*/

    console.log(sortArray(arr));
});
//AMD async module define  AMD 是提前执行，CMD 是延迟执行
//  AMD 推崇依赖前置, CMD 推崇依赖就近


define(function(require){
    var arr = [1,3,5,90,13,2];
    var obj = {
        name:'hjkjhhj'
    }
    var sortArray = require('sortArray');
    console.log(sortArray(arr));
});
//CMD common module define

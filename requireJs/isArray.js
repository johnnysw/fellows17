/**
 * Created by apple on 17/12/10.
 */
define(function(){
    function isArray(arr){
        return (arr instanceof Array && arr.constructor == Array);
        //constructor  返回的是构造函数
        //instanceof arr是否是Array的一个实例
    }
    return isArray;
});
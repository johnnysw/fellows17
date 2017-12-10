/**
 * Created by apple on 17/12/10.
 */
define(function(){
    function isArray(arr){
        return (arr instanceof Array && arr.constructor == Array);
    }
    return isArray;
});
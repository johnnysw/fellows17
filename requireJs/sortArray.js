/**
 * Created by apple on 17/12/10.
 */
define(['isArray'],function(isArray){
    function sortArray(arr){
        if(isArray(arr)){//判断是否是数组
            return arr.sort(function(a,b){
                return a-b;
            });
        }else{
            return '请输入数组。。。';
        }
    }
    return sortArray;
});
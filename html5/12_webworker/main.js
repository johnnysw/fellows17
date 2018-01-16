/**
 * Created by apple on 18/1/16.
 */
var worker = new Worker('task.js');
worker.onmessage = function(e){
    console.log(e.data);
};
worker.postMessage('aaaaaaaa');

console.log('bbbbb');

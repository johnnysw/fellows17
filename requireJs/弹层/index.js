/**
 * Created by apple on 17/12/10.
 */
requirejs.config({
   paths: {
      jquery: 'jquery-1.12.4'
   }
});
require(['jquery','dialog'],function($,dialog){

   $('#btn').on('click',function(){
      dialog.open();
   });
});
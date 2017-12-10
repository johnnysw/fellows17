/**
 * Created by apple on 17/12/10.
 */
requirejs.config({
   paths: {
      jquery: 'jquery-1.12.4'
   }
});
require(['jquery','dialog1'],function($,dialog){

   $('#btn').on('click',function(){
      dialog.open({
         width:800,
         title:'bighj',
         content:'content.html'
      });

   });
   $('body').on('click','#cancel',function(){
      dialog.close();
   });
});
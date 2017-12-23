/**
 * Created by apple on 17/12/10.
 */
requirejs.config({
   paths: {
      jquery: 'jquery-1.12.4'
   }
});
require(['jquery','dialog1'],function($,Dialog){

   $('#btn').on('click',function(){
      var dialog1 = new Dialog({
         width:800,
         title:'bighj',
         content:'content.html'
      });

      dialog1.open();

      $('body').on('click','#cancel',function(){
         dialog1.close();
      });
   });

   $('body').on('click','#yes',function(){
      var dialog2 = new Dialog({
         width:200,
         title:'请输入用户名',
         content:'content1.html'
      });
      dialog2.open();
   });
});
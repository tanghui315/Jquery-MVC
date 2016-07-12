require.config({
   baseUrl:'./js',
 /*  paths:{
       'jquery':'lib/jquery-1.12.4.min.js',
       'jtemplates':'lib/jquery-jtemplates.js',
       'router':['lib/cbsplit.js','lib/jquery.ba-hashchange.js','lib/jquery.router.js']
   }, */
   paths:{
       'jquery':'lib/jquery',
       //'jtemplates':'lib/jtemplates',
       'hashchange':'lib/hashchange',
       'cbsplit':'lib/cbsplit',
       'jrouter':'lib/jrouter'
   },
   shim:{
       'lib/jrouter':{
           deps:['jquery','cbsplit'],
           exports:'$'
       },
       'lib/hashchange':{
           deps:['jquery'],
           exports:'$'
       },
       'lib/jtemplates':{
           deps:['jquery'],
           exports:'$'
       }
   } 
   
});

var config={
         menu:{
             temp:"template/main/menu.html",
             controller:'controllers/MenuController'
         },
         head:{
              temp:"template/main/head.html",
              controller:"HeadController"
         }
};



//初始化
require(['app'],function(app,$){
    app.init();
});
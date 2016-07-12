define(function() {
    'use strict';
    return {
         menu:{
             temp:"template/main/menu.html",
             controller:'controllers/MenuController'
         },
         head:{
              temp:"template/main/head.html",
              controller:"controllers/HeadController"
         },
         content:{
              temp:"template/main/content.html",
              controller:"controllers/MainController"
         },
         task:{
              temp:"template/task.html",
              controller:"controllers/TaskController"
         }
    };
});
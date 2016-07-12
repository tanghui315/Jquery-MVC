define([
    'lib/jrouter',
    'config',
    'lib/hashchange'
    ],function($,config) {
    

    return {
        hashPro:function(){
                var hash = location.hash.replace(/^#/, '');
                    if (hash) {
                        var match = $.routeMatches(hash);
                       
                        if (match) {
                                var template = $(match.route.template);
                                
                                if (template.length) {
                                       // match.args['template']=template; match.route.callbac
                                        var text = match.route.callback.apply(match, match.args);
                                        template.html(text);
                                }
                        }
                    }
        },
        init:function(){
              var menu=$('#menu');
              var head=$('#head');
              var content=$('#content');
              
              var self=this;
              menu.load(config.menu.temp,function(){
                    require([config.menu.controller],function(menu){
                         menu.init($);
                    });   
              }); 
              head.load(config.head.temp,function(){
                    require([config.head.controller],function(head){
                         head.init($);
                    });   
              }); 
              content.load(config.content.temp,function(){
                    require([config.content.controller],function(content){
                         content.init($);
                    });   
                 //  content.route('task/',function(request){   return ' <b>content test</b>: ' +JSON.stringify(request.params); });
                 //进行router绑定
                   content.route('task/',function(request){ 
                        //console.log(request);
                        var self =this;
                        //require(['lib/jtemplates'],function($){
                            $(self.route.template).load(config.task.temp,function(){
                                        require([config.task.controller],function(task){
                                            task.getList($(self.route.template));
                                        });
                            });
                       // });
                   });
                   self.hashPro();
             }); 
        
        
            
             // head.route('task/',function(request){  return ' head test: ' + JSON.stringify(request.params); });
          
              $(window).bind('hashchange', function(e, triggered) {
                       self.hashPro();
               });
               
          
        }
    };
           
});
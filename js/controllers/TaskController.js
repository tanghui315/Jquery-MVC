define(['models/TaskModel','lib/jtemplates'],function(taskModel) {
   var Task={};
   Task.getList=function(ele){
        ele.setTemplateElement("task_list_template", null, { filter_data: false });
        ele.processTemplate(taskModel.getTaskData());
   };
   
   return Task;
});
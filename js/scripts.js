$(function(){
  $("h1").click(function(){
    var flavors = ['milk', 'coco', 'blueberry', 'dirty wu', 'jacksonthriller', 'jdilla','penut butter', 'trash', 'compost', 'hazelnut']
    flavors.forEach(function(flavor){
      $('#cream').append("<li>" + flavor + "</li>")
    });
  });
});

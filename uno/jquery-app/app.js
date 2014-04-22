'use strict';
$(function(){
    $.get("http://localhost:8000/rest-mock/entities.json").done(function(data){
        console.log("data: %o",data);
        var tpl = $("#my_tpl").html();
        console.log("tpl: %s",tpl);
        var tplFilled = _.template(tpl,data);
        console.log("tplFilled: %s",tplFilled);
        $("#container").append(tplFilled);
    })

});
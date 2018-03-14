var url = "http://localhost:8080/bill/";
function msg(msg){
    layer.msg(msg, {icon: 5});
    return false;
}


function ajaxRequest(url,method,data,callback) {
    $.ajax({
        url:url,
        type:method,
        data:JSON.stringify(data),
        dataType:"json",
        beforeSend:function (xhr){
            xhr.setRequestHeader("Content-Type","application/json;charset=UTF-8");
            layer.load();
        },
        success:callback,
        error:function (xhr) {
            getMessage(xhr.responseJSON.error.key);
        },
        complete:function (xhr,ts) {
            layer.closeAll('loading');
        }
    });
}

function getMessage(key) {
    $.getJSON('api.json',function (data) {
        $.each(data,function (index,item) {
            if(key === item.key){
                layer.msg(item.message, {
                    offset: 't',
                    anim: 6
                });
                return;
            }
        })
    })
}

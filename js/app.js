var url = "http://www.joseph.xin/bill/";
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

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    // var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    // if (strDate >= 0 && strDate <= 9) {
    //     strDate = "0" + strDate;
    // }
    // var currentdate = year + seperator1 + month + seperator1 + strDate;
    var currentdate = year + seperator1 + month;
    return currentdate;
}

function getClassName() {
    var classArray = ["list-group-item-info","list-group-item-warning","list-group-item-danger","list-group-item-primary","list-group-item-success"];
    var index = parseInt(Math.random() * classArray.length);
    return classArray[index];
}

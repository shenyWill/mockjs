import './../scss/index.scss';
import './../mock';
$(function () {
    $.ajax({
        url: 'http://12345.com/list',
        dataType: 'json',
        type:'post',
        data: "{'id' = 1}",
        success: function (e) {
            console.log(e)
        }
    })
})

	/*定义全局变量*/
	var  root_url = "http://110.90.126.101:9080/";/* 接口地址 */
	var  Token    = store.get("token");
	/*设置AJAX的全局*/
	$.ajaxSetup( {
		    url: "http://110.90.126.101:9080/" , // 默认URL
		    aysnc: false , // 默认同步加载
		    type: "POST" , // 默认使用POST方式
		    dataType: "json",
		    contentType: "application/json",
		    scriptCharset: 'utf-8',
		    headers: { // 默认添加请求头
		        "X-Auth-Token":"" 
		    } ,
		    beforeSend: function (xhr) {
		        //发送ajax请求之前向http的head里面加入验证信息
		        xhr.setRequestHeader("X-Auth-Token", Token);
		    },
		    error: function(jqXHR, textStatus, errorMsg){
		        alert( '发送AJAX请求到"' + this.url + '"时出错[' + jqXHR.status + ']：' + errorMsg );        
		    }
	});
	
   
    /* 返回上一页 */
   
   $(document).ready(function(){
		
		$(document).on("click", ".ico-left", function() {
			window.history.go(-1);
		});
	});	
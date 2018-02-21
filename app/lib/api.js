/*!
 * =====================================================
 * API 接口对接文档
 *
 * =====================================================
 */

require(['jquery','jquery.cookie','light','md5'], function($) {
		
	console.log($.device);
	
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
	
	/* 教师登录 */
	
	$(document).on("click", "#login-btn", function() {
	   
	   var schoolId= $("#schoolId").val();
	   var username= $("#username").val();
	   var psw	   = $("#psw").val();
	    if(schoolId.length==0 || username.length==0 || psw.length==0 ){ 
	    	$.toast("登录信息不完整，请重新填写！");
	    	return false; 
	    }
	    var loginval = {
	            schoolId:schoolId,
	            username:username,
	            password:hex_md5(psw)
	       };
	    var loginval = JSON.stringify(loginval);
	    $.ajax( {
		    url: root_url+"uiLogin/teacherLogin",
		    data:loginval,
		    success: function( data, textStatus, jqXHR ){
		        
		        if(data.code==1){
		        	console.log(data);	        	
		        	store.set('userinfo',data);/* 记录凭证token */
		        	store.set('token',data.returnData['token']);/* 记录凭证token */
		        	console.log(data.returnData['token']);
		        	$.alert('登录成功',function () {
				        location.href ="home.html";
				    });
		        }else{
		        	$.toast(data.msg);
		        	return false;
		        }	        
		    }
		});
	   
	});
	
	
	
	
});
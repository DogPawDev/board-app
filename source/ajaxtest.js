var obj = {"test": "kim"};


$.ajax({
    type : "POST",                               //1
    url : "http://127.0.0.1:8080/board/2",                          //2
    dataType : "text",     
    contentType: "application/json",                      //3
    data : JSON.stringify(obj),            //
    success : function(responseData){
        console.log(responseData);
        alert("게시물 작성 완료");
        //location.href="/";


        
    },                       //6
    error   : function(){
        console.log("eroor");
        alert("faile");
    }                          //7

});



$.ajax({
    type : "GET",                               //1
    url : "http://127.0.0.1:8080/board/3",                          //2
    dataType : "json",                         //3      //
    success : function(responseData){
        console.log(responseData);
        alert("게시물 작성 완료");
        //location.href="/";


        
    },                       //6
    error   : function(){
        console.log("eroor");
        alert("faile");
    }                          //7

});
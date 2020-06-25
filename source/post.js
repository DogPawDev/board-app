//const summernoteAPI = $('#summernote').summernote('code');
$(document).ready(function(){
    
    const loadCategoryForm = $('#division'); //카테고리 불러오기

    const loadLinkListTag = $('#linkList'); // 이미지 임시 저장 태그 가저오기

    
    let loadPostData;      //게시물 작성 데이터 , 제목, 내용, 이미지, 등등
    
    const loadTempImgList={
        base64src : null,
        dataFileName:null,
        style:null
    } // 임시 이미지 저장 객체

    const insertCategory=[
            '자유',
          '개발'
    ]; // 카테고리 삽입 내용



    //카테고리 생성
    for(let i=0; i<insertCategory.length;i++){
        loadCategoryForm.append("<option>"+insertCategory[i]+"</option>");
    }


//입력 form 생성
const editor = $('#summernote').summernote({
    placeholder: '입력 하시면 됩니다.',
    lang: 'ko-KR',
    tabsize: 2,
    codeviewFilter: false,
    codeviewIframeFilter: true,
    minHeight: null,             // set minimum height of editor
    maxHeight: null,             // set maximum height of editor
    focus: true,                  // set focus to editable area after initializing summernote
    callbacks: {
      onImageUpload: function(files ,editor, welEditable) {
        // upload image to server and create imgNode...
        console.log(files[0]);
        console.log(typeof(files[0]));
        uploadSummernoteImageFile(files[0],editor, welEditable);




      }
    },
    toolbar:[
        ['style', ['style']],
        ['font', ['bold', 'underline', 'clear']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['table', ['table']],
        ['insert', ['link', 'picture', 'video']],
        ['view', ['help']]
    ]
  });


// 게시물 작성시 빈칸 체크 
  $("#submit").on("click", function(e){
    if ($('#summernote').summernote('isEmpty')|| $('#input').val()==='') {
       $('#input').attr( 'placeholder', '제목 입력' );
       $('#input').addClass('is-danger');
       alert('제목과 내용을 입력해');
   
       }


       // 썸머노트 내용 불러오는 변수
       var markupStr = $('#summernote').summernote('code');
        
       console.log(markupStr);
        console.log(typeof(markupStr));
       //문자열

        loadPostData = $("#formTag").serializeObject();
        loadPostData.content=markupStr;
       //게시물 입력값 저장
       //내용도 추가


       let loadImgTag = $('img');
       //이미지 태그 읽어오기

       let tmpArr=[];
       //이미지들이 담길 임시 변수


       //이미지 내용을 저장하는 반복문
       for(let i = 0; i<loadImgTag.length;i++){
     
               loadTempImgList.base64src=loadImgTag[i].attributes[0].nodeValue;
               //base64 내용

               loadTempImgList.dataFileName=loadImgTag[i].attributes[1].nodeValue;
               //파일 이름

               loadTempImgList.style=loadImgTag[i].attributes[2].nodeValue;
               //이미지 크기 (게시물 표현할 때 사용됨)

               tmpArr.push(loadTempImgList);
                //배열에 저장

       }
       console.log(tmpArr);
       console.log(loadImgTag);
        console.log(loadPostData);
       
     
   });  

 function uploadSummernoteImageFile(file, editor ,welEditable) {
		data = new FormData();
		data.append("file", file);
		$.ajax({
      crossOrigin : true,
			data : data,
			type : "POST",
			url : "http://127.0.0.1:8080/board/board/uploadSummernoteImageFile",
			contentType : false,
			processData : false,
			success : function(data) {
        console.log(data.url);
            	//항상 업로드된 파일의 url이 있어야 한다.
			
        
          
    
      }
		});
	}
  
});



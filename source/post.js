//const summernoteAPI = $('#summernote').summernote('code');
$(document).ready(function(){
    
    const categoryForm = $('#division');
    const categoryInner=[
            '자유',
          '개발'
    ];



    //카테고리 생성
    for(let i=0; i<categoryInner.length;i++){
        categoryForm.append("<option>"+categoryInner[i]+"</option>");
    }


//입력 form 생성
$('#summernote').summernote({
    placeholder: '입력 하시면 됩니다.',
    lang: 'ko-KR',
    tabsize: 2,
    codeviewFilter: false,
    codeviewIframeFilter: true,
    minHeight: null,             // set minimum height of editor
    maxHeight: null,             // set maximum height of editor
    focus: true,                  // set focus to editable area after initializing summernote
    callbacks:{
        onImageUpload : function(files){
            uploadSummernoteImageFile(files[0],this);
        }
    },
    toolbar: [
      ['style', ['style']],
      ['font', ['bold', 'underline', 'clear']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['table', ['table']],
      ['insert', ['link', 'picture']],
      ['view', ['help']]
    ]
  });

  


  $("#submit").on("click", function(e){
     if ($('#summernote').summernote('isEmpty')|| $('#input').val()==='') {
        $('#input').attr( 'placeholder', '제목 입력' );
        $('#input').addClass('is-danger');
        alert('제목과 내용을 입력해');
    
        }
    
    });  


   

function uploadSummernoteImageFile(file, editor) {
    data = new FormData();
    data.append("file", file);
    $.ajax({
      
    });
}









});




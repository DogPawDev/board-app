
//import hello_word from "./hello.js";
//import world_word from "./world.js";

const Nav_Div_Parent_String = "tabs is-centered";
//const Nav_Div_Child_String = "title";
const Class_String = "class";


const PageViewMaxLimit = 5; //해당 부분에 서버로부터 페이징 번호 넣어주기

const navTag = document.querySelector('#board-page-num');
const board_body = document.querySelector('#board-body');




function currentPageNum(){
    let currentPage =1;
    return {
        get_currentPageNum:()=>{
            return currentPageNum;
        },
        set_currentPageNum:(_currentPageNum)=>{
            currentPageNum=_currentPageNum;
        }
    }
}


const currentPage= currentPageNum();

const Boader={
    createBoardPageBtn:function(pageNumber){

      
        let divParent = document.createElement("ul");
        let divchild = document.createElement("li");
        let aTag = document.createElement("a");


       

            divParent.appendChild(divchild);
            divParent.setAttribute("id","board-page-number"+pageNumber);
            divchild.appendChild(aTag);
            navTag.appendChild(divParent);
            aTag.innerText=pageNumber;
        return divParent;
    } 
    ,createBoard:function(){
        
    $.ajax({
    type : "GET",                           
    url : "http://127.0.0.1:8080/board/test",                  
    dataType : "json",                        
    success : function(responseData){
        console.log(responseData);
      
       



        //location.href="/";


        
    },                  
    error   : function(){
        console.log("eroor");
        alert("faile");
    }                   

        });
        
    }
   
}



for(let i=1;i<=PageViewMaxLimit;i++){
    let pageBtn={
        arr:[]
    }
    pageBtn.arr.push(Boader.createBoardPageBtn(i));
    let temp = document.getElementById("board-page-number"+i);
    temp.addEventListener("click",()=>{

        temp.classList.toggle("is-active");
        
    });
}

//Boader.createBoard();
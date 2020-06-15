
//import hello_word from "./hello.js";
//import world_word from "./world.js";

const Nav_Div_Parent_String = "level-item has-text-centere";
const Nav_Div_Child_String = "title";
const Class_String = "class";


const PageViewMaxLimit = 4; //해당 부분에 서버로부터 페이징 번호 넣어주기

const BoaderPageNav={
    createBoardPage:function(pageNumberMax){

        let navTag = document.querySelector('#board-page-num');
        
        let divParent = document.createElement("div");
        let divchild = document.createElement("div");
        let pTag = document.createElement("p");



        divParent.setAttribute(Class_String,Nav_Div_Parent_String);
        pTag.setAttribute(Class_String,Nav_Div_Child_String);

    
       

            divParent.appendChild(divchild);
            divchild.appendChild(pTag);
            navTag.appendChild(divParent);
            pTag.innerText=pageNumberMax;
        
    } 
   
}
for(let i=1;i<=PageViewMaxLimit;i++){
    BoaderPageNav.createBoardPage(i);
}



//document.querySelector('#root').innerHTML = hello_word +' '+world_word;


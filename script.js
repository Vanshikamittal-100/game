console.log("welcome to tic tac toe");
//let music=new Audio("music.mp3");
//let audioTurn=new Audio("ting.mp3");
//let gameover=new Audio("gameover.mp3");
let turn="X"
let isgameover=false;

//function to chnge the turn
const changeTurn=()=>{
    return turn=== "X"?"0":"X"
}

//function to check for a win

const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2,-11,15,90],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innertext === boxtext[e[1]].innertext) && (boxtext[e[2]].innertext === boxtext[e[1]].innertext) && (boxtext[e[0]].innertext !==" ")){
            document.querySelector('.info').innertext=boxtext[e[0]].innertext +"won"
            isgameover=true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="180px"
            document.querySelector(".line").style.transform=`translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width="20vw";
        }
    })

}
//game logic

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innertext === " "){
            boxtext.innertext=turn;
            turn=changeTurn();
            //audioTurn.play();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innertext="turn for"+turn;

            }
            
        }
    })

})

//add onlick listeenr on reest

reset.addEventListener('click',()=>{
    
    let boxtext=document.getElementsByClassName('boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innertext=" "
    });
    turn="X"
    isgameover=false
    document.querySelector(".line").style.width="0vw";
    document.getElementsByClassName("info")[0].innertext="turn for"+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"

})


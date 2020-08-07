//htmlElements
const statusDiv=document.querySelector('.status');
const resetDiv=document.querySelector('.reset');
const cellDivs=document.querySelectorAll('.game-cell');

//game-variations
let gameIsLive=true;
let xIsNext =true;

//functions

const handleWin=(letter)=>
{
    gameIsLive=false;
    let winner=letter;
    if(winner=='o')
    {
        statusDiv.innerHTML='<span class="blue">o has Won!!</span>';
    }
    else
    {
        statusDiv.innerHTML='<span class="blue">x has Won!!</span>';
    }
}

const checkGameStatus=()=>{
    const topLeft=cellDivs[0].classList[1];
    const topMiddle=cellDivs[1].classList[1];
    const topRight=cellDivs[2].classList[1];
    const middleLeft=cellDivs[3].classList[1];
    const middleMiddle=cellDivs[4].classList[1];
    const middleRight=cellDivs[5].classList[1];
    const bottomLeft=cellDivs[6].classList[1];
    const bottomMiddle=cellDivs[7].classList[1];
    const bottomRight=cellDivs[8].classList[1];
    //console.log(topLeft,topMiddle,topRight,middleLeft,middleMiddle,middleRight,bottomLeft,bottomMiddle,bottomRight);
    
    //is there a winner?
    if((topLeft && topLeft===topMiddle&&topLeft===topRight))
    {
        handleWin(topLeft);
        cellDivs[0].classList.add("won");
        cellDivs[1].classList.add("won");
        cellDivs[2].classList.add("won");
    }
    else if(middleLeft&&middleLeft===middleMiddle&&middleLeft===middleRight)
    {
        handleWin(middleLeft);
        cellDivs[3].classList.add("won");
        cellDivs[4].classList.add("won");
        cellDivs[5].classList.add("won");
    }
    else if(bottomLeft&&bottomLeft===bottomMiddle&&bottomLeft===bottomRight)
    {
        handleWin(bottomLeft);
        cellDivs[6].classList.add("won");
        cellDivs[7].classList.add("won");
        cellDivs[8].classList.add("won");
    }
    else if(topLeft&&topLeft===middleLeft&&topLeft===bottomLeft)
    {
        handleWin(topLeft);
        cellDivs[0].classList.add("won");
        cellDivs[3].classList.add("won");
        cellDivs[6].classList.add("won");
    }
    else if(topMiddle&&topMiddle===middleMiddle&&topMiddle===bottomMiddle)
    {
        handleWin(topMiddle);
        cellDivs[1].classList.add("won");
        cellDivs[4].classList.add("won");
        cellDivs[7].classList.add("won");
    }
    else if(topRight&& topRight===middleRight&&topRight===bottomRight)
    {
        handleWin(topRight);
        cellDivs[2].classList.add("won");
        cellDivs[5].classList.add("won");
        cellDivs[8].classList.add("won");
    }
    else if(topLeft&& topLeft===middleMiddle&&topLeft===bottomRight)
    {
        handleWin(topLeft);
        cellDivs[0].classList.add("won");
        cellDivs[4].classList.add("won");
        cellDivs[8].classList.add("won");
    }
    else if(topRight&&topRight===middleMiddle&&topRight===bottomLeft)
    {
        handleWin(topRight);
        cellDivs[2].classList.add("won");
        cellDivs[4].classList.add("won");
        cellDivs[6].classList.add("won");
    }
    else if(topLeft&&topMiddle&&topRight&&middleLeft&&middleMiddle&&middleRight&&bottomLeft&&bottomMiddle&&bottomRight)
    {
        gameIsLive=false;
        statusDiv.innerHTML='<span class="blue">Game is Tied</span>';
    }
    else{
        xIsNext=!xIsNext
         if(xIsNext)
         {
             statusDiv.innerHTML="X is next";
         }
         else
         {
             statusDiv.innerHTML="<span>o is next</span>";
         }
    }

}

//event handlers
const handleReset=()=>{
    xIsNext=true;
    statusDiv.innerHTML="X is next";
    gameIsLive=true;
    for(const cellDiv of cellDivs)
    {
        cellDiv.classList.remove('x');
        cellDiv.classList.remove('o');
        cellDiv.classList.remove('won');
    }
}

const handleCellClick=(e)=>{
    //console.log(e.target.classList);
    
    //console.log("location",location);
    const classList=e.target.classList;
    //const loctaion=classList[1];
    if(!gameIsLive||classList[1]==='x'||classList[1]==='o'){return;}
    if(xIsNext)
    {
        classList.add('x');
        checkGameStatus();
    }
    else{
        classList.add('o');
        checkGameStatus();
    }
}
//event Listener
resetDiv.addEventListener('click',handleReset);
for(const cellDiv of cellDivs)
{
    cellDiv.addEventListener('click',handleCellClick);
}
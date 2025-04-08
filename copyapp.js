let userscore=0; //1
let compscore=0;//2
const choices=document.querySelectorAll(".choice");//3
const userscorepara=document.querySelector("#user-score"); //4
const compscorepara=document.querySelector("#comp-score");//5
const msg=document.querySelector("#msg"); //6

//generate computer choice.
const gencompchoice=()=>{ //9
    const options=["rock","paper","scissors"];  //9 //rock,paper,scissors
   const randidx= Math.floor(Math.random()*3); //9
   return options[randidx]; //9
};
//draw game.
const drawgame=()=>{ //12
    // console.log("Game was draw"); //13
    msg.innerText="Game was draw.Play again"; //13
    msg.style.backgroundColor="#081b31";


};
const showwinner=(userwin,userchoice,compchoice)=>{ //16 this userchoice and compchoice was besically shows on the screen.
if(userwin){ //16
    userscore++;
    userscorepara.innerText=userscore;
msg.innerText=`You Win! ${userchoice} beats ${compchoice}`;
msg.style.backgroundColor="green";
}else{ //17
    compscore++;
    compscorepara.innerText=compscore;
    msg.innerText=`You Lose! ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor="red";


}
}


//compare between user and computer who is win.
const playgame=(userchoice)=>{ //7
    console.log("user choice",userchoice)//this is user choice. //7
    //this is computer choice.
const compchoice=gencompchoice(); //10
    console.log("comp choice",compchoice) //10 //this is user choice.

    if(userchoice===compchoice){ //11
        //draw Game
        drawgame(); //14
    }else{ //15
        let userwin=true;
        if(userchoice==="rock"){
            //scissors,paper
           userwin= compchoice==="paper"?false:true;
        } else if(userchoice==="paper"){
            //scissors,rock
            userwin=compchoice==="scissors"?false:true;
        } else{
            //rock,paper
           userwin=compchoice==="rock"?false:true;
        } //15
        showwinner(userwin,userchoice,compchoice); //15 this userchoice and compchoice was besically shows on the screen.
    }
}

choices.forEach((choice)=>{ //6
    choice.addEventListener("click",()=>{ //6
        // console.log("box was clicked")
        const userchoice=choice.getAttribute("id"); //6
        // console.log("box was clicked",userchoice)
        playgame(userchoice); //8
    })
})


































// let userscore=0; //1
// let compscore=0; //2
// const choices=document.querySelectorAll(".choice"); //3
// const msg=document.querySelector("#msg"); //16
// const userscorepara=document.querySelector("#user-score"); //21
// const compscorepara=document.querySelector("#comp-score"); //22
// const gencompchoice=()=>{ //8
//     const options=["rock","paper","scissors"] //9 //rock,paper,scissors.
//     const ranidx=Math.floor(Math.random() * 3); //10
//     return options[ranidx]; //11
// };
// const drawgame=()=>{ //14
//     msg.innerText="Game was draw.Play again";
//     msg.style.backgroundColor="#081b31";
// };
// const showwinner=(userwin,userchoice,compchoice)=>{ //18
//     if(userwin){
//         userscore++;  //23
//         userscorepara.innerText=userscore;//24
//         msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
//         msg.style.backgroundColor="green";
//     }else{
//         compscore++;//25
//         compscorepara.innerText=compscore;//26
//         msg.innerText=`You Lost. ${compchoice} beats your ${userchoice}`;
//         msg.style.backgroundColor="red";
//     }
// };
// const playgame=(userchoice)=>{ //6
//     const compchoice=gencompchoice(); //12
//     if(userchoice===compchoice){ //15
//         drawgame();
//     }else{//16
//         let userwin=true;
//         if(userchoice==="rock"){
//             userwin=compchoice==="paper"? false:true;
//         }else if(userchoice==="paper"){
//             userwin=compchoice==="scissors"?false:true;
//         }else{
//             userwin=compchoice==="rock"?false:true;
//         }
//         showwinner(userwin,userchoice,compchoice) //17 //19 //20
//     }
// };
// choices.forEach((choice)=>{ //4
//     choice.addEventListener("click",()=>{
//         const userchoice= choice.getAttribute("id") //5  //To access id of each element.
//         playgame(userchoice); //7
//     });
// });
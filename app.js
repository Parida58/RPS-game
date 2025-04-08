let userscore=0; //1
let compscore=0; //2
const choices=document.querySelectorAll(".choice"); //3
const msg=document.querySelector("#msg"); //16
const userscorepara=document.querySelector("#user-score"); //21
const compscorepara=document.querySelector("#comp-score"); //22

    //Generate computer choice-> 
    // all those are modular way of programming.
const gencompchoice=()=>{ //8
    const options=["rock","paper","scissors"] //9 //rock,paper,scissors.
    const ranidx=Math.floor(Math.random() * 3); //10
    return options[ranidx]; //11

};
const drawgame=()=>{ //14
    // console.log("Game was draw.");
    msg.innerText="Game was draw.Play again";
    msg.style.backgroundColor="#081b31";


};

const showwinner=(userwin,userchoice,compchoice)=>{ //18
    if(userwin){
        userscore++;  //23
        userscorepara.innerText=userscore;//24
        // console.log("You Win");
        msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;//25
        compscorepara.innerText=compscore;//26
        // console.log("You Lose");
        msg.innerText=`You Lost. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";

    }
};


const playgame=(userchoice)=>{ //6 // know for the what user is choose 
    // console.log("user choice=", userchoice);
    const compchoice=gencompchoice(); //12 //this is the computer choice.
    // console.log("comp choice=",compchoice); //13
    //win condition to who is win the match-computer ,user.
    if(userchoice===compchoice){ //15
        //draw game
        drawgame();
    }else{//16
        let userwin=true;
        if(userchoice==="rock"){
            //scissors,paper
            userwin=compchoice==="paper"? false:true;

        }else if(userchoice==="paper"){
            //rock,scissors
            userwin=compchoice==="scissors"?false:true;
        }else{
            //rock,paper
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice) //17 //19 //20
    }
};

//this is besically user choice where user can select the element.
choices.forEach((choice)=>{ //4
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice= choice.getAttribute("id") //5  //To access id of each element.
        // console.log("choice was clicked",userchoice); //this line is besically print the which one is clicked by the user.
        playgame(userchoice); //7
    });
});
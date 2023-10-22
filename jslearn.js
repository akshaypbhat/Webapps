var btn=document.querySelector("#start");
var hit=document.querySelector("#ht");
var time="60";
var score = 0;


function startgame(){
    var btns="";
    for(var i=1;i<=90;i++){
    var nums=Math.floor(Math.random()*10);
    btns += `<div id="bubl">${nums}</div>`;
    }
    document.querySelector(".abtm").innerHTML =btns;
    
}

function changehit(){
    hit=Math.floor(Math.random()*10);
    document.querySelector("#ht").textContent=hit;
}

function timer(){
    var timeint=setInterval(function changetime(){
        if(time>0){
            time--;
            document.querySelector("#tym").textContent =time;
        }
        else
        {
            clearInterval(timeint);
            document.querySelector(".abtm").innerHTML=`<h1 id="go"><b><u>Oops..Game Over!</u></b><br><br>Your Score: ${score}</h1>`;
            
        }
    },1000);
}

function adscore(){
    score += 10;
    var scr = document.querySelector("#scor").textContent =score;
}

document.querySelector("#start").addEventListener("click",function(){
    startgame();
    changehit();
    timer();
    
});

document.querySelector(".abtm").addEventListener("click",function(details){
    var clickednum = Number(details.target.textContent);
    if(clickednum == hit){
       adscore();
       startgame();
        changehit();
    

    }
});




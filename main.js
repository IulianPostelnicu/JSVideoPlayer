const myVideo=document.getElementById('myVideo');
const btnPlay=document.getElementById('btnPlay');
const btnPause=document.getElementById('btnPause');
const btnStop=document.getElementById('btnStop');
const btnNext=document.getElementById('btnnext');
const timeOut=document.getElementById('timeOut');
const vidNumOut=document.getElementById('vidNum');
let timer=null;

btnPlay.addEventListener('click',vidAction);
btnPause.addEventListener('click',vidAction);
btnStop.addEventListener('click',vidAction);
btnNext.addEventListener('click',nextVideo);
myVideo.addEventListener('ended',vidAction);

const vids=["v1.mp4","v2.pm4","v3.mp4","v4.mp4"];
let vidPlaying=0;

function vidAction(event){
    switch(event.target.id){
        case "btnPlay":
            playVideo();
            timer=setInterval(update,100);
            break;
        case "btnPause":
            myVideo.pause();
            break;
        case "btnStop":
            myVideo.pause();
            myVideo.currentTime=0;
            break;
    }
}

function playVideo(){
    myVideo.play();
    timer=setInterval(update,100);
}

function myTime(){
    timeOut.innerHTML="Time: "+myTime(myVideo.currentTime)+"/"+myTime(myVideo.duration);
}

function myTime(time){
    var hr=~~(time/3600);
    var min=~~((time%3600)/60);
    var ser=time%60;
    var sec_min="";
    if(hr>0){
        sec_min=""+hrs+":"(min<10?"0":"");
    }
    sec_min+=""+min+":"+(sec<10?"0":"");
    sec_min+=""+Math.round(sec);
    return sec_min;
}

//document.getElementById('button').addEventListener("click",lifechartdisplay);

function lifechartdisplay(){
    const age=document.getElementsByName('age');
    const identityLine1=document.getElementsByName('identityLine1');
    const identityLine2=document.getElementsByName('identityLine2');
    const identityLine3=document.getElementsByName('identityLine3');
    const timeofday=document.getElementsByName('timeofday');
    const goal=document.getElementsByName('goal');
    const timecommit=document.getElementsByName('timecommit');
document.getElementById('form').style.display="none";
document.getElementById('button').style.display="none";
document.getElementById('h2').style.display="none";
const display=document.getElementById('display');
display.innerText=`this is an output from js ${age},${identityLine1},${identityLine2},${identityLine3},${timeofday},${goal},${timecommit}`
}


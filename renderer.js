document.addEventListener("DOMContentLoaded",()=>{
    const savedData = localStorage.getItem("lifeCalendarFormData");

    if (savedData) {
      const parsed = JSON.parse(savedData);
      lifechartdisplay(parsed);
    }

    const button = document.getElementById('button');
    button.addEventListener("click", () => {
      lifechartdisplay();
    });
});

function lifechartdisplay(passedData){
//gathering data for calendar
const data = passedData || {
    age: document.getElementsByName('age')[0].value,
    identityLine1: document.getElementsByName('identityLine1')[0].value,
    identityLine2: document.getElementsByName('identityLine2')[0].value,
    identityLine3: document.getElementsByName('identityLine3')[0].value,
    timeofday: document.getElementsByName('timeofday')[0].value,
    goal: document.getElementsByName('goal')[0].value,
    timecommit: document.getElementsByName('timecommit')[0].value
  };

  // Save form data to localStorage if not passed
  if (!passedData) {
    localStorage.setItem("lifeCalendarFormData", JSON.stringify(data));
  }

//hiding unwanted elements
document.getElementById('form').style.display="none";
document.getElementById('button').style.display="none";
document.getElementById('h2').style.display="none";

//calendar
const age=data.age;
const totalBoxes = (80-age)*52;
const rows = Math.ceil(totalBoxes/57);
const calendar = document.createElement("ul");
calendar.id="parent";
calendar.style.listStyleType="none";
calendar.style.display="grid";
calendar.style.gridTemplateColumns="repeat(57,20px)";
calendar.style.gridTemplateRows=`repeat(${rows},20px)`;
//calendar.style.gridAutoRows = "20px";
calendar.style.height="600px";
calendar.style.width = "fit-content"; // ✅ Prevents extra space
calendar.style.padding = "0";
calendar.style.gap = "0"; // ✅ No gaps
calendar.style.overflow = "hidden"; 
calendar.style.marginRight="100px";

const savedState = JSON.parse(localStorage.getItem("lifeCalendarBoxState")) || {};

for(let i=1;i<=totalBoxes;i++){
    //box element
    const box = document.createElement("li");
    box.id=`box-${i}`;
    box.textContent="";
    box.style.aspectRatio="1/1"
    box.style.border="0.5px solid white";
    //button inside box element
    const button = document.createElement("button");
    button.id=`button-${i}`;
    button.style.border="none";
    button.style.backgroundColor="rgb(36, 36, 36)";
    button.style.width = "100%";
    button.style.height = "100%";
    button.style.border = "none";
    button.style.color = "white";
    button.style.fontSize = "10px";
    button.style.fontFamily = "monospace"; 
    button.style.cursor = "pointer";
    button.style.display = "flex";
    button.style.alignItems = "center";
    button.style.justifyContent = "center";
    button.style.boxSizing = "border-box";
    button.style.lineHeight = "1";
    button.textContent = savedState[`box-${i}`] ? "X" : "";
     
    button.addEventListener("click", () => {
        const key = `box-${i}`;
        if (button.textContent === "X") {
          button.textContent = "";
          delete savedState[key];
        } else {
          button.textContent = "X";
          savedState[key] = "X";
        }
        localStorage.setItem("lifeCalendarBoxState", JSON.stringify(savedState));
      });

    box.appendChild(button);
    calendar.appendChild(box);
}
document.body.appendChild(calendar);

//reset button
const resetBtn = document.createElement("button");
resetBtn.id="button";
resetBtn.textContent = "Reset Calendar";
resetBtn.style.marginTop = "20px";
resetBtn.addEventListener("click", () => {
    localStorage.removeItem("lifeCalendarFormData");
    for (let i = 1; i <= (80 - age) * 52; i++) {
        localStorage.removeItem(`box-${i}`);
    }
    location.reload();
});
document.body.appendChild(resetBtn);

//The text below the calendar
const identityLine1=data.identityLine1;
const identityLine2=data.identityLine2;
const identityLine3=data.identityLine3;
const timecommit=data.timecommit;
const timeofday=data.timeofday
const goal=data.goal;

const headingText = document.createElement("h2")
headingText.textContent=`I am the kind of person who does ${identityLine1}, because I value ${identityLine2} and want to become ${identityLine3}`

const subheadingText = document.createElement("h4")
subheadingText.textContent=`Daily System: ${timeofday}, ${goal} for ${timecommit} hour/hours`
 document.body.appendChild(headingText);
 document.body.appendChild(subheadingText);
}


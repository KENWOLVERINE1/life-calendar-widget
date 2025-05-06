# Learning log!:-
 As the name suggests this is where i will log the learnings and experiences that i have obtained during the journey of creating this wonderful project so that evenyone can access not only my project but also the learnings and experiences as well!!

 ## log 1:-

## Setting up the project:-
 I initially started the project by creating a directory under the name life-caledar-widget. I usually create a directory based on the project name in order to initialize it locally and in order to keep track of it 

 It is also the best practice to name your project direcotry as the name that is same as your github repository in order prevent confusions and conflicts 

>**Note**: I am using a linux environment(Fedora 41). so, the following steps and progress  will be related to it and i would suggest you guys to change it according to your environment if you're following this 

## Installing required dependencies:-

1. Since this project is created using `electron` we need `Node.js` in our environment to succesfully run the project(if you have Nodejs already installed in your system well and good if not just follow the steps below:)

```sh
sudo dnf install nodejs
```
this will install the `Node.js` LTS(Long term support version) runtime and `npm` package manager and their dependencies

**alternate method**(_to get a specific `Node.js` version_):
```sh
dnf module list
```
```sh
sudo dnf module install nodejs:PREFERRED_VERSION_NUMBER
```

2. Initialize npm in order to create `package.json` file which will hold the meta-data of your project
```sh
npm init
```

3. Install `electron` using npm since it is required to run the project locally
```sh
npm install electron --save-dev
```
>Now most of you would have this doubt especially if you have no idea about electron which is **"why are we installing electron as a developer dependency if it is required to run the project during production?"** well it is because during production packaging it comes with an electron version pre-installed so we dont need it to install seperately

4. Then create a `main.js` file in the project directory which serves as an entry point for electron app
```sh
touch main.js
```
Add the following to the `main.js` in order to test the working of electron app
```js
console.log("Hello Electron!")
```

5. lets configure the `scripts` in `package.json` to run our electron app
```json
"start":"electron .",
```

6. Now lets run our first electron app
```sh
npm start
```

## Setting up git repository
1. Initialize a local repository using git(_hoping that all of you guys are having git  installed cause you know it's a required tool for developers_)
 ```sh
git init 
 ```

2. Create a repository in github with the same name as your local repository 

3. Authorize your access using the commands below in your terminal
```sh
git config --global user.name="YOUR_USERNAME"
```
```sh
git config --global user.email="YOUR_MAIL"
```

4. Create a gitignore file to prevent git from tracking unecessary and confidential files such as `.env` files,`node_modules` etc..
```sh
touch .gitignore
```
```git
node_modules/
```

5. Add files to repository
```sh
git add -A
```

6. Commit the changes 
```sh
git commit -m "setting up the electron project"
```

>**Best practice**:Always make your commit messages with clean and clear descriptions instead of using simple messages such as updating repository or update etc...

7. Push the changes to the remote repository
```sh
git push origin main
```

## log 2:-

## Configuring UI(User Interface):-

1. The User Interface in electron works just like any other websites but in a more traditional way. we need to create a browser window in order to view our UI.for that we can use `BrowserWindow` from electron.

Create your `index.html` based on your preferences or you can use my `index.html` which i have created for the `life-calendar-widget`.This project requires you to answer few questions which was made by referencing and combining various concepts and techniques which we will discuss in detail later in the upcoming logs

>**Note**: You can use `React` or any other `Frameworks` to create your `UI` because electron uses `Nodejs` so, it supports everything that can be used by `Node`

Rigth now I will give you an overview of the concepts that are used to create this project. I have used the `Memento Mori Framework`,`identity based habits` from `atomic habits` and `daily system goals` as the base logic for this project

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Life Calendar Widget</title>
</head>
<body>
    <center><h1>Life Calendar Widget</h1></center>
    <hr/>
    <br/>
    <!--<div id="display"></div>-->
    <p id="display"></p>
    <h2 id="h2">Answer the questions asked below to get your life calender <3</h2>
    <br/>
    <br/>
    <form id="form">
      <label for="age">1. Enter your Age</label><br/>
      <input type="number" id="age" name="age"><br/>
      <br/>
      <label for="identityLine">2. Let's create your identity line</label><br/>
      <label for="identityLine1">I am the kind of person who<input type="text" id="identityLine1" name="identityLine1"></label><br/>
      <label for="identityLine2">Because I value<input type="text" id="identityLine2" name="identityLine2"/></label>
      <label for="identityLine3">want to become <input type="text" id="identityLine3" name="identityLine3"/></label><br/>
      <br/>
      <label for="timeofday">3. What time of day are you sharpest(mornign/afternoon/evening)?</label><br/>
      <input type="text" id="timeofday" name="timeofday"/><br/>
      <br/>
      <label for="goal">4. What is your #1 goal right now (e.g.build a business,get fit,learn a skill)?</label><br/>
      <input type="text" id="goal" name="goal"/><br/>
      <br/>
      <label for="timecommit">5. How much time can you commit daily (Even 1 hour is enough)</label><br/>
      <input type="number" id="timecommit" name="timecommit"/>
      <br/>
      <br/>
    </form>
    <center><button onclick="lifechartdisplay()" id="button" type="submit">Get Calendar</button></center>
    <link href="index.css" rel="stylesheet"/>
    <script src="./renderer.js"></script>
  </body>
</html>
```

>**Note**: The `style sheet(CSS)` is required to achieve the exact result that is provided by the life-calendar-widget App or you can use `Bootstrap`,`SCSS `,`SASS` or `TailwindCSS` based on your preference

2. In order to display the UI we need to configure `main.js`.first we need to import the required modules from electron
```js
import { app, BrowserWindow } = require("electron")
```

next we need to create a `BrowserWindow` for our App
```js
const createWindow=()=>{
    const win= BrowserWindow({
    width:850,
    height:850,
    maxWidth:850,
    maxHeight:850,
    minWidth:450,
    minHeigth:500
})
win.loadFile("index.html)
}
```

Once our `BrowserWindow` is ready we need to call the `createWindow` function to implement it
```js
app.whenReady().then((=>{
    createWindow()
}))
```

These are the basic configurations that we need to run the electron app in our desktop

3. Since I am using Traditional web development methods I need to create a `Javascript` file for the functionality of the App
```sh
touch renderer.js
```

The name of the file can be anything according to your preferences but the logic file is named as `renderer.js` in the electron `docs` so i am following the same

## log 3:-

I was facing an error when I run my electron app which displays `object Nodelist` instead of the actual value recieved from the input of the form. It turns out that since i am using `getElementsbyName` which will return node list instead of the object

solved the error by adding index value to the nodelist
```js
const age = document.getElementsbyName('age')[0].value;
```

but when I tried to use `getElementbyId` the electron app does nothing and I need to find out why because when I use `getElementsbyName` it works as expected without errors.

So after spending some time searching for the solution to the error I was facing before I found out that the elements were fetched before the `DOMcontents` were loaded and I found out how to solve the problem
```js
document.addEventListener("DOMContentLoaded",()=>{"function to be called or values to be fetched" })
```
by using the above code you can ensure that the `DOMcontents` were loaded before the values are fetched but since the `getElementById` doesn't satisfy my needs I decided to go with `getElementsbyName` 

In order to create a life calendar which comprises of a table with lots of boxes just like a normal calendar but with functionality such as clickable and state changable etc... seems like a very big and complex task so I decided to break it down into small simpler tasks

**Task 1:-**

First I need to create a calendar with tables and there were a lot of methods and options to do so such as using `<Table>` element in html, `Pre-built templates`, `grid` and using `frameworks` etc... but we need to use one which is efficient at the same time it doesnt overkill the project so I decided to go with `gird`. If you are an experienced developer I know that you will think i made the right choice but for the starters I have to explain because they might have a doubt. so lets go through it one by one, at first we have the `<Table>` element from `HTML` this is not feasible because my calendar has more than 50 boxes and we need to create all of them manually so it is out of option. second, we have `pre-built templates` and we can use them and they are feasible but this project is all about gaining experience so, I cant use this.third, we have the `frameworks` obviously it would overkill the project because by the i spend setting up the project, I can complete it without the framework and last we have `grid` which is suitable and feasable in every way 

I learned about `grid-templates` in css by refering the web and i fouund out some of the best go-to websites to learn or revise the concepts and I will share them here for you guys
```
https://www.joshwcomeau.com/css/interactive-guide-to-grid/
```
```
https://learncssgrid.com/
```
I achieved `grid-emplate` by creating it entirely using `Javascript`. The reason i did it using Js because I dont want to create multiple `HTML` pages and make it look like a website inside a desktop widget so, I used one `HTML` page and updated it using `Js` with the help of `Eventhandling` and `Js DOM Manipulation` and I will add the code below for your reference

```js
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
```
P.S. I made it dynamic by creating the rows based on user's input

**Task 2:-**

Now I need to create the child elements which should contain a state and a function to make it interactive and to remeber the action made. I achieved these using Js `localstorage` and `for` loop. I know you guys will think "local storage makes sense but why for loop?". Since i made the rows dynamic it has to be created based on user input hence i have used for loop to create the child elements for the input provided by the user

```js
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
```

**Task 3:-**

Now i need to create a reset button in case the user had made a mistake or has a change of mind. What can i say "we're only human, after all". And I achieved this using the same old `Javascript`

```js
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
```
so far so good.now all that's left is to create the identity statement which was inspired from the `Atomic Habits` and this can be done easily because it's just plain text with some dynamic data or should i say user's input

```js
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
 ```

## log 4:-

## Bundling the project as a distributable:-

Now electron doesn't have any tools for packaging and bundling in it's default core modules so, we need to install additional tools to create a packaged app that we can distribute to users either as a installer(MSI on windows) or portable executable file(.app on mac os) or as packages(snap,RPM,deb for multiple linux environments)

There are two ways to build the electron application by using `electron-forge` and `electron-builder`. I am going to use `electron-forge` since it is easy to create a bundle and it's is used in the official Docs but feel free to use what you prefer.

## Importing project inside forge:-

First we need to install forge and then import our project inside it
```sh
npm install --save-dev @electron-forge/cli
npx electron-forge import
```

Once we run the `electron-forge` there will be few scripts added to our `package.json`
```json
 //...
  "scripts": {
    "start": "electron-forge start",
    "package": "electron-forge package",
    "make": "electron-forge make"
  },
  //...
```

we can also see that few more packages are added under our dev dependencies and a new file named forge.config.js has been created.

## Creating a distributable:-

>**Note**: Since i am using fedora linux environment i will be making the distributable for RPM(Redhat Package Manager) but you guys can create your own distributable suitable to your environment or your targeted environment

Before we create a RPM package of our electron App we need to satisfy few requirements 

# Requirements:-

fist we need to install rpm-build to create a RPM package

If you are using a fedora environment
```sh
sudo dnf install rpm-build
```
if you are using debian or ubuntu
```sh
sudo apt-get insatll rpm
```

# Installation:-

```sh
npm install --save-dev @electron-forge/maker-rpm
```

# Usage:-

To use `@electron-forge/maker-rpm` we need to add it to our `forge.config.js` file under `makers`

```js
module.exports = {
  makers: [
    {
      name: '@electron-forge/maker-rpm',
      config: {
        options: {
          name:"life-calendar-widget",
          version:"1.0.0";
          license:"MIT";
        }
      }
    }
  ]
};
```
# Create the distributable:-

```sh
npm run make
```
THis command executes two steps namely 
1. `electron-forge package` under the hood to bundle our app in `electron binary` and generate the packaged code into a folder
2. Then it will used the packaged app folder to create seperate distributables for each configured makers.

>**Note**: You can have multiple makers inside the forge.config.js file to support all the targeted environments

The distributable will be located under `out/make` folder ready to launch!

And hence we have created our electron app successfully and created a distribuable file for other users as well













#Learning log!:-
 As the name suggests this is where i will log the learnings and experiences that i have obtained during the journey of creating this wonderful project so that evenyone can access not only my project but also the learnings and experiences as well!!

##Setting up the project:-
 I initially started the project by creating a directory under the name life-caledar-widget. I usually create a directory based on the project name in order to initialize it locally and in order to keep track of it 

 It is also the best practice to name your project direcotry as the name that is same as your github repository in order prevent confusions and conflicts 

>**Note**:I am using a linux environment(Fedora 41) so the following steps and progress  will be related to it and i would suggest you guys to change it according to your environment if you're following this 

#Installing required dependencies:-

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
console.log("Hello Electron!)
```

5. lets configure the `scripts` in `package.json` to run our electron app
```json
"start":"electron .",
```

6. Now lets run our first electron app
```sh
npm start
```

#Setting up git repository
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


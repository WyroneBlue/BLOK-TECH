# Project Tech: Matchtaurant Matching App 

## Why this repo
In this repo I will be working on an application made with NodeJS using:
- Html/Css en Javascript
- Express & Express-handlebars 
- MongoDB & Mongoose


### The concept
My concept is a restaurant matching app, where you can match with other people that are interested in the same restaurants that you liked. This doesnt have to be a date, but can also be in a friendly way.

### 📱 My chosen feature
For the individual assignment(A1) we had to pick one feature. The job story that fits my feature is: "* Wanneer ik naar een restaurant ben geweest, wil ik het restaurant kunnen raten, zodat ik kan bijhouden welke restaurants ik lekker vind."

## 🔧 Installation and startup
### Cloning
Clone the repo with: 
```
git clone https://github.com/WyroneBlue/blok-tech.git
```

### ⚙ .env
After cloning the repo, you have to create a .env file and put the following values in it:
```
PORT=3000
MONGOOSE_DB="<DatabaseName>"
MONGOOSE_PASSWORD="<DatabsePassword>"
USER_NAME="<Loggedin User Name>"
USER_ID="<Loggedin User ID>"
```
The USER_NAME and USER_ID are there to replicate a logged in user, because the login/registration system was outside of the scope of my feature.

### 📦 Node Modules
With the .env file created and filled with the correct variables, the node modules or [the packages](/package.json) have to be installed with:
```
npm install
``` 

### 🏃🏾‍♂️ Starting the application
Now that all the node modules are installed, you can start the application with:
```
npm start
``` 

## 📃 Resources
- https://stackoverflow.com/questions/11924452/iterating-over-basic-for-loop-using-handlebars-js
- https://stackoverflow.com/questions/7267102/how-do-i-update-upsert-a-document-in-mongoose
- https://stackoverflow.com/questions/32260117/handlebars-date-format-issue
- https://www.w3schools.com/howto/howto_css_switch.asp
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
- https://handlebarsjs.com/guide/block-helpers.html#conditionals
- https://mongoosejs.com/docs/api.html
- https://www.youtube.com/watch?v=9JZJsChpwKs
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose


## 📖 Documentation(NL)
You can find the full documentation in dutch in [the Wiki](https://github.com/WyroneBlue/blok-tech/wiki).

## 🔒 License
This application has a [MIT license](https://github.com/WyroneBlue/blok-tech/blob/main/LICENSE).

# Project Tech: Matchtaurant Matching App 

## Waarom deze repo
In deze repo zal ik werken aan een applicatie gemaakt op nodejs met behulp van:
- Html/Css en Javascript
- Express & Express-handlebars 
- MongoDB & Mongoose


### Het concept
Mijn concept is een restaurant test matching app, waarbij je dus met andere mensen restaurants kan bezoeken die op dezelfde plek willen eten. dit hoeft niet perse een date te zijn, maar kan natuurlijk ook vriendschappelijk.

### 📱 De gekozen feuture
Voor de individuele opdracht moeten we 1 feature maken. En de Job Story die daar bij hoort is: "* Wanneer ik naar een restaurant ben geweest, wil ik het restaurant kunnen raten, zodat ik kan bijhouden welke restaurants ik lekker vind."

## 🔧 Installatie en opstarten
### Clonen
Clone de rep met: 
```
git clone https://github.com/WyroneBlue/blok-tech.git
```

### ⚙ .env
Na de repo te clonen moet er een .env bestand aangemaakt worden met de volgende waardes
```
PORT=3000
MONGOOSE_DB="<DatabaseName>"
MONGOOSE_PASSWORD="<DatabsePassword>"
USER_NAME="<Loggedin User Name>"
USER_ID="<Loggedin User ID>"
```
De USER_NAME en USER_ID zijn er om een ingelogde user na te bootsen, omdat het registreren en inloggen op dit moment buiten de scope van mijn feuture liggen.

### 📦 Node Modules
Nadat je de repo hebt gekloond, moeten [de packages](/package.json) geinstalleerd worden met:
```
npm install
``` 

### 🏃🏾‍♂️ Applicatie Starten
Nu de node modules zijn geinstalleerd kan je de applicatie starten met:
```
npm start
``` 

## 📃 Bronnenlijst
- https://stackoverflow.com/questions/11924452/iterating-over-basic-for-loop-using-handlebars-js
- https://stackoverflow.com/questions/7267102/how-do-i-update-upsert-a-document-in-mongoose
- https://stackoverflow.com/questions/32260117/handlebars-date-format-issue
- https://www.w3schools.com/howto/howto_css_switch.asp
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
- https://handlebarsjs.com/guide/block-helpers.html#conditionals
- https://mongoosejs.com/docs/api.html
- https://www.youtube.com/watch?v=9JZJsChpwKs
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose


## 📖 Documentatie
De volledige documentatie is te vinden op de [Wiki](https://github.com/WyroneBlue/blok-tech/wiki).

## 🔒 License
De applicatie heeft een [MIT license](https://github.com/WyroneBlue/blok-tech/blob/main/LICENSE).

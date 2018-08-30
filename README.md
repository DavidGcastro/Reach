# Reach

Reach is a classic hangman game. I used React, and Sass,  along with Redux to manage state on the front-end. On the back-end, I used 
node.js, along with Express for my server and PostgreSQL for my database, I used Sequelize as my ORM. 

## Getting Started

Clone reach to your local machine, run an ```npm install```, and then run ```npm run start-server```, and your good to go!

### Prerequisites

**Download node if have not already**


**You must have the ```Allow-Control-Allow-Origin: *```   Chrome extension for this project to work**

Install it [here](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en)


This is due to a CORS error recieved when making a call to the api, this may be due to this project making calls from localhost.
If this extension is not installed, a word will not be generated. 

**You must have a PostgreSQL database named ```reach``` for this project to work as well. Please install PostgreSQL if you have not already.**

### Installing

**First**, create a database in PostgreSQL called reach. This is where we will be saving player's scores over time. 
Postico is a helpful tool that makes this step easier. 

**Second**, make sure PostgreSQL is running. 

**Third**, clone the reach repo. 

**Fourth**, in the project root directory, run an ``npm install`` in the terminal, then run an ``npm run start-server`` as well. 
If you want to make changes while using the application, run a ``npm run build`` in another terminal window to watch for changes and to recompile the bundle.js file.

The local api is hosted on /api/highscores. Note this is limited to the first 6 entries. 

## How To Play

Press the button on the welcome screen. 

Then type in your name, this will be the name that will be saved along with your score in the database.

Choose a difficulty from 1 - 10. 

Then play the game! Choose a letter, number, or phrase that you think matches the hidden word. You have 6 incorrect guesses before you lose.
The hangman on the right side will be built with each incorrect guess, so guess wisely!

If your score is within the top 6, it will be shown. 

**For development purposes the chosen word is shown in the console**

## My Thought Process 

Before creating this application, I was hesitant in using React. After all, this application at first seemed a little to simple. I first started using single HTML file, with my logic in several Javascript files that used constructors to generate the word, to increment a guess, and so on. This would have been fine. 

But, I wanted to design an application that felt a bit more like well, an application. 
The design I wanted was easier implemented using React. I wanted a split screen, that had different data displayed on each side. And I knew React would be perfect for this type of design. 

Using React Router, I was able to transition to other screens and have the changes reflect in the address bar. 

Also, React Router gave me more control over what screens I wanted show, and what data to display in that screen. 

As you can see in my Main.js file in my components directory, I have a "grandparent" div, which encapsulates all my routes, I have one route as the first child, the loser screen, which is the only screen that does displays without any siblings, this route only gets displayed on /gameloser. No other component is displayed on this url. 

All other routes are shared – left and right components are always paired to a url. 

Have these components as siblings would eventually give me more trouble than expected. 

### Problems Faced

As I was coding away, adding transitions on page changes to the left component, I noticed one thing. How was the right side going to know of any guesses I made? How was I going to build my hangman if the left and right components are siblings? 

Then I knew the solution was something I was avoiding (which I should have done in the beginning) – I needed redux. 

I created a Redux store, that handled most of the game logic, this made my app easier to manage, and I felt less trapped since I didn't have to keep track of props all the time. 

### How I Displayed Correct Letters


### How I used Redux

When the user enters their name, picks a difficulty and clicks the button,
I fire an event to keep track of the name, and then another event (that used Redux Thunk) to deal with my API call, passing in the difficulty parameter, once the API responded, I turned the string into an array, and picked a word at a random index. I set this as the chosen word in my reducer. 

I connected both the GameStart and StickFigure component to the store.
The StickFigure component listens for incorrect guesses, and the stick figure body parts will change from display: none, to block depending on the number of guesses. 

In the GameStart component, I dispatch an action that increments total guesses, and another that keeps track of incorrect guesses. 

If the player wins, I send a post request to my api I created, that adds the player name, and the total guesses to my database. Again, all this data comes from my redux store. 

If the number of guesses reaches 6 the player is directed to the GameLoser component where they can try again.




## Built With

* [React](https://reactjs.org/) - for our front end.
* [Express](https://expressjs.com/) - For our server.
* [Redux](https://redux.js.org/) - For state management.
* [Seqeulize](http://docs.sequelizejs.com/) - As our PostgreSQL ORM.

## Authors

* **David Castro** - [Portfolio](https://byDavidCastro.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thank you to the lovely people at Reach for this opportunity! 


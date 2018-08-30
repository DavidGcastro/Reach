# Reach

Reach is a classic hangman game. I used React, and Sass,  along with Redux to manage state on the front-end. On the back-end, I used 
node.js, along with Express for my server and PostgreSQL for my database, I used Sequelize as my ORM. 

## Getting Started

Clone reach to your local machine, run an ```npm install```, and then run ```npm run start-server```, and your good to go!

### Prerequisites

**You must have the ```Allow-Control-Allow-Origin: *``` Chrome extension for this project to work**
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


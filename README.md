# League Trivia
League Trivia is a League of Legends based trivia game built using React and Python. 

It was built purely as a hobby project.

# Demo
Check out League Trivia here: https://league-trivia.herokuapp.com/

# Features
- Multiple types of questions:
  - Name that champion
  - Name that item
  - Associate a rune to its rune tree
  - Associate a passive to its champion
  - Associate a spell to its champion
  - Identify the odd spell out
  - More to come...
- Rank system similar to League of Legends that updates as questions are answered
- Feedback after every question to provide an educational aspect to the game

Champion analysis has been done using their respective tags to provide answer choices that are similar in class to reduce the likelihood of correctly guessing the answer based on their appearance.

Image analysis has been done on item, passive, and spell images to provide answer choices that "look" similar to one another to reduce the likelihood of correctly guessing the answer based on the color scheme and shape.

# Languages & Tools
## Python
- [Flask](https://flask.palletsprojects.com/en/1.1.x/) is used as the backend web framework
- [Flask-RESTful](https://flask-restful.readthedocs.io/en/latest/) is used to power the RESTful API on the backend

## Javascript
- [React](https://reactjs.org/) is used for the frontend UI

# Installation
## Prerequisites
To run this game locally, ensure that you have the following installed:
- [NodeJS](https://nodejs.org/en/) (at least version 14.0.0)
- [npm](https://nodejs.org/en/) (should be installed with NodeJS, at least version 6.14.4)
- [Python](https://www.python.org/downloads/) (at least version 3.8)

To ensure that you have NodeJS, npm, and Python installed, you should be able to run the following from the command line:
```
$ npm -v
6.14.10

$ node -v
v14.15.4

$ python --version
Python 3.8.8
```

If you are missing any Javascript packages, run:
```
npm install <package>
```
If you are missing any Python packages, run:
```
pip install <package>
```

## Running locally
Clone this repository to your local filesystem. Before we do anything, we first need to make a few changes to some files.

### File changes
- CORS is a Flask extension for handling Cross Origin Resource Sharing, which makes cross-origin AJAX requests possible. This is needed in a development (local) environment because the Flask backend is run on port `5000`, whereas the React frontend is run on port `3000`. In `app.py`, uncomment the following lines so that the result is:
```
from flask_cors import CORS

CORS(app)
```
- In `frontend/package.json`, the `"proxy"` value specifies a proxy to the API server so that `fetch()` calls can just reference the endpoint directly and not have to worry about different hosts/ports. Since the API server is running locally on port `5000`, we need to update it to:
```
{
  ...
  "proxy": "http://localhost:5000/"
}
```

### Start backend server
Let's start up the backend server that will be handling API requests. Open up a terminal, cd into the project's root directory, and run the following commands:
```
cd league-trivia
flask run
```

### Start React app
Now let's spin up our React frontend. Open up a new terminal, cd into the project's root directory, and run the following commands:
```
cd league-trivia
cd frontend
npm start
```
The game should now open up in a new window/tab at `http://localhost:3000/`.

# Disclaimer
League Trivia isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
### `App Steps`
Whole point of this specific app is to let users create surveys by paying money in order to do so.

1) User will sign in via Google OAuth (Hardest part of app, but can use in future apps). Has client (user clicks login), server (get user details and stores info), and Google side (ask user to grant permission)
2) User can get email credits via stripe
3) User creates a new 'campaign'
4) User enters list of emails to send survey to
5) Send email to list of surveyees
6) Surveyees click on link provided in email to provide feedback
7) We tabulate feedback
8) User can see report of all survey responses

### `App Startup`
dev startup: node index.js, after specifying start: npm start

### `Deployment`
URL: https://still-tor-27300.herokuapp.com/

Deployment Checklist for Heroku:
1) Dynamic Port Binding (Heroku tells us a specific port to listen for) process.env.PORT
2) Specify Node Environment:
node -v && npm -v
after "main", before "scripts" ->
"engines": {
    "node": "12.14.0,
    "npm": "6.14.3"
  },
3) Specify start script:
  "scripts": {
    "start": "node index.js"
  }
  npm start -> launches node index.js
4) Create .gitignore file (don't commit dependencies or files we don't want to deploy):
node_modules

FIRST TIME DEPLOYMENT:
1) under root dir (server), git init
2) git add ., git commit -m "first commit"
3) install Heroku CLI and create app: make sure heroku cli is installed -> heroku -v, heroku login
4) heroku create (gives two links: one for deployed site, one for connecting with git)
5) git remote add heroku secondLink
6) git push heroku master
7) heroku open -> checks to see if link works

SUBSEQUENT DEPLOYS:
1) in root dir (server), git status, git add ., git commit -m "your msg", git push heroku master

### `Detailed steps`
GETTING STARTED
- mkdir server, cd server, npm init
- install express -> npm install --save express
- Do Deployment Checklist above to deploy through Heroku



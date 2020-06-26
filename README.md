### `App Guideline`

Whole point of this specific app is to let users create surveys by paying money in order to do so.

1. User will sign in via Google OAuth (Hardest part of app, but can use in future apps). Has client (user clicks login), server (get user details and stores info), and Google side (ask user to grant permission)
2. User can get email credits via stripe
3. User creates a new 'campaign'
4. User enters list of emails to send survey to
5. Send email to list of surveyees
6. Surveyees click on link provided in email to provide feedback
7. We tabulate feedback
8. User can see report of all survey responses

### `App Startup`

dev startup: node index.js, after specifying start: npm start

### `Dependencies`

CLIENT:
Http-Proxy-Middleware: npm install --save http-proxy-middleware
Redux & React-Redux: npm install --save redux react-redux
React-Router-Dom: npm install --save react-router-dom
Sass: npm install --save node-sass
Axios: npm install --save axios
Redux-Thunk: npm install --save redux-thunk
React Stripe Checkout: npm install --save react-stripe-checkout

SERVER:
Express: npm install --save express
Passport & Passport Google Strategy: npm install --save passport passport-google-oauth20
Nodemon: npm install --save nodemon
Mongoose: npm install --save mongoose
Cookie-session: npm install --save cookie-session
Concurrently: npm install --save concurrently
Stripe: npm install --save stripe
Body-Parser: npm install --save body-parser

### `Deployment`

URL: https://still-tor-27300.herokuapp.com/

Deployment Checklist for Heroku:

1. Dynamic Port Binding (Heroku tells us a specific port to listen for) process.env.PORT
2. Specify Node Environment:
   node -v && npm -v
   after "main", before "scripts" ->
   "engines": {
   "node": "12.14.0,
   "npm": "6.14.3"
   },
3. Specify start script:
   "scripts": {
   "start": "node index.js"
   }
   npm start -> launches node index.js
4. Create .gitignore file (don't commit dependencies or files we don't want to deploy):
   node_modules

FIRST TIME DEPLOYMENT:

1. under root dir (server), git init
2. git add ., git commit -m "first commit"
3. install Heroku CLI and create app: make sure heroku cli is installed -> heroku -v, heroku login
4. heroku create (gives two links: one for deployed site, one for connecting with git)
5. git remote add heroku secondLink
6. git push heroku master
7. heroku open -> checks to see if link works

SUBSEQUENT DEPLOYS:

1. in root dir (server), git status, git add ., git commit -m "your msg", git push heroku master
2. heroku logs -> see any errors, heroku open -> opens app to see changes

### `Detailed steps`

GETTING STARTED

- mkdir server, cd server, npm init
- install express -> npm install --save express
- Do Deployment Checklist above to deploy through Heroku

1. USERS SIGNING IN VIA GOOGLE OAUTH (Reusable for future projects!)

- passport.js is an authentication middleware for Node.js (two libraries we need to install)
  1. passport: general helper for handling auth in express apps
  2. passport strategy: helpers for authenticating one very specific method (our case -> Google OAuth)
  - npm install --save passport passport-google-oauth20
- To setup with Google apis, look at Section 3: 23 (Enabling Google OAuth API) from console.cloud.google
- Store client id and client secret (sensitive data) in a separate file, use .gitignore to not deploy that file
- Add nodemon dependency, so don't have to keep killing and restarting server; will automatically look for changes and update
- refactored our code to separate directories, making our index.js cleaner
- Used piece of identifying token (we are using cookies) to make follow up requests since HTTP is stateless. One good reason we are using cookies is because browser will handle it; not React or frontend
- Setup MongoDB database, install mongoose library, make sure model class + instance shows up in collections in MongoDB

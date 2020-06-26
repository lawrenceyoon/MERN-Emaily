### `App Guideline`

Server & Client Side (Client stored inside server dir)

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

Prod: through Heroku:\
URL: https://still-tor-27300.herokuapp.com/

Dev:\
1) clone repo
2) npm install
3) at terminal in /server dir, npm run dev
4) check at localhost:3000


### `Dependencies`

CLIENT:
1) Http-Proxy-Middleware: npm install --save http-proxy-middleware
2) Redux & React-Redux: npm install --save redux react-redux
3) React-Router-Dom: npm install --save react-router-dom
4) Sass: npm install --save node-sass
5) Axios: npm install --save axios
6) Redux-Thunk: npm install --save redux-thunk
7) React Stripe Checkout: npm install --save react-stripe-checkout

SERVER:
1) Express: npm install --save express
2) Passport & Passport Google Strategy: npm install --save passport passport-google-oauth20
3) Nodemon: npm install --save nodemon
4) Mongoose: npm install --save mongoose
5) Cookie-session: npm install --save cookie-session
6) Concurrently: npm install --save concurrently
7) Stripe: npm install --save stripe
8) Body-Parser: npm install --save body-parser

### `Deployment`

Deployment Checklist for Heroku:

1. Dynamic Port Binding (Heroku tells us a specific port to listen for) process.env.PORT
2. Specify Node Environment:
   node -v && npm -v
   after "main", before "scripts" ->
   "engines": {
   "node": "12.18.1",
   "npm": "6.14.5"
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
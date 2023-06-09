## Set up an .env file with a MongoDB URI (at [MongoDB](https://account.mongodb.com/account/login)).
You'll need to set up your own `.env` file on the main root folder that'll contain the MONGO_URI that is imported in the main server.js file as well as `PORT=8000`. The MONGO_URI variable in the .env file will look like this: `MONGO_URI=mongodb+srv://<your_name>:<password>@<project_name>.xxxx.mongodb.net/<database_name>?retryWrites=true&w=majority`.
# You'll have to set up your own project at MongoDB. Just follow all the defaults.


## Install needed packages
 Install all the packages for both client and server folders with one command from the root folder with `npm run setup`

Then, from the root of the project, you can start the whole app, both the client and server folders, with one command in a terminal window: `npm run dev`. The server info will be in blue and the client info will be in green.

Now you'll see the project open up in your browser.

I deployed the backend to Heroku and the frontend to Github pages.

## Here's the demo version: [demo](https://todo-mern-app-client.onrender.com)

**Note:** the web app will take a little bit to load when first going to the url. Same for when posting a new todo since I deployed the backend separately & is also affected by the platform's slow load due to free tier. This lag only last once, but afterwards the app performs at normal speeds.
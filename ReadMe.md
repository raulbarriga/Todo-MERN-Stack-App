## Set up an .env file with a MongoDB URI (at [MongoDB](https://account.mongodb.com/account/login)).
You'll need to set up your own .env file on the server folder that'll contain the MONGO_URI that is imported in the main server.js file. The MONGO_URI variable in the .env file will look like this: `MONGO_URI=mongodb+srv://<your_name>:<password>@<project_name>.xxxx.mongodb.net/<database_name>?retryWrites=true&w=majority`.
# You'll have to set up your own project at MongoDB. Just follow all the defaults.


## Install needed packages
 Install all the packages for both client and server folders with one command from the main folder with `npm run setup`

The you can start the whole app, both the client and the server folders, also with one command in a terminal window: `npm run dev`. The server info will be in blue and the client info will be in green.

Now you'll see the project open up in your browser.

## Here's the demo version: [demo](https://www.raulbarriga.com/Todo-MERN-Stack-App/)

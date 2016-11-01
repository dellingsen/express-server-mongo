# express-server-mongo

Follow these steps to create and install the necessary node modules for starting a node express server and creating a barebones users REST API

Download and install MongoDB
Make sure the Mongo daemon is running:
MongoDB\Server\3.0\bin>mongod

After you have cloned the project, initialize and install the necessay node modules
npm init
npm install

Here is the package.json that will be installed
{
  "name": "nodeapp",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    
"start": "node ./bin/www"
  },
  "dependencies": {
    
"body-parser": "~1.13.2",
    
"cookie-parser": "~1.3.5",
    
"debug": "~2.2.0",
    
"express": "~4.13.1",
    
"mongoose": "^4.3.1",
    
"morgan": "~1.6.1"
  },
  
"main": "app.js",
  
"author": "",
  
"license": "ISC",
  
"description": ""
}

Next you can run the server with:
node app.js

Which will be found here:
http://localhost:4000

Now, POST some User data to the REST API to create your first User (data to POST below)
http://localhost:4000/users
{"firstname":"tom","lastname":"jones","username":"tjones","email":"tj@hotmail.com","password":"password"}

Then GET your User data from the REST API to view your User (data retrieved below)
http://localhost:4000/users
[{"_id":"581778c1c499ef1b345e972c","created_at":"2016-10-31T17:00:49.948Z","updated_at":"2016-10-31T17:00:49.948Z",
"firstname":"tom","lastname":"jones","username":"tjones","email":"tj@hotmail.com","password":"password","__v":0}]

And there you go. You have a functional REST API Server using the POST and GET Endpoints '/users'
Don't forget to dive into the models/user and services/users code to see how the data is saved and retrieved with MongoDB





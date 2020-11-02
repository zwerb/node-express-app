# Node-Express App

A simple node-express app for server testing.

## Get Started

1. fork or clone https://github.com/zwerb/node-express-app.git

2. cd node-express-app

3. npm install

4. a. for single run:
	npm start
	or: node node-express-app.js 
	
	#to kill
	ctrl c

   b. for server run:
	npx pm2 start node-express-app.js 
	or: npx pm2 start node-express-app.js -i 4 #(4 instances)

	#to kill: 
	npx pm2 kill
	npx pm2 status

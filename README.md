# Node-Express App

A simple node-express app for server testing.

Using Vuely template from : https://docs.theironnetwork.org/vuely/

## Get Started

1. fork or `git clone https://github.com/zwerb/node-express-app.git`

2. `cd node-express-app`

3. `npm install`

4. 
   a. for server run:
	`npx pm2 start`

	`npx pm2 status`

	#to kill: 
	`npx pm2 delete <name-of-process>`
	or
	`npx pm2 kill`

	b. for single run:
	`npm start`
	
	#to kill
	`ctrl c`

5. to update system

	`git pull`

	`npm install`

	`npx pm2 delete <name-of-process>`

	`npx pm2 start`



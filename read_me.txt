*****************************************************
*                   README                          *
*****************************************************

################## INSTALLATION ##################

Installation of needed components:
1. Node.JS
2. MongoDB Server
3. Robomongo

1. Installation of Node.JS
Download the installation file from: https://nodejs.org/en/download/current/
Please choose the right installation file depending on your system.
Follow the installation guide!

2. Installation of MongoDB
Download the installation file from: https://www.mongodb.com/download-center
Follow the installation guide: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

3. Installation of Robomongo
Download the installation file from: https://robomongo.org/download


############## HOW TO START THE PROJECT ###########
After the installation of all components open the terminal.

1. Start MongoDB
Navigate to the directory where you installed the mongodb server, in this directory
must be the file mongod.exe.
run following command:


2. Start NodeJS
Navigate to the directory of the project, in this directory must be the package.json
and app.js files.
!!!! ONLY FOR THE FIRST TIME: run following command: npm install
!!!! IF errors occur please check if npm and node are added to ENV PATH
run command: node app.js

you will see an output in the terminal window that the server started and is
listening on port 3000.
Just open in your browser following url: localhost:3000
# PESAuth

PESAuth website made for WebTech project.

### Description:

Event management and attendance application. This web app allows you to log in and create events.
Once you have created the events, you can create teams of 3 members and they will be added.
There's a coupon page for lunch snacks and goodies. You can select one and redeem the tokens.
I have used MERN stack for this website.
There is also an option for the host to score the teams and a leaderboard to show top 5.

### Usage:

- Clone the project:
  ```
    git clone https://github.com/mana-sg/PESAuth
  ```

- Make a .env file in the root folder:

- The .env file should contain: PORT=5000, JWT_SECRET, MONGO_URL

- Run the following commands:
  ```
    cd PESAuth
    npm i
    npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion express mongoose nodemon jsonwebtoken
  ```

- You have installed all the required backend packages, now run this command for frontend:
  ```
    cd frontend
    npm i
  ```

- Now run these commands in two different terminals:
  ```
    npm start (in frontend directory).
    npm start (in root file).
  ```

- Your website has been hosted on local server (frontend: port 3000, backend: port 5000).

- Open your browseer and search http://localhost:3000

- Now you can use the website.

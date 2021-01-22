# Goal Streaker :trophy:

Check out the deployed site [here!](https://goalstreaker.herokuapp.com/)

Inspired by New Years Resolutions that never seem to stick, Goal Streaker is an app that lets users track their progress/streak towards a goal they've committed to for a certain amount of days. It takes 14 days to form a habit, so the challenge is: Can you spend the next 14 days committed to a goal, that could ideally form into a daily practice or habit and improve your lifestyle?

<img src="https://media.giphy.com/media/xfw5aaz9zR2BFvDDZf/giphy.gif" width="30%" alt="GoalStreakerSignIn"/>

Developed using React, Firebase (for user authentication and as a real time database), Chart.js for data visualization, and Material-UI for stlying by Betsy Groton.

<img src="https://media.giphy.com/media/JmAs3FzUPboNKBEHpa/giphy.gif" width="30%" alt="GoalStreakerDashboard"/>

# Downloading Instructions

```
cd <directory you want to download to>

git clone https://github.com/betsyg6/goalStreaker.git

npm install

touch .env

setup firebase auth and db. input secrets into .env file (no quotations):
      REACT_APP_API_KEY =
      REACT_APP_AUTH_DOMAIN =
      REACT_APP_DATABASE_URL =
      REACT_APP_PROJECT_ID =
      REACT_APP_STORAGE_BUCKET =
      REACT_APP_MESSAGING_SENDER_ID =
      REACT_APP_APP_ID =
      REACT_APP_MEASUREMENT_ID =

npm start
```

# Acknowledgements

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- In order to learn how to use Firebase for user authentication and as a real time database, I followed Robin Wieruch's [tutorial](https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial).

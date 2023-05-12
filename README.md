## Project Description
This project utilizes several technologies
* React
*  Node.js, 
*  Express,
*  MongoDB, 
*  Tailwind CSS.

## Backend
The backend was developed first. Data is fetched from an API using node-fetch and stored in a MongoDB database. After fetching data from the API and storing it in the MongoDB database, I created two routes using Express for routing: getAlluser to retrieve all users, and edituser to enable editing of user data.

## Frontend
For the frontend, I utilized the <table> tag to display all users and created a modal to handle editing functionality. I used ContextAPI for state management and applied Tailwind CSS for styling. To generate a CSV file, I use react-csv.

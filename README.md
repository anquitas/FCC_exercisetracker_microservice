## Exercise Tracker
- [source of the project](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/exercise-tracker)
- [project example by freeCodeCamp](https://exercise-tracker.freecodecamp.rocks)



## ABOUT PROJECT

the main requirement of this project is to be able to
  -  use `GET` & `POST` request with forms, send request info via REST protocol in the form of route parameter, query parameter and in the request body
  - use `mongoDB` with `Mongoose` creating data models based on the needs and query those data, process it with bussiness logic inside the server before serving it
  - create API endpoints to be consumed by the client to get specific information and make a server that ll serve as a mediator and between client and the data domain

while other fcc backend projects view the database side of things a nice to have this project heavily fouses on data base and logic related to it and the APIs required reflects this focus as well

the project requires 4 apis to be written by the coder
  - `POST: '/api/users'` -- for signup process and return the added user object
  - `GET: '/api/users'` -- to get all users, i guess to check if the signup tests are successfull
  - `POST: '/api/users/:_id/exercises'`  -- to add 1 exercise for a user and return the added result with user info
  - `GET: '/api/users/:_id/logs?[from][&to][&limit]'` -- to get a users exercise log with a query



## FOR THE PROJECT

for data handling i creaed the necessary models `user` and `exercise` using `mongoose`
the user `_id` is used as a foreign reference via `user_id` field inside the `exercise` model

the project required APIs, needed their bussines logic to handle the coming request and the database processes as well as checking, validating and error handling. For this i created these modules with their own functions to abstract and encapsulate all necessary operations and minimize coupling in the code
  - userLogic --> `addUser()`, `checkUser()`, `getAllUser()`
  - exerciseLogic --> `addExercise()`, `getLastYearExercise()`, `userExerciseQuery()`
  - logLogic --> `getUserLog()`

though i try to follow domain based architecture principles as the project scope is small and processes a bit connected to each other and my lack of expertice in the area seperation on concerns may not be ideal.

to achieve some ... i seperated related logic into its own module and abstract unnecessary detail inside these modules' functions and user external packages like `express-validator` to handle their related processes

as microservicess principle i also add remote api call to `timestamp_microservice` for consistent timekeeping with fallback to time module



## IDEAS AND ADDITIONS

apart from creating the necessery API endpoints i have also created
  - a test route for testing purposes using `express router`
  - a form to visually use query api `GET: '/api/users/:_id/logs?[from][&to][&limit]'`
  - a simple ejs system with view, layout and partials to increase the modularity and extensibility of the frontend part 
  - forms and related scripts are relocated to their own partial files
  - a stat system to extract meaning from data using a `statsLogic` module
  - a validation system using `express-validator` to handle format missmatches in the backend server rather then database server



## POST: `'/api/users'` 
- purpose: to add users to database
- process: add information using a custom function via mongoose model `User`
- information: `username` from body
- validations:  `username` from body for required and length
- modules: userLogic
- functions: `addUser`
- partial: `signup.ejs`



## GET: `'/api/users'`
- purpose: to get all users in an array
- process: get info using a custom function via mongoose model `User`
- information: none
- validations: none
- modules: userLogic
- functions: `getAllUsers`



## POST: `'/api/users/:_id/exercises'`
- purpose: to add 1 exercise for a user and return the added result with user info
- process: 
  - check if the user exists
  - if so check for time if so use that else use current time from either timestamp ms or timeModule
  - construct the object to add and add the object using mongoose model `exercise`
  - construct the response object with user information and send it
- information: `_id` from route, `description`, `duration`, `date` from body
- validations: 
  - `_id` from route parameters for mongo id format
  - `description` from body for required
  - `duration` from body for required and number
  - `date` from body for correct date format (it is not required)
- modules: userLogic, timeModule, exerciseLogic
- functions: `checkUser`, `getNow`, `addExercise`
- main function: `addExercise` (exerciseLogic)
- partial: `addExercise.ejs`



## GET: `'/api/users/:_id/logs?[from][&to][&limit]'`
- purpose: to get a users exercise log with a query
- process:
  - check if the user exists if so get user info from database
  - get exercise logs using `_id` info and query object
  - get lastyears exercises info and feed it to stats module to get meaningful data of stats
  - create the response object and return it
- information: `_id` from route, `description`, `duration`, `date` from query
- validation:
  - `_id` from route parameters for mongo id format
  - `from` from query for correct date format (it is not required)
  - `to` from query for correct date format (it is not required)
  - `limit` from query for number (it is not required)
- modules: userLogic, exerciseLogic, statsLogic, logLogic
- functions: `checkUser`, `getUser`, `userExerciseQuery`, `getLastYearExercises`, `getStats`, `getUserLog`
- main function: `getUserLog` (logLogic)
- partial: `displayLogs.ejs`

## NOTES

you can find first thought process and some additional info on the meta folder

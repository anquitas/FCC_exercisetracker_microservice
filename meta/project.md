## PROJECT
+ a form section to search for exercise logs easier may be added
  - it can also be its own page but adding to main page may be more compact
+ a good project to make use of `express-validatitor`
+ an `ejs` templating system can be considired, extra work but can be a nice addition
+ ? how does intertwined usage of multiple models work in a noSQL databese



## MODELS
+ exercise -> description, duration, date
+ user -> username
+ log -> id, from, to, limit



## EXERCISE
+ POST: `'/api/users/:_id/exercises'`
  - ? id doesnt seem to be sent via request body but as a query parameter
  - data is enter in `yyyy-mm-dd` format the record format may be different `sat february 8 2023`
  - adding validation with `express-validator` would be nice
  - other informations can be gathered using remote service calls to other project microservices
+ ! this is a feedback response, how ll it be recorded

```js
{ // exercise
  username: "fcc_test",
  _id: "5fb5853f734231456ccb3b05", // should be below usename
  description: "test", // required
  duration: 60, // required
  date: "Mon Jan 01 1990", // if not added default todays date
}
```



## USER

+ POST: `'/api/users'` -- to add new users
  - seems to create a user with the same name but with different id
  - as it use id to query there is no overlap & conflict

```js
{ // user
  username: "fcc_test",
  _id: "5fb5853f734231456ccb3b05"
}
```


## LOG

+ GET: `'/api/users/:_id/logs?[from][&to][&limit]'`
  - has 3 query parameters each optional
  - additional form component should be added to the page
+ ! ordering the logs should be thought through
+ from to query
  - this needs to be a `WHERE` type condition logically joined by `AND`
+ limit query
  - this should be `LIMIT` type additional clause

```js
{ // log
  username: "fcc_test",
  count: 1, // dynamically determined based on log array count, may not come from DB but server
  _id: "5fb5853f734231456ccb3b05",
  log: [{ // seems different from the exercise addition feedback
    description: "test",
    duration: 60,
    date: "Mon Jan 01 1990",
  }]
}
```



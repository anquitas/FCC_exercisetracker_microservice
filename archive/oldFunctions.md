```js
// ## POST: '/api/users'
app.post(
  '/api/users',
  async (req, res) => {
    const {username} = req.body
    console.log('+ username: ', username) // dev

    try {
      // const newUser = new User({username})
      // const user = await newUser.save()
      // console.log('new user signup successfull: ', user)
      // add a user final response object creater function
      // res.json(user)
    } catch (error) {
      console.log('+ signup error: ', error)
      res.json({error: 'signup unsuccessfull'})
    }
  }
)
```


```js
  async (req, res) => {
    const id = req.params._id
    const {description, duration, date} = req.body

    try {
      // find user by id
      // handle not found, empty
      // if found
      // create a new exercise object, handle date
      // save the object to the database collection
      // create approprate response
    } catch (error) {
      console.log('+ exercise addition error: ', error)      
    }
  }
```
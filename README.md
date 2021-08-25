# backend

---
| Name         | Type    | Description                              |
| ------------ | ------- | ---------------------------------------- |
| username     | String  | <p>The New Users username \*Required</p> |
| password     | String  | <p>The New Users password \*Required</p> |
| phone_number | Integer | <p>The New Users phone number<p>         |
POST create a user
[POST] https://potluckplanner-backend.herokuapp.com/api/auth/register

requires object notNullable: {"username": "string", "password": "string", "organizer": boolean}

returns the user info {user_id, username, password}

POST login to account
[POST] https://potluckplanner-backend.herokuapp.com/api/auth/login

requires object notNullable: { username: "string", password: "string" }

returns the welcome message, user details and token
{"message": "welcome, username",
"userDeet": {
"user_id": integer,
"username": "string"
},
"token": "token sequence here"}

---

GET - find all potlucks a user is registered for...

[GET] https://potluckplanner-backend.herokuapp.com/guest/:id

requires guest id.  
returns an array of potlucks.

---

GET - all potlucks

[GET] https://potluckplanner-backend.herokuapp.com/potluck/

GET - Potluck by id

[GET] https://potluckplanner-backend.herokuapp.com/potluck/:id

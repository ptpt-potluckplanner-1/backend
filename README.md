# backend

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

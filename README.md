# backend

---

## POST create a user
[POST] https://potluckplanner-backend.herokuapp.com/api/auth/register

| Name         | Type    | Description                                           |
| ------------ | ------- | ----------------------------------------------------- |
| username     | String  | <p>The New Users username \*Required</p>              |
| password     | String  | <p>The New Users password \*Required</p>              |
| organizer    | Boolean | <p>Whether User is an Orangizer or not \*Required</p> |

Returns the newly added User

## POST login to account
[POST] https://potluckplanner-backend.herokuapp.com/api/auth/login

| Name         | Type    | Description                                           |
| ------------ | ------- | ----------------------------------------------------- |
| username     | String  | <p>The New Users username \*Required</p>              |
| password     | String  | <p>The New Users password \*Required</p>              |


returns the welcome message, user details and token
{"message": "welcome, username",
"userDeet": {
"user_id": integer,
"username": "string"
},
"token": "token sequence here"}

-----------------------------------------------------------------------

GET - find all potlucks a user is registered for...

[GET] https://potluckplanner-backend.herokuapp.com/api/guest/:id

| Name         | Type    | Description                                           |
| ------------ | ------- | ----------------------------------------------------- |
| user_id      | Integer | <p>Guest's User_id \*Required</p>                     |
  
returns an array of potlucks.

-----------------------------------------------------------------------

## GET - all potlucks

[GET] https://potluckplanner-backend.herokuapp.com/api/potluck/

returns all potlucks

## GET - Potluck by id

[GET] https://potluckplanner-backend.herokuapp.com/api/potluck/:id

| Name         | Type    | Description                                           |
| ------------ | ------- | ----------------------------------------------------- |
| potluck_id   | Integer | <p> Potluck's id \*Required</p>                       |

returns potluck

-----------------------------------------------------------------------

## GET - all Organizer's Potlucks

[GET] https://potluckplanner-backend.herokuapp.com/api/organizer/:id

| Name         | Type    | Description                                           |
| ------------ | ------- | ----------------------------------------------------- |
| potluck_id   | Integer | <p> Potluck's id \*Required</p>                       |

returns all potlucks belonging to organizer

## POST - create potluck event

[POST] https://potluckplanner-backend.herokuapp.com/api/organizer/potluck

Requires object with key:value pairs defined in table

| Name         | Type    | Description                                           |
| ------------ | ------- | ----------------------------------------------------- |
| title        | String  | <p>The Title of the event \*Required</p>              |
| date         | Date    | <p>The Date of the event  \*Required</p>              |
| time         | Time    | <p>The Time fo the event  \*Required</p>              |
| location     | String  | <p>The location of the event \*Required</p>           |

returns newly added event

## DELETE - delete potluck
[DELETE] - https://potluckplanner-backend.herokuapp.com/api/organizer/potluck/:id

| Name         | Type    | Description                                           |
| ------------ | ------- | ----------------------------------------------------- |
| potluck_id   | Integer | <p> Potluck's id \*Required</p>    (param)            |

returns deleted event

## PUT - update potluck

[PUT] - https://potluckplanner-backend.herokuapp.com/api/organizer/potluck/:id

| Name         | Type    | Description                                                |
| ------------ | ------- | ---------------------------------------------------------- |
| potluck_id   | Integer | <p> Potluck's id \*Required</p>   (param)                  |
| potluck      | object  | <p> Object containing event details as defined above </p>  |

returns updated event

------------------------------------------------------------------------------

## POST - create potluck item

[POST] - https://potluckplanner-backend.herokuapp.com/api/item/potluck/:id  ( :id = potluck id )

| Name         | Type    | Description                                                |
| ------------ | ------- | ---------------------------------------------------------- |
| potluck_id   | Integer | <p> Potluck's id \*Required</p>     (param)                |
| item         | string  | <p> Object containing event details as defined above </p>  |

returns newly created item

## GET - get potluck item by id
[GET] https://potluckplanner-backend.herokuapp.com/api/item/:id  ( :id = item id )

| Name         | Type    | Description                                                |
| ------------ | ------- | ---------------------------------------------------------- |
| item_id      | Integer | <p> item's id \*Required</p>    (param)                    |

returns item

## GET - get all potluck items
[GET] https://potluckplanner-backend.herokuapp.com/api/item/all/:id  ( :id = potluck id )

| Name         | Type    | Description                                                |
| ------------ | ------- | ---------------------------------------------------------- |
| potluck_id   | Integer | <p> Potluck's id \*Required</p>   (param)                  |

returns array of all items for potluck

## POST - user to claim item from potluck list
[POST] https://potluckplanner-backend.herokuapp.com/api/item/claim/:id  ( :id = potluck id )

| Name         | Type    | Description                                                |
| ------------ | ------- | ---------------------------------------------------------- |
| potluck_id   | Integer | <p> Potluck's id \*Required</p> (param)                    |
| item_id      | Integer | <p> Item's id \*Required</p>                               |

returns array of items for specific potluck

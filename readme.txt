The Following project is a sample nodejs application made using NestJS framework.

The program inserts data into User info Table and Book info Table inside Postgres Database using typeorm. It can also display the existing data inside the tables.

The entry point of the program is "main.ts".
It starts the nest appliation on port "3000" . 

For user related services, we have "User.Controller.ts" calling "user.services.ts" which are bundled inside "user.module.ts"

for book related services , we have "Book.Controller.ts" calling "book.services.ts" which are bundled inside "book.module.ts"

The database entities of the tables are stored inside "db" folder("book.entity.ts", "user.entity.ts")

The Database Transfer objects are stored in the folder "Books/dto" and "User/dto".


For running the application , Please install all the "dependencies" and the "Dev Dependencies" required  in the "package.json". 
To install all the dependencies, run "npm install --save" from the command line.


*Note- Set ""ExperimentalDecorators": true," inside your tsc for smooth compilation of TypeScript projects involving typeorm and NestJS.


For inserting User data into the database- POST  to the URL - "http://localhost:3000/users/post"
For viewing User data from the database- GET from the URL- "http://localhost:3000/users"


*Testing*

"User.controller.spec.ts" creates a testing module for user Controller.
It matches the array of users returned by userservice and the usercontroller using mocked implementation.
To run the test , run "npm run test" inside command line.



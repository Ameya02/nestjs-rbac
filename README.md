
# NestJS-RBAC

## Overview:

NestJS-RBAC is a role-based access control (RBAC) implementation for NestJS, providing a powerful mechanism for managing and enforcing access permissions based on user roles within your NestJS application. This implementation utilizes JSON Web Tokens (JWT), integrates seamlessly with passport-jwt for authentication, and employs argon2 for secure password hashing.

## Features:
RBAC: Define and manage roles and permissions for users.

JWT Authentication: Utilize JSON Web Tokens for secure and stateless authentication.

Passport-jwt Integration: Seamless integration with passport-jwt for easy authentication setup.

Secure Password Hashing: Employ argon2 for robust password hashing to enhance security.


## Tech Stack


**Server:** Node, Nest, JWT, Typescript, Prism, Passport JS

## Main Function
![JWT Strategy](https://github.com/Ameya02/nestjs-rbac/assets/65841021/4134737d-15c9-4b46-b56e-fc5b73dc4514)
This code is for the validatity the access(access token) of the logged in user

![Roles Guard](https://github.com/Ameya02/nestjs-rbac/assets/65841021/58dc8a95-92e3-4563-b7d3-e3292364639f)
This code is for checking if the user has permission to access the routes or not

## Installation

Here are the steps to install the project 

Step 1: Clone the github link
```bash 
https://github.com/Ameya02/nestjs-rbac

````
Step 2: Install the dependencied
```bash
cd nestjs-rbac
npm install 

```
Step 3: Install Postgres using Docker Compose file
```bash
docker compose up -d
```
Step 4: run the project using the following commands
```bash
npm run start:dev
```
Project will run at port 3001



    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL`: Use postgres url to connect to the database
 use this for reference
 postgresql://username:password@localhost:5432/database_name?schema=public

`JWT_SECRET`: secret key of json web token




## API Reference

#### Signup Route

```http
  POST /auth/signup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Your Email Address|
| `password` | `string` | **Required**. Your Password|
| `role` | `string` | **Required**. Your Access Role|

#### Signin Route

```http
  POST /auth/signin
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Your Email Address|
| `password` | `string` | **Required**. Your Password|



#### User Route Only for user role

```http
  GET /users/user
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | **Required**. Your Access Token|

#### User Route Only for manager role

```http
  GET /users/manager
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | **Required**. Your Access Token|

#### User Route Only for admin role

```http
  GET /users/admin
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | **Required**. Your Access Token|




## Author

- [@AmeyaBavkar](https://www.github.com/Ameya02)


## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug fixes, please open an issue or submit a pull request. We greatly appreciate any work contributed, no matter how big or small it is!. Make sure to follow the project's code of conduct.

Issues & Pull Requests
When you are ready to start work on an issue:

- Let us know by leaving a comment on the issue (or you can also raise a new issue if you want to work on something completely new in the project)
- Once you are assigned the issue (or once you have claimed the issue) only then proceed to make the Pull Request. This will help avoid multiple PRs pertaining to the same issue.
- Go through the CONTRIBUTING.md file, where all the guidelines have been mentioned that will guide you to make your contribution.
- Do check out the project issue tracker section.


## License

[MIT](https://choosealicense.com/licenses/mit/)


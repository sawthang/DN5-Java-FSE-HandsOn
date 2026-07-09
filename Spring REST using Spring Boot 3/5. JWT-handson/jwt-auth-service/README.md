# jwt-auth-service

Hands-on exercise: **Create authentication service that returns JWT**.

This is a separate, standalone project from the earlier `spring-learn` REST exercises.

## Exercise

As part of the first step of the JWT process, user credentials are sent to an
authentication service request that generates and returns a JWT.

- Credentials are passed using HTTP Basic Auth (the `-u` option in curl).
- `AuthenticationController` reads the `Authorization` header, decodes the
  Base64 username/password, and generates a JWT for that user.

This was built up in three steps, as described in the hands-on doc:

1. **Create authentication controller and configure it in SecurityConfig** —
   `/authenticate` endpoint added, wired into Spring Security so both `USER`
   and `ADMIN` roles can call it.
2. **Read Authorization header and decode the username and password** —
   `getUser(String authHeader)` strips the `Basic ` prefix and Base64-decodes
   the credentials to get the username.
3. **Generate token based on the user** — `generateJwt(String user)` uses the
   `jjwt` library to build a signed JWT with issued-at and a 20 minute
   expiry.

## In-memory users

Configured in `SecurityConfig`:

| Username | Password | Role  |
|----------|----------|-------|
| admin    | pwd      | ADMIN |
| user     | pwd      | USER  |

## How to run

```
mvn spring-boot:run
```

The app starts on port 8090.

## How to test

```
curl -s -u user:pwd http://localhost:8090/authenticate
```

Expected response:

```json
{"token":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNTcwMzc5NDc0LCJleHAiOjE1NzAzODA2NzR9.t3LRvlCV-hwKfoqZYlaVQqEUiBloWcWn0ft3tgv0dL0"}
```

(The actual token value will differ each time since it includes the current
issued-at timestamp.)

Without credentials, the service responds with `401 Unauthorized`.

## Tech used

- Java 8
- Spring Boot 2.7.18
- Spring Security
- jjwt 0.9.0
- Maven

## Project structure

```
jwt-auth-service
├── src
│   ├── main
│   │   ├── java/com/cognizant/jwtauth
│   │   │   ├── JwtAuthServiceApplication.java
│   │   │   ├── controller/AuthenticationController.java
│   │   │   └── security/SecurityConfig.java
│   │   └── resources/application.properties
│   └── test
│       └── java/com/cognizant/jwtauth/controller/AuthenticationControllerTest.java
└── pom.xml
```

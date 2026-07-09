# spring-learn

Hello World RESTful Web Service exercise done using Spring Boot / Spring Web.

## Exercise

Write a REST service that returns the text `Hello World!!` using Spring Web Framework.

- **Method:** GET
- **URL:** /hello
- **Controller:** com.cognizant.springlearn.controller.HelloController
- **Method Signature:** public String sayHello()
- **Method Implementation:** return hard coded string "Hello World!!"
- **Sample Request:** http://localhost:8083/hello
- **Sample Response:** Hello World!!

## How to run

```
mvn spring-boot:run
```

The app starts on port 8083. Open the URL below in the browser or Postman:

```
http://localhost:8083/hello
```

Expected response:

```
Hello World!!
```

## Tech used

- Java 8
- Spring Boot 2.7.18
- Maven

## Project structure

```
spring-learn
├── src
│   ├── main
│   │   ├── java/com/cognizant/springlearn
│   │   │   ├── SpringLearnApplication.java
│   │   │   └── controller/HelloController.java
│   │   └── resources/application.properties
│   └── test
│       └── java/com/cognizant/springlearn/controller/HelloControllerTest.java
└── pom.xml
```

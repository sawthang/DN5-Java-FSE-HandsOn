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

## Exercise 2 - REST - Country Web Service

Write a REST service that returns India country details.

- **URL:** /country
- **Controller:** com.cognizant.springlearn.controller.CountryController
- **Method Annotation:** @RequestMapping
- **Method Name:** getCountryIndia()
- **Method Implementation:** Load India bean from spring xml configuration and return
- **Sample Request:** http://localhost:8083/country
- **Sample Response:**

```json
{
  "code": "IN",
  "name": "India"
}
```

The `india` bean is defined in `src/main/resources/spring/country-beans.xml` and loaded into the Spring Boot context using `@ImportResource`.

## Exercise 3 - REST - Get country based on country code

Write a REST service that returns a specific country based on country code. The country code should be case insensitive.

- **Controller:** com.cognizant.springlearn.controller.CountryController
- **Method Annotation:** @GetMapping("/countries/{code}")
- **Method Name:** getCountry(String code)
- **Method Implementation:** Invoke countryService.getCountry(code)
- **Service Method:** com.cognizant.springlearn.service.CountryService.getCountry(String code)
- **Service Method Implementation:** get country list from country.xml, then use a lambda expression to do a case insensitive match on country code and return the matching country
- **Sample Request:** http://localhost:8083/countries/in
- **Sample Response:**

```json
{
  "code": "IN",
  "name": "India"
}
```

Country data used by this exercise lives in `src/main/resources/country.xml` and is unmarshalled with JAXB in `CountryService`.

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
│   │   │   ├── controller/HelloController.java
│   │   │   ├── controller/CountryController.java
│   │   │   ├── model/Country.java
│   │   │   ├── model/CountryList.java
│   │   │   └── service/CountryService.java
│   │   └── resources
│   │       ├── application.properties
│   │       ├── country.xml
│   │       └── spring/country-beans.xml
│   └── test
│       └── java/com/cognizant/springlearn/controller
│           ├── HelloControllerTest.java
│           ├── CountryControllerTest.java
│           └── CountryCodeControllerTest.java
└── pom.xml
```

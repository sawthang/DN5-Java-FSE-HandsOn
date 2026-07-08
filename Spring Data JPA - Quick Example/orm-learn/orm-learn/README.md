# orm-learn

Demo project for Spring Data JPA and Hibernate.

This is the hands-on exercise "Spring Data JPA - Quick Example" completed as part of Cognizant training.

## Pre-requisites

- MySQL Server 8.0
- MySQL Workbench 8
- Eclipse IDE for Enterprise Java Developers
- Maven 3.6.2

## Steps followed

1. Generated the project from Spring Initializr with:
   - Group: `com.cognizant`
   - Artifact: `orm-learn`
   - Dependencies: Spring Boot DevTools, Spring Data JPA, MySQL Driver
2. Imported the project into Eclipse as an existing Maven project.
3. Created the `ormlearn` schema in MySQL and ran the script in `sql/country.sql` to create the `country` table and insert sample data.
4. Added database and Hibernate logging configuration in `src/main/resources/application.properties`.
5. Added a `LOGGER.info("Inside main")` statement in `OrmLearnApplication` to confirm the application starts.
6. Built the project using Maven and ran it from Eclipse.
7. Created the `Country` entity in the `model` package with `@Entity`, `@Table`, `@Id` and `@Column` annotations mapped to the `country` table.
8. Created `CountryRepository` in the `repository` package, extending `JpaRepository<Country, String>`.
9. Created `CountryService` in the `service` package with a `getAllCountries()` method annotated with `@Transactional`, which calls `countryRepository.findAll()`.
10. Wired `CountryService` into `OrmLearnApplication` using the `ApplicationContext` returned by `SpringApplication.run()`, and added a `testGetAllCountries()` method to fetch and log the country records.

## Project structure

```
orm-learn
├── pom.xml
├── sql
│   └── country.sql
└── src
    ├── main
    │   ├── java
    │   │   └── com/cognizant/ormlearn
    │   │       ├── OrmLearnApplication.java
    │   │       ├── model/Country.java
    │   │       ├── repository/CountryRepository.java
    │   │       └── service/CountryService.java
    │   └── resources
    │       └── application.properties
    └── test
        └── java
            └── com/cognizant/ormlearn/OrmLearnApplicationTests.java
```

## How to run

1. Create the schema and table in MySQL using `sql/country.sql`.
2. Update the database username and password in `application.properties` if different from `root`/`root`.
3. Run `mvn clean package` to build.
4. Run `OrmLearnApplication.java` as a Java application.
5. Check the console logs to confirm the country records are retrieved from the database.

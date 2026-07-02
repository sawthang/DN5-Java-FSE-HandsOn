# Library Management – Spring Core (IoC & Dependency Injection)

## Overview

This project demonstrates the fundamentals of the Spring Framework using XML-based configuration. It shows how Spring's IoC (Inversion of Control) container manages objects (beans) and performs Dependency Injection between the service and repository layers.

## Objectives

* Create a Maven-based Spring project.
* Configure beans using `applicationContext.xml`.
* Implement a `BookRepository` class.
* Implement a `BookService` class.
* Perform Setter Dependency Injection.
* Load the Spring container and retrieve beans using `ApplicationContext`.

## Technologies Used

* Java
* Spring Core
* Maven
* XML Configuration
* IntelliJ IDEA

## Project Structure

```text
LibraryManagement/
│
├── pom.xml
├── README.md
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/library/
│   │   │       ├── MainApp.java
│   │   │       ├── repository/
│   │   │       │      BookRepository.java
│   │   │       └── service/
│   │   │              BookService.java
│   │   │
│   │   └── resources/
│   │          applicationContext.xml
│   │
│   └── test/
```

## Dependency

```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>5.3.30</version>
</dependency>
```

## How It Works

1. The application starts by loading `applicationContext.xml`.
2. Spring creates the `BookRepository` bean.
3. Spring creates the `BookService` bean.
4. Spring injects the `BookRepository` bean into `BookService` using Setter Injection.
5. The `MainApp` class retrieves the `BookService` bean from the Spring IoC container.
6. `BookService` calls the repository method to display the output.

## Key Spring Concepts Demonstrated

* Spring IoC (Inversion of Control)
* Dependency Injection (Setter Injection)
* Bean Configuration
* XML Configuration
* ApplicationContext
* Bean Lifecycle (Creation and Management)

## How to Run

1. Clone the repository.
2. Open the project in IntelliJ IDEA.
3. Reload the Maven project to download dependencies.
4. Run `MainApp.java`.

## Expected Output

```text
BookService: Fetching book details...
BookRepository: Book retrieved successfully.
```

## Learning Outcomes

After completing this project, you will understand:

* How to create a Maven-based Spring project.
* How Spring manages beans using the IoC container.
* How to configure beans using XML.
* How Setter Dependency Injection works.
* How to retrieve beans using `ApplicationContext`.

## Author

**Sawthang Kumar Rai**

# Library Management - Spring Core XML Configuration

## Project Overview

This project demonstrates a basic Spring Core application using XML configuration.

The application manages a simple Library system where:

- BookService acts as the service layer.
- BookRepository acts as the repository layer.
- Spring manages object creation and dependency injection using XML.

---

## Technologies Used

- Java
- Maven
- Spring Core
- XML Configuration
- IntelliJ IDEA

---

## Project Structure

```
LibraryManagement
│
├── pom.xml
│
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com.library
│   │   │       ├── MainApp.java
│   │   │       ├── repository
│   │   │       │      BookRepository.java
│   │   │       └── service
│   │   │              BookService.java
│   │   │
│   │   └── resources
│   │          applicationContext.xml
│   │
│   └── test
│
└── README.md
```

---

## Dependency

```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>5.3.30</version>
</dependency>
```

---

## Bean Configuration

Two beans are configured:

- bookRepository
- bookService

Dependency Injection is performed using Setter Injection.

---

## How to Run

1. Open the project in IntelliJ IDEA.
2. Reload the Maven project.
3. Ensure all dependencies are downloaded.
4. Run `MainApp.java`.

---

## Expected Output

```
BookService: Calling BookRepository...
BookRepository: Book data retrieved successfully.
```

---

## Learning Outcomes

- Maven project setup
- Spring Core dependency
- XML Bean Configuration
- Setter Dependency Injection
- Loading Spring ApplicationContext
- Retrieving beans using `getBean()`

---

## Author

Spring Core Exercise 1

Library Management Example

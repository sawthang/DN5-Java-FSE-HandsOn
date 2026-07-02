# Library Management – Maven Project Configuration

## Overview

This project demonstrates how to create and configure a Maven project for a Spring-based Library Management application. The project includes the required Spring dependencies and configures the Maven Compiler Plugin to compile the application using Java 8.

## Objectives

* Create a Maven project named **LibraryManagement**.
* Add Spring Context, Spring AOP, and Spring WebMVC dependencies.
* Configure the Maven Compiler Plugin for Java 1.8.
* Build a foundation for future Spring applications.

## Technologies Used

* Java 8
* Maven
* Spring Framework

  * Spring Context
  * Spring AOP
  * Spring WebMVC

## Project Structure

```text
LibraryManagement/
│
├── pom.xml
├── README.md
├── .gitignore
│
└── src/
    ├── main/
    │   ├── java/
    │   └── resources/
    │
    └── test/
```

## Dependencies

The project includes the following Spring modules:

* **spring-context** – Provides the IoC container and dependency injection.
* **spring-aop** – Supports Aspect-Oriented Programming for logging, security, and transactions.
* **spring-webmvc** – Provides the Spring MVC framework for building web applications.

## Maven Compiler Plugin

The Maven Compiler Plugin is configured to use Java 8.

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-compiler-plugin</artifactId>
    <version>3.11.0</version>
    <configuration>
        <source>1.8</source>
        <target>1.8</target>
    </configuration>
</plugin>
```

## How to Build

1. Clone the repository.
2. Open the project in IntelliJ IDEA.
3. Reload the Maven project to download dependencies.
4. Build the project using Maven (`mvn clean install`) or IntelliJ's Build option.

## Learning Outcomes

After completing this project, you will understand:

* Maven project structure.
* Managing dependencies with Maven.
* Configuring the Maven Compiler Plugin.
* Preparing a project for Spring Framework development.

## Author

**Sawthang Kumar Rai**

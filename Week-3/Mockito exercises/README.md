# Exercise 1 - Mocking and Stubbing with Mockito

## Objective
The objective of this exercise is to understand how to use Mockito for mocking external dependencies and stubbing method behavior while testing a service class.

## Tools Used
- IntelliJ IDEA
- Java
- Maven
- JUnit 4.13.2
- Mockito 5.12.0

## Concepts Covered
- Mocking dependencies using Mockito
- Stubbing methods using `when(...).thenReturn(...)`
- Testing service classes without calling real external dependencies

## Java Interface Used
File: `src/main/java/org/example/ExternalApi.java`

```java
package org.example;

public interface ExternalApi {
    String getData();
}

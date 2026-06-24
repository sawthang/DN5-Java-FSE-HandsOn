
---

# README for Exercise 4
Create a file named:

## `README.md`
inside **Exercise-4-AAA-Pattern-Setup-Teardown**

Paste this:

```md id="2xkvd1"
# Exercise 4 - Arrange Act Assert Pattern, Setup and Teardown in JUnit

## Objective
The objective of this exercise is to understand how to structure test cases using the Arrange-Act-Assert (AAA) pattern and how to use setup and teardown methods in JUnit using `@Before` and `@After`.

## Tools Used
- IntelliJ IDEA
- Java
- Maven
- JUnit 4.13.2

## Concepts Covered
- Arrange-Act-Assert (AAA) pattern
- `@Before` annotation for setup
- `@After` annotation for teardown
- Writing multiple JUnit test cases

## Java Class Used
File: `src/main/java/org/example/CalculatorAAA.java`

```java
package org.example;

public class CalculatorAAA {

    public int add(int a, int b) {
        return a + b;
    }

    public int multiply(int a, int b) {
        return a * b;
    }
}

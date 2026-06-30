# Mockito Exercise – Verifying Interactions

## Overview

This project demonstrates how to use **Mockito** to verify interactions between objects in a JUnit 5 test.

The exercise creates a mock object, invokes a method on the service, and verifies that the expected method was called on the mocked dependency.

---

## Technologies Used

- Java 26
- Maven
- JUnit 5
- Mockito 5

---

## Project Structure

```
src
├── main
│   └── java
│       ├── ExternalApi.java
│       └── MyService.java
│
└── test
    └── java
        └── MyServiceTest.java
```

---

## Scenario

A service depends on an external API.

Instead of calling the real API, Mockito creates a mock object. After calling the service method, Mockito verifies that the expected API method was invoked.

---

## Test Steps

1. Create a mock of `ExternalApi`.
2. Inject the mock into `MyService`.
3. Call `fetchData()`.
4. Verify that `getData()` is called.

---

## Running the Test

Run the following command from the project directory:

```bash
mvn test
```

Or run `MyServiceTest` directly from IntelliJ IDEA.

---

## Expected Result

The test passes successfully and verifies that the interaction occurred.

```
Process finished with exit code 0
```

---

## Learning Outcome

- Creating mock objects using Mockito
- Dependency injection for testing
- Verifying method invocations with `verify()`
- Writing unit tests using JUnit 5

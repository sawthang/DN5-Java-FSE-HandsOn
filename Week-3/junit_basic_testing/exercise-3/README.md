# Exercise 3 - Assertions in JUnit

## Objective
The objective of this exercise is to understand and use different JUnit assertions to validate test results in a Java application.

## Tools Used
- IntelliJ IDEA
- Java
- Maven
- JUnit 4.13.2

## Assertions Used
This exercise demonstrates the use of the following JUnit assertions:
- `assertEquals()` → checks whether expected and actual values are equal
- `assertTrue()` → checks whether a condition is true
- `assertFalse()` → checks whether a condition is false
- `assertNull()` → checks whether a value is null
- `assertNotNull()` → checks whether a value is not null

## Source Code
File: `src/test/java/org/example/AssertionsTest.java`

```java
package org.example;

import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {

        // Assert equals
        assertEquals(5, 2 + 3);

        // Assert true
        assertTrue(5 > 3);

        // Assert false
        assertFalse(5 < 3);

        // Assert null
        String str = null;
        assertNull(str);

        // Assert not null
        Object obj = new Object();
        assertNotNull(obj);
    }
}

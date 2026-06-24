# Exercise 1 - Setting Up JUnit

## Objective
The objective of this exercise is to set up JUnit in a Java Maven project and create a basic test class to verify that the JUnit framework is working correctly.

## Tools Used
- IntelliJ IDEA
- Java
- Maven
- JUnit 4.13.2

## Steps Performed
1. Created a new Java project in IntelliJ IDEA.
2. Selected **Maven** as the build system.
3. Added the **JUnit 4.13.2** dependency in the `pom.xml` file.
4. Created a test class named `SetupTest` inside `src/test/java/org/example`.
5. Wrote a simple JUnit test method to check if the setup works properly.

## JUnit Dependency Added in pom.xml
```xml
<dependencies>
    <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <version>4.13.2</version>
        <scope>test</scope>
    </dependency>
</dependencies>

# Hands on 4 - Difference between JPA, Hibernate and Spring Data JPA


## Java Persistence API (JPA)

- JPA is a specification (JSR 338) that defines how Java objects should be persisted, read and managed in a relational database.
- It is only a specification, so it does not contain any concrete implementation on its own.
- Hibernate is one of the implementations of the JPA specification. Other implementations include EclipseLink and OpenJPA.

## Hibernate

- Hibernate is an ORM (Object Relational Mapping) tool that implements the JPA specification.
- When using plain Hibernate, we work directly with classes like `SessionFactory`, `Session` and `Transaction`, and we are responsible for opening sessions, managing transactions and handling exceptions ourselves.

## Spring Data JPA

- Spring Data JPA does not provide its own JPA implementation. It sits as another layer of abstraction on top of a JPA implementation provider such as Hibernate.
- It removes a lot of boilerplate code (session handling, transaction management, exception handling) that we would otherwise have to write with plain Hibernate.
- It manages transactions for us through annotations like `@Transactional`.
- Repositories are created simply by extending interfaces such as `JpaRepository`, and Spring generates the implementation at runtime.

## Code comparison

The same "add employee" operation is implemented two ways below to show the difference in boilerplate.

### Plain Hibernate approach

See `dao/EmployeeDAOHibernate.java`. Here we manually open a `Session`, begin a `Transaction`, save the entity, commit, and handle rollback and session closing ourselves in a try/catch/finally block.

### Spring Data JPA approach

See `repository/EmployeeRepository.java` and `service/EmployeeService.java`. Here we only declare an interface extending `JpaRepository<Employee, Integer>`, and call `save()` from a service method annotated with `@Transactional`. Session handling, transaction commit/rollback and exception handling are all managed by Spring behind the scenes.

## Summary

| Aspect | JPA | Hibernate | Spring Data JPA |
|---|---|---|---|
| What it is | Specification | Implementation of JPA | Abstraction over a JPA implementation |
| Boilerplate | N/A | High (manual session/transaction handling) | Low (annotation driven) |
| Transaction management | N/A | Manual | Managed via `@Transactional` |
| Repository code | N/A | Custom DAO classes | Interface extending `JpaRepository` |

## Reference links

- https://dzone.com/articles/what-is-the-difference-between-hibernate-and-sprin-1
- https://www.javaworld.com/article/3379043/what-is-jpa-introduction-to-the-java-persistence-api.html

# Exercise 3: Stored Procedures

PL/SQL exercise covering stored procedures for a bank management system.

---

## Scenarios

### Scenario 1 — Process Monthly Interest
Apply 1% monthly interest to all savings accounts.

### Scenario 2 — Update Employee Bonus
Add a bonus percentage to all employees in a given department.

---

## Files

| File | Description |
|------|-------------|
| `01_create_tables.sql` | Creates the `Customers`, `Accounts`, and `Employees` tables |
| `02_insert_data.sql` | Inserts sample rows into all three tables |
| `03_scenario1_process_monthly_interest.sql` | Procedure `ProcessMonthlyInterest` + test queries |
| `04_scenario2_update_employee_bonus.sql` | Procedure `UpdateEmployeeBonus` + test queries |

---

## How to Run

Run the files **in order** in Oracle SQL Developer, SQL*Plus, or any Oracle-compatible tool:

```sql
@01_create_tables.sql
@02_insert_data.sql
@03_scenario1_process_monthly_interest.sql
@04_scenario2_update_employee_bonus.sql
```

Enable console output before running procedures:

```sql
SET SERVEROUTPUT ON;
```

---

## Tables

### Customers
| Column | Type | Description |
|--------|------|-------------|
| customer_id | NUMBER(10) PK | Unique customer ID |
| name | VARCHAR2(100) | Customer full name |
| email | VARCHAR2(150) | Email address |
| phone | VARCHAR2(20) | Phone number |

### Accounts
| Column | Type | Description |
|--------|------|-------------|
| account_id | NUMBER(10) PK | Unique account ID |
| customer_id | NUMBER(10) FK | Links to Customers |
| account_type | VARCHAR2(20) | `SAVINGS` or `CURRENT` |
| balance | NUMBER(15,2) | Current balance |
| created_date | DATE | Account opening date |

### Employees
| Column | Type | Description |
|--------|------|-------------|
| employee_id | NUMBER(10) PK | Unique employee ID |
| name | VARCHAR2(100) | Employee full name |
| department | VARCHAR2(50) | Department name |
| salary | NUMBER(12,2) | Current salary |
| position | VARCHAR2(50) | Job title |

---

## Procedures

### ProcessMonthlyInterest
```sql
EXEC ProcessMonthlyInterest;
```
- No parameters required
- Applies **1% interest** to the balance of every `SAVINGS` account
- `CURRENT` accounts are not affected
- Prints how many accounts were updated

### UpdateEmployeeBonus
```sql
EXEC UpdateEmployeeBonus('IT', 10);   -- 10% bonus for IT dept
EXEC UpdateEmployeeBonus('HR', 15);   -- 15% bonus for HR dept
```
| Parameter | Type | Description |
|-----------|------|-------------|
| p_department | VARCHAR2 | Department name |
| p_bonus_percent | NUMBER | Bonus % to add to salary |

- Raises an error if bonus percentage is `<= 0`
- Warns if no employees are found in the given department

---

## Requirements

- Oracle Database (11g or later)
- SQL Developer / SQL*Plus / LiveSQL

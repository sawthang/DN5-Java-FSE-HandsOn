-- ============================================================
-- Exercise 3: Stored Procedures
-- File 1: Create Tables
-- ============================================================

-- Drop tables if they already exist (for re-runs)
BEGIN EXECUTE IMMEDIATE 'DROP TABLE Accounts'; EXCEPTION WHEN OTHERS THEN NULL; END;
/
BEGIN EXECUTE IMMEDIATE 'DROP TABLE Customers'; EXCEPTION WHEN OTHERS THEN NULL; END;
/
BEGIN EXECUTE IMMEDIATE 'DROP TABLE Employees'; EXCEPTION WHEN OTHERS THEN NULL; END;
/

-- ------------------------------------------------------------
-- Table: Customers
-- ------------------------------------------------------------
CREATE TABLE Customers (
    customer_id   NUMBER(10)    PRIMARY KEY,
    name          VARCHAR2(100) NOT NULL,
    email         VARCHAR2(150),
    phone         VARCHAR2(20)
);

-- ------------------------------------------------------------
-- Table: Accounts
-- account_type can be 'SAVINGS' or 'CURRENT'
-- ------------------------------------------------------------
CREATE TABLE Accounts (
    account_id    NUMBER(10)    PRIMARY KEY,
    customer_id   NUMBER(10)    NOT NULL,
    account_type  VARCHAR2(20)  NOT NULL,
    balance       NUMBER(15,2)  DEFAULT 0,
    created_date  DATE          DEFAULT SYSDATE,
    CONSTRAINT fk_accounts_customer
        FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

-- ------------------------------------------------------------
-- Table: Employees
-- ------------------------------------------------------------
CREATE TABLE Employees (
    employee_id   NUMBER(10)    PRIMARY KEY,
    name          VARCHAR2(100) NOT NULL,
    department    VARCHAR2(50)  NOT NULL,
    salary        NUMBER(12,2)  NOT NULL,
    position      VARCHAR2(50)
);

COMMIT;

-- Customers Table
CREATE TABLE Customers (
    customer_id   NUMBER PRIMARY KEY,
    customer_name VARCHAR2(100),
    age           NUMBER,
    balance       NUMBER(15,2),
    IsVIP         VARCHAR2(5),  -- 'TRUE' or 'FALSE'
    email         VARCHAR2(100)
);

-- Loans Table
CREATE TABLE Loans (
    loan_id       NUMBER PRIMARY KEY,
    customer_id   NUMBER REFERENCES Customers(customer_id),
    loan_amount   NUMBER(15,2),
    interest_rate NUMBER(5,2),
    due_date      DATE
);
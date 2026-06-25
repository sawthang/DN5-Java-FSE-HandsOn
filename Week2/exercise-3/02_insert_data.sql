-- ============================================================
-- Exercise 3: Stored Procedures
-- File 2: Insert Sample Data
-- ============================================================

-- ------------------------------------------------------------
-- Insert into Customers
-- ------------------------------------------------------------
INSERT INTO Customers VALUES (1, 'Alice Sharma',  'alice@example.com',  '9876543210');
INSERT INTO Customers VALUES (2, 'Raj Mehta',     'raj@example.com',    '9123456789');
INSERT INTO Customers VALUES (3, 'Priya Kapoor',  'priya@example.com',  '9988776655');
INSERT INTO Customers VALUES (4, 'Vikram Singh',  'vikram@example.com', '9012345678');

COMMIT;

-- ------------------------------------------------------------
-- Insert into Accounts (mix of SAVINGS and CURRENT)
-- ------------------------------------------------------------
INSERT INTO Accounts VALUES (101, 1, 'SAVINGS', 50000.00,  SYSDATE);
INSERT INTO Accounts VALUES (102, 2, 'SAVINGS', 120000.00, SYSDATE);
INSERT INTO Accounts VALUES (103, 3, 'CURRENT', 75000.00,  SYSDATE);
INSERT INTO Accounts VALUES (104, 4, 'SAVINGS', 200000.00, SYSDATE);
INSERT INTO Accounts VALUES (105, 1, 'CURRENT', 30000.00,  SYSDATE);

COMMIT;

-- ------------------------------------------------------------
-- Insert into Employees (IT and HR departments)
-- ------------------------------------------------------------
INSERT INTO Employees VALUES (1, 'Amit Verma',   'IT', 60000, 'Developer');
INSERT INTO Employees VALUES (2, 'Sunita Patel', 'IT', 75000, 'Senior Dev');
INSERT INTO Employees VALUES (3, 'Deepak Nair',  'HR', 45000, 'HR Manager');
INSERT INTO Employees VALUES (4, 'Meena Joshi',  'HR', 40000, 'Recruiter');
INSERT INTO Employees VALUES (5, 'Karan Bose',   'IT', 55000, 'Analyst');

COMMIT;

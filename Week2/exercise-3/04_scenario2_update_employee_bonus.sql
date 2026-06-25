-- ============================================================
-- Exercise 3: Stored Procedures
-- File 4: Scenario 2 - UpdateEmployeeBonus
-- ============================================================
-- Question:
--   Write a stored procedure UpdateEmployeeBonus that updates
--   the salary of employees in a given department by adding a
--   bonus percentage passed as a parameter.
-- ============================================================

SET SERVEROUTPUT ON;

-- ------------------------------------------------------------
-- Procedure: UpdateEmployeeBonus
-- Parameters:
--   p_department    IN VARCHAR2  -- name of the department
--   p_bonus_percent IN NUMBER    -- bonus percentage to add
-- Logic:
--   Adds (salary * p_bonus_percent / 100) to each employee's
--   salary in the specified department.
--   Raises an error if bonus percentage is 0 or negative.
--   Warns if no employees are found in the department.
-- ------------------------------------------------------------
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_department    IN  Employees.department%TYPE,
    p_bonus_percent IN  NUMBER
)
IS
    v_rows_updated  NUMBER;
BEGIN
    -- Validate: bonus percentage must be positive
    IF p_bonus_percent <= 0 THEN
        RAISE_APPLICATION_ERROR(
            -20001,
            'Bonus percentage must be greater than 0.'
        );
    END IF;

    -- Add bonus to salary for all employees in the given department
    UPDATE Employees
    SET    salary = salary + (salary * p_bonus_percent / 100)
    WHERE  department = p_department;

    v_rows_updated := SQL%ROWCOUNT;

    -- Warn if no matching department was found
    IF v_rows_updated = 0 THEN
        DBMS_OUTPUT.PUT_LINE(
            'Warning: No employees found in department "' ||
            p_department || '".'
        );
    ELSE
        COMMIT;
        DBMS_OUTPUT.PUT_LINE(
            p_bonus_percent || '% bonus applied to ' ||
            v_rows_updated  || ' employee(s) in '    ||
            p_department    || ' department.'
        );
    END IF;

EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END UpdateEmployeeBonus;
/

-- ============================================================
-- Test: Execute the procedure with different inputs
-- ============================================================

-- Check salaries BEFORE applying bonus
SELECT employee_id, name, department, salary AS salary_before
FROM   Employees
ORDER BY department, employee_id;

-- Give IT department a 10% bonus
EXEC UpdateEmployeeBonus('IT', 10);

-- Give HR department a 15% bonus
EXEC UpdateEmployeeBonus('HR', 15);

-- Test: department that does not exist
EXEC UpdateEmployeeBonus('FINANCE', 10);

-- Test: invalid bonus percentage (should raise error)
EXEC UpdateEmployeeBonus('IT', -5);

-- Check salaries AFTER applying bonus
SELECT employee_id, name, department, salary AS salary_after
FROM   Employees
ORDER BY department, employee_id;

-- ============================================================
-- Expected Output (10% on IT, 15% on HR):
--   Amit Verma   IT   60000 -> 66000
--   Sunita Patel IT   75000 -> 82500
--   Karan Bose   IT   55000 -> 60500
--   Deepak Nair  HR   45000 -> 51750
--   Meena Joshi  HR   40000 -> 46000
-- ============================================================

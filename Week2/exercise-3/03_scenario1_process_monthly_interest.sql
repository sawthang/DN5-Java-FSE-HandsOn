-- ============================================================
-- Exercise 3: Stored Procedures
-- File 3: Scenario 1 - ProcessMonthlyInterest
-- ============================================================
-- Question:
--   Write a stored procedure ProcessMonthlyInterest that
--   calculates and updates the balance of all savings accounts
--   by applying an interest rate of 1% to the current balance.
-- ============================================================

SET SERVEROUTPUT ON;

-- ------------------------------------------------------------
-- Procedure: ProcessMonthlyInterest
-- Parameters: None
-- Logic:
--   Applies 1% interest to the balance of every account
--   where account_type = 'SAVINGS'.
--   CURRENT accounts are not affected.
-- ------------------------------------------------------------
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
IS
    v_interest_rate  NUMBER := 0.01;   -- 1% monthly interest rate
    v_rows_updated   NUMBER;
BEGIN
    -- Apply 1% interest to all SAVINGS accounts
    UPDATE Accounts
    SET    balance = balance + (balance * v_interest_rate)
    WHERE  account_type = 'SAVINGS';

    -- Capture how many rows were updated
    v_rows_updated := SQL%ROWCOUNT;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE(
        'Monthly interest applied to ' || v_rows_updated ||
        ' savings account(s) at 1% rate.'
    );

EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END ProcessMonthlyInterest;
/

-- ============================================================
-- Test: Execute the procedure
-- ============================================================

-- Check balances BEFORE applying interest
SELECT account_id, account_type, balance AS balance_before
FROM   Accounts
ORDER BY account_id;

-- Run the procedure
EXEC ProcessMonthlyInterest;

-- Check balances AFTER applying interest
-- Only SAVINGS accounts (101, 102, 104) should have changed
SELECT account_id, account_type, balance AS balance_after
FROM   Accounts
ORDER BY account_id;

-- ============================================================
-- Expected Output:
--   Account 101  SAVINGS  50000.00  -> 50500.00
--   Account 102  SAVINGS  120000.00 -> 121200.00
--   Account 103  CURRENT  75000.00  -> 75000.00  (unchanged)
--   Account 104  SAVINGS  200000.00 -> 202000.00
--   Account 105  CURRENT  30000.00  -> 30000.00  (unchanged)
-- ============================================================

DECLARE
    CURSOR c_loans IS
        SELECT l.loan_id, l.due_date, l.loan_amount,
               c.customer_id, c.customer_name, c.email
        FROM Loans l
        JOIN Customers c ON l.customer_id = c.customer_id
        WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30
        ORDER BY l.due_date ASC;

    v_days_left NUMBER;
BEGIN
    DBMS_OUTPUT.PUT_LINE('===== LOAN DUE DATE REMINDERS =====');
    DBMS_OUTPUT.PUT_LINE('Date Generated: ' || TO_CHAR(SYSDATE, 'DD-MON-YYYY'));
    DBMS_OUTPUT.PUT_LINE('===================================');

    FOR rec IN c_loans LOOP
        v_days_left := TRUNC(rec.due_date - SYSDATE);

        DBMS_OUTPUT.PUT_LINE(
            'REMINDER >> ' ||
            'Customer: ' || rec.customer_name ||
            ' (ID: ' || rec.customer_id || ')' ||
            ' | Loan ID: ' || rec.loan_id ||
            ' | Amount: $' || rec.loan_amount ||
            ' | Due Date: ' || TO_CHAR(rec.due_date, 'DD-MON-YYYY') ||
            ' | Days Left: ' || v_days_left ||
            ' | Email: ' || rec.email
        );

        -- Urgency alert for loans due within 7 days
        IF v_days_left <= 7 THEN
            DBMS_OUTPUT.PUT_LINE('   *** URGENT: Loan due in ' ||
                                  v_days_left || ' day(s)! Immediate action required. ***');
        END IF;
    END LOOP;

    IF c_loans%ROWCOUNT = 0 THEN
        DBMS_OUTPUT.PUT_LINE('No loans due in the next 30 days.');
    END IF;

    DBMS_OUTPUT.PUT_LINE('===================================');

EXCEPTION
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/
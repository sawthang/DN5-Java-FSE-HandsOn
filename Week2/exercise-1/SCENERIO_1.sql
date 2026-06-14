DECLARE
    CURSOR c_customers IS
        SELECT c.customer_id, c.age, l.loan_id, l.interest_rate
        FROM Customers c
        JOIN Loans l ON c.customer_id = l.customer_id;

    v_new_rate Loans.interest_rate%TYPE;
BEGIN
    FOR rec IN c_customers LOOP
        IF rec.age > 60 THEN
            v_new_rate := rec.interest_rate - (rec.interest_rate * 0.01);

            UPDATE Loans
            SET interest_rate = v_new_rate
            WHERE loan_id = rec.loan_id;

            DBMS_OUTPUT.PUT_LINE('Customer ID: ' || rec.customer_id ||
                                 ' | Old Rate: ' || rec.interest_rate ||
                                 '% | New Rate: ' || v_new_rate || '%');
        END IF;
    END LOOP;

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Discount applied successfully for eligible customers.');

EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/
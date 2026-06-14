DECLARE
    CURSOR c_customers IS
        SELECT customer_id, balance, IsVIP
        FROM Customers;

    v_vip_count NUMBER := 0;
BEGIN
    FOR rec IN c_customers LOOP
        IF rec.balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE customer_id = rec.customer_id;

            v_vip_count := v_vip_count + 1;

            DBMS_OUTPUT.PUT_LINE('Customer ID: ' || rec.customer_id ||
                                 ' | Balance: $' || rec.balance ||
                                 ' => Promoted to VIP');
        ELSE
            UPDATE Customers
            SET IsVIP = 'FALSE'
            WHERE customer_id = rec.customer_id;

            DBMS_OUTPUT.PUT_LINE('Customer ID: ' || rec.customer_id ||
                                 ' | Balance: $' || rec.balance ||
                                 ' => Not VIP');
        END IF;
    END LOOP;

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Total VIP Customers: ' || v_vip_count);

EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/
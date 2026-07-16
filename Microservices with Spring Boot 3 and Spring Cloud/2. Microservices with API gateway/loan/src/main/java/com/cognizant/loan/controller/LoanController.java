package com.cognizant.loan.controller;

import com.cognizant.loan.model.Loan;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoanController {

    /**
     * Dummy endpoint - no backend connectivity.
     * GET /loans/{number}
     */
    @GetMapping("/loans/{number}")
    public Loan getLoanDetails(@PathVariable String number) {
        return new Loan(number, "car", 400000, 3258, 18);
    }

}

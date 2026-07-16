package com.cognizant.account.controller;

import com.cognizant.account.model.Account;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {

    /**
     * Dummy endpoint - no backend connectivity.
     * GET /accounts/{number}
     */
    @GetMapping("/accounts/{number}")
    public Account getAccountDetails(@PathVariable String number) {
        return new Account(number, "savings", 234343);
    }

}

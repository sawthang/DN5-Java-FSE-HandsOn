package com.cognizant.springlearn.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.springlearn.model.Country;

@RestController
public class CountryController {

    private static final Logger logger = LoggerFactory.getLogger(CountryController.class);

    private final Country india;

    public CountryController(@Qualifier("india") Country india) {
        this.india = india;
    }

    @RequestMapping(value = "/country", method = RequestMethod.GET)
    public Country getCountryIndia() {
        logger.info("start getCountryIndia()");

        logger.info("end getCountryIndia()");
        return india;
    }

}

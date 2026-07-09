package com.cognizant.springlearn.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.service.CountryService;

@RestController
public class CountryController {

    private static final Logger logger = LoggerFactory.getLogger(CountryController.class);

    private final Country india;
    private final CountryService countryService;

    public CountryController(@Qualifier("india") Country india, CountryService countryService) {
        this.india = india;
        this.countryService = countryService;
    }

    @RequestMapping(value = "/country", method = RequestMethod.GET)
    public Country getCountryIndia() {
        logger.info("start getCountryIndia()");

        logger.info("end getCountryIndia()");
        return india;
    }

    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) {
        logger.info("start getCountry()");

        Country country = countryService.getCountry(code);

        logger.info("end getCountry()");
        return country;
    }

}

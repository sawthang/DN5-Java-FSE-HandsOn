package com.cognizant.springlearn.service;

import java.util.List;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.Unmarshaller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.model.CountryList;

@Service
public class CountryService {

    private static final Logger logger = LoggerFactory.getLogger(CountryService.class);

    public Country getCountry(String code) {
        logger.info("start getCountry()");

        List<Country> countries = loadCountries();

        Country matchedCountry = countries.stream()
                .filter(country -> country.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);

        logger.info("end getCountry()");
        return matchedCountry;
    }

    private List<Country> loadCountries() {
        try {
            JAXBContext jaxbContext = JAXBContext.newInstance(CountryList.class);
            Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
            ClassPathResource resource = new ClassPathResource("country.xml");
            CountryList countryList = (CountryList) unmarshaller.unmarshal(resource.getInputStream());
            return countryList.getCountry();
        } catch (Exception e) {
            throw new RuntimeException("Unable to load country list from country.xml", e);
        }
    }

}

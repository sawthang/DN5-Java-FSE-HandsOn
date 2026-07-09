package com.cognizant.springlearn.model;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "countries")
public class CountryList {

    private List<Country> country = new ArrayList<>();

    public List<Country> getCountry() {
        return country;
    }

    @XmlElement(name = "country")
    public void setCountry(List<Country> country) {
        this.country = country;
    }

}

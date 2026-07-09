package com.cognizant.springlearn.model;

import javax.xml.bind.annotation.XmlElement;

public class Country {

    private String code;
    private String name;

    public Country() {
    }

    public Country(String code, String name) {
        this.code = code;
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    @XmlElement
    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    @XmlElement
    public void setName(String name) {
        this.name = name;
    }

}

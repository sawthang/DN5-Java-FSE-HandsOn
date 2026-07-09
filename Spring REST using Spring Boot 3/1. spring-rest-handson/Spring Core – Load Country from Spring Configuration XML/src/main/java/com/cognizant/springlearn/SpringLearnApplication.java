package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {
    private static final Logger LOGGER=LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args){
        SpringApplication.run(SpringLearnApplication.class,args);
        displayCountry();
    }

    public static void displayCountry(){
        LOGGER.info("START");
        ApplicationContext context=new ClassPathXmlApplicationContext("country.xml");
        Country country=context.getBean("country",Country.class);
        LOGGER.debug("Country : {}",country);
        LOGGER.info("END");
    }
}

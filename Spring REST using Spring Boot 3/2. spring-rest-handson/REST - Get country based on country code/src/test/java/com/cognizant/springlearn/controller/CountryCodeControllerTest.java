package com.cognizant.springlearn.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class CountryCodeControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void getCountry_lowerCaseCode_shouldReturnIndia() throws Exception {
        mockMvc.perform(get("/countries/in"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value("IN"))
                .andExpect(jsonPath("$.name").value("India"));
    }

    @Test
    public void getCountry_upperCaseCode_shouldReturnJapan() throws Exception {
        mockMvc.perform(get("/countries/JP"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value("JP"))
                .andExpect(jsonPath("$.name").value("Japan"));
    }

}

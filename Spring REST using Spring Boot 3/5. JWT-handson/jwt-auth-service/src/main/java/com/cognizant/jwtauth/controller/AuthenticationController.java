package com.cognizant.jwtauth.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Base64;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {
        LOGGER.info("start authenticate()");
        LOGGER.debug("authHeader : {}", authHeader);

        Map<String, String> map = new HashMap<>();

        String user = getUser(authHeader);
        String token = generateJwt(user);
        map.put("token", token);

        LOGGER.info("end authenticate()");
        return map;
    }

    private String getUser(String authHeader) {
        LOGGER.info("start getUser()");

        String encodedCredentials = authHeader.replace("Basic ", "");
        LOGGER.debug("encodedCredentials : {}", encodedCredentials);

        String decodedCredentials = new String(Base64.getDecoder().decode(encodedCredentials));
        LOGGER.debug("decodedCredentials : {}", decodedCredentials);

        String user = decodedCredentials.substring(0, decodedCredentials.indexOf(":"));
        LOGGER.debug("user : {}", user);

        LOGGER.info("end getUser()");
        return user;
    }

    private String generateJwt(String user) {
        LOGGER.info("start generateJwt()");

        JwtBuilder builder = Jwts.builder();
        builder.setSubject(user);

        // Set the token issue time as current time
        builder.setIssuedAt(new Date());

        // Set the token expiry as 20 minutes from now
        builder.setExpiration(new Date((new Date()).getTime() + 1200000));

        builder.signWith(SignatureAlgorithm.HS256, "secretkey");

        String token = builder.compact();
        LOGGER.debug("token : {}", token);

        LOGGER.info("end generateJwt()");
        return token;
    }

}

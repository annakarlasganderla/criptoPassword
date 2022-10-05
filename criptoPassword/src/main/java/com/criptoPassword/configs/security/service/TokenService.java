package com.criptoPassword.configs.security.service;

import com.criptoPassword.entities.User;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.UUID;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class TokenService {

    @Value("8640000")
    private String expirationDate;

    @Value("${criptoPassword.jwt.secret}")
    private String secret;

    public String createToken(Authentication authentication){

        User user = (User)authentication.getPrincipal();

        Date validFrom = new Date();
        Date validUntil = new Date(validFrom.getTime() + Long.parseLong(expirationDate));

        return Jwts.builder()
                .setIssuer("API CriptoPassword")
                .setSubject(user.getId().toString())
                .setIssuedAt(validFrom)
                .setExpiration(validUntil)
                .signWith(SignatureAlgorithm.HS256, secret)
                .compact();
    }

    public boolean isTokenValid(String token){

        try{
            Jwts.parser().setSigningKey(this.secret).parseClaimsJws(token);
            return true;
        }catch (Exception e){
            return false;
        }
    }

    public UUID getUserId(String token){
        Claims claim =  Jwts.parser().setSigningKey(this.secret).parseClaimsJws(token).getBody();

        return UUID.fromString(claim.getSubject());
    }

}

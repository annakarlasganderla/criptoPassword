package com.criptoPassword.configs.security.entities;

public class Token {

    public String token;
    //tipo de autenticação = Bearer
    public String AuthenticationType = "Bearer";

    public Token(String token) {
        this.token = token;
    }

}

package com.criptoPassword.service;

import com.criptoPassword.entities.Password;
import com.criptoPassword.respository.PasswordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class PasswordService {

    @Autowired
    private PasswordRepository passwordRepository;

    public ResponseEntity<?> registerPassword(Password password){
        try{
            this.passwordRepository.save(password);
            return ResponseEntity.ok().body("Senha cadastrada com sucesso!");
        }catch(Exception e){
            return ResponseEntity.badRequest().body("Senha já cadastrada!");
        }
    }

}


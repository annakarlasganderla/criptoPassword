package com.criptoPassword.service;

import com.criptoPassword.configs.security.service.TokenService;
import com.criptoPassword.dto.RegisterRequest;
import com.criptoPassword.entities.User;
import com.criptoPassword.respository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import org.springframework.http.HttpHeaders;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TokenService tokenService;

    public List getUsers(HttpHeaders headers) {
        String token = headers.getFirst(HttpHeaders.AUTHORIZATION);
        UUID userId = this.tokenService.getUserId(token.substring(7, token.length()));
        return this.userRepository.findAllUserPassWords(userId);
    }

    public String getUserNameById(UUID userId){
        return this.userRepository.getNameById(userId);
    }

    public ResponseEntity<?> newUser(RegisterRequest registerRequest) {
        try{
            User newUser = new User();
            newUser.setName(registerRequest.getName());
            newUser.setEmail(registerRequest.getEmail());
            newUser.setPassword(registerRequest.getPassword());
            this.userRepository.save(newUser);
            return ResponseEntity.ok(newUser);
        }catch(Exception e){
            return ResponseEntity.badRequest().build();
        }
    }

    public ResponseEntity<User> getMyDatas(HttpHeaders headers) {
        String token = headers.getFirst(HttpHeaders.AUTHORIZATION);
        UUID userId = this.tokenService.getUserId(token.substring(7, token.length()));
        Optional<User> user = this.userRepository.findById(userId);
        return user.isPresent() ? ResponseEntity.ok(user.get()) : ResponseEntity.notFound().build();
    }

}

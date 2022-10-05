package com.criptoPassword.configs.security.repository;

import com.criptoPassword.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.UUID;

public interface AuthRepository extends JpaRepository<User, UUID> {

    @Query("FROM User usuario WHERE usuario.Email = :input OR usuario.Name = :input")
    Optional<User> findByLoginOrEmail(@Param("input")String input);

}

package com.sawaari.sawaari_backend.repository;

import com.sawaari.sawaari_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    Optional<User> findByMobileNumber(String mobileNumber);
}

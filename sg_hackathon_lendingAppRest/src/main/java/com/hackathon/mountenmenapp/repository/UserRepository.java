package com.hackathon.mountenmenapp.repository;

import java.util.Optional;

import com.hackathon.mountenmenapp.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

    Optional<User> findByUsername(String username);

}
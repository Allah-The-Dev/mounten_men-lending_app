package com.hackathon.mountenmenapp.repository;

import com.hackathon.mountenmenapp.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Integer>{}
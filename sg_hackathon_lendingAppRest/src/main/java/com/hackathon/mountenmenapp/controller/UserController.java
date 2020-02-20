package com.hackathon.mountenmenapp.controller;

import com.hackathon.mountenmenapp.entity.User;
import com.hackathon.mountenmenapp.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/user")
public class UserController{

    @Autowired
    private UserService userService;

    @PostMapping(value="/signup")
    public ResponseEntity < User > postMethodName(@RequestBody  User user) {
        return ResponseEntity.ok().body(this.userService.createUser(user));
    }
    

}
package com.hackathon.mountenmenapp.controller;

import com.hackathon.mountenmenapp.entity.User;
import com.hackathon.mountenmenapp.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;


@RestController
@RequestMapping("/admin")
public class AdminController{

    @Autowired
    private UserService userService;

    @GetMapping(value="/userlist")
    public ResponseEntity < List<User> > postMethodName() {
        return ResponseEntity.ok().body(userService.getAllUsers());
    }
    

}
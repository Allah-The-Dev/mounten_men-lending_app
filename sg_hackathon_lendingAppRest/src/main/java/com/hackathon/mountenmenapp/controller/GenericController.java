package com.hackathon.mountenmenapp.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class GenericController{
    
    @GetMapping(value="/")
    public String home() {
        return "<h1>Welcome</h1>";
    }
    

    @GetMapping("/admin")
    public String admin(){ return "<h1>Welcome Admin</h1>"; }
    
}
package com.hackathon.mountenmenapp.service;

import com.hackathon.mountenmenapp.entity.User;
import java.util.List;

public interface UserService {
    User createUser(User user);

    List<User> getAllUsers();
}
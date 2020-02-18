package com.hackathon.mountenmenapp.service.impl;

import java.util.Collection;
import java.util.Optional;

import com.hackathon.mountenmenapp.entity.MyUserDetails;
import com.hackathon.mountenmenapp.entity.User;
import com.hackathon.mountenmenapp.repository.UserRepository;
import com.hackathon.mountenmenapp.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service(value = "userService")
public class UserServiceImpl implements UserDetailsService, UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByUsername(username);
        
        return user.map(MyUserDetails::new)
            .orElseThrow(() -> new UsernameNotFoundException("Not Found: " + username));
    }

}
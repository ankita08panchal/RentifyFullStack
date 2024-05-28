package com.zosh.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.zosh.config.JwtTokenProvider;
import com.zosh.exception.UserException;
import com.zosh.modal.User;
import com.zosh.repository.UserRepository;

@Service
public class UserServiceImplementation implements UserService {
    
    private UserRepository userRepository;
    private JwtTokenProvider jwtTokenProvider;
    
    public UserServiceImplementation(UserRepository userRepository, JwtTokenProvider jwtTokenProvider) {
        this.userRepository = userRepository;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    public User findUserById(Long userId) throws UserException {
        Optional<User> user = userRepository.findById(userId);
        if (user.isPresent()) {
            return user.get();
        }
        throw new UserException("User not found with ID " + userId);
    }

    @Override
    public User findUserProfileByJwt(String jwt) throws UserException {
        String email = jwtTokenProvider.getEmailFromJwtToken(jwt);
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new UserException("User not exist with email " + email);
        }
        return user;
    }

    @Override
    public List<User> findAllUsers() {
        return userRepository.findAllByOrderByCreatedAtDesc();
    }

    @Override
    public User findByEmail(String email) throws UserException {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new UserException("User not found with email " + email);
        }
        return user;
    }
}
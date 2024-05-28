package com.zosh.service;

import java.util.List;
import com.zosh.exception.UserException;
import com.zosh.modal.User;

public interface UserService {
    User findUserById(Long userId) throws UserException;
    User findUserProfileByJwt(String jwt) throws UserException;
    List<User> findAllUsers();
    User findByEmail(String email) throws UserException;
}
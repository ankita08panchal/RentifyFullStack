/*
public enum UserRole {

  ROLE_ADMIN,
  ROLE_CUSTOMER
}*/

package com.zosh.user.domain;

import com.fasterxml.jackson.annotation.JsonValue;

public enum UserRole {
    ROLE_ADMIN("admin"),
    ROLE_CUSTOMER("customer");

    private final String role;

    UserRole(String role) {
        this.role = role;
    }

    @JsonValue
    public String getRole() {
        return role;
    }

    public static UserRole fromRole(String role) {
        for (UserRole userRole : UserRole.values()) {
            if (userRole.getRole().equals(role)) {
                return userRole;
            }
        }
        throw new IllegalArgumentException("Unknown role: " + role);
    }
}
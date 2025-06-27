package com.sawaari.sawaari_backend.dto;

import lombok.Data;

import java.util.Date;

@Data
public class ProfileRequest {
    private String firstName;
    private String lastName;
    private String gender;
    private Date dob;
    private String email;
}

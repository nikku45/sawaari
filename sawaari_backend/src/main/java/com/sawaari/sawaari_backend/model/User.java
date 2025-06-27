package com.sawaari.sawaari_backend.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String mobileNumber;

    private String otp;
    private boolean otpVerified=false;

    private String firstName;
    private String lastName;
    private String gender;
    private Date dob;
    private String email;

    private Boolean emailVerified = false;
    private Boolean digilockerVerified = false;

    private Instant registeredAt = Instant.now();
}

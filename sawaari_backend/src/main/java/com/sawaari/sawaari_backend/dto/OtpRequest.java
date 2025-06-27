package com.sawaari.sawaari_backend.dto;

import lombok.Data;

@Data
public class OtpRequest {
    private String mobileNumber;
    private String otp;
}

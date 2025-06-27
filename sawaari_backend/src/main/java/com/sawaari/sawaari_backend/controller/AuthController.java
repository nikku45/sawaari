package com.sawaari.sawaari_backend.controller;


import com.sawaari.sawaari_backend.dto.MobileRequest;
import com.sawaari.sawaari_backend.dto.OtpRequest;
import com.sawaari.sawaari_backend.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/send-otp")
    public ResponseEntity<String> sendOtp(@RequestBody MobileRequest request) {
        authService.sendOtp(request.getMobileNumber());
        return ResponseEntity.ok("OTP sent");
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<String> verifyOtp(@RequestBody OtpRequest request) {
        String token = authService.verifyOtpAndLogin(request.getMobileNumber(), request.getOtp());
        return ResponseEntity.ok(token); // return JWT
    }
}
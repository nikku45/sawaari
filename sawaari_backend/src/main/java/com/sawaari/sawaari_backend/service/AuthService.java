package com.sawaari.sawaari_backend.service;


import com.sawaari.sawaari_backend.model.User;
import com.sawaari.sawaari_backend.repository.UserRepository;
import com.sawaari.sawaari_backend.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final JwtService jwtService;

    public void sendOtp(String mobileNumber) {
        String otp = String.format("%06d",new Random().nextInt(999999));
        User user = userRepository.findByMobileNumber(mobileNumber)
                .orElseGet(() -> {
                    User newUser = new User();
                    newUser.setMobileNumber(mobileNumber);
                    return newUser;
                });
        user.setOtp(otp);
        user.setOtpVerified(false);
        userRepository.save(user);

        // Simulate sending SMS
        System.out.println("OTP for " + mobileNumber + " is: " + otp);
    }


    public String verifyOtpAndLogin(String mobileNumber, String otp) {
        User user = userRepository.findByMobileNumber(mobileNumber)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if(!otp.equals(user.getOtp())) throw new RuntimeException("Invalid OTP");

        user.setOtpVerified(true);
        user.setOtp(null);
        userRepository.save(user);

        return jwtService.generateToken(user);
    }

}

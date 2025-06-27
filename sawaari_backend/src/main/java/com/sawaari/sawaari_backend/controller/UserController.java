package com.sawaari.sawaari_backend.controller;



import com.sawaari.sawaari_backend.dto.ProfileRequest;
import com.sawaari.sawaari_backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PutMapping("/profile")
    public ResponseEntity<?> updateProfile(@RequestBody ProfileRequest request,
                                           Principal principal) {
        userService.updateProfile(request, principal.getName());
        return ResponseEntity.ok("Profile updated");
    }
}

package com.sawaari.sawaari_backend.service;


import com.sawaari.sawaari_backend.dto.ProfileRequest;
import com.sawaari.sawaari_backend.model.User;
import com.sawaari.sawaari_backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public void updateProfile(ProfileRequest request, String mobile){
        User user = userRepository.findByMobileNumber(mobile)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setGender(request.getGender());
        user.setDob(request.getDob());
        user.setEmail(request.getEmail());
        userRepository.save(user);

    }
}

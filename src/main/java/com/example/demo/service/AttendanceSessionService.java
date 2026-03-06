package com.example.demo.service;

import com.example.demo.entity.AttendanceSession;
import com.example.demo.repository.AttendanceSessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AttendanceSessionService {

    @Autowired
    private AttendanceSessionRepository sessionRepository;

    public AttendanceSession createSession(AttendanceSession session) {
        return sessionRepository.save(session);
    }

    public List<AttendanceSession> getAllSessions() {
        return sessionRepository.findAll();
    }
}

package com.example.demo.controller;

import com.example.demo.service.QRCodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

@RestController
public class QRController {

    @Autowired
    private QRCodeService qrCodeService;

    @GetMapping(value = "/generateQR", produces = MediaType.IMAGE_PNG_VALUE)
    public ResponseEntity<byte[]> generateQR(@RequestParam String text) throws Exception {

        byte[] qr = qrCodeService.generateQRCode(text);

        return ResponseEntity.ok(qr);
    }
}

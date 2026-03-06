# QR Smart Attendance System

A **Full Stack QR Based Smart Attendance System** built using **Java, Spring Boot, MySQL and JavaScript**.

This system allows teachers to generate QR codes for attendance and students can scan the QR code to mark their attendance automatically.

---

# Features

• Add Students
• View Students List
• Generate Attendance QR Code
• Mark Attendance using QR
• Store Attendance in MySQL Database
• REST API based backend

---

# Tech Stack

Backend

* Java
* Spring Boot
* Spring Data JPA

Frontend

* HTML
* CSS
* JavaScript
* Bootstrap

Database

* MySQL

---

# System Architecture

Frontend (HTML / JS)
⬇
Spring Boot REST APIs
⬇
MySQL Database

---

# Project Structure

src/main/java/com/example/demo

controller
service
repository
entity

src/main/resources

static (Frontend)
application.properties

---

# API Endpoints

Add Student
POST /students

Get Students
GET /students

Generate QR
GET /generateQR?text=session

Mark Attendance
POST /attendance

---

# How to Run the Project

1. Clone the repository

git clone https://github.com/nischayj/QR-SMART-ATTENDANCE-SYSTEM.git

2. Open project in IntelliJ IDEA

3. Configure MySQL in

application.properties

4. Run

DemoApplication.java

5. Open browser

http://localhost:8080

---

# Author

Nischay Jain
BTech Computer Science Engineering

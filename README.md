# 📄 Resume Screening System

A microservices-based resume screening system built using Node.js, Express, and MVC architecture.  
This system allows users to manage resumes, analyze candidates, match jobs, and handle HR operations using REST APIs with Swagger documentation.

---

## 🚀 Features

- 📥 Resume Management (CRUD operations)
- 📊 Resume Analysis with scoring & skills extraction
- 🎯 Job Matching based on candidate skills
- 👥 HR Candidate Management
- 📚 Swagger API documentation for all services
- 🧩 Microservices architecture
- 🏗️ MVC pattern for scalable structure

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- JavaScript
- REST APIs
- Swagger (API Documentation)
- MVC Architecture

---

## 📁 Project Structure

resume-screening-system/  
│  
├── api-gateway/  
│  
├── services/  
│ ├── resume-service/  
│ ├── analysis-service/  
│ ├── matching-service/  
│ └── hr-service/  
│  
├── .gitignore  
├── package.json  
└── README.md

---

## 🔄 System Workflow

1. User submits a resume
2. Resume is analyzed (score + skills)
3. Matching service suggests jobs
4. HR service manages candidates

---

## ▶️ How to Run

### 1. Install dependencies

Run inside each service:

npm install

---

### 2. Start services (run in separate terminals)

# Resume Service

cd services/resume-service  
node server.js

# Analysis Service

cd services/analysis-service  
node server.js

# Matching Service

cd services/matching-service  
node server.js

# HR Service

cd services/hr-service  
node server.js

# API Gateway

cd api-gateway  
node server.js

---

## 🌐 API Endpoints

| Service  | Base URL                          |
| -------- | --------------------------------- |
| Resume   | http://localhost:3001/api/resumes |
| Analysis | http://localhost:3002/api/analyze |
| Matching | http://localhost:3003/api/match   |
| HR       | http://localhost:3004/api/hr      |

---

## 📘 Swagger Documentation

- Resume → http://localhost:3001/api-docs
- Analysis → http://localhost:3002/api-docs
- Matching → http://localhost:3003/api-docs
- HR → http://localhost:3004/api-docs

---

## 🧠 Architecture

- Microservices-based system
- Each service runs independently
- API Gateway handles routing

MVC structure used in all services:

- Models → Data handling
- Controllers → Business logic
- Routes → API endpoints

---

## 👨‍💻 Author

Janith Tharindu,
S I R Fernando,
Nanayakkara N H R M,
Caldera H T S

---

## 📌 Notes

- Uses in-memory storage (no database)
- Each service runs on a separate port
- Designed for learning microservices & API desi

# 🔐 JWT Visualizer

An interactive 3D visualization that teaches how JSON Web Tokens (JWT) are created step-by-step.

Instead of reading documentation, users can watch every stage of JWT generation—from Header creation to the final signed token.

---

## ✨ Features

- 🎯 Interactive JWT Builder
- 📦 Header Creation & Base64URL Encoding
- 📄 Payload Creation & Base64URL Encoding
- 🔑 HMAC SHA256 Signature Generation
- 🧩 JWT Assembly Animation
- 🗺️ JWT Mind Map Summary
- 📖 Educational Information Panels
- 🎥 Smooth Camera Transitions
- ⚡ Interactive Control Panel
- 🌙 Futuristic Cyberpunk UI

---

## 🚀 JWT Generation Flow

Input Data

↓

Header

↓

Base64URL Encode

↓

Payload

↓

Base64URL Encode

↓

Header.Payload

↓

Secret Key

↓

HMAC SHA256

↓

Signature

↓

Header.Payload.Signature

↓

Final JWT Token

---

## 🛠️ Tech Stack

- React
- React Three Fiber
- Three.js
- Drei
- Tailwind CSS
- Lucide React

---

## 📁 Project Structure

src/

├── component/

│ ├── HeaderCube.jsx

│ ├── Payload.jsx

│ ├── Signature.jsx

│ ├── JWTBuilderCube.jsx

│ ├── JWTSummaryScene.jsx

│ ├── JWTSummaryCard.jsx

│ ├── JWTSummaryMindMap.jsx

│ ├── TokenCard.jsx

│ ├── CameraController.jsx

│ ├── ControlPanel.jsx

│ ├── ProcessPanel.jsx

│ └── ...

├── data/

│ └── jwtData.js

├── App.jsx

└── main.jsx

---

## 🎮 Learning Steps

Step 1 — Enter Header, Payload & Secret

Step 2 — Encode Header

Step 3 — Encode Payload

Step 4 — Generate Signature

Step 5 — Assemble JWT

Step 6 — View JWT Summary

---

## 📸 Screenshots

(Add screenshots here)

---

## ⚙️ Installation

```bash
git clone https://github.com/yourusername/jwt-visualizer.git
```

```bash
cd jwt-visualizer
```

```bash
npm install
```

```bash
npm run dev
```

---

## 🎯 Purpose

This project is designed for students and developers who want to understand JWT visually instead of memorizing theory.

Every stage is animated to demonstrate:

- Header
- Payload
- Base64URL Encoding
- HMAC SHA256
- Signature
- Final JWT Assembly

---

## 📚 What You'll Learn

- What is JWT?
- JWT Structure
- Base64URL Encoding
- Header vs Payload
- HMAC SHA256
- Signature Generation
- Secret Key Usage
- Complete JWT Flow

---

## 🌟 Future Improvements

- JWT Decode Visualizer
- RSA (RS256) Support
- Token Verification
- Token Tampering Demo
- Expiration Simulation
- Interactive Quizzes
- Backend Integration

---

## 📄 License

MIT License
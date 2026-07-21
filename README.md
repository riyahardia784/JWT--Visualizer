# 🔐 JWT Visualizer

An interactive 3D visualization that teaches how JSON Web Tokens (JWT) are created step-by-step.

Instead of reading documentation, users can watch every stage of JWT generation—from Header creation to the final signed token.

Live Link : [JWT Visualizer](https://jwt-visulizer.vercel.app/)


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

<img width="1920" height="919" alt="image" src="https://github.com/user-attachments/assets/ee78d859-bf1a-478d-8143-15c538993396" />

<img width="1920" height="925" alt="image" src="https://github.com/user-attachments/assets/a9b4c5d3-5ac3-40cd-8deb-0acd0c761740" />

<img width="1920" height="929" alt="image" src="https://github.com/user-attachments/assets/c4cb2b30-e802-42bb-944b-afe9326b7c39" />

<img width="1920" height="926" alt="image" src="https://github.com/user-attachments/assets/77a464d8-1ff0-4f16-90f6-8fded6913a50" />

<img width="1920" height="935" alt="image" src="https://github.com/user-attachments/assets/145b9d4e-7c0b-469f-801a-ed2119fc80c5" />

<img width="1920" height="922" alt="image" src="https://github.com/user-attachments/assets/69ca763d-b7cd-4e56-8aa4-783f6cab9725" />







---

## ⚙️ Installation

```bash
git clone https://github.com/riyahardia784/JWT--Visualizer.git
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

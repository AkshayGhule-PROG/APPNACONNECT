APPNA_CONNECT

APPNA_CONNECT is a full-stack video conferencing application with authentication and real-time communication built using React, Node.js, Socket.IO, and WebRTC. It allows users to register, login, and start video calls with other users in real-time.

🚀 Features

🔐 Authentication System – Register, Login, and Forgot Password

🖥️ Real-time Video Calling using WebRTC and Socket.IO

⚡ Signaling Server for peer-to-peer connection setup

🌍 STUN Server integration for NAT traversal

🎨 Responsive UI with modern design

🗂️ Organized codebase: separate backend and frontend

🛠️ Tech Stack

Frontend: React.js, HTML5, CSS3, JavaScript

Backend: Node.js, Express.js

Real-time Communication: Socket.IO, WebRTC

Database: MongoDB (for user data/authentication)

Other Tools: PostCSS, Vite

🏗️ Project Setup
1️⃣ Clone the Repository
git clone https://github.com/akshayghule-prog/appna_connect.git
cd appna_connect

2️⃣ Backend Setup
cd backend
npm install
npm start

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

🔌 How It Works
Socket.IO + Signaling Server

Peers cannot connect directly without exchanging connection details.

The signaling server (Socket.IO) facilitates this by exchanging:

Offer from caller → server → callee

Answer from callee → server → caller

ICE Candidates (network info for P2P)

STUN Server

Discovers public IP addresses when behind NAT.

Example free server:

{ "urls": "stun:stun.l.google.com:19302" }

Navigator MediaDevices

Access user camera & microphone:

navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => { myVideo.srcObject = stream; })
  .catch(err => { console.error("Permission denied:", err); });

📸 Screenshots / Demo

Login / Register Page

Landing Page / Dashboard

Video Call Screen

(Add images or GIFs here to showcase your work visually)

📜 Development Timeline (Commits)

Backend Setup: Socket.IO & signaling server

Frontend Authentication: Login, Register, Forgot Password

Frontend Video Call: WebRTC integration with video/audio

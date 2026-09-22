# RescueGrid Nagpur | Hackathon Winner Web Application

> **Nagpur Hackathon - Track 4: Disaster Management & Urban Resilience**  
> An AI-Powered Emergency Response, Live Inundation Mapping, Shelter Management, Safe Route Navigation, and Multi-Agency Command Platform built for Nagpur Smart City.

---

## 🚀 Key Innovation & Edge

* **Digital Twin of Nagpur**: Interactive 3D topology visualization of Nagpur (Ambazari Dam, Nag River Corridor, Narendra Nagar Underpass, Sitabuldi Command) with real-time sensor telemetries.
* **Live Emergency Map**: Leaflet interactive map with custom dark mode, layer filters (Flood, Fire, Traffic, Satellite), live moving SDRF boats, fire tenders, and danger zone polygon heat overlays.
* **Smart Shelter Finder**: Real-time capacity progress bars (Green = Available, Yellow = Filling Fast, Red = Full), food stock (kg), water supply (Liters), doctor on site, wheelchair ramps.
* **AI Safe Evacuation Route Engine**: Calculates safest route bypassing flooded underpasses (Narendra Nagar) & Nag river overflows with a Safety Score index (e.g., 96% Safe vs 34% Dangerous).
* **Citizen Incident Reporting**: GPS auto-detection, Web Audio API voice recorder, photo upload, and **AI Duplicate Report Merging**.
* **One-Tap SOS System**: 3-second safety countdown, browser Web Audio API audio location siren synth, instant WhatsApp/SMS broadcast, and ticket ID generation (`SOS-NGP-9021`).
* **Multi-Agency Command Dashboard**: Role-switchable interface for **Nagpur Police**, **Fire Brigade**, **SDRF Rescue Force**, and **NMC Municipal Corporation** with dispatch triage and analytics.
* **Sahayak AI Chatbot**: Multilingual emergency assistant supporting **English**, **Hindi (हिंदी)**, and **Marathi (मराठी)**.
* **Offline Resilience & PWA**: PWA banner, cached emergency numbers, and Offline Citizen QR Emergency Pass.

---

## 🛠️ Tech Stack

| Component | Technology Used |
| --- | --- |
| **Frontend Framework** | React 18 + TypeScript + Vite |
| **Styling & UI** | Tailwind CSS v3 + Glassmorphism + Custom Dark Navy (`#0A2540`) & Emergency Orange (`#FF6B35`) Theme |
| **Icons & Animations** | Lucide React + Framer Motion |
| **Maps & Spatial Viz** | Leaflet + React-Leaflet (Dark CartoDB & Esri Satellite tiles) |
| **Analytics Charts** | Recharts (Response Time Trends & Incident Distribution) |
| **Audio Hardware** | Web Audio API Synthesizer (Emergency Siren & Beep Feedback) |
| **Backend & APIs** | Node.js + Express.js REST APIs |

---

## 📦 Project Setup & Running Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Frontend Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build & Typecheck for Production
```bash
npm run build
npm run lint
```

### 4. Optional Backend Server
```bash
npm run server
```

---

## 📍 Nagpur Realistic Sample Dataset

Included locations & disaster points:
* **Sitabuldi Interchange & Command Hub** (`21.1466, 79.0831`)
* **Ambazari Lake Spillway & Overflow Gate** (`21.1292, 79.0435`)
* **Nag River Channel (Sakkardara - Reshimbagh)** (`21.1250, 79.1000`)
* **Narendra Nagar Submerged Railway Underpass** (`21.1090, 79.0760`)
* **Mankapur Indoor Sports Complex Mega Shelter** (`21.1880, 79.0700`)
* **Yashwant Stadium Evacuation Center** (`21.1380, 79.0820`)
* **VCA Jamtha / Civil Lines Protection Camp** (`21.1530, 79.0720`)

---

## 📄 License
MIT License. Built for Nagpur Hackathon.

# ⚡ SnapURL — Frontend

A modern, fast, and responsive user interface for **SnapURL**, a self-hosted URL shortening service. Built using **React 19**, **Vite**, **TypeScript**, and custom vanilla CSS for a clean, premium, and interactive user experience.

---

## ✨ Features

- **Instant Shortening:** Enter any long URL and get a shortened link in seconds.
- **One-Click Copy:** Easily copy shortened links to your clipboard with animated user feedback.
- **Robust Error Handling:** Instantly detects and warns if the backend server is down or unreachable.
- **Fully Responsive:** Sleek, modern card-based layout optimized for desktop, tablet, and mobile devices.
- **Micro-Animations:** Interactive buttons, hover effects, and clean SVG transitions.

---

## 🛠️ Tech Stack

- **Core Framework:** React 19
- **Build Tool:** Vite (with Fast Refresh support)
- **Language:** TypeScript
- **HTTP Client:** Axios
- **Styling:** Vanilla CSS3 (Custom variables, glassmorphism, and responsive flex/grid)
- **Linter:** ESLint

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd url_shortner_frontend
   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   The application will run locally at `http://localhost:5173`.

### Production Build

To build a minified, production-ready bundle of the application, run:
```bash
npm run build
```
The output files will be generated in the `dist/` directory.

---

## 🔗 Backend Integration

By default, the frontend is configured to communicate with the SnapURL API at:
* **API Endpoint:** `http://localhost:8000/shorten`

### Quick Backend Setup Guide

To run the matching backend for this project:

1. Open a new terminal and navigate to the backend directory:
   ```bash
   cd urlshortner
   ```

2. Activate the Python virtual environment:
   - **Windows (PowerShell/CMD):**
     ```powershell
     .\venv\Scripts\activate
     ```
   - **macOS/Linux:**
     ```bash
     source venv/bin/activate
     ```

3. Install required packages (if not already installed):
   ```bash
   pip install fastapi uvicorn sqlmodel psycopg2-binary python-dotenv
   ```

4. Create/verify the `.env` file inside the `urlshortner` folder:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/url_shortener_db"
   ALLOWED_ORIGINS="http://localhost:5173"
   ```

5. Run the FastAPI development server:
   ```bash
   uvicorn main:app --reload --port 8000
   ```

---

## 📁 Project Structure

```text
url_shortner_frontend/
├── public/              # Static public assets
├── src/
│   ├── assets/          # Images, SVGs, and other media
│   ├── App.css          # Core CSS stylesheet (colors, variables, responsive design)
│   ├── App.tsx          # Main application component & form handling logic
│   ├── main.tsx         # React entrypoint
│   └── index.css        # Global CSS resets
├── index.html           # Main HTML document
├── package.json         # Package configuration and script definitions
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite build configurations
```

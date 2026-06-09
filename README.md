<div align="center">
  <img src="./public/logo.png" alt="Klimate Logo" width="120" />
  <h1>Klimate</h1>
  <p><em>A production-grade weather intelligence dashboard built for speed, clarity, and modern UX.</em></p>

  <p>
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
    <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
    <img src="https://img.shields.io/badge/TanStack_Query-5-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
    <img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
  </p>

  <p>
    <a href="https://klimate-topaz.vercel.app" target="_blank">
      <img src="https://img.shields.io/badge/🌐 Live Demo-klimate--topaz.vercel.app-blue?style=for-the-badge" />
    </a>
  </p>
</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment-to-vercel)
- [License](#-license)

---

## 🌤 Overview

**Klimate** is a full-featured, production-ready weather dashboard application that delivers real-time weather data and forecasts for any city worldwide. Built with a modern, performance-first stack — React 19, Vite 8, and TanStack Query v5 — it features intelligent client-side caching, optimistic UI updates, geolocation-based weather detection, and a polished dark/light theme system.

Data is sourced from the **OpenWeatherMap API**, covering current conditions, 5-day hourly forecasts, reverse geocoding, and city search.

---

## ✨ Features

| Feature | Description |
|---|---|
| 📍 **Geolocation Weather** | Auto-detects your current location on load and displays live weather data. |
| 🔍 **City Search (Command Palette)** | Keyboard-first city search with instant results, powered by `cmdk`. |
| 📈 **Hourly Temperature Chart** | Interactive Recharts line chart visualizing the next 24 hours of temperature data. |
| 📅 **5-Day Forecast** | Daily high/low temperatures, weather conditions, and precipitation data. |
| ⭐ **Favourites System** | Pin cities for one-click access. Persisted to `localStorage` via a custom hook. |
| 🕑 **Search History** | Automatically tracks your recently viewed cities. |
| 🌗 **Dark / Light Theme** | System-aware theming with manual override, built on `next-themes`. |
| ⚡ **Smart Caching** | TanStack Query caches data for 5 minutes, eliminating redundant API calls. |
| 🔔 **Toast Notifications** | Action feedback (added/removed favourites) via `sonner`. |

---

## 🛠 Tech Stack

### Core
| Technology | Version | Role |
|---|---|---|
| [React](https://react.dev) | 19 | UI Framework |
| [TypeScript](https://www.typescriptlang.org) | 5 | Type Safety |
| [Vite](https://vite.dev) | 8 | Build Tool & Dev Server |
| [React Router](https://reactrouter.com) | 7 | Client-Side Routing |

### Data & State
| Technology | Version | Role |
|---|---|---|
| [TanStack Query](https://tanstack.com/query) | 5 | Server state, caching, background refetching |
| [OpenWeatherMap API](https://openweathermap.org/api) | 2.5 | Weather & Geocoding data source |

### UI & Styling
| Technology | Version | Role |
|---|---|---|
| [Tailwind CSS](https://tailwindcss.com) | 4 | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com) | Latest | Accessible component primitives |
| [Lucide React](https://lucide.dev) | Latest | Icon library |
| [Recharts](https://recharts.org) | 3 | Composable charting |
| [next-themes](https://github.com/pacocoursey/next-themes) | Latest | Theme management |
| [sonner](https://sonner.emilkowal.ski) | Latest | Toast notifications |
| [cmdk](https://cmdk.paco.me) | Latest | Command palette |

---

## 📁 Project Structure

```
Klimate/
├── public/
│   └── logo.png
├── src/
│   ├── api/
│   │   ├── config.ts          # API base URLs & key config
│   │   ├── types.ts           # TypeScript types for API responses
│   │   └── weather.ts         # All OpenWeatherMap API fetch functions
│   ├── components/
│   │   ├── ui/                # shadcn/ui base components
│   │   ├── city-search.tsx    # Command palette city search
│   │   ├── current-weather.tsx
│   │   ├── favourite-button.tsx
│   │   ├── favourite-cities.tsx
│   │   ├── header.tsx
│   │   ├── hourly-temperature.tsx
│   │   ├── weather-details.tsx
│   │   └── weather-forecast.tsx
│   ├── context/
│   │   └── theme-provider.tsx
│   ├── hooks/
│   │   ├── use-favourite.ts       # Favourites CRUD with localStorage
│   │   ├── use-geolocation.ts     # Browser Geolocation API hook
│   │   ├── use-local-storage.ts   # Generic localStorage hook
│   │   ├── use-search-history.ts  # Search history management
│   │   └── use-weather.ts         # TanStack Query weather data hooks
│   ├── pages/
│   │   ├── city-page.tsx          # /city/:cityName route
│   │   └── weather-dashboard.tsx  # / root route
│   ├── App.tsx
│   └── main.tsx
├── .env                           # Local environment variables (gitignored)
├── .env.example                   # Template for environment setup
├── vite.config.ts
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x
- A free **OpenWeatherMap API key** → [Get one here](https://home.openweathermap.org/api_keys)

> [!NOTE]
> New OpenWeatherMap API keys can take up to **2 hours** to activate after generation, even when listed as "Active" in the dashboard.

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/krishnasikheriya-dev/Klimate.git
cd Klimate
```

**2. Install dependencies**
```bash
npm install
```

**3. Configure environment variables**
```bash
cp .env.example .env
```
Then open `.env` and fill in your key:
```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

**4. Start the development server**
```bash
npm run dev
```
Navigate to `http://localhost:5173` in your browser.

### Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start local development server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the codebase |

---

## 🔐 Environment Variables

| Variable | Required | Description |
|---|---|---|
| `VITE_OPENWEATHER_API_KEY` | ✅ Yes | Your OpenWeatherMap API key. Never commit this to git. |

> [!CAUTION]
> The `.env` file is listed in `.gitignore` and **must never be committed** to the repository. Use Vercel's Environment Variables dashboard for production secrets.

---

## 🌐 Deployment to Vercel

Klimate is optimized for zero-config deployment on [Vercel](https://vercel.com).

### Step-by-step

**1. Push to GitHub**
Ensure your latest code is pushed to your GitHub repository.

**2. Import on Vercel**
- Log in at [vercel.com](https://vercel.com)
- Click **Add New → Project**
- Select your `Klimate` repository and click **Import**

**3. Configure Environment Variables**
Before deploying, expand the **Environment Variables** section and add:

| Name | Value |
|---|---|
| `VITE_OPENWEATHER_API_KEY` | `your_actual_api_key` |

**4. Deploy**
Click **Deploy**. Vercel auto-detects Vite, runs `npm run build`, and publishes the `dist/` directory to a global CDN.

Every push to `main` triggers an automatic redeployment.

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/krishnasikheriya-dev">krishnasikheriya-dev</a></p>
</div>

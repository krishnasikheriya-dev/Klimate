<div align="center">
  <img src="./public/logo.png" alt="Klimate Logo" width="200" />
  <h1>☁️ Klimate</h1>
</div>

Klimate is a modern, responsive, and sleek weather dashboard application built with React, Vite, and TanStack Query. It provides real-time weather data, forecasts, and interactive charts, allowing you to easily track the weather for your current location or any city around the world.

## ✨ Features

- **Current Weather**: View real-time temperature, humidity, wind speed, and more based on your geolocation.
- **5-Day Forecast & Hourly Charts**: Interactive charts (using Recharts) to visualize temperature trends over the upcoming hours and days.
- **City Search**: Quickly search for any city globally to view its weather conditions.
- **Favourites System**: Save your most-visited cities to a favourites list for quick access. Favourites are persisted locally.
- **Search History**: Automatically keeps track of your recently searched cities.
- **Dark/Light Mode**: Fully supports an integrated theming system.

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **Language**: TypeScript
- **State Management & Data Fetching**: TanStack Query (React Query)
- **Routing**: React Router
- **Styling**: Tailwind CSS v4 + Shadcn UI
- **Icons**: Lucide React
- **Charts**: Recharts
- **Weather Data**: OpenWeatherMap API

## 🚀 Getting Started Locally

### Prerequisites
- Node.js installed on your machine
- A free API Key from [OpenWeatherMap](https://openweathermap.org/api)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd Klimate
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory and add your OpenWeather API key:
   ```env
   VITE_OPENWEATHER_API_KEY=your_openweathermap_api_key_here
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to the local server URL provided in the terminal (usually `http://localhost:5173`).

## 🌐 Deploying to Vercel

Vercel is the recommended platform to host this application for free.

1. **Push your code to GitHub:**
   Ensure your project is pushed to a remote repository on GitHub, GitLab, or Bitbucket.

2. **Import Project to Vercel:**
   - Log in to your [Vercel dashboard](https://vercel.com).
   - Click **Add New...** -> **Project**.
   - Connect your GitHub account and import the `Klimate` repository.

3. **Configure the Project Details:**
   - **Framework Preset**: Vercel will automatically detect `Vite`. Leave the default Build Command (`npm run build`) and Output Directory (`dist`).
   - **Environment Variables**: Open the "Environment Variables" dropdown and add your API key:
     - Name: `VITE_OPENWEATHER_API_KEY`
     - Value: `<your-actual-api-key>`

4. **Deploy!**
   Click the **Deploy** button. Vercel will build the app and provide you with a live URL within seconds. Any time you push a new commit to your `main` branch, Vercel will automatically rebuild and deploy your changes.

## 📜 License

This project is open-source and available under the MIT License.

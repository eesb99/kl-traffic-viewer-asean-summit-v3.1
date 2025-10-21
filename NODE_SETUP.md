# KL Traffic Viewer - Node.js Backend Setup

## Version 3.1 - ASEAN Summit Edition with Secure Backend

This version uses Node.js + Express to read your API key from `~/.env` instead of embedding it in the HTML.

### 🔐 Security Benefits
- ✅ API key never exposed in HTML source code
- ✅ API key read securely from backend only
- ✅ Environment variables isolated from browser
- ✅ Easy to update API key without changing HTML

---

## 📋 Prerequisites

You need:
- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- **API key** in `~/.env` as `GOOGLE_MAPS_API_KEY`

---

## 🚀 Installation & Setup

### Step 1: Verify API Key in ~/.env

Make sure your `~/.env` file has:
```bash
export GOOGLE_MAPS_API_KEY=YOUR_ACTUAL_API_KEY_HERE
```

Check it:
```bash
grep GOOGLE_MAPS_API_KEY ~/.env
```

Should output:
```
export GOOGLE_MAPS_API_KEY=YOUR_ACTUAL_API_KEY_HERE
```

**⚠️ SECURITY WARNING:** Never commit your actual API key to version control!

---

### Step 2: Install Dependencies

Navigate to project folder:
```bash
cd ~/Claude/projects/kl-traffic-viewer-asean-summit-v3.1
```

Install npm packages:
```bash
npm install
```

This installs:
- `express` - Web server
- `dotenv` - Load environment variables

---

### Step 3: Start the Server

Run the server:
```bash
npm start
```

You should see:
```
🚗 KL Traffic Viewer Server
========================================
✅ Server running on http://localhost:3000
✅ API Key loaded from ~/.env
✅ Key: AIzaSyCWsN7vjMN_4...
```

---

### Step 4: Open in Browser

Open Safari (or any browser) and go to:
```
http://localhost:3000
```

The app should load with:
- 🗺️ Map of Kuala Lumpur
- 🚗 Real-time traffic colors
- 📍 "My Location" button
- 🎯 Preset location buttons

---

## 🛑 Stop the Server

In terminal, press: **`Ctrl + C`**

You'll see:
```
👋 Shutting down server...
```

---

## 🔧 Troubleshooting

### Error: "npm: command not found"
You need to install Node.js: https://nodejs.org/
- Download the LTS version
- Install it
- Restart terminal
- Try `npm install` again

### Error: "GOOGLE_MAPS_API_KEY not found in ~/.env"
The API key isn't in your `.env` file. Fix it:
```bash
echo 'export GOOGLE_MAPS_API_KEY=YOUR_ACTUAL_API_KEY_HERE' >> ~/.env
```

**⚠️ Replace YOUR_ACTUAL_API_KEY_HERE with your actual API key from Google Cloud Console!**

Then restart the server.

### Error: "Port 3000 already in use"
Another app is using port 3000. Options:
1. Stop the other app
2. Use a different port:
   ```bash
   PORT=3001 npm start
   ```
   Then open `http://localhost:3001`

### Map doesn't show traffic
- Make sure Maps JavaScript API is enabled in Google Cloud
- Check browser console (F12 → Console) for errors
- Refresh the page

### Browser shows "Can't reach this page"
- Make sure server is running (`npm start`)
- Make sure you're using `http://localhost:3000` (not `https`)
- Check that terminal shows "✅ Server running on http://localhost:3000"

---

## 📁 Project Files

```
kl-traffic-viewer-asean-summit-v3.1/
├── server.js              # Node.js backend (reads .env)
├── package.json           # Dependencies (express, dotenv)
├── index.html             # Traffic viewer app with ASEAN Summit features
├── summit-data.js         # ASEAN Summit road closures & event data
├── README.md              # Main documentation (unified)
├── NODE_SETUP.md          # This file (Node.js setup and configuration)
├── ASEAN_SUMMIT_V3.1_README.md  # ASEAN Summit features detail
├── CONVOY_DETECTION_README.md   # Smart convoy detection system
├── LICENSE                # MIT License
├── DMCA.md                # Copyright declaration
├── SECURITY.md            # Security policy
└── node_modules/          # Installed packages (auto-created)
```

---

## 🔄 How It Works

```
[Browser]
   ↓
[Server reads ~/.env] → Gets GOOGLE_MAPS_API_KEY
   ↓
[Server injects key into HTML]
   ↓
[Browser receives HTML with key]
   ↓
[Map loads with traffic layer]
```

The key is **never exposed** in browser source code!

---

## ⌨️ Keyboard Shortcuts

Same as HTML version:
- `H` - Help menu
- `1` - KLCC
- `2` - Mid Valley
- `3` - KLIA
- `4` - City Center
- `R` - Reset view

---

## 🚀 Next Steps

### Host Online (Optional)
To make this accessible from anywhere:
- Use `Heroku`, `Railway`, or `Render` (free tiers available)
- They handle Node.js hosting automatically

### Add Features
- Search functionality
- Incident markers
- Dark mode toggle
- Save favorite locations

---

## 📚 Learn More

- **Express.js:** https://expressjs.com/
- **dotenv:** https://github.com/motdotla/dotenv
- **Google Maps API:** https://developers.google.com/maps

---

**Happy traffic viewing with secure backend!** 🚗🔐


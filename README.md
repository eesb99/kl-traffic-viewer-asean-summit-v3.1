# 🚗 KL Traffic Viewer v3.1 - ASEAN Summit Edition

**Real-time traffic monitoring for Kuala Lumpur during the 47th ASEAN Summit 2025**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-3.1.0-blue.svg)](https://github.com/eesb99/kl-traffic-viewer-asean-summit-v3.1)
[![Status](https://img.shields.io/badge/status-production-green.svg)](https://github.com/eesb99/kl-traffic-viewer-asean-summit-v3.1)

---

## 📋 Overview

A comprehensive browser-based real-time traffic monitoring application specifically designed for the **47th ASEAN Summit 2025** (October 26-28) in Kuala Lumpur. This application combines live traffic data, road closure visualization, and smart convoy detection to help commuters navigate during this major event.

### 🎯 Key Features

✅ **Real-Time Traffic Monitoring** - Live traffic flow updates from Google Maps
✅ **ASEAN Summit Event Dashboard** - Countdown timer, event status, and timeline
✅ **Smart Convoy Detection** - AI-powered automatic convoy movement detection (v3.1 NEW!)
✅ **Road Closure Visualization** - 14 major affected roads with color-coded overlays
✅ **Interactive Map** - Zoom, pan, and explore with preset locations
✅ **Secure Backend** - Node.js + Express with environment variable API keys
✅ **Mobile Responsive** - Works seamlessly on desktop and mobile devices
✅ **Keyboard Shortcuts** - Quick navigation with keyboard commands
✅ **Complete Documentation** - MIT licensed with full security policies

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v14 or higher)
- **Google Maps API Key** (free tier available)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/eesb99/kl-traffic-viewer-asean-summit-v3.1.git
   cd kl-traffic-viewer-asean-summit-v3.1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up API key**

   Create a `~/.env` file with your Google Maps API key:
   ```bash
   export GOOGLE_MAPS_API_KEY=YOUR_ACTUAL_API_KEY_HERE
   ```

   📖 **Need an API key?** See [NODE_SETUP.md](NODE_SETUP.md) for detailed setup steps

   **Getting a Google Maps API Key:**
   1. Go to [Google Cloud Console](https://console.cloud.google.com/)
   2. Create new project: "kl-traffic-viewer"
   3. Enable "Maps JavaScript API"
   4. Create API key under "Credentials"
   5. (Optional) Restrict API key for security

4. **Start the server**
   ```bash
   npm start
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

That's it! 🎉

---

## 🎪 ASEAN Summit Features (v3.1)

### 1. Event Dashboard
- Live countdown to summit (October 26-28, 2025)
- Event status indicator (Pre-event/Live/Post-event)
- Police deployment timeline (16,000 officers)
- Notable attendees display
- Alert level indicator

### 2. Road Closure Monitoring
- **14 Major Affected Roads** with real-time overlays
- **6 Critical Intersections** marked on map
- **6 Expressways Impacted** (MEX, North-South, ELITE, NKVE, GCE, KL-Seremban)
- **3 Restricted Zones** (Golden Triangle, City Centre, Convention Centre)

### 3. Smart Convoy Detection (NEW in v3.1!)
- **Automatic detection** of convoy movements using traffic pattern analysis
- **Confidence scoring** (HIGH/MEDIUM/LOW) based on multiple factors
- **Real-time alerts** with map markers
- **Historical tracking** of detected convoys
- **30-second polling** for continuous monitoring

📖 **Learn More:** [CONVOY_DETECTION_README.md](CONVOY_DETECTION_README.md)

### 4. Summit Information Panel
- Event timeline and key dates
- Vehicle restrictions (heavy vehicles banned)
- Public transport recommendations
- DO's and DON'Ts guide
- Travel delay estimates

📖 **Full ASEAN Summit Details:** [ASEAN_SUMMIT_V3.1_README.md](ASEAN_SUMMIT_V3.1_README.md)

---

## 🗺️ Traffic Status Legend

| Color | Status | Speed | Impact |
|-------|--------|-------|--------|
| 🟢 Green | Smooth Flow | Fast | Normal |
| 🟡 Yellow | Moderate | Normal | Minor delays |
| 🟠 Orange | Heavy Traffic | Slow | Significant delays |
| 🔴 Red | Severe Congestion | Very Slow | Major delays |

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `H` | Show help menu |
| `1` | Go to KLCC |
| `2` | Go to Mid Valley |
| `3` | Go to KLIA |
| `4` | Go to City Center |
| `R` | Reset view |
| `+/-` | Zoom in/out |
| Scroll | Zoom map |
| Drag | Pan map |

---

## 📚 Documentation

### Setup & Configuration
- **[NODE_SETUP.md](NODE_SETUP.md)** - Node.js backend setup and API key configuration

### Features & Functionality
- **[ASEAN_SUMMIT_V3.1_README.md](ASEAN_SUMMIT_V3.1_README.md)** - Complete ASEAN Summit features
- **[CONVOY_DETECTION_README.md](CONVOY_DETECTION_README.md)** - Smart convoy detection system

### Legal & Security
- **[SECURITY.md](SECURITY.md)** - Security policies and best practices
- **[DMCA.md](DMCA.md)** - Copyright and DMCA declaration
- **[LICENSE](LICENSE)** - MIT License

---

## 📁 Project Structure

```
kl-traffic-viewer-asean-summit-v3.1/
├── server.js                    # Express backend with secure API key
├── package.json                 # Dependencies and project config
├── index.html                   # Main application UI
├── summit-data.js               # ASEAN Summit road closures data
├── README.md                    # This file (main documentation)
├── NODE_SETUP.md                # Backend setup and configuration
├── ASEAN_SUMMIT_V3.1_README.md  # ASEAN Summit detailed features
├── CONVOY_DETECTION_README.md   # Convoy detection system docs
├── LICENSE                      # MIT License
├── DMCA.md                      # Copyright declaration
├── SECURITY.md                  # Security policy
└── node_modules/                # Installed packages (auto-created)
```

---

## 🔐 Security

**IMPORTANT:** This project uses secure backend practices:

- ✅ API keys stored in `~/.env` (never in code)
- ✅ Enhanced `.gitignore` prevents key exposure
- ✅ Node.js backend injects keys server-side
- ✅ No API keys exposed in browser source
- ✅ Complete security documentation

⚠️ **WARNING:** If you find any exposed API keys in this repository, they have been invalidated. Always use your own API key.

📖 **Read:** [SECURITY.md](SECURITY.md) for detailed security policies and vulnerability reporting.

---

## 🎯 Use Cases

### During ASEAN Summit (Oct 26-28, 2025)
- Monitor real-time traffic conditions
- Detect convoy movements automatically
- Find alternative routes around closures
- Check road closure status
- Plan travel times with delay estimates

### Daily Use (Outside Summit)
- Real-time KL traffic monitoring
- Quick access to major locations (KLCC, Mid Valley, KLIA)
- Mobile-friendly traffic viewer
- Free Google Maps API usage

---

## 🚗 Traffic Restrictions (ASEAN Summit)

### Vehicle Restrictions
- ❌ **Heavy vehicles BANNED** during peak summit hours
- ⚠️ **Commercial vehicles restricted** during peak hours

### Recommended Transport
- ✅ LRT - Light Rail Transit
- ✅ MRT - Mass Rapid Transit
- ✅ Monorail - KL Monorail
- ✅ Rapid KL Buses

### DO's ✅
- Plan routes in advance
- Use public transportation
- Check real-time traffic before traveling
- Allow extra travel time (30-60 minutes)
- Work from home if possible during summit
- Avoid Golden Triangle area (KLCC vicinity)

### DON'Ts ❌
- Park on affected roads (vehicles will be towed)
- Use heavy vehicles in city centre
- Travel during peak hours (7-9 AM, 5-7 PM)
- Expect normal traffic conditions
- Attempt blocked routes

---

## 💰 Pricing

**FREE!** 💰

Google Cloud provides $200/month free credit, which is more than enough for personal use.
No credit card required to stay within free tier.

---

## 🌐 Browser Compatibility

Works on all modern browsers:
- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🐛 Troubleshooting

**Map doesn't load?**
- Check API key is correctly set in `~/.env`
- Ensure Maps JavaScript API is enabled in Google Cloud Console
- Check browser console (F12 → Console) for errors

**No traffic data showing?**
- Give it a few seconds to load
- Zoom to level 11-14 for best traffic visibility
- Refresh the page
- Check internet connection

**Server won't start?**
- Ensure Node.js is installed (`node --version`)
- Check if port 3000 is available
- Verify `~/.env` file exists with API key
- Run `npm install` to install dependencies

**Convoy detection not working?**
- Check console for "Convoy Detection: ACTIVATED" message
- Ensure demo mode is enabled for testing
- Wait 30-60 seconds for first detection
- See [CONVOY_DETECTION_README.md](CONVOY_DETECTION_README.md) for detailed troubleshooting

---

## 🔧 Configuration

### Server Port
Default: `3000`

Change port:
```bash
PORT=3001 npm start
```

### Detection Interval
Smart convoy detection polls every 30 seconds by default.
Modify `DETECTION_INTERVAL` in `index.html` (line 737) to adjust.

### Demo Mode
Convoy detection includes demo mode for testing.
See [CONVOY_DETECTION_README.md](CONVOY_DETECTION_README.md) for configuration.

---

## 🚀 Deployment

### Local Development
```bash
npm start
# Opens on http://localhost:3000
```

### Production Deployment
This app can be deployed to:
- **Heroku** - Node.js hosting (free tier available)
- **Railway** - Modern platform with free tier
- **Render** - Free static site + backend hosting
- **Vercel** - Serverless deployment
- **Netlify** - Static site with serverless functions

📖 **Deployment guides coming soon!**

---

## 📈 Future Enhancements

- [ ] Real-time convoy tracking integration
- [ ] SMS/Push notifications for alerts
- [ ] Historical traffic pattern analysis
- [ ] Dark mode toggle
- [ ] Multi-language support (BM, Mandarin, Tamil)
- [ ] Mobile app version (React Native)
- [ ] Traffic incident reporting
- [ ] Alternative route recommendations
- [ ] Save favorite locations

---

## 🤝 Contributing

Contributions are welcome! This project is open-source under MIT License.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright (c) 2025 eesb99

---

## 👤 Author & Attribution

**Author:** eesb99
**GitHub:** [@eesb99](https://github.com/eesb99)
**Contact:** eesb99@gmail.com
**Repository:** https://github.com/eesb99/kl-traffic-viewer-asean-summit-v3.1

### Third-Party Acknowledgments

This project uses the following open-source libraries:

- **Google Maps JavaScript API** - © Google LLC
- **Node.js** - © Node.js contributors (MIT License)
- **Express** - © TJ Holowaychuk and contributors (MIT License)
- **dotenv** - © motdotla and contributors (BSD 2-Clause License)

All third-party components are used in accordance with their respective licenses.

**DMCA & Copyright:** See [DMCA.md](DMCA.md) for copyright information and reporting procedures.

---

## 🙏 Acknowledgments

- **ASEAN Summit 2025 Organizers** - For event data and road closure information
- **Google Maps Platform** - For real-time traffic data
- **Malaysian authorities** - For road closure schedules and restrictions
- **Open-source community** - For excellent tools and libraries

---

## 📞 Support & Contact

**Having issues?**
1. Check [NODE_SETUP.md](NODE_SETUP.md) for backend setup and API configuration
2. Review [SECURITY.md](SECURITY.md) for security best practices
3. See [Troubleshooting](#-troubleshooting) section above
4. Check browser console (F12) for error messages
5. Open an issue on [GitHub Issues](https://github.com/eesb99/kl-traffic-viewer-asean-summit-v3.1/issues)

**Security vulnerabilities?**
📧 Email: eesb99@gmail.com (see [SECURITY.md](SECURITY.md) for reporting policy)

---

## 📊 Project Stats

- **Version:** 3.1.0
- **Release Date:** October 21, 2025
- **Status:** ✅ Production Ready
- **Event:** ASEAN Summit 2025 (Oct 26-28)
- **License:** MIT
- **Language:** JavaScript (Node.js, HTML, CSS)
- **Dependencies:** 2 (express, dotenv)

---

## 🌟 Show Your Support

If this project helped you during the ASEAN Summit, please:
- ⭐ **Star this repository** on GitHub
- 🍴 **Fork it** to create your own version
- 📢 **Share it** with friends and colleagues
- 🐛 **Report bugs** to help improve the project
- 💡 **Suggest features** for future versions

---

**Happy traffic viewing!** 🚗💨

**Made with ❤️ for Kuala Lumpur commuters during ASEAN Summit 2025**

---

*Last Updated: October 21, 2025*
*For ASEAN Summit: October 26-28, 2025*

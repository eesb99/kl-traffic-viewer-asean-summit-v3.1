import express from 'express';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables from ~/.env
dotenv.config({ path: process.env.HOME + '/.env' });

const app = express();
const PORT = process.env.PORT || 3000;

// Get current directory (for ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ==========================================
// ROUTES
// ==========================================

// API endpoint to get the Google Maps API key
app.get('/api/config', (req, res) => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    console.error('❌ ERROR: GOOGLE_MAPS_API_KEY not found in ~/.env');
    return res.status(500).json({
      error: 'API key not configured',
      message: 'GOOGLE_MAPS_API_KEY not found in ~/.env'
    });
  }

  res.json({ apiKey });
});

// Serve index.html with API key injected
app.get('/', (req, res) => {
  try {
    let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
      console.error('❌ ERROR: GOOGLE_MAPS_API_KEY not found in ~/.env');
      return res.status(500).send(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Configuration Error</title>
          <style>
            body { font-family: Arial, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; background: #f5f5f5; margin: 0; }
            .error-box { background: white; padding: 40px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); max-width: 500px; text-align: center; }
            h1 { color: #c41e3a; margin-top: 0; }
            p { color: #666; line-height: 1.6; }
            code { background: #f0f0f0; padding: 10px; display: block; margin: 15px 0; border-radius: 4px; overflow-x: auto; }
          </style>
        </head>
        <body>
          <div class="error-box">
            <h1>❌ Configuration Error</h1>
            <p><strong>GOOGLE_MAPS_API_KEY</strong> not found in <code>~/.env</code></p>
            <p>Please add to your ~/.env file:</p>
            <code>export GOOGLE_MAPS_API_KEY=your-api-key-here</code>
            <p>Then restart the server.</p>
          </div>
        </body>
        </html>
      `);
    }

    // Replace placeholder with actual API key
    // Use simple string replacement (no regex issues)
    const placeholder = "const API_KEY = 'FETCH_FROM_SERVER';";
    const replacement = `const API_KEY = '${apiKey}';`;

    if (html.includes(placeholder)) {
      html = html.replace(placeholder, replacement);
      console.log('✅ API Key injected into HTML');
    } else {
      console.error('⚠️ Warning: Could not find placeholder in HTML');
    }

    res.send(html);
  } catch (err) {
    console.error('Error reading index.html:', err);
    res.status(500).send('Error loading application');
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', server: 'KL Traffic Viewer' });
});

// Serve other static files (CSS, images, etc.) - AFTER routes so / route takes precedence
app.use(express.static(__dirname, {
  setHeaders: (res, path) => {
    // Don't cache index.html to ensure API key injection is fresh
    if (path.endsWith('index.html')) {
      res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    }
  }
}));

// ==========================================
// START SERVER
// ==========================================

app.listen(PORT, () => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  console.log('\n🚗 KL Traffic Viewer Server');
  console.log('========================================');
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log('');

  if (apiKey) {
    console.log(`✅ API Key loaded from ~/.env`);
    console.log(`✅ Key: ${apiKey.substring(0, 20)}...`);
  } else {
    console.error('❌ ERROR: GOOGLE_MAPS_API_KEY not found in ~/.env');
  }

  console.log('');
  console.log('📖 Usage:');
  console.log(`   Open browser: http://localhost:${PORT}`);
  console.log('   Stop server: Ctrl + C');
  console.log('');
  console.log('📝 Environment Variables:');
  console.log(`   Reading from: ${process.env.HOME}/.env`);
  console.log('');
  console.log('========================================\n');
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n\n👋 Shutting down server...');
  process.exit(0);
});

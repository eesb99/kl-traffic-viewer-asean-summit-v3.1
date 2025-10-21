# Security Audit Report - KL Traffic Viewer v3.1

**Audit Date:** October 21, 2025
**Repository:** https://github.com/eesb99/kl-traffic-viewer-asean-summit-v3.1
**Version:** 3.1.0
**Auditor:** Claude Code Security Scan

---

## 🚨 CRITICAL ISSUES

### 1. EXPOSED API KEY IN GIT HISTORY ⚠️ CRITICAL

**Severity:** 🔴 **CRITICAL**
**Status:** ⚠️ **REQUIRES IMMEDIATE ACTION**

**Issue:**
Google Maps API key `AIzaSyCWsN7vjMN_4IKX4Ea_5IKKba2i955rqnk` was committed to git history in:
- **Commit:** bb48a63 (Initial commit)
- **File:** NODE_SETUP.md (lines 30, 40, 121)
- **Date:** October 21, 2025

**Impact:**
- ✅ Key removed from current files (commit aaa0a6e)
- ❌ Key **STILL EXISTS** in git history (permanent record)
- ❌ Key is **PUBLICLY ACCESSIBLE** on GitHub to anyone who views commit bb48a63
- ❌ Key can be used by anyone to make Google Maps API calls on your account
- ❌ Could result in unexpected billing charges

**IMMEDIATE ACTION REQUIRED:**

1. **Revoke the exposed key IMMEDIATELY:**
   ```
   1. Go to: https://console.cloud.google.com/apis/credentials
   2. Find key: AIzaSyCWsN7vjMN_4IKX4Ea_5IKKba2i955rqnk
   3. Click DELETE or REGENERATE
   4. Create NEW API key
   5. Store new key ONLY in ~/.env (never commit it)
   ```

2. **Update your local ~/.env with new key:**
   ```bash
   # Edit ~/.env file
   export GOOGLE_MAPS_API_KEY=NEW_KEY_HERE
   ```

3. **Optional: Rewrite Git History (Advanced)**
   ```bash
   # WARNING: This rewrites history and requires force push
   # Only do this if you understand git rebase
   git filter-branch --force --index-filter \
     "git rm --cached --ignore-unmatch NODE_SETUP.md" \
     --prune-empty --tag-name-filter cat -- --all

   # Then force push (DESTRUCTIVE)
   git push origin --force --all
   ```

**Recommendation:**
- **Minimum:** Revoke and regenerate the key (steps 1-2 above)
- **Best Practice:** Also rewrite git history to remove key permanently
- **Prevention:** Always use .gitignore and ~/.env for secrets

---

## ⚠️ HIGH PRIORITY ISSUES

### 2. Missing Security Middleware in server.js

**Severity:** 🟠 **HIGH**
**Status:** ⚠️ **Recommended for Production**

**Issue:**
server.js lacks standard security middleware for production deployment:

**Missing Components:**
1. **No CORS protection** - Any website can make requests to your API
2. **No rate limiting** - Vulnerable to abuse and DoS attacks
3. **No Helmet.js** - Missing HTTP security headers
4. **No input validation** - Potential for injection attacks
5. **No CSRF protection** - Cross-site request forgery vulnerability

**Current Code:**
```javascript
// server.js - No security middleware
const app = express();
app.get('/api/config', (req, res) => {
  res.json({ apiKey }); // ❌ No CORS, rate limiting, or validation
});
```

**Recommended Fix:**
```javascript
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || 'http://localhost:3000'
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);
```

**Dependencies to add:**
```bash
npm install helmet cors express-rate-limit
```

**Impact if not fixed:**
- Low risk for local use
- High risk for public deployment
- Could lead to API abuse, billing issues

---

### 3. API Key Exposed to Browser

**Severity:** 🟡 **MEDIUM**
**Status:** ℹ️ **By Design (with mitigation)**

**Issue:**
The server.js injects the Google Maps API key directly into the HTML that's sent to the browser:

```javascript
// server.js:73
const replacement = `const API_KEY = '${apiKey}';`;
html = html.replace(placeholder, replacement);
```

This means the API key is visible in browser source code.

**Current Mitigation:**
- User should restrict API key in Google Cloud Console
- HTTP referrer restrictions prevent unauthorized use
- API restrictions limit key to Maps JavaScript API only

**Better Alternative (Future Enhancement):**
Use a server-side proxy:
```javascript
app.get('/api/maps/geocode', async (req, res) => {
  // Server makes request to Google with API key
  // Browser never sees the key
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&...`
  );
  res.json(await response.json());
});
```

**Current Risk Level:** 🟡 Low (if key is properly restricted in Google Cloud)

---

## ✅ GOOD SECURITY PRACTICES FOUND

### 1. Strong .gitignore Configuration ✅

**Status:** ✅ **Excellent**

The .gitignore properly excludes:
```gitignore
# Environment & API Keys
.env
.env.local
.env.*.local
*.key
api-keys.txt
config.json
secrets/

# Archive
archive/
```

**Testing Results:**
- ✅ .env files correctly ignored
- ✅ *.key files correctly ignored
- ✅ secrets/ directory correctly ignored
- ✅ archive/ folder correctly ignored
- ✅ No sensitive files in git tracking

---

### 2. No Dependency Vulnerabilities ✅

**Status:** ✅ **Clean**

**npm audit results:**
```json
{
  "vulnerabilities": {
    "info": 0,
    "low": 0,
    "moderate": 0,
    "high": 0,
    "critical": 0,
    "total": 0
  }
}
```

**Dependencies:**
- express@4.21.2 ✅ (latest stable)
- dotenv@16.6.1 ✅ (latest stable)
- Total: 71 packages (70 transitive)

**Recommendation:** Keep dependencies updated regularly.

---

### 3. Environment Variable Configuration ✅

**Status:** ✅ **Good**

**Secure practices implemented:**
- ✅ API key stored in ~/.env (not in code)
- ✅ dotenv loads from user home directory
- ✅ Server validates API key exists before starting
- ✅ Clear error messages if key missing
- ✅ Documentation emphasizes security

**Code Review:**
```javascript
// server.js:8 - Loads from ~/.env
dotenv.config({ path: process.env.HOME + '/.env' });

// server.js:23-31 - Validates key exists
if (!apiKey) {
  console.error('❌ ERROR: GOOGLE_MAPS_API_KEY not found in ~/.env');
  return res.status(500).json({...});
}
```

---

### 4. No Sensitive Files in Git ✅

**Status:** ✅ **Clean**

**Checked:**
- ✅ No .env files in repository
- ✅ No .key files in repository
- ✅ No credentials.json or secrets/ directory
- ✅ No private keys or certificates
- ✅ Archive folder successfully gitignored

---

### 5. Graceful Error Handling ✅

**Status:** ✅ **Good**

**Implemented:**
```javascript
// server.js:135 - Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n\n👋 Shutting down server...');
  process.exit(0);
});
```

---

## 📊 Security Score Card

| Category | Status | Score |
|----------|--------|-------|
| **Exposed Secrets** | 🔴 Critical (in git history) | 0/10 |
| **Dependency Security** | ✅ Excellent | 10/10 |
| **.gitignore Protection** | ✅ Excellent | 10/10 |
| **Environment Variables** | ✅ Good | 9/10 |
| **Production Security** | 🟡 Needs improvement | 5/10 |
| **Error Handling** | ✅ Good | 8/10 |
| **Documentation** | ✅ Excellent | 10/10 |

**Overall Score:** 6.7/10 (Good for development, needs work for production)

---

## 🎯 Recommendations by Priority

### URGENT (Do Immediately)

1. **Revoke Exposed API Key**
   - Go to Google Cloud Console → Credentials
   - Delete key: `AIzaSyCWsN7vjMN_4IKX4Ea_5IKKba2i955rqnk`
   - Generate new key
   - Update ~/.env with new key
   - **DO NOT** commit new key anywhere

2. **Restrict New API Key**
   - Add HTTP referrer restrictions
   - Limit to Maps JavaScript API only
   - Set usage quotas
   - Enable billing alerts

### HIGH Priority (Before Public Deployment)

3. **Add Security Middleware**
   ```bash
   npm install helmet cors express-rate-limit
   ```
   Update server.js with security headers and rate limiting.

4. **Add Content Security Policy**
   Configure Helmet with strict CSP headers.

5. **Implement HTTPS**
   Use Let's Encrypt or platform SSL for production.

### MEDIUM Priority (Future Improvements)

6. **Server-Side API Proxy**
   - Keep API key completely server-side
   - Browser makes requests to your server
   - Server proxies to Google Maps API

7. **Input Validation**
   - Validate all query parameters
   - Sanitize user inputs
   - Use validation library (Joi, express-validator)

8. **Logging & Monitoring**
   - Add request logging (morgan)
   - Monitor for unusual API usage
   - Set up error tracking (Sentry)

9. **Security Headers Audit**
   - Run security header scan
   - Check with securityheaders.com
   - Configure all recommended headers

### LOW Priority (Nice to Have)

10. **Dependency Scanning Automation**
    - Set up Dependabot on GitHub
    - Enable automated security updates
    - Regular npm audit in CI/CD

11. **Code Scanning**
    - Enable GitHub Code Scanning
    - Add CodeQL analysis
    - Set up security linting

---

## 🔒 Quick Security Checklist

**Before Going to Production:**

- [ ] ❌ Revoke old API key (CRITICAL - DO NOW!)
- [ ] ❌ Generate new API key
- [ ] ❌ Update ~/.env with new key
- [ ] ❌ Restrict API key in Google Cloud Console
- [ ] ❌ Add helmet, cors, rate-limit to server.js
- [ ] ❌ Enable HTTPS
- [ ] ✅ .gitignore properly configured
- [ ] ✅ No dependencies vulnerabilities
- [ ] ✅ Environment variables used correctly
- [ ] ✅ Security documentation complete
- [ ] ❌ Set up monitoring/alerts
- [ ] ❌ Add server-side API proxy (optional but recommended)

---

## 📝 Summary

### ✅ What's Working Well:
1. Excellent .gitignore configuration
2. Zero dependency vulnerabilities
3. Proper environment variable usage
4. Comprehensive security documentation
5. Clean git repository (current state)
6. No hardcoded credentials in current code

### 🔴 Critical Issues:
1. **API key in git history** - Publicly accessible on GitHub
2. **Missing production security middleware** - CORS, rate limiting, helmet

### 🟡 Recommendations:
1. Revoke and regenerate API key immediately
2. Add security middleware before public deployment
3. Consider server-side API proxy for maximum security
4. Enable Dependabot and automated scanning

---

## 🚀 Next Steps

**IMMEDIATE (Today):**
1. Revoke API key: `AIzaSyCWsN7vjMN_4IKX4Ea_5IKKba2i955rqnk`
2. Generate new key with restrictions
3. Test application with new key

**SHORT TERM (This Week):**
1. Add security middleware to server.js
2. Enable GitHub Dependabot
3. Set up Google Cloud billing alerts

**LONG TERM (Before Production):**
1. Implement server-side API proxy
2. Add comprehensive logging
3. Security header audit
4. Penetration testing

---

## 📞 Resources

- [Google Maps API Security Best Practices](https://developers.google.com/maps/api-security-best-practices)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Express Security Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)
- [Node.js Security Checklist](https://github.com/goldbergyoni/nodebestpractices#6-security-best-practices)

---

**Report Generated:** October 21, 2025
**Next Audit Recommended:** Before production deployment
**Contact:** eesb99@gmail.com

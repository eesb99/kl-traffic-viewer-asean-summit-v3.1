# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 3.1.x   | :white_check_mark: |
| 2.0.x   | :white_check_mark: |
| < 2.0   | :x:                |

## Security Best Practices

### API Key Protection

**NEVER commit API keys to the repository!**

1. **Store API keys in environment variables** (`.env` file)
2. **Use `.gitignore`** to exclude sensitive files
3. **Restrict API key usage** in Google Cloud Console:
   - Enable HTTP referrer restrictions
   - Limit API access to only required APIs
   - Set up quotas to prevent abuse

### Recommended Setup

```bash
# Create .env file (already in .gitignore)
echo "GOOGLE_MAPS_API_KEY=your_key_here" > .env

# Never commit .env files
git status  # Ensure .env is not listed
```

### Dependencies

- **Keep dependencies updated** - Run `npm audit` regularly
- **Review dependency licenses** - Ensure compatibility with MIT license
- **Minimal dependencies** - Only express and dotenv required

### Browser Security

- **HTTPS recommended** for production deployment
- **Content Security Policy (CSP)** headers recommended
- **CORS** properly configured in server.js

## Reporting a Vulnerability

If you discover a security vulnerability, please:

1. **DO NOT** open a public GitHub issue
2. **Email** eesb99@gmail.com with:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if available)

### Response Timeline

- **Initial Response:** Within 48 hours
- **Status Update:** Within 7 days
- **Fix Timeline:** Depends on severity
  - Critical: 24-72 hours
  - High: 1-2 weeks
  - Medium: 2-4 weeks
  - Low: Next release cycle

## Security Checklist

Before deploying to production:

- [ ] API keys stored in environment variables
- [ ] `.env` file in `.gitignore`
- [ ] API key restrictions enabled in Google Cloud Console
- [ ] HTTPS enabled
- [ ] Dependencies updated (`npm audit fix`)
- [ ] No hardcoded secrets in code
- [ ] CORS properly configured
- [ ] Rate limiting implemented (if public)
- [ ] Error messages don't expose sensitive info

## Known Security Considerations

### Current Implementation

1. **Client-side API key** - Google Maps API key is exposed in browser
   - **Mitigation:** Restrict key with HTTP referrer restrictions
   - **Alternative:** Use server-side proxy (see server.js)

2. **Third-party dependencies**
   - **express:** ^4.18.2 (regularly updated)
   - **dotenv:** ^16.3.1 (regularly updated)
   - Run `npm audit` to check for vulnerabilities

### Production Recommendations

1. **Use environment variables** for all configuration
2. **Implement rate limiting** to prevent abuse
3. **Enable HTTPS** for all traffic
4. **Monitor API usage** in Google Cloud Console
5. **Set billing alerts** to detect unusual activity
6. **Regular security audits** of dependencies

## Compliance

This project complies with:

- **MIT License** requirements
- **Google Maps Platform Terms of Service**
- **DMCA** copyright protections (see DMCA.md)

## Additional Resources

- [Google Maps Platform Security Best Practices](https://developers.google.com/maps/api-security-best-practices)
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)

---

**Last Updated:** October 21, 2025
**Maintained By:** eesb99
**Contact:** eesb99@gmail.com

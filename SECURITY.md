# Security Policy

## Reporting Security Issues

If you discover a security vulnerability, please email security@al-ahd.com instead of using the issue tracker.

Please include:
1. Description of vulnerability
2. Steps to reproduce
3. Potential impact
4. Suggested fix (if any)

## Security Best Practices

### For Developers

- Never commit secrets or API keys
- Use `.env.local` for sensitive data
- Validate all user inputs
- Escape output to prevent XSS
- Use HTTPS in production
- Keep dependencies updated
- Run `npm audit` regularly

### Dependencies

Keep all dependencies up to date:

```bash
npm outdated
npm update
npm audit fix
```

## Content Security Policy

The site implements CSP headers to prevent injection attacks.

## HTTPS

All production deployments must use HTTPS with valid certificates.

## Data Protection

- No sensitive data stored in browser storage
- Form submissions use HTTPS
- User data handled according to privacy policy
- GDPR compliant if processing EU data

## Third-party Services

Be cautious with third-party integrations:
- Verify authenticity
- Check privacy policies
- Monitor for security updates
- Use official packages only

## Regular Updates

- Monitor security advisories
- Update Node.js and npm
- Update all dependencies
- Test updates before production deployment

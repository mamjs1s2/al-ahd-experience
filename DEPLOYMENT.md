# Deployment Guide

## Environment Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Create `.env.local`**:
   ```bash
   cp .env.example .env.local
   # Edit with your configuration
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Test production build locally**:
   ```bash
   npm start
   ```

## Vercel Deployment

### First Deployment

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Create new project → Import from Git
4. Select repository
5. Configure environment variables
6. Deploy

### Subsequent Deployments

Automatic on push to `main` branch.

### Environment Variables on Vercel

1. Project Settings → Environment Variables
2. Add variables for each environment (Preview, Production)
3. Redeploy to apply changes

## Docker Deployment

### Build Docker Image

```bash
docker build -t al-ahd-experience:latest .
```

### Run Container

```bash
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SITE_URL=https://al-ahd.com \
  al-ahd-experience:latest
```

## Performance Optimization

### Pre-deployment Checklist

- [ ] Run `npm run type-check` - ensure no type errors
- [ ] Run `npm run lint` - check code quality
- [ ] Test build: `npm run build`
- [ ] Test production: `npm start`
- [ ] Check Lighthouse scores
- [ ] Verify all images optimized
- [ ] Test on multiple devices/browsers
- [ ] Check Core Web Vitals
- [ ] Verify forms submission
- [ ] Test analytics tracking

### Performance Targets

- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- Lighthouse Best Practices: 95+
- Lighthouse SEO: 95+
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

## Monitoring

### Set up Monitoring

1. **Vercel Analytics**
   - Built-in Web Analytics
   - Real User Monitoring

2. **Error Tracking**
   - Set up error logging
   - Monitor in Vercel dashboard

3. **Performance Monitoring**
   - Use Web Vitals API
   - Track in analytics service

## Rollback Procedure

```bash
# Revert to previous deployment
vercel rollback

# Or revert Git commit
git revert <commit-hash>
git push origin main
```

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### High Memory Usage

- Check for large dependencies
- Use `npm run analyze` to visualize bundle
- Optimize images

### Slow Performance

- Run Lighthouse audit
- Check for waterfall requests
- Optimize critical resources
- Enable caching headers

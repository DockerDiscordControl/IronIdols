# Iron Idols - Band Website

Official website for the Heavy Metal band Iron Idols.

## Local Development with Docker

### Prerequisites
- Docker installed

### Quick Start
```bash
./rebuild.sh
```

The website will be available at: **http://192.168.1.249:8333**

### Manual Docker Commands

If you prefer to run Docker commands manually:

**Build and start:**
```bash
docker build -t iron-idols-web .
docker run -d \
  --name iron-idols-dev \
  -p 8333:5173 \
  -v "$(pwd):/app" \
  -v /app/node_modules \
  -e NODE_ENV=development \
  --restart unless-stopped \
  iron-idols-web
```

**View logs:**
```bash
docker logs -f iron-idols-dev
```

**Stop:**
```bash
docker stop iron-idols-dev
```

**Remove:**
```bash
docker rm iron-idols-dev
```

**Restart:**
```bash
docker restart iron-idols-dev
```

### Alternative: Docker Compose

If your system supports Docker Compose, you can also use:
```bash
docker compose up -d
docker compose down
docker compose logs -f
```

## Port Mapping
- **External**: 8333 (Network access)
- **Internal**: 5173 (Vite Dev Server in container)

## Local Development without Docker

If you want to develop locally without Docker:

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

Static files will be created in the `dist/` directory.

## Deployment to GitHub Pages

1. Create repository on GitHub
2. Push code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/iron-idols.git
   git push -u origin main
   ```
3. In GitHub Repository Settings:
   - Go to "Pages"
   - Source: Select "GitHub Actions"
4. On every push to `main`, the site will be automatically deployed

## Custom Domain (ironidols.com)

1. In GitHub Pages Settings, add Custom Domain `ironidols.com`
2. DNS records at your domain provider:
   - A Record: `185.199.108.153`
   - A Record: `185.199.109.153`
   - A Record: `185.199.110.153`
   - A Record: `185.199.111.153`
   - CNAME: `www.ironidols.com` -> `YOUR-USERNAME.github.io`

## Technology Stack
- **Vite**: Build Tool & Dev Server
- **Vanilla JS**: JavaScript
- **Docker**: Containerization for development
- **GitHub Pages**: Hosting

## Structure
```
.
├── index.html          # Main page
├── main.js            # JavaScript
├── style.css          # Styling
├── vite.config.js     # Vite configuration
├── Dockerfile         # Docker image for development
├── docker-compose.yml # Docker Compose setup
├── rebuild.sh         # Rebuild script
└── .github/
    └── workflows/
        └── deploy.yml # GitHub Actions deployment
```

## License
© 2024 Iron Idols. All rights reserved.

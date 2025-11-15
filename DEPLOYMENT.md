# Omsnet Digital Fortress - Docker Deployment Guide

## Prerequisites
- Docker installed on your system
- Docker Compose (usually included with Docker Desktop)

## Quick Start

### Option 1: Using Docker Compose (Recommended)
```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

### Option 2: Using Docker Commands
```bash
# Build the image
docker build -t omsnet-digital-fortress .

# Run the container
docker run -d -p 7774:7774 --name omsnet-website omsnet-digital-fortress

# View logs
docker logs -f omsnet-website

# Stop the container
docker stop omsnet-website
docker rm omsnet-website
```

## Access the Application
Once deployed, the website will be available at:
```
http://localhost:7774
```

## Configuration

### Port Configuration
The application is configured to run on port **7774** both inside the container and externally.

### Environment Variables
- `NODE_ENV=production` - Sets the environment to production
- `PORT=7774` - Sets the application port
- `HOSTNAME=0.0.0.0` - Binds to all interfaces

### Health Check
The container includes a health check that verifies the application is responding on port 7774.

## File Structure
- `Dockerfile` - Multi-stage build configuration
- `docker-compose.yml` - Container orchestration
- `.dockerignore` - Files to exclude from Docker build
- `next.config.js` - Updated for standalone output

## Troubleshooting

### Docker Daemon Not Running
If you see "Cannot connect to the Docker daemon", start Docker Desktop or the Docker service.

### Port Already in Use
If port 7774 is already in use, you can change the port mapping in `docker-compose.yml`:
```yaml
ports:
  - "8080:7774"  # Map external port 8080 to internal port 7774
```

### Build Issues
If the build fails, try:
```bash
# Clear Docker cache
docker system prune -a

# Rebuild without cache
docker-compose build --no-cache
```

## Production Deployment
For production deployment, consider:
1. Using a reverse proxy (nginx) in front of the container
2. Setting up SSL/TLS certificates
3. Configuring proper logging and monitoring
4. Using a container registry for image distribution

## Phone Number Update
The phone number has been updated to **0113 534 7445** in the footer component.

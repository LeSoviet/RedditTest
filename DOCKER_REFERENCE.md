# 🐳 Docker Setup - Quick Reference

## ⏱️ First Time Setup Timeline

### Initial Build (~5-10 minutes)
1. **Image Download** (1-2 min)
   - PostgreSQL 14 Alpine (~230MB)
   - Node 18 Alpine base (~40MB)

2. **Dependency Installation** (3-5 min)
   - Backend: 419 packages
   - Frontend: 400 packages
   - Shared types dependencies

3. **Build Completion** (1-2 min)
   - Generate Prisma Client
   - Copy source code
   - Set up volumes

### Subsequent Startups (~30 seconds)
- Images already built
- Dependencies cached
- Just starts containers

---

## 🚀 Common Commands

### Start/Stop
```powershell
# Start all services (first time with --build)
docker compose up --build

# Start in background
docker compose up -d

# Stop services (keeps data)
docker compose down

# Stop and remove volumes (deletes database!)
docker compose down -v

# Restart a specific service
docker compose restart backend
docker compose restart frontend
```

### Logs
```powershell
# View all logs
docker compose logs -f

# View specific service
docker compose logs -f backend
docker compose logs -f frontend
docker compose logs -f postgres

# Last 100 lines
docker compose logs --tail=100 backend
```

### Execute Commands in Containers
```powershell
# Run backend tests
docker compose exec backend pnpm --filter backend test

# Run frontend tests
docker compose exec frontend pnpm --filter frontend test --run

# Open Prisma Studio
docker compose exec backend pnpm --filter backend prisma:studio

# Access container shell
docker compose exec backend sh
docker compose exec frontend sh

# Run database migrations
docker compose exec backend pnpm --filter backend prisma:migrate dev

# Seed database manually
docker compose exec backend pnpm --filter backend prisma:seed
```

### Database Management
```powershell
# Reset database (⚠️ deletes all data)
docker compose down -v
docker compose up -d postgres
docker compose exec backend pnpm --filter backend prisma:migrate dev
docker compose exec backend pnpm --filter backend prisma:seed

# View database with Prisma Studio
docker compose exec backend pnpm --filter backend prisma:studio
# Opens at http://localhost:5555

# Access PostgreSQL directly
docker compose exec postgres psql -U postgres -d orders_db
```

---

## 🔍 Monitoring & Debugging

### Check Container Status
```powershell
# List running containers
docker compose ps

# List all containers (including stopped)
docker ps -a

# View container resource usage
docker stats
```

### View Build Progress
```powershell
# Build with progress output
docker compose build --progress=plain

# Build specific service
docker compose build backend
docker compose build frontend
```

### Inspect Services
```powershell
# View service configuration
docker compose config

# Inspect specific service
docker inspect orders_backend
docker inspect orders_frontend
docker inspect orders_postgres
```

---

## 🐛 Troubleshooting

### Issue: "Cannot connect to Docker daemon"
**Solution**: Ensure Docker Desktop is running
- Check system tray for Docker icon
- Open Docker Desktop application
- Wait for "Docker Desktop is running" message

### Issue: "Port is already allocated" (3000, 5173, or 5432)
**Solution**: Stop the conflicting service
```powershell
# Find process using port 3000
netstat -ano | findstr :3000
# Kill the process (replace PID with actual number)
taskkill /PID <PID> /F

# Or change ports in docker-compose.yml
ports:
  - "3001:3000"  # Maps host 3001 to container 3000
```

### Issue: Build is slow or hanging
**Possible causes**:
1. **Slow internet** - Downloading packages from npm
2. **Low disk space** - Need ~5GB free
3. **Resource limits** - Increase Docker Desktop memory/CPU
   - Open Docker Desktop → Settings → Resources
   - Increase Memory to 4GB+ and CPUs to 2+

**Solutions**:
```powershell
# Clear Docker cache
docker system prune -a

# Rebuild without cache
docker compose build --no-cache

# Check disk space
docker system df
```

### Issue: "pnpm: not found" or package installation fails
**Solution**: Rebuild images from scratch
```powershell
docker compose down
docker compose build --no-cache
docker compose up
```

### Issue: Database connection errors
**Check PostgreSQL health**:
```powershell
# View PostgreSQL logs
docker compose logs postgres

# Test connection
docker compose exec postgres pg_isready -U postgres

# Restart database
docker compose restart postgres
```

### Issue: Hot reload not working
**Solution**: Ensure volumes are mounted correctly
```powershell
# Check volume mounts
docker compose config | Select-String -Pattern "volumes"

# Restart services
docker compose restart backend frontend
```

### Issue: Frontend shows "Network Error" or can't connect to backend
**Check**:
1. Backend is running: `docker compose logs backend`
2. Backend is on correct port: http://localhost:3000/health
3. CORS is configured: Check `apps/backend/src/index.ts`
4. Environment variables: `VITE_API_URL=http://localhost:3000/api`

---

## 📊 Resource Usage

### Expected Usage (Development)
| Component | CPU | Memory | Disk |
|-----------|-----|--------|------|
| PostgreSQL | 2-5% | 50-100MB | ~100MB |
| Backend | 5-10% | 150-300MB | - |
| Frontend | 5-10% | 200-400MB | - |
| **Total** | 10-25% | 400-800MB | ~1.5GB |

### Optimize Resource Usage
```powershell
# Limit container resources (add to docker-compose.yml)
services:
  backend:
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
```

---

## 🧹 Cleanup Commands

### Remove Specific Containers/Images
```powershell
# Stop and remove containers
docker compose down

# Remove backend/frontend images (forces rebuild)
docker rmi redditest-backend
docker rmi redditest-frontend

# Remove PostgreSQL volume (deletes data!)
docker volume rm redditest_postgres_data
```

### Full Cleanup (⚠️ Removes everything)
```powershell
# Remove all containers, images, volumes, networks
docker system prune -a --volumes

# Reclaim disk space
docker system prune -a
```

---

## ✅ Health Checks

### Verify Everything is Running
```powershell
# All services should show "Up"
docker compose ps

# Check endpoints
Invoke-WebRequest http://localhost:3000/health  # Backend health
Invoke-WebRequest http://localhost:3000/api/orders  # API
Invoke-WebRequest http://localhost:5173  # Frontend

# Check logs for errors
docker compose logs | Select-String -Pattern "error" -CaseSensitive
```

---

## 🎯 Pro Tips

### 1. Use Docker Desktop Dashboard
- Visual interface for managing containers
- View logs, stats, and exec into containers
- Easier than command line for beginners

### 2. Keep Docker Desktop Updated
```powershell
# Check version
docker --version
docker compose version

# Update via Docker Desktop → Check for updates
```

### 3. Use Docker Extensions
- Install useful extensions from Docker Desktop
- Examples: Disk usage, Resource monitor, Database viewer

### 4. Set Up Auto-Start (Optional)
- Docker Desktop → Settings → General
- ☑ Start Docker Desktop when you log in

### 5. Enable BuildKit
```powershell
# Add to environment or .env
$env:DOCKER_BUILDKIT=1
$env:COMPOSE_DOCKER_CLI_BUILD=1
```

---

## 📚 Additional Resources

- **Official Docker Docs**: https://docs.docker.com/
- **Docker Compose Docs**: https://docs.docker.com/compose/
- **Prisma + Docker**: https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-docker
- **Node.js Best Practices**: https://github.com/goldbergyoni/nodebestpractices

---

## 🆘 Still Having Issues?

1. **Check Docker Desktop logs**:
   - Open Docker Desktop
   - Click Troubleshoot icon (bug icon)
   - View logs

2. **Restart Docker Desktop**:
   - Right-click Docker icon in system tray
   - Quit Docker Desktop
   - Start Docker Desktop again

3. **Reset Docker Desktop** (last resort):
   - Docker Desktop → Troubleshoot → Reset to factory defaults
   - ⚠️ This deletes all containers, images, and volumes

---

**Last updated**: October 19, 2025

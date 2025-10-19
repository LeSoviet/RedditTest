# 🐳 Docker Setup - Quick Reference# 🐳 Docker Setup - Quick Reference



## ⏱️ Build Times## ⏱️ Build Times

- **First build**: ~5-8 minutes (Node 22 Alpine + PostgreSQL 14 + dependencies)- **First build**: ~5-8 minutes (downloads Node 22 Alpine, PostgreSQL 14, installs dependencies)

- **Subsequent starts**: ~30 seconds (cached images)- **Subsequent starts**: ~30 seconds (uses cached images)



------



## 🚀 Essential Commands## 🚀 Essential Commands



```powershell```powershell

# Start/Stop# Start/Stop

docker compose up --build          # Build and start (first time or after code changes)docker compose up --build          # First time or after changes

docker compose up -d               # Start in backgrounddocker compose up -d               # Background mode

docker compose down                # Stop (⚠️ KEEPS database data)docker compose down                # Stop (keeps data)

docker compose down -v             # Stop + DELETE database datadocker compose down -v             # Stop + delete data

docker compose restart backend     # Restart specific servicedocker compose restart backend     # Restart single service



# Logs# Logs

docker compose logs -f             # All servicesdocker compose logs -f backend     # Follow backend logs

docker compose logs -f backend     # Specific servicedocker compose logs --tail=50 backend

docker compose logs --tail=50 backend  # Last 50 lines

# Testing

# Testingdocker compose exec backend pnpm --filter backend test

docker compose exec backend pnpm --filter backend testdocker compose exec frontend pnpm --filter frontend test --run

docker compose exec frontend pnpm --filter frontend test --run

# Database

# Database Managementdocker compose exec backend pnpm --filter backend prisma:studio  # GUI at :5555

docker compose exec backend pnpm --filter backend prisma:studio  # GUI at :5555docker compose exec backend pnpm --filter backend prisma:seed    # Manual seed

docker compose exec backend pnpm --filter backend prisma:seed    # Manual seeddocker compose exec postgres psql -U postgres -d orders_db       # SQL shell

docker compose exec postgres psql -U postgres -d orders_db       # Direct SQL access```



# Shell Access---

docker compose exec backend sh     # Backend container shell

docker compose exec frontend sh    # Frontend container shell## � Data Persistence Explained

```

### How Docker Volumes Work

---

**Volume Definition** (docker-compose.yml):

## 💾 Data Persistence```yaml

volumes:

### How It Works  postgres_data:    # Named volume

PostgreSQL data stored in **named volume**: `reddittest_postgres_data`    driver: local



| Command | Database Data |services:

|---------|---------------|  postgres:

| `docker compose down` | ✅ **Kept** |    volumes:

| `docker compose restart` | ✅ **Kept** |      - postgres_data:/var/lib/postgresql/data  # Mount point

| `docker compose up --build` | ✅ **Kept** |```

| `docker compose down -v` | ❌ **Deleted** |

| System reboot | ✅ **Kept** |**What Happens**:

1. Docker creates a named volume `reddittest_postgres_data`

### Auto-Seed Behavior2. PostgreSQL writes database files to `/var/lib/postgresql/data` inside container

3. That directory is **mapped** to the Docker volume on your host machine

**First Startup** (empty database):4. Data survives container restarts, rebuilds, and `docker compose down`

```

1. Runs migrations (creates tables)### Data Lifecycle

2. Generates Prisma Client

3. Checks: await prisma.order.count() === 0?| Action | Data Preserved? | Why? |

4. ✅ YES → Seeds 10 sample orders|--------|-----------------|------|

5. Starts server| `docker compose down` | ✅ YES | Only stops containers, volumes remain |

```| `docker compose restart` | ✅ YES | Containers restart, volumes untouched |

| `docker compose up --build` | ✅ YES | Rebuilds images, but volumes persist |

**Subsequent Startups** (data exists):| `docker compose down -v` | ❌ NO | **Explicitly removes volumes** |

```| System reboot | ✅ YES | Volumes stored on disk |

1. Runs migrations (no-op if up-to-date)| Delete containers | ✅ YES | Volumes independent of containers |

2. Generates Prisma Client (cached)

3. Checks: await prisma.order.count() > 0?### When Data Gets Lost

4. ❌ NO → Skips seeding: "📦 Database already has orders"

5. Starts server with existing data**Common Mistakes**:

``````powershell

# ❌ BAD: Removes volumes (loses all data)

### Reset Databasedocker compose down -v



```powershell# ❌ BAD: Removes all volumes including named ones

# Option 1: Remove volume (cleanest)docker volume prune -a

docker compose down -v

docker compose up -d  # Auto-seeds again# ✅ GOOD: Stops containers, keeps data

docker compose down

# Option 2: Prisma reset (from container)

docker compose exec backend pnpm --filter backend prisma:migrate reset# ✅ GOOD: Restart safely

```docker compose restart

```

---

### Auto-Seed Behavior

## 🔍 Monitoring & Debugging

**First Startup** (empty database):

```powershell```

# Container status1. docker compose up

docker compose ps                  # Running services2. Backend runs: prisma:migrate deploy (creates tables)

docker ps -a                       # All containers3. Backend runs: prisma:generate (generates Prisma Client)

docker stats                       # Resource usage4. Backend runs: dev:seed

5. Seed script checks: prisma.order.count() === 0?

# Build diagnostics6. ✅ YES → Creates 10 sample orders

docker compose build --progress=plain backend7. Server starts

docker compose build --no-cache    # Force rebuild```



# Inspect services**Subsequent Startups** (data exists):

docker compose config              # View resolved config```

docker inspect orders_backend      # Container details1. docker compose up

docker volume inspect reddittest_postgres_data  # Volume info2. Backend runs: prisma:migrate deploy (no changes)

```3. Backend runs: prisma:generate (already generated)

4. Backend runs: dev:seed

---5. Seed script checks: prisma.order.count() === 10?

6. ❌ NO → Skips seeding, shows message:

## 🐛 Common Issues   "📦 Database already has 10 orders. Skipping seed."

7. Server starts with existing data

### Port Already in Use (3000, 5173, 5432)```

```powershell

# Find process using port**Why This Design**:

netstat -ano | findstr :3000- ✅ Prevents duplicate data on every restart

- ✅ Development-friendly: Data persists between sessions

# Kill process (replace <PID>)- ✅ Production-safe: Won't accidentally overwrite real data

taskkill /PID <PID> /F- ✅ Can manually seed anytime: `docker compose exec backend pnpm --filter backend prisma:seed`

```

### Volume Location on Host

### Build Hanging or Slow

```powershell```powershell

# Clear Docker cache# Find volume location

docker system prune -adocker volume inspect reddittest_postgres_data



# Check disk space# Typical output:

docker system df"Mountpoint": "/var/lib/docker/volumes/reddittest_postgres_data/_data"

# (On Windows: \\wsl$\docker-desktop-data\data\docker\volumes\...)

# Increase Docker resources: Docker Desktop → Settings → Resources → Memory: 4GB+, CPUs: 2+```

```

---

### Database Connection Errors

```powershell## �🔍 Monitoring & Debugging

# Check PostgreSQL health

docker compose exec postgres pg_isready -U postgres### Check Container Status

```powershell

# View logs# List running containers

docker compose logs postgresdocker compose ps



# Restart database# List all containers (including stopped)

docker compose restart postgresdocker ps -a

```

# View container resource usage

### Hot Reload Not Workingdocker stats

```powershell```

# Verify volume mounts

docker compose config | Select-String -Pattern "volumes"### View Build Progress

```powershell

# Restart services# Build with progress output

docker compose restart backend frontenddocker compose build --progress=plain

```

# Build specific service

---docker compose build backend

docker compose build frontend

## 📊 Resource Usage (Development)```



| Service | CPU | Memory | Disk |### Inspect Services

|---------|-----|--------|------|```powershell

| PostgreSQL | 2-5% | 50-100MB | ~100MB |# View service configuration

| Backend | 5-10% | 150-300MB | - |docker compose config

| Frontend | 5-10% | 200-400MB | - |

| **Total** | ~15% | ~600MB | ~1.5GB |# Inspect specific service

docker inspect orders_backend

---docker inspect orders_frontend

docker inspect orders_postgres

## 🧹 Cleanup```



```powershell---

# Remove stopped containers

docker compose down## 🐛 Troubleshooting



# Remove volumes (⚠️ deletes database)### Issue: "Cannot connect to Docker daemon"

docker compose down -v**Solution**: Ensure Docker Desktop is running

- Check system tray for Docker icon

# Remove all unused Docker resources- Open Docker Desktop application

docker system prune -a --volumes- Wait for "Docker Desktop is running" message



# Free up space### Issue: "Port is already allocated" (3000, 5173, or 5432)

docker system prune -a              # Remove unused images/containers**Solution**: Stop the conflicting service

docker volume prune                 # Remove unused volumes```powershell

docker builder prune                # Remove build cache# Find process using port 3000

```netstat -ano | findstr :3000

# Kill the process (replace PID with actual number)

---taskkill /PID <PID> /F



## 📦 Tech Stack Versions# Or change ports in docker-compose.yml

ports:

- **Node.js**: 22-alpine  - "3001:3000"  # Maps host 3001 to container 3000

- **PostgreSQL**: 14-alpine```

- **pnpm**: latest (via corepack)

- **React**: 19.1.1### Issue: Build is slow or hanging

- **Vite**: 6.0.10**Possible causes**:

- **TypeScript**: 5.9.31. **Slow internet** - Downloading packages from npm

- **Prisma**: 6.3.02. **Low disk space** - Need ~5GB free

- **Express**: 4.21.23. **Resource limits** - Increase Docker Desktop memory/CPU

   - Open Docker Desktop → Settings → Resources

---   - Increase Memory to 4GB+ and CPUs to 2+



## 🔗 Quick Links**Solutions**:

```powershell

- **Frontend**: http://localhost:5173# Clear Docker cache

- **Backend API**: http://localhost:3000docker system prune -a

- **Health Check**: http://localhost:3000/health

- **Prisma Studio**: http://localhost:5555 (run `docker compose exec backend pnpm --filter backend prisma:studio`)# Rebuild without cache

- **PostgreSQL**: localhost:5432 (user: `postgres`, pass: `postgres`, db: `orders_db`)docker compose build --no-cache



---# Check disk space

docker system df

## 🎯 Development Workflow```



```powershell### Issue: "pnpm: not found" or package installation fails

# Day 1: Initial setup**Solution**: Rebuild images from scratch

docker compose up --build```powershell

# ✅ Database auto-migrated and seededdocker compose down

docker compose build --no-cache

# Day 2+: Continue developmentdocker compose up

docker compose up```

# ✅ Data persists, no re-seeding

### Issue: Database connection errors

# After code changes**Check PostgreSQL health**:

docker compose restart backend     # If backend changed```powershell

docker compose restart frontend    # If frontend changed# View PostgreSQL logs

docker compose logs postgres

# After dependency changes

docker compose up --build          # Rebuild images# Test connection

docker compose exec postgres pg_isready -U postgres

# End of day

docker compose down                # Stop, keep data# Restart database

# ORdocker compose restart postgres

docker compose down -v             # Stop, delete data (fresh start next time)```

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

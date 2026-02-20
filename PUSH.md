# Push to GitHub

Your repo is ready to push. Run these in the project directory:

## First-time push to existing empty repo

```bash
cd /home/keoral/mentormalta
git remote add origin https://github.com/KaganEmreOral/maltamentor.git
git push -u origin main
```

## If the GitHub repo already has commits (e.g. README)

Either replace the repo content (only if you don't need what's there):

```bash
git remote add origin https://github.com/KaganEmreOral/maltamentor.git
git push -u origin main --force
```

Or merge with existing history:

```bash
git remote add origin https://github.com/KaganEmreOral/maltamentor.git
git pull origin main --allow-unrelated-histories
# Resolve any conflicts, then:
git push -u origin main
```

## On your VPS after push

```bash
git clone https://github.com/KaganEmreOral/maltamentor.git
cd maltamentor
cp .env.example .env
nano .env   # set NEXT_PUBLIC_SITE_URL and any API keys
npm ci
npm run build
pm2 start ecosystem.config.cjs
pm2 save && pm2 startup
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for Nginx and HTTPS.

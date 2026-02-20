# Server deployment instructions (Ubuntu VPS + Nginx)

## Prerequisites

- Ubuntu 20.04+ (or similar)
- Domain pointing to your server (e.g. mentormalta.com)
- SSH access

## 1. Install Node.js (LTS)

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v   # v20.x
```

## 2. Install PM2

```bash
sudo npm install -g pm2
```

## 3. Deploy the app

```bash
# Example: clone into /var/www
sudo mkdir -p /var/www
sudo chown $USER:$USER /var/www
cd /var/www
git clone <your-repo-url> mentormalta
cd mentormalta
```

## 4. Environment

```bash
cp .env.example .env
nano .env   # or vim
```

Set at least:

- `NEXT_PUBLIC_SITE_URL=https://mentormalta.com`
- `CONTACT_EMAIL` and `RESEND_API_KEY` if using contact form
- `NEXT_PUBLIC_CALENDLY_URL` for Book a Meeting
- Sanity vars if using blog from CMS

## 5. Build and start

```bash
npm ci
npm run build
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup   # run the command it prints to enable startup on boot
```

App listens on **port 3000**.

## 6. Nginx reverse proxy

```bash
sudo nano /etc/nginx/sites-available/mentormalta
```

Paste:

```nginx
server {
    listen 80;
    server_name mentormalta.com www.mentormalta.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable and test:

```bash
sudo ln -s /etc/nginx/sites-available/mentormalta /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 7. HTTPS (Certbot)

```bash
sudo apt update
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d mentormalta.com -d www.mentormalta.com
```

## 8. Updates

```bash
cd /var/www/mentormalta
git pull
npm ci
npm run build
pm2 restart mentor-malta
```

## Useful PM2 commands

- `pm2 status` — list apps
- `pm2 logs mentor-malta` — logs
- `pm2 restart mentor-malta` — restart

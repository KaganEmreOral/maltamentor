# Mentor Malta

Production-ready multilingual (EN/TR) website — IT career mentoring in Malta. Contact form sends email via Nodemailer and saves submissions server-side.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **next-intl** (English + Turkish)
- **Nodemailer** (contact form email)
- **Sanity CMS** (optional, blog)
- **SEO**: metadata, sitemap, robots.txt, Open Graph
- **Responsive**, red & white branding

## Install

```bash
npm install
```

## Environment

```bash
cp .env.example .env
# Edit .env: NEXT_PUBLIC_SITE_URL, CONTACT_RECEIVER_EMAIL, EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS
```

See [.env.example](.env.example) and [NODEMAILER_SETUP.md](NODEMAILER_SETUP.md) for SMTP and contact email setup.

## Run locally

```bash
# Development
npm run dev

# Production build + run
npm run build
npm start
```

App runs on **port 3000**.

## On your VPS (after git pull)

```bash
cd /path/to/maltamentor   # or your repo directory
cp .env.example .env && nano .env   # set at least NEXT_PUBLIC_SITE_URL
npm ci
npm run build
pm2 start ecosystem.config.cjs
pm2 save && pm2 startup
```

Then point Nginx at `http://127.0.0.1:3000` (see [DEPLOYMENT.md](DEPLOYMENT.md)).

## Production deploy (Ubuntu VPS)

### 1. Server setup

```bash
# Node 18+ (LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# PM2
sudo npm install -g pm2
```

### 2. Clone and build

```bash
cd /var/www  # or your app directory
git clone <your-repo> mentormalta
cd mentormalta
cp .env.example .env
# Edit .env
npm ci
npm run build
```

### 3. Run with PM2

```bash
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

### 4. Nginx reverse proxy

Example config for `/etc/nginx/sites-available/mentormalta`:

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

Enable and reload:

```bash
sudo ln -s /etc/nginx/sites-available/mentormalta /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

Use Certbot for HTTPS:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d mentormalta.com -d www.mentormalta.com
```

## Production deploy commands (summary)

```bash
npm ci
npm run build
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

## Pages

| Page      | Path           | Notes                              |
|-----------|----------------|------------------------------------|
| Home      | `/`            | Full-screen hero, CTA → Contact    |
| About     | `/about`       | Intro, services, profile placeholder |
| Packages  | `/packages`    | 3 packages, CTAs → Contact         |
| Blog      | `/blog`        | Listing + sample article           |
| Blog post | `/blog/[slug]` | Sample IT Malta article + Sanity  |
| Contact   | `/contact`     | Form (name, email, package, message) → email + log |
| Privacy   | `/privacy`     | Placeholder                        |
| Terms     | `/terms`       | Placeholder                        |

`/book` and `/testimonials` redirect to `/contact`. Navbar: **Home, About, Packages, Blog, Contact** and **language switcher (EN/TR)**.

## Contact form

- **POST /api/contact** — Body: `name`, `email`, `message`, `package` (optional). Sends email via **Nodemailer** to `CONTACT_RECEIVER_EMAIL` and appends to `data/contact-messages.log` and `data/contact-messages.json`.
- See [NODEMAILER_SETUP.md](NODEMAILER_SETUP.md) for SMTP configuration and [.env.example](.env.example) for required variables.

## Sanity CMS (optional)

Set `NEXT_PUBLIC_SANITY_PROJECT_ID` and dataset in `.env`. Blog can list posts from Sanity in addition to the static sample article. Image optimization is enabled for `cdn.sanity.io` in `next.config.js`.

## SEO

- Per-page `metadata` (title, description)
- `app/sitemap.ts` — sitemap with locales
- `app/robots.ts` — allow all, sitemap URL
- Open Graph in root locale layout

`NEXT_PUBLIC_SITE_URL` must be set for correct sitemap and OG URLs.

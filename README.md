# Mentor Malta

Production-ready multilingual (EN/TR) website for Mentor Malta — corporate mentoring, packages, blog, and contact.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **next-intl** (English + Turkish)
- **Sanity CMS** (optional, blog ready)
- **SEO**: metadata, sitemap, robots.txt, Open Graph
- **Responsive**, red & white branding

## Install

```bash
cd mentormalta
npm install
```

## Environment

Copy env example and set variables:

```bash
cp .env.example .env
# Edit .env with your values (site URL, Sanity, Resend, Calendly)
```

See [.env.example](.env.example) for all options.

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

| Page        | Path         | Notes                    |
|------------|--------------|--------------------------|
| Home       | `/`          | Hero, features, CTA      |
| About      | `/about`     | Mission & values         |
| Packages   | `/packages`  | Pricing cards            |
| Blog       | `/blog`      | Sanity-powered list      |
| Blog post  | `/blog/[slug]` | Sanity-powered post   |
| Testimonials | `/testimonials` | Static list          |
| Book a Meeting | `/book`   | Calendly iframe          |
| Contact    | `/contact`   | Form → API → email       |
| Privacy    | `/privacy`   | Placeholder              |
| Terms      | `/terms`     | Placeholder              |

Navbar includes **language switcher (EN/TR)**. Footer includes **newsletter** form.

## Sanity CMS

Set `NEXT_PUBLIC_SANITY_PROJECT_ID` and dataset in `.env`. Blog list and post pages use `lib/sanity.ts`. Add a `post` type in Sanity with: `title`, `slug`, `excerpt`, `mainImage`, `publishedAt`, `body` (portable text). Image optimization is enabled for `cdn.sanity.io` in `next.config.js`.

## Contact form & newsletter

- **Contact**: `POST /api/contact` — expects `name`, `email`, `subject`, `message`. Uses Resend; set `RESEND_API_KEY` and `CONTACT_EMAIL` (or `EMAIL_TO`).
- **Newsletter**: `POST /api/newsletter` — expects `email`. Optional `RESEND_AUDIENCE_ID` for Resend audience.

## SEO

- Per-page `metadata` (title, description)
- `app/sitemap.ts` — sitemap with locales
- `app/robots.ts` — allow all, sitemap URL
- Open Graph in root locale layout

`NEXT_PUBLIC_SITE_URL` must be set for correct sitemap and OG URLs.

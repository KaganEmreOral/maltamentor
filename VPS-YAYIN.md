# maltamentor.com VPS’te Yayına Alma

**VPS:** 217.76.52.205 (root)  
**Domain:** maltamentor.com (+ www)  
**DNS A kaydı:** @ ve www → 217.76.52.205 (zaten yaptın)  
**SSL:** Certbot ile hazır

---

## 0. Önemli: Doğru klasörde ol

Komutları **proje klasöründe** çalıştır. `/app` klasörü bu proje değil; orada `package.json` yok.

- Projeyi **nereye** clone ettiysen oraya gir. Örnek: `cd /root/maltamentor`
- Clone etmediysen bir klasör seç ve clone et:

```bash
cd /root
git clone https://github.com/KaganEmreOral/maltamentor.git
cd maltamentor
```

Artık `package.json` ve `package-lock.json` bu klasörde olmalı. Kontrol: `ls package.json`

---

## 1. Node.js ve PM2 (bir kez)

Node yoksa:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v
```

PM2 yoksa (VPS’te genelde yok):

```bash
sudo npm install -g pm2
pm2 -v
```

---

## 2. Uygulamayı build et ve çalıştır

**Proje klasöründe** olduğundan emin ol (örn. `cd /root/maltamentor`). Sonra:

```bash
cp .env.example .env
nano .env
```

`.env` içinde en azından:

```
NEXT_PUBLIC_SITE_URL=https://maltamentor.com
```

Kaydet: Ctrl+O, Enter, Ctrl+X.

```bash
npm ci
npm run build
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

`pm2 startup` yazan **sudo** komutunu da çalıştır (sunucu restart’ta uygulama açılsın diye).

Kontrol:

```bash
pm2 status
curl -I http://127.0.0.1:3000
```

---

## 2. Nginx’i Next.js’e yönlendir

SSL’i zaten Certbot ile kurduysan, Nginx’te sadece **proxy** eklemen yeterli. Site config dosyan muhtemelen şuralardan biri:

- `/etc/nginx/sites-available/maltamentor.com`
- `/etc/nginx/sites-available/default`
- Certbot’un düzenlediği bir dosya

Bu domain’e ait `server { ... }` bloğunu bul. İçinde `location / { ... }` yoksa ekle, varsa aşağıdakiyle **değiştir**:

```nginx
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
```

Örnek: Dosya `/etc/nginx/sites-available/maltamentor.com` ise:

```bash
sudo nano /etc/nginx/sites-available/maltamentor.com
```

İçerik örneği (SSL zaten varsa sadece `location /` kısmını kullan):

```nginx
# HTTP -> HTTPS yönlendirme
server {
    listen 80;
    server_name maltamentor.com www.maltamentor.com;
    return 301 https://$server_name$request_uri;
}

# HTTPS
server {
    listen 443 ssl;
    server_name maltamentor.com www.maltamentor.com;

    # Certbot bu satırları eklemiş olabilir; yoksa certbot --nginx ile eklenir
    ssl_certificate /etc/letsencrypt/live/maltamentor.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/maltamentor.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

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

Eğer Certbot daha önce bu domain için config oluşturduysa, `ssl_certificate` ve `ssl_certificate_key` satırları zaten vardır; sadece `location / { ... }` bloğunu ekle veya güncelle.

Test ve yenile:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## 3. Kontrol

Tarayıcıda aç: **https://maltamentor.com**

- Site açılıyorsa tamamdır.
- 502 Bad Gateway: PM2’de uygulama çalışmıyor veya port 3000 dinlemiyor → `pm2 status` ve `pm2 logs mentor-malta`.
- SSL uyarısı: Certbot path’leri veya domain adı yanlış olabilir → `sudo nginx -t` ve sertifika path’lerini kontrol et.

---

## Hata alırsan

| Hata | Sebep | Çözüm |
|------|--------|--------|
| `Could not read package.json` / `ENOENT` | Yanlış klasördesin (örn. `/app`) | `cd` ile proje klasörüne gir: `cd /root/maltamentor` (clone ettiğin yer). `ls package.json` ile kontrol et. |
| `package-lock.json` yok | Klasör yanlış veya repo’da yok | Doğru klasörde olduğundan emin ol. Varsa `npm install` dene (lock oluşturur), sonra `npm run build`. |
| `Command 'pm2' not found` | PM2 kurulu değil | `sudo npm install -g pm2` |

---

## Kısa komut özeti (sırayla)

```bash
# 1. Proje klasörüne gir (clone ettiğin yer; /app DEĞİL)
cd /root/maltamentor

# 2. PM2 yoksa
sudo npm install -g pm2

# 3. Env + build + çalıştır
cp .env.example .env
nano .env   # NEXT_PUBLIC_SITE_URL=https://maltamentor.com
npm ci
npm run build
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup   # çıkan sudo komutunu da çalıştır

# 4. Nginx’te location / proxy ekle, sonra:
sudo nginx -t
sudo systemctl reload nginx
```

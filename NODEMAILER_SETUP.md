# Nodemailer email setup guide

The contact form sends emails via **Nodemailer** using SMTP. Configure the following in your `.env` file.

## Environment variables

| Variable | Description | Example |
|----------|-------------|---------|
| `CONTACT_RECEIVER_EMAIL` | Inbox where form submissions are sent | `info@maltamentor.com` |
| `EMAIL_HOST` | SMTP server hostname | `smtp.gmail.com`, `smtp.ionos.com`, etc. |
| `EMAIL_PORT` | SMTP port (587 for TLS, 465 for SSL) | `587` |
| `EMAIL_USER` | SMTP username (often your email) | `your@email.com` |
| `EMAIL_PASS` | SMTP password or app password | Your password or app-specific password |

Optional:

- `EMAIL_FROM` – “From” address shown in emails (defaults to `EMAIL_USER`).
- `CONTACT_LOG_DIR` – Directory for saving messages (default: `./data`). Log file: `contact-messages.log`; JSON backup: `contact-messages.json`.

## SMTP configuration explanation

1. **SMTP** (Simple Mail Transfer Protocol) is used to send email. Your server connects to an SMTP server (e.g. your provider or Gmail) and sends the message.
2. **Port 587** – Usually used with STARTTLS (encrypted). Recommended for most providers.
3. **Port 465** – SSL from the start. Some providers use this.
4. **EMAIL_USER / EMAIL_PASS** – The credentials of the account that “sends” the email. For Gmail you must use an [App Password](https://support.google.com/accounts/answer/185833), not your normal password.

## Example providers

### Gmail

- `EMAIL_HOST=smtp.gmail.com`
- `EMAIL_PORT=587`
- `EMAIL_USER=your@gmail.com`
- `EMAIL_PASS=` (App Password from Google Account → Security → 2-Step Verification → App passwords)

### Ionos / 1&1

- `EMAIL_HOST=smtp.ionos.com`
- `EMAIL_PORT=587`
- `EMAIL_USER=your@yourdomain.com`
- `EMAIL_PASS=` (your mailbox password)

### SendGrid

- `EMAIL_HOST=smtp.sendgrid.net`
- `EMAIL_PORT=587`
- `EMAIL_USER=apikey`
- `EMAIL_PASS=` (your SendGrid API key)

### Mailtrap (testing)

- Use the SMTP credentials from your Mailtrap inbox. Messages will be caught in Mailtrap instead of real inboxes.

## Email template

The contact form sends:

- **To:** `CONTACT_RECEIVER_EMAIL`
- **Reply-To:** Submitter’s email
- **Subject:** `[Mentor Malta] Consultation request from {name} – {package}`
- **Body (HTML and plain text):** Name, email, selected package, message, and timestamp.

Messages are also appended to a log file and a JSON file in `CONTACT_LOG_DIR` (default: `./data`) for backup.

## Testing

1. Set all variables in `.env`.
2. Run the app: `npm run build && npm start`.
3. Submit the contact form on the site.
4. Check the receiver inbox and, if configured, `./data/contact-messages.log` or `./data/contact-messages.json`.

If email is not sent, check the server logs for Nodemailer errors (e.g. auth failed, wrong host/port).

import { writeFileSync, mkdirSync, existsSync, appendFileSync, readFileSync } from 'fs';
import path from 'path';
import type { ContactPayload } from './email';

const LOG_DIR = process.env.CONTACT_LOG_DIR || path.join(process.cwd(), 'data');
const LOG_FILE = path.join(LOG_DIR, 'contact-messages.log');
const JSON_FILE = path.join(LOG_DIR, 'contact-messages.json');

function ensureDir() {
  if (!existsSync(LOG_DIR)) {
    mkdirSync(LOG_DIR, { recursive: true });
  }
}

export function logContactMessage(payload: ContactPayload): void {
  ensureDir();
  const line = `${new Date().toISOString()}\t${payload.name}\t${payload.email}\t${payload.package}\t${payload.message.replace(/\n/g, ' ')}\n`;
  try {
    appendFileSync(LOG_FILE, line, 'utf8');
  } catch (e) {
    console.error('Failed to append contact log:', e);
  }
  try {
    let list: (ContactPayload & { timestamp: string })[] = [];
    if (existsSync(JSON_FILE)) {
      const raw = readFileSync(JSON_FILE, 'utf8');
      list = JSON.parse(raw);
    }
    list.push({ ...payload, timestamp: new Date().toISOString() });
    writeFileSync(JSON_FILE, JSON.stringify(list, null, 2), 'utf8');
  } catch (e) {
    console.error('Failed to write contact JSON:', e);
  }
}

import { date } from 'quasar';

export function sanitizeString(str) {
  str = str.replace(/[^a-z0-9áéíóúñü .,_-]/gim, '');
  return str.trim();
}

export function dateLabel(timestamp) {
  return date.formatDate(new Date(timestamp.toDate()), 'DD MMMM');
}

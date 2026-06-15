/** Relative label for expense rows ("Just now", "Today . 12:00PM"). */
export function formatExpenseTime(timestamp: number, now = Date.now()): string {
  const diffMs = now - timestamp;
  if (diffMs < 60_000) return 'Just now';

  const date = new Date(timestamp);
  const today = new Date(now);
  const isToday =
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate();

  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const period = hours >= 12 ? 'PM' : 'AM';
  const hour12 = hours % 12 || 12;

  if (isToday) {
    return `Today . ${hour12}:${minutes}${period}`;
  }

  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  const isYesterday =
    date.getFullYear() === yesterday.getFullYear() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getDate() === yesterday.getDate();

  if (isYesterday) {
    return `Yesterday . ${hour12}:${minutes}${period}`;
  }

  return date.toLocaleDateString('en-NG', { month: 'short', day: 'numeric' });
}

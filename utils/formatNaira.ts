/** Format amount as Nigerian Naira (e.g. ₦150,000). */
export function formatNaira(amount: number, options?: { compact?: boolean }): string {
  const value = Math.max(0, Math.round(amount));
  if (options?.compact) {
    return formatNairaCompact(value);
  }
  const formatted = value.toLocaleString('en-NG');
  return `₦${formatted}`;
}

/** Compact display for charts (e.g. ₦530K, ₦1.2M). */
export function formatNairaCompact(amount: number): string {
  const value = Math.max(0, Math.round(amount));
  if (value >= 1_000_000) {
    const millions = value / 1_000_000;
    const rounded = Math.round(millions * 10) / 10;
    return Number.isInteger(rounded) ? `₦${rounded}M` : `₦${rounded}M`;
  }
  if (value >= 1_000) {
    const thousands = Math.round(value / 1_000);
    return `₦${thousands}K`;
  }
  return `₦${value.toLocaleString('en-NG')}`;
}

/** Voice confirmation quote (Figma uses "20,000 Naira" not ₦). */
export function formatNairaVoice(amount: number): string {
  const value = Math.max(0, Math.round(amount));
  return `${value.toLocaleString('en-NG')} Naira`;
}

export function buildVoiceConfirmQuote(
  items: ReadonlyArray<{ title: string; amount: number }>,
): string {
  if (items.length === 0) return '';
  if (items.length === 1) {
    return `Bought ${items[0].title} for ${formatNairaVoice(items[0].amount)}`;
  }
  const head = items
    .slice(0, -1)
    .map((item) => `${item.title} for ${formatNairaVoice(item.amount)}`)
    .join(', ');
  const last = items[items.length - 1];
  return `Bought ${head} and ${last.title} for ${formatNairaVoice(last.amount)}`;
}

export function formatPercentUsed(spent: number, limit: number): string {
  if (limit <= 0) return '0%';
  return `${Math.round((spent / limit) * 100)}%`;
}

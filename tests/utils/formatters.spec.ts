// tests/utils/formatters.spec.ts
import { describe, expect, it } from 'vitest';

import { formatCompactNumber, formatCurrency, formatDate } from '@/utils/formatters';

describe('formatters Utils', () => {
  describe('formatCurrency', () => {
    it('formats USD correctly by default', () => {
      expect(formatCurrency(1234.56)).toBe('$1,234.56');
    });

    it('formats other currencies correctly', () => {
      // Note: Output depends on node environment/locale, usually non-breaking space
      const result = formatCurrency(1000, 'THB', 'th-TH');
      expect(result).toMatch(/฿1,000\.00/);
    });
  });

  describe('formatDate', () => {
    it('formats date correctly', () => {
      const date = new Date('2023-12-25');
      expect(formatDate(date)).toBe('December 25, 2023');
    });

    it('handles invalid dates gracefully', () => {
      expect(formatDate('invalid-date')).toBe('-');
    });
  });

  describe('formatCompactNumber', () => {
    it('formats thousands correctly', () => {
      expect(formatCompactNumber(1200)).toBe('1.2K');
    });

    it('formats millions correctly', () => {
      expect(formatCompactNumber(1500000)).toBe('1.5M');
    });
  });
});

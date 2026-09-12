import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';

import { useCounterStore } from '@/stores/counter';

describe('counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('initializes with a count of 0', () => {
    const counter = useCounterStore();
    expect(counter.count).toBe(0);
  });

  it('increments the count', () => {
    const counter = useCounterStore();

    counter.increment(); // 0 -> 1

    expect(counter.count).toBe(1);
  });

  it('calculates doubleCount correctly', () => {
    const counter = useCounterStore();

    counter.count = 5;

    expect(counter.doubleCount).toBe(10);
  });
});

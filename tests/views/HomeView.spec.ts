// tests/views/HomeView.spec.ts
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';

import { useCounterStore } from '@/stores/counter';
import HomeView from '@/views/HomeView.vue';

describe('homeView', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('renders initial store state', () => {
    const wrapper = mount(HomeView);
    const store = useCounterStore();

    // Check initial text rendering
    expect(wrapper.text()).toContain('Vue 3 Template Starter');
    expect(wrapper.text()).toContain(store.count.toString());
  });

  it('updates view when increment button is clicked', async () => {
    const wrapper = mount(HomeView);
    const store = useCounterStore();

    // Find button
    const button = wrapper.find('button');
    expect(button.exists()).toBe(true);

    // Simulate click
    await button.trigger('click');

    // Check if store updated
    expect(store.count).toBe(1);

    // Check if view updated (double count)
    expect(wrapper.text()).toContain('2'); // Double of 1 is 2
  });
});

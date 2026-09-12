// tests/App.spec.ts
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { createRouter, createWebHistory } from 'vue-router';

import App from '@/App.vue';
import BlankLayout from '@/layouts/BlankLayout.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

// Mock Component for routing
const DummyComponent = { template: '<div>Page</div>' };

describe('app.vue Layout Switching', () => {
  it('renders DefaultLayout when meta layout is default or missing', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        { path: '/', component: DummyComponent, meta: { layout: 'default' } },
      ],
    });

    router.push('/');
    await router.isReady();

    const wrapper = mount(App, {
      global: {
        plugins: [router],
        stubs: {
          DefaultLayout: true, // Stub to verify existence
          BlankLayout: true,
        },
      },
    });

    expect(wrapper.findComponent(DefaultLayout).exists()).toBe(true);
    expect(wrapper.findComponent(BlankLayout).exists()).toBe(false);
  });

  it('renders BlankLayout when meta layout is blank', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        { path: '/login', component: DummyComponent, meta: { layout: 'blank' } },
      ],
    });

    router.push('/login');
    await router.isReady();

    const wrapper = mount(App, {
      global: {
        plugins: [router],
        stubs: {
          DefaultLayout: true,
          BlankLayout: true,
        },
      },
    });

    expect(wrapper.findComponent(BlankLayout).exists()).toBe(true);
    expect(wrapper.findComponent(DefaultLayout).exists()).toBe(false);
  });
});

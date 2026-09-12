// tests/components/AppHeader.spec.ts
import { mount, RouterLinkStub } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import AppHeader from '@/components/common/AppHeader.vue';

describe('appHeader Component', () => {
  it('renders logo and navigation links', () => {
    const wrapper = mount(AppHeader, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });

    // Check Logo text
    expect(wrapper.text()).toContain('VueStarter');

    // Check Navigation Links
    const links = wrapper.findAllComponents(RouterLinkStub);
    expect(links.length).toBeGreaterThan(0);

    // Ensure one link points to home
    const homeLink = links.find(link => link.props().to === '/');
    expect(homeLink).toBeDefined();
  });
});

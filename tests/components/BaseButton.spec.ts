import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import BaseButton from '@/components/common/BaseButton.vue';

describe('baseButton Component', () => {
  it('renders slot content correctly', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Click Me',
      },
    });

    expect(wrapper.text()).toContain('Click Me');
  });

  it('applies danger variant styles correctly', () => {
    const wrapper = mount(BaseButton, {
      props: {
        variant: 'danger',
      },
    });

    expect(wrapper.classes()).toContain('bg-red-500');
  });

  it('emits click event when clicked', async () => {
    const wrapper = mount(BaseButton);

    await wrapper.trigger('click');

    expect(wrapper.emitted()).toHaveProperty('click');
  });
});

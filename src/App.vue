<!-- src/App.vue -->
<script setup lang="ts">
import { computed } from 'vue';
import { RouterView, useRoute } from 'vue-router';

import BlankLayout from '@/layouts/BlankLayout.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

const route = useRoute();

// Mapping layout names to components
const layouts = {
  default: DefaultLayout,
  blank: BlankLayout,
};

const currentLayout = computed(() => {
  const layoutName = (route.meta.layout as keyof typeof layouts) || 'default';
  return layouts[layoutName];
});
</script>

<template>
  <component :is="currentLayout">
    <RouterView />
  </component>
</template>

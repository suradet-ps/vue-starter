<!-- src/views/NotFoundView.vue -->
<script setup lang="ts">
import { RouterLink } from 'vue-router';

import BaseButton from '@/components/common/BaseButton.vue';
</script>

<template>
  <div class="text-center px-4">
    <h1 class="text-9xl font-black text-gray-200">
      404
    </h1>

    <div class="-mt-12 relative z-10 space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">
        Page Not Found
      </h2>
      <p class="text-gray-500 max-w-md mx-auto">
        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <RouterLink v-slot="{ navigate }" to="/" custom>
        <BaseButton variant="primary" @click="navigate">
          Back to Home
        </BaseButton>
      </RouterLink>
    </div>
  </div>
</template>

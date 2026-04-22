<!-- src/components/common/AppHeader.vue -->
<script setup lang="ts">
import { Github, Zap } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';
</script>

<template>
  <header
    class="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50"
  >
    <div
      class="container mx-auto px-4 h-16 flex items-center justify-between"
    >
      <RouterLink to="/" class="flex items-center gap-2 group">
        <Zap
          class="w-5 h-5 text-yellow-500 fill-current group-hover:scale-110 transition-transform"
        />
        <span
          class="font-bold text-lg tracking-tight group-hover:text-brand transition-colors"
        >
          VueStarter
        </span>
      </RouterLink>

      <nav class="flex gap-6 text-sm font-medium text-gray-600">
        <RouterLink
          to="/"
          active-class="text-brand font-semibold"
          class="hover:text-brand transition-colors"
        >
          Home
        </RouterLink>
        <a
          href="https://github.com/suradet-ps/vue-starter"
          target="_blank"
          class="hover:text-gray-900 transition-colors"
          aria-label="GitHub"
        >
          <Github class="w-5 h-5" :stroke-width="1.5" />
        </a>
      </nav>
    </div>
  </header>
</template>

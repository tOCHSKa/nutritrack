<template>
  <ion-button
    fill="clear"
    @click="onClick"
    class="bg-white text-gray-800 rounded-full flex items-center justify-center border border-gray-500 hover:scale-[1.02] active:scale-95 transition-transform"
  >
    <slot />
  </ion-button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{ onClick: () => void }>();
</script>

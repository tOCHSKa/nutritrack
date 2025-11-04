<template>
  <div class="flex flex-col gap-2">
    <!-- Label -->
    <label v-if="label" :for="id" class="block text-sm font-medium text-gray-700">
      {{ label }}
    </label>

    <!-- Input -->
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="onInput"
      class="w-full bg-[#EFF0F0] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#91CF49] placeholder:text-sm placeholder:text-gray-400"
    />

    <!-- Error message -->
    <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
    <p class="text-right text-sm text-gray-500 underline">
      <slot name="text">{{ text }}</slot>
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

// Props
const props = defineProps<{
  label?: string;
  placeholder?: string;
  type?: string;
  modelValue: string;
  id?: string;
  error?: string;
  text?: string;
}>();

// Événements
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

// Valeurs par défaut
const type = props.type || 'text';
const id = props.id || `input-${Math.random().toString(36).substr(2, 9)}`;
const text = props.text || '';

// Méthode pour émettre les changements
function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}
</script>

<style scoped>
/* Tu peux ajouter ici des styles supplémentaires si besoin */
</style>

<script setup lang="ts">
/**
 * An Apple style window with a dark bar up top with three colored dots.
 */

const emit = defineEmits<{
  (e: "useFallback"): void;
}>();

function onFallbackClick() {
  emit("useFallback");
}
</script>

<template>
  <div
    class="
      apple-window
      baum-window
      console
      text-xs
      pt-6
      relative
      object-cover
      z-10
      flex-grow
    "
    style="background-color: var(--surface); max-height: 100%"
  >
    <ul class="absolute grid grid-cols-4 gap-3 top-2 left-4">
      <li class="!m-0 rounded w-2 h-2 bg-red-400 inline-block"></li>
      <li class="!m-0 rounded w-2 h-2 bg-yellow-300 inline-block"></li>
      <li class="!m-0 rounded w-2 h-2 bg-green-500 inline-block"></li>
      <li
        @click="onFallbackClick"
        class="!m-0 rounded w-2 h-2 bg-purple-500 inline-block secret-button"
      ></li>
    </ul>
    <slot />
  </div>
</template>

<style scoped>
.apple-window {
  box-shadow: var(--shadow);
  border: var(--border);
  border-radius: 0.375rem 0.375rem 0 0;
}

.apple-window .secret-button {
  opacity: 0;
  cursor: pointer;
}

.apple-window .secret-button:hover {
  opacity: 1;
}
</style>
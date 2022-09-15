<script setup lang="ts">
/**
 * Layout for two browsers on a single slide.
 * Remember to devide content using "::right::".
 */
</script>

<template>
  <div class="slidev-layout two-columns w-full h-full grid grid-cols-2 gap-8">
    <div class="col-left flex flex-col" style="overflow: scroll">
      <slot />
    </div>
    <div class="col-right flex flex-col" style="overflow: scroll">
      <slot name="right" />
    </div>
  </div>
</template>
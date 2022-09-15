<script setup lang="ts">
/**
 * Speaker introduction slide.
 * Takes a speakerImage to be displayed to the left.
 */
</script>


<template>
  <div class="slidev-layout speaker">
    <div class="flex h-full">
      <figure class="w-1/2 flex flex-col justify-center">
        <img :src="$attrs.speakerImage" class="relative rounded-md h-70 w-70" />
      </figure>
      <div class="w-1/2 flex flex-col justify-center">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.speaker img {
  border: var(--border);
  box-shadow: 3px 4px 0px 0px var(--primary);
}
</style>

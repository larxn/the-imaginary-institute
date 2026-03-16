<script setup lang="ts">
import { useElementVisibility, whenever } from '@vueuse/core'

const target = ref(null)
const targetIsVisible = useElementVisibility(target)

const hasBeenVisible = ref(false)
whenever(targetIsVisible, () => (hasBeenVisible.value = true))
</script>

<template>
  <div class="opacity-0" :class="{ 'animate-slide-up ': hasBeenVisible }">
    <div class="relative -bottom-80" ref="target" />

    <slot />
  </div>
</template>

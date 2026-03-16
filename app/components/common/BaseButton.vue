<script setup lang="ts">
defineProps({
  variant: {
    type: String as PropType<
      'primary' | 'secondary' | 'tertiary' | 'quaternary'
    >,
    default: 'primary',
  },
  size: {
    type: String as PropType<'small' | 'medium' | 'big'>,
    default: 'medium',
  },
})
</script>

<template>
  <button
    :class="`${variant}-btn ${size}-btn`"
    class="whitespace-nowrap rounded-full font-semibold leading-none"
  >
    <slot />
  </button>
</template>

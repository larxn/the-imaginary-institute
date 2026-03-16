<script setup lang="ts">
defineProps({
  type: {
    type: String as PropType<'text' | 'password'>,
    default: 'text',
  },
})
</script>

<template>
  <input
    :type="type"
    class="h-11 w-full gap-x-5 rounded-full border border-black/20 px-5 py-3"
  />
</template>

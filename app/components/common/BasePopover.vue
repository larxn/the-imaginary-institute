<script setup lang="ts">
import Popper from 'vue3-popper'
</script>

<template>
  <ClientOnly>
    <Popper arrow arrow-padding="20">
      <div class="cursor-pointer">
        <slot />
      </div>

      <template #content>
        <section
          class="flex w-56 flex-col gap-3 rounded bg-white px-4 py-2 text-center shadow-dp-01"
        >
          <slot name="content" />
        </section>
      </template>
    </Popper>
  </ClientOnly>
</template>

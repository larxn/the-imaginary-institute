<script setup lang="ts">
import { categories } from '@/lib/constants'
import { types } from '@/lib/constants'
</script>

<template>
  <form class="flex flex-col gap-2 text-sm" @submit.prevent>
    <BaseSelect :list="categories" />
    <BaseSelect :list="types" />

    <div class="relative flex">
      <button
        class="absolute -right-2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-salmon-500"
      >
        <SearchIcon class="text-white" />
      </button>
      <input
        type="text"
        class="h-11 w-full rounded-full border border-black/20 px-5 py-3 pr-12"
        placeholder="Search course..."
      />
    </div>
  </form>
</template>

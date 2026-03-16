<script setup lang="ts">
import { categories } from '@/lib/constants'
import { types } from '@/lib/constants'
</script>

<template>
  <div
    class="shadow-md inline-flex h-16 items-stretch rounded-full bg-white shadow-dp-01"
  >
    <div class="relative h-full">
      <input
        type="text"
        class="peer h-full rounded-l-full bg-white p-4 pl-14 focus:outline-none"
        placeholder="Search course..."
      />
      <SearchIcon
        class="absolute left-7 top-1/2 -translate-y-1/2 transform transition-colors duration-200 peer-focus:text-salmon-500"
      />

      <span
        class="absolute bottom-0 ml-12 block w-[calc(100%_-_3rem)] border border-t-2 border-transparent transition-colors duration-500 peer-focus:border-salmon-500"
      />
    </div>

    <span class="my-2 border-r border-black/10" />

    <div>
      <SearchFormSelect width-class="w-44" :list="categories" />
    </div>

    <span class="my-2 border-r border-black/10" />

    <div>
      <SearchFormSelect width-class="w-36" :list="types" />
    </div>

    <div class="mr-3 flex items-center">
      <BaseButton variant="secondary"> Search </BaseButton>
    </div>
  </div>
</template>

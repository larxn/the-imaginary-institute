<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'

const props = defineProps({
  list: {
    type: Array as PropType<{ id: number; name: string }[]>,
    required: true,
  },
})

const selectedItem = ref(props.list[0])
</script>

<template>
  <Listbox v-model="selectedItem">
    <ListboxButton
      class="flex h-11 w-full items-center justify-between gap-x-5 rounded-full border border-black/20 px-5 py-3"
    >
      {{ selectedItem.name }}
      <AngleDown />
    </ListboxButton>

    <div class="relative">
      <transition
        enter-from-class="opacity-0"
        enter-active-class="transition-opacity duration-200"
        leave-active-class="transition-opacity duration-200"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute left-0 top-0 z-10 w-full overflow-hidden rounded-3xl border border-black/20 bg-gray-200"
        >
          <ListboxOption
            v-slot="{ selected }"
            v-for="item in list"
            :key="item.id"
            :value="item"
            class="cursor-pointer px-5 py-2 hover:bg-white"
          >
            <span :class="{ 'font-semibold': selected }">
              {{ item.name }}
            </span>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

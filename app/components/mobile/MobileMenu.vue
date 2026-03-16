<template>
  <TransitionRoot as="template" :show="$modal['mobile-menu']">
    <Dialog as="div" class="relative z-10" @close="$modal.close('mobile-menu')">
      <TransitionChild
        as="template"
        enter="ease-in-out duration-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel
                class="pointer-events-auto relative w-screen max-w-md"
              >
                <div
                  class="shadow-xl flex h-full flex-col overflow-y-scroll bg-white py-6"
                >
                  <div
                    class="relative mt-6 flex flex-1 flex-col px-4 text-center sm:px-6"
                  >
                    <div class="flex flex-col gap-4">
                      <nuxt-link
                        class="cursor-pointer px-3 py-2 text-sm font-semibold"
                      >
                        Home
                      </nuxt-link>
                      <nuxt-link
                        class="cursor-pointer px-3 py-2 text-sm font-semibold"
                      >
                        Courses
                      </nuxt-link>
                      <nuxt-link
                        class="cursor-pointer px-3 py-2 text-sm font-semibold"
                      >
                        Blog
                      </nuxt-link>
                      <nuxt-link
                        class="cursor-pointer px-3 py-2 text-sm font-semibold"
                      >
                        About
                      </nuxt-link>
                      <nuxt-link
                        class="cursor-pointer px-3 py-2 text-sm font-semibold"
                      >
                        Contact
                      </nuxt-link>

                      <nuxt-link
                        class="cursor-pointer px-3 py-2 text-sm font-semibold"
                      >
                        <div
                          class="rounded-full bg-salmon-100 px-3 py-2 text-salmon-700"
                        >
                          Sign Up
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
</script>

<template>
  <nav class="bg-white/90">
    <div
      class="mx-auto flex max-w-content-container items-start justify-between px-4 py-5"
    >
      <!-- Left -->
      <section>
        <LogoIcon />
      </section>

      <!-- Right -->
      <div>
        <section class="hidden items-center gap-x-9 md:flex">
          <ClientOnly>
            <NavbarLink> Home </NavbarLink>

            <BasePopover>
              <NavbarLink> About </NavbarLink>
              <template #content>
                <p class="text-left text-sm">
                  Not much to say. It's just a fictional app 😁.
                </p>
              </template>
            </BasePopover>

            <BasePopover>
              <NavbarLink> Blog </NavbarLink>
              <template #content>
                <p class="text-left text-sm">
                  Subscribe to our newsletter to be notified about our blog's
                  launch. Kidding.
                </p>
              </template>
            </BasePopover>
          </ClientOnly>

          <nuxt-link class="group cursor-pointer text-sm font-semibold">
            <div
              class="rounded-full bg-salmon-100 px-3 py-2 text-salmon-700 group-hover:text-salmon-700/70 group-active:text-salmon-700/100"
              @click="$modal.open('sign-up')"
            >
              Sign Up
            </div>
          </nuxt-link>
        </section>

        <section class="flex items-center gap-x-9 md:hidden">
          <button
            class="flex h-9 w-9 items-center justify-center rounded-xl bg-salmon-100"
            @click="$modal.open('mobile-menu')"
          >
            <MenuIcon class="text-salmon-700" />
          </button>
        </section>
      </div>
    </div>
  </nav>
</template>

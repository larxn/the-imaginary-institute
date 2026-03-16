// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@pinia/nuxt'],

  components: [
    {
      path: '~/components', // will get any components nested in e.g. /components/test too
      pathPrefix: false,
    },
  ],

  css: ['@/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        paths: {
          '@': ['.'],
          '@/*': ['./*'],
        },
      },
    },
  },

   vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        '@headlessui/vue',
        '@vueuse/core',
        'vue3-popper',
      ]
    }
  },

    compatibilityDate: '2025-07-15',
})

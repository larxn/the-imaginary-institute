<template>
  <div>
    <section
      class="flex flex-col items-center bg-gray-200 pb-12 pt-9 max-md:px-4 md:rounded-3xl"
    >
      <HeadingTwo class="text-center text-salmon-500">
        Download Our App
      </HeadingTwo>

      <p
        class="mt-3 max-w-lg text-center leading-normal opacity-50 max-md:text-sm"
      >
        Access your courses, assignments, and course materials with ease,
        whether you're commuting, taking a break, or simply on the move. Your
        learning never has to pause.
      </p>

      <div class="mt-7 flex gap-x-7 gap-y-4 max-md:w-full max-md:flex-col">
        <button
          class="flex items-center gap-x-2 rounded-xl bg-white px-3 py-3 max-md:justify-center"
        >
          <AppleIcon />
          <div class="text-left">
            <p class="mb-0.5 text-[0.5rem] font-bold uppercase text-salmon-500">
              Download now
            </p>
            <p class="font-semibold leading-none md:text-lg"> Apple Store </p>
          </div>
        </button>

        <button
          class="flex items-center gap-x-2 rounded-xl bg-white px-3 py-3 max-md:justify-center"
        >
          <GooglePlayIcon />
          <div class="text-left">
            <p class="mb-0.5 text-[0.5rem] font-bold uppercase text-salmon-500">
              Download now
            </p>
            <p class="font-semibold leading-none md:text-lg"> Play Store </p>
          </div>
        </button>
      </div>
    </section>
  </div>
</template>

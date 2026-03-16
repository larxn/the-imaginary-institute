<template>
  <footer class="bg-black pb-5 pt-14 text-sm text-white">
    <div class="mx-auto max-w-content-container px-4">
      <div
        class="flex flex-col justify-between gap-8 max-md:items-center md:flex-row md:gap-20"
      >
        <div class="order-2">
          <LogoPlainIcon class="text-white" />
          <p class="mt-2 text-xs opacity-50"> 2023 © All rights reserved </p>
        </div>

        <div class="order-3 flex w-full max-w-xs grow justify-between">
          <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>Blog</li>
          </ul>

          <ul>
            <li>Our App</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <ul>
            <li>Terms</li>
            <li>Cookies</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div class="order-1 md:order-4">
          <p class="text-sm font-semibold max-md:text-center">
            Get our newsletters:
          </p>

          <div class="round mt-2 flex h-9">
            <input
              type="text"
              class="h-full rounded-l-xl px-4 py-4 text-black outline-none ring-2 ring-inset ring-transparent transition duration-300 focus:ring-salmon-500"
            />
            <button
              class="h-full rounded-r-xl bg-salmon-500 px-3 hover:brightness-110 active:brightness-100"
            >
              <CheckIcon />
            </button>
          </div>
        </div>
      </div>

      <p class="mt-8 text-center text-white/50">
        Based on a
        <a
          href="https://www.behance.net/koushiknag"
          target="_blank"
          rel="noreferrer"
          class="text-white/100 underline"
          >Koushik Shuvo</a
        >’s design. Developed by
        <a
          href="https://laurenv.me"
          target="_blank"
          rel="noreferrer"
          class="text-white/100 underline"
          >@larxn</a
        >.
      </p>
    </div>
  </footer>
</template>

<template>
  <section class="relative md:h-[32rem]">
    <img
      src="/img/character-01.webp"
      alt="Girl sitting with a laptop on her lap"
      class="absolute -right-14 top-0 hidden max-h-[32rem] w-3/5 object-scale-down md:block lg:right-0"
      draggable="false"
    />

    <div class="animate-slide-up relative">
      <HeadingOne class="max-w-[22rem]">
        Learn From Great Figures Of Literature
      </HeadingOne>

      <p
        class="mt-2 text-sm font-medium opacity-70 md:max-w-[27rem] md:text-lg"
      >
        Are you ready to embark on a journey of storytelling excellence? Look no
        further! The Imaginary Institute is your ultimate destination for honing
        your writing skills.
      </p>

      <ClientOnly>
        <div class="hidden md:block">
          <SearchForm class="mt-12" />
        </div>

        <div class="block md:hidden">
          <MobileSearchForm class="mt-8" />
        </div>
      </ClientOnly>
    </div>
  </section>
</template>

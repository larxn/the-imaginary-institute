<script setup lang="ts">
const avatars = [
  'user-01.webp',
  'user-02.webp',
  'user-03.webp',
  'user-04.webp',
  'user-05.webp',
  'user-06.webp',
]
</script>

<template>
  <section class="relative">
    <img
      src="/img/character-02.webp"
      alt="World map with users across all continents"
      class="absolute -right-14 hidden h-full max-h-[27rem] w-6/12 object-scale-down md:block lg:-top-6 lg:h-auto lg:w-auto"
      draggable="false"
    />

    <FadeInOnScroll class="relative max-md:text-center">
      <BaseOverline class="md:mb-2"> Don’t lose momentum </BaseOverline>
      <HeadingTwo class="md:w-7/12"> Meet Your Writing Mentors </HeadingTwo>

      <p
        class="mt-4 text-sm font-medium opacity-70 md:mt-8 md:w-7/12 md:text-base"
      >
        Your mentor will provide you with one-on-one guidance tailored to your
        unique goals and writing style.
      </p>

      <section class="mt-4 flex max-md:justify-center md:mt-6">
        <div
          v-for="(avatar, id) in avatars"
          :key="id"
          class="relative -mr-5 inline h-14 w-14 rounded-full border-4 border-white bg-white last-of-type:ml-0"
        >
          <img
            class="block w-full"
            :src="`/img/users/${avatar}`"
            alt=""
          />
        </div>

        <button
          class="relative -mr-5 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-salmon-100 text-salmon-500"
        >
          <PlusIcon />
        </button>
      </section>

      <p
        class="mt-4 hidden w-6/12 text-sm font-medium opacity-70 md:mt-6 md:text-base lg:block"
      >
        Our mentors are published authors, accomplished poets, and seasoned
        screenwriters with a wealth of knowledge and experience in their
        respective fields. They've been where you are and can guide you through
        the intricacies of the craft.
      </p>

      <BaseButton class="mt-4" size="big"> Learn more</BaseButton>
    </FadeInOnScroll>
  </section>
</template>

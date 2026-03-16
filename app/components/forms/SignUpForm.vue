<template>
  <form @submit.prevent class="w-96 rounded-3xl bg-white px-14 py-8">
    <HeadingTwo>Sign Up</HeadingTwo>

    <div class="my-5 flex flex-col gap-1">
      <BaseInput placeholder="Email" />
      <BaseInput placeholder="Password" type="password" />
      <BaseInput placeholder="Repeat password" type="password" />
    </div>

    <BaseButton class="w-full">Sign Up</BaseButton>

    <div class="mt-3 text-center">
      <nuxt-link class="cursor-pointer text-salmon-500 underline"
        >Have an account already?</nuxt-link
      >
    </div>
  </form>
</template>

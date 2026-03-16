<template>
  <div class="overflow-x-clip">
    <TheNavbar class="sticky top-0 z-20" />

    <TheHeader class="mx-auto mt-7 max-w-content-container px-4 md:mt-10" />

    <TheMapSection
      class="mx-auto mt-14 max-w-content-container px-4 md:mt-24"
    />

    <TheMentorSection
      class="mx-auto mt-14 max-w-content-container px-4 md:mt-24"
    />

    <TheCoursesSection
      class="mx-auto mt-14 max-w-content-container px-4 md:mt-24"
    />

    <TheAppStoreSection
      class="mx-auto mt-14 max-w-content-container md:mt-24 md:px-4"
    />

    <TheFooter class="md:mt-16" />

    <!-- Modals and Menus -->
    <MobileMenu />

    <BaseModal name="sign-up">
      <SignUpForm />
    </BaseModal>
  </div>
</template>

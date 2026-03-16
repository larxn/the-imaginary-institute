<script setup lang="ts">
const courses = [
  {
    id: 1,
    title: 'Creative Writing Fundamentals: Narrative structures',
    coverUrl: '/img/courses/course-01.webp',
    teacherName: 'Elizabeth Goldberg',
    description:
      'Start with the basics of storytelling, character development, and plot structure.',
    hours: 2.5,
    lessons: 7,
  },
  {
    id: 2,
    title: 'Poetry Workshop',
    coverUrl: '/img/courses/course-02.webp',
    teacherName: 'Tom Castro',
    description:
      'Explore the world of poetry, from traditional forms to contemporary free verse.',
    hours: 6,
    lessons: 16,
  },
  {
    id: 3,
    title: 'Publishing and Marketing',
    coverUrl: '/img/courses/course-03.webp',
    teacherName: 'Shaelin Twain',
    description:
      'Get insights into the publishing industry, self-publishing, and marketing your work.',
    hours: 3,
    lessons: 12,
  },
  {
    id: 4,
    title: 'Screenwriting',
    coverUrl: '/img/courses/course-04.webp',
    teacherName: 'Jack Roth',
    description:
      'Dive into the art of screenwriting, from crafting dialogue to formatting scripts.',
    hours: 8,
    lessons: 32,
  },
  {
    id: 5,
    title: 'Nonfiction Writing',
    coverUrl: '/img/courses/course-05.webp',
    teacherName: 'Mieko Dasai',
    description:
      'Master the art of creative nonfiction, including memoirs, essays, and journalism.',
    hours: 1,
    lessons: 13,
  },
  {
    id: 6,
    title: 'Fundamentals of short story writing',
    coverUrl: '/img/courses/course-06.webp',
    teacherName: 'James Haro',
    description:
      'Learn how to craft engaging narratives, develop characters, and build immersive worlds.',
    hours: 2,
    lessons: 4,
  },
]
</script>

<template>
  <div>
    <div class="flex justify-between">
      <HeadingTwo> Popular Courses </HeadingTwo>

      <BaseButton variant="quaternary">View All</BaseButton>
    </div>

    <div class="mt-4 grid md:mt-8 lg:grid-cols-3 lg:gap-10">
      <FadeInOnScroll v-for="course in courses" :key="course.id">
        <CourseCard
          :title="course.title"
          :description="course.description"
          :teacher-name="course.teacherName"
          :cover-url="course.coverUrl"
          :hours="course.hours"
          :lessons="course.lessons"
        />
      </FadeInOnScroll>
    </div>
  </div>
</template>

export default defineNuxtPlugin(() => {
  const modal = useModalStore()

  return { provide: { modal } }
})

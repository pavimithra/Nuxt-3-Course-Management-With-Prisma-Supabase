export default defineNuxtRouteMiddleware(async (to) => {
  const user = useSupabaseUser();
  if (to.params.lessonSlug) {
    const isFree = await $fetch<boolean>(
      `/api/user/${to.params.courseSlug}/${to.params.lessonSlug}/isFree`,
      {
        headers: useRequestHeaders(["cookie"]),
      }
    );
    if (!isFree) {
      if (!user.value) {
        return navigateTo(`/login`);
      }
      const hasAccess = await $fetch<boolean>(
        `/api/user/${to.params.courseSlug}/hasAccess`,
        {
          headers: useRequestHeaders(["cookie"]),
        }
      );
      if (!hasAccess) {
        alert("You do not have access to the paid lessons in this course!!");
        return abortNavigation();
      }
    }
  }
});

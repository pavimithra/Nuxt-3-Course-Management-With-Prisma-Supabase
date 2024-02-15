export default async <T>(url: string) => {
  const { data, error } = await useFetch<T>(url);

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: `Could not fetch data from ${url}`,
    });
  }

  return data;
};

export function useStartDate() {
  const startDate = ref("");

  watch(startDate, (value) => {
    window.localStorage.setItem("startDate", value);
  });

  const storage = window.localStorage.getItem("startDate");
  if (storage && typeof storage === "string" && storage.length > 0) {
    startDate.value = storage;
  }

  return { startDate };
}

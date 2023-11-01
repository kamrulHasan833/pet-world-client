const dataFromLocalStarage = (isTheme) => {
  const theme = getThemeFromLocal(isTheme);
  return theme;
};

const getThemeFromLocal = (isTheme) => {
  if (isTheme) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
  const localTheme = localStorage.getItem("theme");
  return localTheme;
};
export default dataFromLocalStarage;

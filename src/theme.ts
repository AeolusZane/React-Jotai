import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const darkModeAtom = atomWithStorage("darkMode", false);
darkModeAtom.onMount = (set) => {
  set((v) => changeTheme(!v));
};

export const changeTheme = (isDark: boolean) => {
  !isDark
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark");

  return !isDark;
};
export const useDarkMode = () => useAtom(darkModeAtom)
import { changeTheme, useDarkMode } from "./theme";


export const DarkMode = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  let set = () => setDarkMode((darkMode) => changeTheme(darkMode));

  return (
    <div>
      <button
        className="p-2 border-solid border-2 border-sky-400 rounded-lg"
        onClick={set}
      >
        {darkMode ? "dark" : "light"}
      </button>
    </div>
  );
};

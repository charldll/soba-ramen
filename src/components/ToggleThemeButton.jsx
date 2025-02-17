import { useTheme } from "../context/ThemeContext";
import { Switch } from "@material-tailwind/react";
import { Sun, Moon } from "lucide-react";

const ToggleThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Switch
      onClick={toggleTheme}
      ripple={true}
      label={isDark ? <Sun /> : <Moon />}
    />
  );
};

export default ToggleThemeButton;

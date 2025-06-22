import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = localStorage.getItem("theme");
    return (storageTheme as AvailableThemes) || "dark";
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    return () => {
      document.documentElement.removeAttribute("data-theme");
      localStorage.removeItem("theme");
    };
  }, [theme]);

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement>) {
    event?.preventDefault();

    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      return newTheme as AvailableThemes;
    });
  }

  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href="/" aria-label="Home" title="Home">
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href="/"
        arial-label="History"
        title="History"
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href="/"
        aria-label="Settings"
        title="Settings"
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        onClick={handleThemeChange}
        href="/"
        aria-label="Theme"
        title="Theme"
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}

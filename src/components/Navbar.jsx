import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 7, link: "competitive" },
    { id: 3, link: "skills" },
    { id: 4, link: "experience" },
    { id: 5, link: "projects" },
    { id: 6, link: "contact" },
  ];

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={shadow ? `${styles.navbar} ${styles.shadow}` : styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>Alfez Tintoiya</h1>
        </div>

        <ul className={styles.desktopMenu}>
          {links.map(({ id, link }) => (
            <li key={id}>
              <Link
                to={link}
                smooth
                duration={500}
                className={styles.navLink}
              >
                {link}
              </Link>
            </li>
          ))}
          <li onClick={toggleTheme} className={styles.themeToggle}>
            {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
          </li>
        </ul>

        <div className={styles.mobileControls}>
          <div onClick={toggleTheme} className={`${styles.themeToggle} ${styles.hamburgerTheme}`}>
            {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
          </div>
          <div onClick={() => setNav(!nav)} className={styles.hamburger}>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>

        {nav && (
          <ul className={styles.mobileMenu}>
            {links.map(({ id, link }) => (
              <li key={id}>
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
